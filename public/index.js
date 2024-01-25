const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
console.log("JS Skripta");

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Obnovljivi izvori slider - image hover
//const galleryContainer = document.querySelector('.obnovljiviIzvoriImageContainerColumn');
const galleryItems = document.querySelectorAll('.obnovljiviIzvoriItem');
const defaultItemFlex = "1 1 200px";
const hoverItemFlex = "1 1 400px";


const updateGalleryItems = () => {
    
    galleryItems.forEach((item) => {
        let flex = defaultItemFlex;
        if(item.isHovered) {
            flex = hoverItemFlex
            
        }
        item.style.flex = flex;
    });

    // galleryItems[0].isHovered = true;
    updateGalleryItems();
    galleryItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            galleryItems.forEach((otherItem) => {
                otherItem.isHovered = otherItem === item;
            });
            updateGalleryItems();
        });
    });
};