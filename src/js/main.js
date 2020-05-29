const nayawala_checkbox = document.getElementById("nayawala");
const navbar = document.querySelector('.navbar');
nayawala_checkbox.addEventListener('change', function () {

navbar.classList.toggle('active');
});