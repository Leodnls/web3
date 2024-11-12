const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        resetStars(); // Reset all stars before highlighting new ones
        highlightStars(this.getAttribute('data-value'));
    });

    star.addEventListener('mouseout', resetStars);

    star.addEventListener('click', function() {
        rating = this.getAttribute('data-value'); // Set the rating to the clicked star's value
        document.getElementById('ratingValue').textContent = rating;
        document.getElementById('thankYouMessage').style.display = 'block';
        updateStarSelection();
        
        // Redirection en fonction de l'étoile cliquée
        if (rating == 5) {
            // Redirection vers un lien personnalisé pour 5 étoiles
            window.location.href = "https://www.google.com/search?rlz=1C1ONGR_frFR974FR974&hl=fr&biw=1536&bih=776&q=Feltain%20Elagage%20Toulouse%20M%C3%A9tropole%20Avis&ludocid=17452365072350887390&ibp=gwp%3B0%2C7&sa=X&ved=0CBoQ9fQKKABqFwoTCODh0Iq814kDFQAAAAAdAAAAABAF#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"; // Remplace ce lien par ton propre choix
        } else {
            // Redirection vers la page de feedback pour 1 à 4 étoiles
            window.location.href = "feedback.html";
        }
    });
});

function highlightStars(value) {
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('hovered');
    }
}

function resetStars() {
    stars.forEach(star => star.classList.remove('hovered'));
}

function updateStarSelection() {
    stars.forEach(star => star.classList.remove('selected')); // Remove selected state from all stars
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected'); // Add selected state to the chosen stars
    }
}
