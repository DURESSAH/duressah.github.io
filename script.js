// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 4000);

// ANIMATION
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => observer.observe(el));

// MODAL
function openModal(src){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modal-img").src=src;
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

// AUTO LOAD 40 IMAGES
const gallery = document.getElementById("gallery");

for(let i=1;i<=40;i++){
    let category="design";
    if(i%3===0) category="construction";
    else if(i%2===0) category="interior";

    let img=document.createElement("img");
    img.src=`images/project${i}.jpg`;
    img.classList.add("filter",category);
    img.onclick=()=>openModal(img.src);

    gallery.appendChild(img);
}

// FILTER
function filterSelection(cat){
    let items=document.getElementsByClassName("filter");
    for(let i=0;i<items.length;i++){
        items[i].classList.remove("showItem");
        if(cat==="all" || items[i].classList.contains(cat)){
            items[i].classList.add("showItem");
        }
    }
}

filterSelection("all");