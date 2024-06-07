let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } 
    else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    document.documentElement.scrollTop = 0; 
};


let newsletterBtn = document.getElementById("newsletterBtn");
newsletterBtn.onclick = function() {
    var email = prompt("Please enter your email to subscribe to our newsletter:");
    if (email) {
        alert("Thank you for subscribing");
    } 
    else {
        alert("Please enter a valid email");
    }
};
