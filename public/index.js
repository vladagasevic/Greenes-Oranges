const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

console.log("TEST");
const galleryContainer = document.querySelector('.obnovljiviIzvoriImageContainerColumn');
const galleryItems = galleryContainer.querySelectorAll(".obnovljiviIzvoriItem");
const defaultItemFlex = "1 1 200px";
const hoverItemFlex = "1 1 400px";

const updateGalleryItems = () => {
    galleryItems.forEach(item => {
        let flex = defaultItemFlex;

        if(item.isHovered) {
            flex = hoverItemFlex
        }
        item.style.flex = flex;
    })

    galleryItems[0].isHovered = true;
    updateGalleryItems();
    galleryItems.forEach((item) => {
        item.addEventListener("mouseenter", () =>{
            galleryItems.forEach((otherItem) => {
                otherItem.isHovered = otherItem === item;
            });
            updateGalleryItems();
        });
    });
}