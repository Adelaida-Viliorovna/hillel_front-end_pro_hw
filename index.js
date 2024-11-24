document.getElementById("button-container").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(`Ви натиснули: ${e.target.textContent}`);
    }
})