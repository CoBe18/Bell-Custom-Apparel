let slideIndex=1;
function showSlides(n){
 const slides=document.querySelectorAll('.mySlides'),dots=document.querySelectorAll('.dot');
 if(!slides.length)return;
 slideIndex=((n-1+slides.length)%slides.length)+1;
 slides.forEach((slide,i)=>slide.style.display=i===slideIndex-1?'block':'none');
 dots.forEach((dot,i)=>{dot.classList.toggle('active',i===slideIndex-1);dot.setAttribute('aria-pressed',String(i===slideIndex-1));});
}
function plusSlides(n){showSlides(slideIndex+n);}
function currentSlide(n){showSlides(n);}
showSlides(1);
