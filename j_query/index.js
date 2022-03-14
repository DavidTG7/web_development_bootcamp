// jQuery("h1").css("color", "red");

// To manipulate text
$("h1").text("World!");

$("button").html("<em>Hey</em>");

$("button:eq(1)").text("Hey, we changed the second button");

// To manipulete attributes
$("a").attr("href", "https://www.facebook.com");

// To add eventListener
$("h1").click(function(){
    $("h1").css("color", "pink");
})

// To add eventListener to all buttons have to create a for loop with vanilla js:
// for (var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i];addEventListener("click", function() {
//         document.querySelector("h1").style.color = "orange";
//     })
// }

// But with jQuery
$("button").click(function() {
    $("h1").css("color", "pink");
});


// To detect a key
$("input").keypress(function(event){
    console.log(event.key);
});

// Challente to change the h1 with the pressed key
$(document).keypress(function(event) {
    $("h1").text(event.key);
    $("h1").css("color", "fuchsia");
    $("h1").css("font-size", "5rem");
});

// Another way to add an eventListener with on
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})


// Ways to add element to the page
//before:
$("h1").before("<button>New</button");

//After:
$("h1").after("<button>New After</button><br>");


// append() and propend() insterts the element into the targed element

// To remove elements:
// $("button").remove();

// // To make disappear an element:
// $("button").on("click", function(){
//     $("h1").hide();
// });

// To show the element again:
// $("button").on("click", function(){
//     $("h1").show();
// });

// // To change between hide and show = toggle:
// $("button").on("click", function(){
//     $("h1").toggle();
// });

// // To fadeOut or fadeIn or fadeToggle:
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// });

// // To slideUp or slideDown or slideToggle:
// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

// // To animate inside the curly brackets you can add a new css rule with a numeric value:
// $("button").on("click", function(){
//     $("h1").animate({padding: "2%"});
// });

// To chain methods:
$("button").on("click", function(){
    $("h1")
    .slideUp()
    .slideDown()
    .animate({padding: "2%"}, 2000)
    .animate({opacity: 0})
    .animate({fontSize: "100px"})
    .animate({opacity: 1}, 5000);
});

//---------------


myH2Title();
  function myH2Title(){
    $("img")
    .animate({
      opacity: 0,
      width: "170px"
    }, 1500)
    .animate({opacity:1,
      width: "200px"
    }, 1500);
    myH2Title();
  }