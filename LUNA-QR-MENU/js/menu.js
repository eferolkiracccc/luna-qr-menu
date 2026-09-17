// ============================
// MENU SCROLL
// ============================

function scrollToMenu() {

    const menuSection = document.getElementById("menu");

    if (menuSection) {

        menuSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================
// CATEGORY FILTER
// ============================

let selectedCategory = "all";


function filterProducts(category, button) {

    selectedCategory = category;

    const buttons =
        document.querySelectorAll(".category-card");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    filterAndSearch();

}


// ============================
// SEARCH
// ============================

function searchProducts() {

    filterAndSearch();

}


// ============================
// FILTER + SEARCH
// ============================

function filterAndSearch() {

    const searchInput =
        document.getElementById("searchInput");


    const searchText =
        searchInput
            ? searchInput.value
                .toLocaleLowerCase("tr-TR")
                .trim()
            : "";


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        const nameElement =
            product.querySelector("h3");


        const descriptionElement =
            product.querySelector("p");


        const productName =
            nameElement
                ? nameElement.textContent
                    .toLocaleLowerCase("tr-TR")
                : "";


        const productDescription =
            descriptionElement
                ? descriptionElement.textContent
                    .toLocaleLowerCase("tr-TR")
                : "";


        const categoryMatch =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        const searchMatch =
            productName.includes(searchText) ||
            productDescription.includes(searchText);


        if (categoryMatch && searchMatch) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ============================
// PRODUCT MODAL
// ============================

function openProduct(
    title,
    description,
    price,
    image
) {

    const modal =
        document.getElementById("productModal");


    const modalTitle =
        document.getElementById("modalTitle");


    const modalDescription =
        document.getElementById("modalDescription");


    const modalPrice =
        document.getElementById("modalPrice");


    const modalImage =
        document.getElementById("modalImage");


    if (modalTitle) {

        modalTitle.textContent = title;

    }


    if (modalDescription) {

        modalDescription.textContent = description;

    }


    if (modalPrice) {

        modalPrice.textContent = price;

    }


    if (modalImage) {

        modalImage.textContent = image;

    }


    if (modal) {

        modal.classList.add("show");

    }


    document.body.classList.add("modal-open");

}


// ============================
// CLOSE MODAL
// ============================

function closeProduct(event) {

    const modal =
        document.getElementById("productModal");


    if (!modal) {

        return;

    }


    if (
        event &&
        event.target !== modal
    ) {

        return;

    }


    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


// ============================
// ESC KEY
// ============================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);
// =========================================
// QR CODE
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const qrElement = document.getElementById("qrcode");

    if (qrElement && typeof QRCode !== "undefined") {

        new QRCode(qrElement, {
            text: window.location.href,
            width: 130,
            height: 130
        });

    }

});