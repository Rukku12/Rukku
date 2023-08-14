document.addEventListener("DOMContentLoaded", function () {
    const changeBgButton = document.getElementById("change-bg-button");
    const imageContainer = document.querySelector(".image-section");

    const backgrounds = [
        "url('C:/Users/rugmi/AppData/Local/Temp/Temp268e7fe5-5daa-4e17-8c4e-e69a7c91aaa4_FinalExam.zip/Final Exam/resources/img1.jpg')", // Update this path
        "url('resources/img2.jpg')", // Update this path
        // Add more image URLs as needed
    ];

    changeBgButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        imageContainer.style.backgroundImage = backgrounds[randomIndex];
    });
});
