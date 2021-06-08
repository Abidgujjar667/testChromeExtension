
document.addEventListener('DOMContentLoaded',function () {
   var great=document.getElementById('great');
   var myinput=document.getElementById('myinput');
   var mybtn=document.getElementById('mybtn');

   mybtn.addEventListener('click',function () {
      great.innerText=myinput.value;
   })
});

$(function () {
   $('#myinput').on('keyup',function () {
      $('#great').text($('#myinput').val());
   });
});