document.getElementById("helpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    let isValid = true;
  
    // Перевірка валідності полів
    form.querySelectorAll("[data-required]").forEach((field) => {
      const errorMessage = field.nextElementSibling;
      errorMessage.style.display = "none";
      field.classList.remove("invalid", "valid");
  
      if (!field.value.trim()) {
        errorMessage.style.display = "block";
        field.classList.add("invalid");
        isValid = false;
      } else if (field.dataset.minlength && field.value.length < +field.dataset.minlength) {
        errorMessage.textContent = `Мінімальна довжина ${field.dataset.minlength} символів`;
        errorMessage.style.display = "block";
        field.classList.add("invalid");
        isValid = false;
      } else {
        field.classList.add("valid");
      }
    });
  
    if (isValid) {
      // Збір даних форми
      const formData = new FormData(form);
      const val = Object.fromEntries(formData);
  
      console.log("Дані форми:", val); // Виводимо дані у консоль
      alert("Форма успішно відправлена!");
      form.reset();
      form.querySelectorAll("input, textarea").forEach((field) => {
        field.classList.remove("valid");
      });
    }
  });
  