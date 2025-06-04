document.addEventListener("DOMContentLoaded", function () {
    // Slideshow Effect with Left-to-Right Animation
    const textArray = [
        "Welcome to My Portfolio", 
        "I am <span style='font-size: 2em; color:rgba(8, 252, 211, 0.65);'>Syamala</span>", 
        "Aspiring Full Stack Developer"
    ];
    const typedText = document.getElementById("typed-text");
    let slideIndex = 0;

    function showText() {
        typedText.style.opacity = 0;
        typedText.style.transform = "translateX(-100%)";
        setTimeout(() => {
            typedText.innerHTML = `<div style='display: inline-block; padding: 10px; border: 2px solid #1abc9c; border-radius: 8px; background: rgba(255, 255, 255, 0.1);'>${textArray[slideIndex]}</div>`;
            typedText.style.opacity = 1;
            typedText.style.transform = "translateX(0)";
            slideIndex = (slideIndex + 1) % textArray.length;
        }, 500);
        setTimeout(showText, 2500);
    }
    showText();

    // Smooth Scrolling
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Floating Profile Picture Effect
    const profilePic = document.querySelector(".profile-pic");
    let floatDirection = 1;
    setInterval(() => {
        profilePic.style.transform = `translateY(${floatDirection * 5}px)`;
        floatDirection *= -1;
    }, 1500);
});
