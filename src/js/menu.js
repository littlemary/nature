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
      document.body.classList.add('_pc');
    }
  }
}

const checkMob = new detectMob().addClasses();

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
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    });
  });
}