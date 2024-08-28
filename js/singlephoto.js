// Start JQuery Section
$(document).ready(function(){
    $('.img_link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        gallery: {
            enabled: true, // set to true to enable gallery
          
            preload: [0,2], // read about this option in next Lazy-loading section
          
            navigateByImgClick: true,
          
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
      
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
      
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      
      });
})

$(window).on('load', function() { // document ၏ အပြင်မှာရေးပေးရမည်
	$(".loading").delay(300).fadeOut(); 
	$("#preloader").delay(400).fadeOut("slow");

});
// End Jquery Section

new WOW().init();

let nigthmodebtn = document.querySelector("#nightmode");

nigthmodebtn.addEventListener("click",function(){
    // console.log("hello check");
    if(this.checked){
        console.log("checked");
        document.querySelector("#day").classList.remove("active");
        document.querySelector("#night").classList.add("active");
        document.body.style.setProperty("--global-color-white" , "#fff")
        document.body.style.setProperty("--global-color-black" , "#121212")
        // console.log(document.querySelector(":root"))
    }else {
        console.log("uncheck");
        document.querySelector("#day").classList.add("active");
        document.querySelector("#night").classList.remove("active");
        document.body.style.setProperty("--global-color-white","#121212")
        document.body.style.setProperty("--global-color-black","#fff")
    }
})