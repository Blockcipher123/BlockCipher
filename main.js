// const hamburger = document.querySelector(".hamburger");
// const hamburger = document.querySelector(".nav-menu");


// hamburger.addEvenListener("click", () => {
//   hamburger.classList.toggle("active");
//   nav-menu.classList.toggle("active");
// })



// party.sparkles(element);


// party.confetti(element,{
//   /**
//    * Whether the debugging mode should be enabled.
//    */
//   debug: false,
//   /**
//    * The amount of gravity to apply to particles in the scene, in pixels.
//    * Note that this value is positive by default, since the y-axis increases
//    * downwards in a DOM.
//    */
//   gravity: 800,
//   /**
//    * The z-index to place the DOM containers at.
//    */
//   zIndex: 99999,
// });


// party.settings.debug = true;


// party.confetti(element, {
//   shapes: ["square", "circle", "roundedRectangle"]
// });

// party.resolvableShapes["myShape"] = `<img src="myShape.png"/>`;


// function darkMode() {
//     if (document.body.style.backgroundColor == "black") {
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.body.style.backgroundColor = "black";
//     }
//     console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
// }




jQuery(window).on('load', function() {
    // WOW JS
    new WOW().init();
    // Preloader
    $('.preloader').fadeOut(500);
});