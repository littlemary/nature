// -----------------------------------------
// -------Add _touch and _pc classes to body
// -----------------------------------------
class detectMob{
  constructor(){
    this.toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];  
  }
  detectMob(){
    return this.toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    })
  }
  addClasses(){
    if (this.detectMob()){
      document.body.classList.add('_touch');
      // add arrows to all submenu in menu
      let menuArrows = document.querySelectorAll(".menu__arrow");
       menuArrows.forEach((cur, i)=>{
          cur.addEventListener("click", (e)=>{
          cur.parentElement.classList.toggle('_active');
          });
        });
    }
    else{
      // document.body.classList.add('_touch');
      document.body.classList.add('_pc');
    }
  }
}

const checkMob = new detectMob().addClasses();

// ------------------------
// --------Burger----------
// ------------------------

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu){
  iconMenu.addEventListener("click", (e)=>{
    const menuBody = document.querySelector(".menu__body");
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}
// -----------------------------
// -------Scroll on click-------
// -----------------------------
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
  menuLinks.forEach(item=>{
    item.addEventListener("click", (e)=>{
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto); 
        // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
        // if header position = fixed
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains("_active")){
          const menuBody = document.querySelector(".menu__body");
          menuBody.classList.remove("_active");
          iconMenu.classList.remove("_active");
          document.body.classList.remove("_lock");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    });
  });
}