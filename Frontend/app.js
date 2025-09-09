const login_btn = document.querySelector("#login-btn");
const container = document.querySelector(".container");

login_btn.addEventListener('click', () =>{
    httpGetAsync("http://localhost/agenda/api.php", loadTable)
    // Ocultar el container para que se vea la tabla solo.
    // Para hacerlo mejor hace falta un router.

});

function loadTable(loginData) {
    getAllContacts("http://localhost/agenda/api.php", (jsonData)=>{
        var arrContacts = [];
        arrContacts = JSON.parse(jsonData); // Convert JSON to array.

        var col = [];
        for (var key in arrContacts) {
            if (col.indexOf(key) === -1) {
            col.push(key);
            }
        }

        // Create a dynamic table.
        var table = document.createElement("table") // Create table header.
        var tr = table.insertRow(-1); // Table row. (last position)

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // Table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        tr = table.insertRow(-1); // add new row for the names
        // Add JSON to the table rows.
        for (var i = 0; i < arrContacts.length; i++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = arrContacts[i].Name;
        }

        // Finally, add the dynamic table to a container.
        var divContainer = document.getElementById("showTable");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    })
}

function httpGetAsync(url, user, password, callback)
{
    fetch(url, {
    method: "GET",
    body: JSON.stringify({
        table: 'user',
        username: user,
        password: password,
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    }).then((result) => {
        callback(result)
    });
}

function getAllContacts(url, callback) {
    fetch(url, {
    method: "GET",
    body: JSON.stringify({
        table: 'contact-list',
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    }).then(response => response.text())
  .then(contents => callback(contents))
  .catch((e) => console.log('error'))
}

function createContact(url, _name, _email, _phone) {
    fetch(url, {
    method: "POST",
    body: JSON.stringify({
        table: 'contact',
        name: _name,
        email: _email,
        phone: _phone,
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
}

function updateContact(url, _name, _email, _phone, _id) {
    fetch(url, {
    method: "PUT",
    body: JSON.stringify({
        table: 'contact',
        name: _name,
        email: _email,
        phone: _phone,
        id: _id,
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
}

function deleteContact(url, _id) {
    fetch(url, {
    method: "DELETE",
    body: JSON.stringify({
        table: 'contact',
        id: _id,
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
}
