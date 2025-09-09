const login_btn = document.querySelector("#login-btn");
const container = document.querySelector(".container");

login_btn.addEventListener('click', () =>{
    httpGetAsync("http://localhost/agenda/api.php", loadTable)
});

function loadTable() {

}

function getLogin(url, user, password, callback)
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
        callback()
    });
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
