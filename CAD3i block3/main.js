fetch("NavigationMenus/menu.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });

fetch("NavigationMenus/mobilemenu.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("#navigation").innerHTML = data;
    });

fetch("footer.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });


function setActive() {
    linkObj = document.querySelectorAll('.main_nav a');
    for (i = 0; i < linkObj.length; i++) {
        if (document.location.href.indexOf(linkObj[i].href) >= 0) {
            linkObj[i].classList.add('active');
        }
    }
}
window.onload = function () {
    setTimeout(function () {
        setActive();
    }, 500);
};