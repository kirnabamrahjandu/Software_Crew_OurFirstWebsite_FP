$(document).ready(function () {
    if (sessionStorage.getItem('user_name') == ' ') {
        document.getElementById("login-user").style.display = "none";
        document.getElementById("logoutId").style.display = 'none';
        document.getElementById("wishlist-page").style.display = 'none';

    } else {

        document.getElementById("login-user").innerHTML = sessionStorage.getItem('user_name');
        document.getElementById("logged-sign-in").style.display = 'none';
        document.getElementById("logged-in").style.display = "none";
    }

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function addToWishlist(elem) {
    var productName = document.getElementById("product-price-" + elem).innerHTML;
    var addCard = '<div class="productCard" id="product-price-' + elem + '" >' + productName + '</div > ';
    var getFavoriteData = localStorage.getItem('favourite');
    if (getFavoriteData !== null && getFavoriteData !== '') {
        getFavoriteData += addCard;
    } else {
        getFavoriteData = addCard;
    }
    localStorage.setItem('favourite', getFavoriteData);
    //document.getElementById("favourites-list-card").innerHTML = localStorage.getItem('favourite');
    alert('Item inserted into favourites');
}

function LogOut() {
    sessionStorage.setItem("user_name", ' ');
    document.getElementById("logged-in").style.display = "none";
    window.location.href = "index.html";
    alert('Logged Out Successfully');
}
function SignIn() {
    let Email = document.getElementById("formSignIn").elements.Email.value;
    let Pass = document.getElementById("formSignIn").elements.password.value;
    let data = JSON.parse(localStorage.getItem(Email));
    if (data !== null && data.Password === Pass) {
        sessionStorage.setItem("user_name", data.Email);
        window.location.href = "index.html";
    } else {
        alert('Invalid Login');
    }
}
function SignUp() {
    let data = {
        Email: document.getElementById("formSignUp").elements.Email.value,
        Website: document.getElementById("formSignUp").elements.website.value,
        DOB: document.getElementById("formSignUp").elements.date_of_birth.value,
        Password: document.getElementById("formSignUp").elements.password.value,
        Gender: document.getElementById("formSignUp").elements.gender.value
    }
    localStorage.setItem(data.Email, JSON.stringify(data));
    alert('Registered Successfully.Please login now');
    window.location.href = "signIn.html";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

$(function () {

    function setHeight() {
        $(".response").each(function (index, element) {
            var target = $(element);
            target.removeClass("fixed-height");
            var height = target.innerHeight();
            target.attr("data-height", height)
                .addClass("fixed-height");
        });
    };

    $("input[name=question]").on("change", function () {
        $("p.response").removeAttr("style");

        var target = $(this).next().next();
        target.height(target.attr("data-height"));
    })

    setHeight();
});