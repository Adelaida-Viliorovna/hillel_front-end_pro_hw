// ------------------------- LESSON 14 -------------------------
const modal = document.getElementById("lesson14Modal");

const modalBtn1 = document.createElement("button");
modalBtn1.textContent = "Open Modal 1";
modalBtn1.id = "openModal1";
modalBtn1.setAttribute("data-title", "Модалка 1");
modalBtn1.setAttribute("data-body", "Це контент першого модального вікна.");
modalBtn1.setAttribute("data-footer", "Футер першої модалки");
modal.appendChild(modalBtn1);

const modalBtn2 = document.createElement("button");
modalBtn2.textContent = "Open Modal 2";
modalBtn2.id = "openModal2";
modalBtn2.setAttribute("data-title", "Модалка 2");
modalBtn2.setAttribute("data-body", "Це контент другого модального вікна.");
modalBtn2.setAttribute("data-footer", "Футер другої модалки");
modal.appendChild(modalBtn2);

function createModal({ title, body, footer }) {
  const modalOverlay = document.createElement("div");
  modalOverlay.style.position = "fixed";
  modalOverlay.style.top = "0";
  modalOverlay.style.left = "0";
  modalOverlay.style.width = "100%";
  modalOverlay.style.height = "100%";
  modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalOverlay.style.display = "flex";
  modalOverlay.style.justifyContent = "center";
  modalOverlay.style.alignItems = "center";
  modalOverlay.style.zIndex = "1000";

  const modalWindow = document.createElement("div");
  modalWindow.style.width = "400px";
  modalWindow.style.backgroundColor = "#fff";
  modalWindow.style.borderRadius = "10px";
  modalWindow.style.overflow = "hidden";
  modalWindow.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
  modalWindow.style.animation = "fadeIn 0.3s ease-out";

  const modalHeader = document.createElement("div");
  modalHeader.style.backgroundColor = "#4CAF50";
  modalHeader.style.color = "#fff";
  modalHeader.style.padding = "10px";
  modalHeader.style.display = "flex";
  modalHeader.style.justifyContent = "space-between";
  modalHeader.style.alignItems = "center";

  const modalTitle = document.createElement("h2");
  modalTitle.style.margin = "0";
  modalTitle.textContent = title;

  const closeButton = document.createElement("button");
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.color = "#fff";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";
  closeButton.textContent = "×";
  closeButton.onclick = () => document.body.removeChild(modalOverlay);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.style.padding = "15px";
  modalBody.style.fontSize = "14px";
  modalBody.textContent = body;

  const modalFooter = document.createElement("div");
  modalFooter.style.backgroundColor = "#f1f1f1";
  modalFooter.style.padding = "10px";
  modalFooter.style.textAlign = "right";
  modalFooter.textContent = footer;

  modalWindow.appendChild(modalHeader);
  modalWindow.appendChild(modalBody);
  modalWindow.appendChild(modalFooter);

  modalOverlay.appendChild(modalWindow);
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) document.body.removeChild(modalOverlay);
  };
  document.body.appendChild(modalOverlay);
}

modal.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const title = e.target.getAttribute("data-title");
    const body = e.target.getAttribute("data-body");
    const footer = e.target.getAttribute("data-footer");

    createModal({ title, body, footer });
  }
});

// ----*----

const slides = document.querySelectorAll(".lesson-14__slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlideIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? "block" : "none";
  });

  prevButton.disabled = currentSlideIndex === 0;
  nextButton.disabled = currentSlideIndex === slides.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    updateSlider();
  }
});

updateSlider();
// --------------------------- HW 14 ---------------------------

const HWslides = document.querySelectorAll(".section-info__slide");
const HWprevButton = document.getElementById("HWprev");
const HWnextButton = document.getElementById("HWnext");
const HWdotsContainer = document.getElementById("HWdots");

let HWcurrentSlideIndex = 0;

function HWcreateDots() {
  HWslides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("section-info__dot");
    if (index === HWcurrentSlideIndex) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      HWcurrentSlideIndex = index;
      HWupdateSlider();
    });
    HWdotsContainer.appendChild(dot);
  });
}

function HWupdateDots() {
  const dots = HWdotsContainer.querySelectorAll(".section-info__dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === HWcurrentSlideIndex);
  });
}

function HWupdateSlider() {
  HWslides.forEach((slide, index) => {
    slide.style.display = index === HWcurrentSlideIndex ? "flex" : "none";
  });

  HWprevButton.disabled = HWcurrentSlideIndex === 0;
  HWnextButton.disabled = HWcurrentSlideIndex === HWslides.length - 1;

  HWupdateDots();
}

HWprevButton.addEventListener("click", () => {
  if (HWcurrentSlideIndex > 0) {
    HWcurrentSlideIndex--;
    HWupdateSlider();
  }
});

HWnextButton.addEventListener("click", () => {
  if (HWcurrentSlideIndex < HWslides.length - 1) {
    HWcurrentSlideIndex++;
    HWupdateSlider();
  }
});

HWcreateDots();
HWupdateSlider();
