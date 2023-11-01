function hideResults() {
    document.getElementById("ent21").setAttribute("class", "hidden");
    document.getElementById("ent25").setAttribute("class", "hidden");
    document.getElementById("ent35").setAttribute("class", "hidden");
    document.getElementById("ent20").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);

        if (age >= 35 && height >= 55) {
            document.getElementById("ent21").removeAttribute("class");
            document.getElementById("ent25").removeAttribute("class");
            document.getElementById("ent35").removeAttribute("class");
        } else if (age >= 25 || height >= 48) {
            document.getElementById("ent21").removeAttribute("class");
            document.getElementById("ent25").removeAttribute("class");
        } else if (age >= 21) {
            document.getElementById("ent21").removeAttribute("class");
        } else {
            document.getElementById("ent20").removeAttribute("class");
        }
    }
};
