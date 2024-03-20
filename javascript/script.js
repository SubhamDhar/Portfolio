// MY-WORKS ANIMATIONS
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    });
});
let hiddenWorks = document.querySelectorAll('.hidden');
hiddenWorks.forEach(el => observer.observe(el));


// DOWNLOAD RESUME onclick
let downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', ()=>{
    alert("No Resume available yet.")
});


//OPEN IMAGE in new tab
function openImage(imageUrl) {
    window.open(imageUrl, '_blank');
}