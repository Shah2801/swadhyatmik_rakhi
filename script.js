// =============================
// SELECT ELEMENTS
// =============================

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

const orderButtons = document.querySelectorAll(".order-btn");

const rakhiName = document.getElementById("rakhiName");
const rakhiPrice = document.getElementById("rakhiPrice");

const orderForm = document.getElementById("orderForm");

// =============================
// OPEN POPUP
// =============================

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

        rakhiName.value = button.dataset.rakhi;
        rakhiPrice.value = button.dataset.price;

    });

});

// =============================
// CLOSE POPUP
// =============================

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});

// =============================
// WHATSAPP ORDER
// =============================

orderForm.addEventListener("submit", function(e){

    e.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if(customerName === "" || phone === "" || address === ""){

        alert("Please fill all details.");

        return;
    }

    // Replace this number with your WhatsApp number
    const ownerNumber = "919876543210";

    const message =
`🌸 *New Rakhi Order* 🌸

👤 Name: ${customerName}

📱 Mobile: ${phone}

🏠 Address:
${address}

🎁 Rakhi: ${rakhiName.value}

💰 Price: ${rakhiPrice.value}

Please confirm this order.`;

    const whatsappURL =
`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    popup.style.display = "none";

    orderForm.reset();

});