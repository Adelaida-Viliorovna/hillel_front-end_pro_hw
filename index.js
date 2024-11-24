let userLink = "";

document.getElementById("set-link").addEventListener("click", () => {
    userLink = prompt("Введіть посилання для переходу:", "https://lms.ithillel.ua");

    let link = document.getElementById("link");
    link.textContent = userLink
});

document.getElementById("go-link").addEventListener("click", () => {
    if (userLink) {
        window.open(userLink, "_blank");
    } else {
        alert("Будь ласка, спочатку введіть посилання!")
    }
})