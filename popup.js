

document.addEventListener('DOMContentLoaded',function () {
   var link=document.getElementById('checkPage');
   var inputVal=document.getElementById('name');
   var txtShow=document.getElementById('great');
   link.addEventListener('click',function(){
       txtShow.innerText=inputVal.value;
   });

});