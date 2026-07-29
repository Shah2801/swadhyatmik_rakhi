// ==============================
// SWADHYATMIK - script.js
// ==============================

// ------------------------------
// Mobile Menu
// ------------------------------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navLinks.classList.remove("active");
    }

});

// ------------------------------
// Scroll Progress Bar
// ------------------------------

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ------------------------------
// Back To Top Button
// ------------------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ------------------------------
// Smooth Scroll
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ------------------------------
// Image Preview
// ------------------------------

const imagePopup =
    document.getElementById("imagePopup");

const popupImage =
    document.getElementById("popupImage");

const closeImage =
    document.querySelector(".close-image");

document.querySelectorAll(".product-img")
.forEach(img => {

    img.addEventListener("click", () => {

        popupImage.src = img.src;

        imagePopup.style.display = "flex";

    });

});

closeImage.onclick = () => {

    imagePopup.style.display = "none";

};

imagePopup.onclick = (e) => {

    if (e.target === imagePopup) {

        imagePopup.style.display = "none";

    }

};

// ------------------------------
// Order Popup
// ------------------------------

const popup =
    document.getElementById("popup");

const closePopup =
    document.querySelector(".close");

const productID =
    document.getElementById("productID");

document.querySelectorAll(".order-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

        productID.value =
            button.dataset.id;

    });

});

closePopup.onclick = () => {

    popup.style.display = "none";

};

window.onclick = (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

};

// ------------------------------
// WhatsApp Order
// ------------------------------

const orderForm =
    document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("phone").value;

    const address =
        document.getElementById("address").value;

    const quantity =
        document.getElementById("quantity").value;

    const code =
        productID.value;

    const message =
`Hey, I want to place an order!

Product Code : ${code}

Name : ${name}

Phone : ${phone}

Quantity : ${quantity}

Address : ${address}`;

    const whatsappNumber = "916203143986";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    popup.style.display = "none";

    orderForm.reset();

});



// ------------------------------
// Quantity Selector
// ------------------------------

const plusBtn =
    document.getElementById("plusBtn");

const minusBtn =
    document.getElementById("minusBtn");

const quantityInput =
    document.getElementById("quantity");

if (plusBtn && minusBtn && quantityInput) {

    plusBtn.addEventListener("click", () => {

        quantityInput.value =
            parseInt(quantityInput.value) + 1;

    });

    minusBtn.addEventListener("click", () => {

        if (parseInt(quantityInput.value) > 1) {

            quantityInput.value =
                parseInt(quantityInput.value) - 1;

        }

    });

}



// ------------------------------
// Active Menu
// ------------------------------

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        if (pageYOffset >= top) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ------------------------------
// Header Shadow
// ------------------------------

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow =
            "0 5px 18px rgba(0,0,0,.08)";

    }

});