// document.getElementById('btn5').onclick = function() {
//                 document.getElementById('btn5').innerHTML++;
//             };


// var counter = 0;
// documnet.getElementById('button').click(function() {
//   counter + =90;
//   document.getElementById('box').css('transform', 'rotate(' + counter +'deg)')
// });



// var c =document.getElementById('myCanvas');
// var ctx = c.getContext("2d");
// ctx.rotate(2= * Math.Pi / 180);



// $('#canvas a').click(function() {
        // $('#circle').rotateLeft();
        // return false;
//     });


  //   $(document).ready(function(){
 // 		$('#canvas a').click(function(){
 // 			$('#circle img').css({"-webkit-transform" : "rotate(+45deg)"})
 // 		});
 // 	});


//  var rotate_factor = 0;
// function rotateMe(e) {
//     rotate_factor += 1;
//     var rotate_angle = (180 * rotate_factor) % 360;
//     $(e).rotate({angle:rotate_angle});
// }


// $("body").on("click", "#button", function () {
//     $(".north, canvas").rotate(90);
// });

// document.getElementById("body").on("click", "#button", function () {
// document.getElementById('.north, canvas').rotate(90);
// });


// $('btn5').click(function(){
//     var button = $('btn5');
//     if(btn5.hasClass('north')){
//         btn5.attr('class','west');
//     }else if(btn5.hasClass('west')){
//         btn5.attr('class','south');
//     }else if(btn5.hasClass('south')){
//         btn5.attr('class','east');
//     }else if(btn5.hasClass('east')){
//         btn5.attr('class','north');
//     }
// });


document.getElementById('btn5').click(function() {

  var button1 = document.createElement('buttonsGrid');
  button1.id = 'btn1';
  button1.innerHTML = 1;
  document.body.appendChild(button1);

  if(btn5.hasClass('north')){
    btn5.attr('class','west');

  }else if(btn5.hasClass('west')){
    btn5.attr('class','south')
  }else if(btn5.hasClass('south')){
    btn5.attr('class', 'east');
  }else if(btn5.hasClass('east')){
    btn5.attr('class','north');
  }
});



// var Button = document.createElement('button');
// Button.id = 'btn';
// Button.innerHTML = 0;
// document.body.appendChild(Button);
// var i = 0;
// var btn = document.getElementById('btn');
// btn.onclick= function() {
//     i++;
//     btn.innerHTML = i;
// };


// $(document).ready(function() {
//     $(document).on('click','#clickme',function(){
//         $("#image").css({'transform': 'rotate(90deg)'});
//     });
// });


// var delta =0;
//     function rotateMe(ele){
//         ele.style.webkitTransform="rotate("+delta+"deg)";
//         delta+=10;
//     }




// var angle =0;
// documnet.getElementById('buttonClass').click(function () {
//   angle +=360;
//   document.getElementById('.buttonContainer').css({'transform' : 'rotate(' + angle + 'deg)'});
//
// });
