const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");
const restart = document.getElementById("restart");

let currentPage = 0;

// Show Page
function showPage(index) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    // Scroll text back to top
    const content = pages[index].querySelector(".content");

    if (content) {
        content.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    currentPage = index;
}

// Next Button
nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (currentPage < pages.length - 1) {

            showPage(currentPage + 1);

        }

    });

});

// Restart Button
restart.addEventListener("click", () => {

    showPage(0);

});

// Swipe Left / Right (Mobile)

let startX = 0;

document.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

});

document.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    // Swipe Left
    if (startX - endX > 80) {

        if (currentPage < pages.length - 1) {

            showPage(currentPage + 1);

        }

    }

    // Swipe Right
    else if (endX - startX > 80) {

        if (currentPage > 0) {

            showPage(currentPage - 1);

        }

    }

});

// Keyboard Support (Desktop)

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {

            showPage(currentPage + 1);

        }

    }

    if (e.key === "ArrowLeft") {

        if (currentPage > 0) {

            showPage(currentPage - 1);

        }

    }

});

// Load First Page
showPage(0);