let mainText = document.querySelector(".text-container");

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value > 750) {
        mainText.style.animation = "disappear 1s ease-out";
    }else {
        mainText.style.animation = "slide 1s ease-out"; 
    }
});