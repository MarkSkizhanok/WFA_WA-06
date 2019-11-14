function toGoogle() {
    window.location.replace("http://google.com");
}

function deleteP() {
    var list = document.getElementsByTagName("p")[0].innerHTML = "";
}

var username = prompt('Username: ');

function hasNumber(myString) {
    return /\d/.test(myString);
}

if (hasNumber(username)) {
    document.getElementsByTagName("p")[0].innerHTML = username.split("").reverse().join("");
} else {
    username = username.split("");
    for (var i = 0; i < username.length; i++) {
        if(i % 2 === 0) {
            username[i] = username[i].toUpperCase();
        } else{
            username[i] = username[i].toLowerCase();
        }
    }
    username = username.join("");
    document.getElementsByTagName("p")[0].innerHTML = username;
}