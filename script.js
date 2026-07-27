// ==========================================
// ELEMENTS
// ==========================================

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const orderButtons = document.querySelectorAll(".order-btn");
const orderForm = document.getElementById("orderForm");

const rakhiName = document.getElementById("rakhiName");
const rakhiPrice = document.getElementById("rakhiPrice");

// ==========================================
// OPEN POPUP
// ==========================================

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

        rakhiName.value = button.dataset.rakhi;
        rakhiPrice.value = button.dataset.price;

    });

});

// ==========================================
// CLOSE POPUP
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

orderForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if(name === "" || phone === "" || address === ""){

        alert("Please fill all the details.");

        return;

    }

    // Your WhatsApp Number
    const ownerNumber = "916203143986";

    const message =
`🌸 *New Rakhi Order*

👤 Name : ${name}

📞 Mobile : ${phone}

🏠 Address :
${address}

🎁 Rakhi : ${rakhiName.value}

💰 Price : ${rakhiPrice.value}

Please confirm my order. Thank you.`;

    const whatsappURL =
`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL,"_blank");

    orderForm.reset();

    popup.style.display = "none";

});

// ==========================================
// SMOOTH NAVIGATION
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior:"smooth"

            });

    });

});

// ==========================================
// HERO FADE ANIMATION
// ==========================================

window.addEventListener("load", ()=>{

    document.querySelector(".hero-content").style.opacity="1";

});

// ==========================================
// CARD SCROLL ANIMATION
// ==========================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s";

    observer.observe(card);

});