const login_btn = document.querySelector("#login-btn");
const container = document.querySelector(".container");

login_btn.addEventListener('click', () =>{
    httpGetAsync("http://localhost/agenda/api.php")
});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}