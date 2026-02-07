/* =====================================
   MASTER FINAL MAIN JS – FULL WEBSITE
===================================== */

document.addEventListener("DOMContentLoaded", function(){

/* =====================================
   SMOOTH SCROLL – SAFE
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click", function(e){

const id = this.getAttribute("href");
const target = document.querySelector(id);

if(target){
e.preventDefault();
target.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

});
});


/* =====================================
   BURGER MENU – FINAL
===================================== */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

if(burger && nav && overlay){

burger.addEventListener("click", ()=>{
nav.classList.toggle("active");
overlay.classList.toggle("active");
});

overlay.addEventListener("click", ()=>{
nav.classList.remove("active");
overlay.classList.remove("active");
});

/* CLOSE MENU AFTER LINK CLICK */
document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click", ()=>{
nav.classList.remove("active");
overlay.classList.remove("active");
});
});

}


/* =====================================
   IMAGE POPUP – QUALITY + INDUSTRIAL
===================================== */

const popupImages = document.querySelectorAll(
".quality-card img, .solar-extra-card img"
);

popupImages.forEach(img=>{

img.style.cursor="zoom-in";

img.addEventListener("click", ()=>{

/* CREATE POPUP */
const popup = document.createElement("div");
popup.className="img-popup";

/* ADD CONTENT */
popup.innerHTML = `
<span class="img-close">&times;</span>
<img src="${img.src}" alt="">
`;

/* ADD TO PAGE */
document.body.appendChild(popup);

/* CLOSE BUTTON */
popup.querySelector(".img-close").addEventListener("click", ()=>{
popup.remove();
});

/* CLICK OUTSIDE CLOSE */
popup.addEventListener("click", (e)=>{
if(e.target === popup){
popup.remove();
}
});

});

});


});
document.getElementById("whatsappForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let address = document.getElementById("address").value;

let phone = "918623828090";   // YOUR WHATSAPP NUMBER

let text =
`New Website Enquiry:%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Address: ${address}`;

let url = `https://wa.me/${phone}?text=${text}`;

window.open(url, "_blank");

});
document.getElementById("whatsappForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let address = document.getElementById("address").value.trim();

/* REMOVE SPACES + SYMBOLS */
mobile = mobile.replace(/\D/g,'');

/* AUTO ADD INDIA CODE */
if(mobile.length === 10){
mobile = "91" + mobile;
}

/* WHATSAPP NUMBER (YOUR BUSINESS NUMBER) */
let phone = "918623828090";

/* address FORMAT */
let text =
`New Website Enquiry:%0A
Name: ${name}%0A
Mobile: ${mobile}%0A

Address: ${address}`;

let url = `https://wa.me/${phone}?text=${text}`;

window.open(url, "_blank");

});
function openVisitPopup(){
document.getElementById("visitPopup").classList.add("active");
}

function closeVisitPopup(){
document.getElementById("visitPopup").classList.remove("active");
}

document.getElementById("visitForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("vname").value;
let mobile = document.getElementById("vmobile").value;
let address = document.getElementById("vaddress").value;

if(mobile.length !== 10){
alert("Enter valid 10 digit mobile number");
return;
}

let text =
`Site Visit Request
Name: ${name}
Mobile: +91${mobile}
Address: ${address}`;

let url =
`https://wa.me/918623828090?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

closeVisitPopup();

});