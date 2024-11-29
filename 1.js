document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.getElementById("explore-btn");
    const introContainer = document.getElementById("intro-container");

    exploreButton.addEventListener("click", () => {
    
        introContainer.classList.add("fade-out");

        
        document.body.classList.add("background-outro");

      
        setTimeout(() => {
            window.location.href = "profile.html"; 
        }, 1000); 
    });
});
