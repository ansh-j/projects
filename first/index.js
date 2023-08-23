 var slides = document.querySelectorAll(".slide");

 slides.forEach(Element => {
    Element.addEventListener("click",()=>{
        removeClass();
        Element.classList.add("active");
    })
 });


//  for(var i=0;i<slides.length;i++)
//  {
//     // console.log(slides[i]);
    

//     slides[i].addEventListener("click",function()
//     {   
//         removeClass();
//         slides[i].classList.
        
//     })
//  }

 function removeClass()
 {
    slides.forEach(Element=> {
        Element.classList.remove("active");
    });
 }

