var getFeaturedButton = document.getElementById("get-featured-button");
if (getFeaturedButton) {
  getFeaturedButton.addEventListener("click", function (e) {
    window.location.href = "featured.html"; // replace with the URL of the page you want to redirect to
  });
}

// Change the text for mobile view
if (window.innerWidth <= 767) {
    const studioGraceText = document.querySelector('.studio-grace-is');
    if (studioGraceText) {
        studioGraceText.textContent = "Studio GRACE is an online gallery showcasing global photography. Discover stunning images, shop prints, and submit your work.";
    }
}

// Add event listener to window resize
window.addEventListener('resize', () => {
    const studioGraceText = document.querySelector('.studio-grace-is');
    if (studioGraceText) {
        if (window.innerWidth <= 767) {
            studioGraceText.textContent = "Studio GRACE is an online gallery showcasing global photography. Discover stunning images, shop prints, and submit your work.";
        } else {
            studioGraceText.textContent = "Studio GRACE is an online gallery showcasing diverse and talented works of photographers from around the world, offering stunning images that capture the beauty and essence of life. With a convenient shop for purchasing high-quality prints of artwork and photographs, the gallery also features a weekly changing theme, curated according to the vision of the featured artist. Photographers looking to reach a wider audience are invited to submit their portfolios for consideration."; // Original text
        }
    }
});

