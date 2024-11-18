// Selecting the elements for the nav menu and the search box
const navOpenBtn = document.querySelector('.navOpenBtn');
const navCloseBtn = document.querySelector('.navCloseBtn');
const navLinks = document.querySelector('.nav-links');
const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');

// Open the nav when navOpenBtn is clicked
navOpenBtn.addEventListener('click', () => {
    navLinks.style.display = 'block';
    navOpenBtn.style.display = 'none';
});

// Close the nav when navCloseBtn is clicked
navCloseBtn.addEventListener('click', () => {
    navLinks.style.display = 'none';
    navOpenBtn.style.display = 'block';
});

// Toggle the search box when searchIcon is clicked
searchIcon.addEventListener('click', () => {
    if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
    } else {
        searchBox.style.display = 'block';
    }
});



function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const toggleIcon = document.querySelector('.toggle-icon');

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        toggleIcon.innerHTML = '&#9660;'; // down arrow
    } else {
        dropdownContent.style.display = 'block';
        toggleIcon.innerHTML = '&#9650;'; // up arrow
    }
}