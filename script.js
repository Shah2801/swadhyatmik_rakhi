// ==========================================
// ELEMENTS
// ==========================================

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const orderForm = document.getElementById("orderForm");

const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const popupOrderBtn = document.getElementById("popupOrderBtn");
const closeImage = document.querySelector(".close-image");

const rakhiID = document.getElementById("rakhiID");
const rakhiName = document.getElementById("rakhiName");
const rakhiPrice = document.getElementById("rakhiPrice");

const popupName = document.getElementById("popupName");
const popupPrice = document.getElementById("popupPrice");

const quantityInput = document.getElementById("quantity");

// ==========================================
// IMAGE PREVIEW
// ==========================================

document.querySelectorAll(".product-img").forEach(img => {

    img.addEventListener("click", () => {

        popupImage.src = img.src;

        rakhiID.value = img.dataset.id;
        rakhiName.value = img.dataset.name;
        rakhiPrice.value = img.dataset.price;

        popupName.textContent = img.dataset.name;
        popupPrice.textContent = img.dataset.price;

        quantityInput.value = 1;

        imagePopup.style.display = "flex";

    });

});

// ==========================================
// CLOSE IMAGE POPUP
// ==========================================

closeImage.addEventListener("click", () => {

    imagePopup.style.display = "none";

});

imagePopup.addEventListener("click", (e) => {

    if (e.target === imagePopup) {

        imagePopup.style.display = "none";

    }

});

// ==========================================
// OPEN ORDER FORM
// ==========================================

popupOrderBtn.addEventListener("click", () => {

    imagePopup.style.display = "none";

    popup.style.display = "flex";

});

// ==========================================
// CLOSE ORDER POPUP
// ==========================================

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});

// ==========================================
// WHATSAPP ORDER
// ==========================================

orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    const quantity = document.getElementById("quantity").value;

    if (name === "" || phone === "" || address === "") {

        alert("Please fill all the details.");

        return;

    }

    const ownerNumber = "916203143986";

    const message =
`🌸 New Rakhi Order 🌸

👤 Name : ${name}

📞 Mobile : ${phone}

🏠 Address :
${address}

🎁 Product : ${rakhiName.value} (${rakhiID.value})

📦 Quantity : ${quantity}

Please confirm my order. Thank you.`;

    const whatsappURL =
`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    orderForm.reset();

    popup.style.display = "none";

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================================
// HERO ANIMATION
// ==========================================

window.addEventListener("load", () => {

    document.querySelector(".hero-content").style.opacity = "1";

});

// ==========================================
// CARD ANIMATION
// ==========================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".7s";

    observer.observe(card);

});

// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


