var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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
// alert('Heloo');
// $("#contact-form input").keyup(function () {
//     alert('Heloo');
//     var numValid = 0;
//     $("#contact-form input[required]").each(function () {
//         if (this.validity.valid) {
//             numValid++;
//         }
//     });

//     var progress = $("#progress"),
//         progressMessage = $("#progress-message");

//     if (numValid == 0) {
//         progress.attr("value", "0");
//         progressMessage.text("The form, it wants you.");
//     }
//     if (numValid == 1) {
//         progress.attr("value", "20");
//         progressMessage.text("There you go, great start!");
//     }
//     if (numValid == 2) {
//         progress.attr("value", "40");
//         progressMessage.text("Nothing can stop you now.");
//     }
//     if (numValid == 3) {
//         progress.attr("value", "60");
//         progressMessage.text("You're basically a hero, right?");
//     }
//     if (numValid == 4) {
//         progress.attr("value", "80");
//         progressMessage.text("They are going to write songs about you.");
//     }
//     if (numValid == 5) {
//         progress.attr("value", "95");
//         progressMessage.text("SO CLOSE. PRESS THE THING.");
//     }

// });