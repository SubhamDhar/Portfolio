//GALLERY Operations
let galleries = document.querySelectorAll('.gallery');
galleries.forEach(gallery => {
    let carousel = gallery.querySelector('.carousel');  //selecting respective carousel
    let prevBtn = gallery.querySelector('.prevBtn');    //selecting respective prevBtn
    let nextBtn = gallery.querySelector('.nextBtn');    //selecting respective nextBtn

    //carousel PREV and NEXT traversals
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ 
            left: -carousel.clientWidth, 
            behavior: 'smooth' 
        });
    });
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ 
            left: carousel.clientWidth, 
            behavior: 'smooth' 
        });
    });

    //OPEN IMAGE onclick of img
    carousel.addEventListener('click', (event)=>{
        if(event.target.tagName.toLowerCase() === 'img') {
            window.open(event.target.src, '_blank');
        }
    });
});