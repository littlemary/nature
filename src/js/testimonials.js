"use strict";
const container = document.querySelector(".container__photo");
import readFile from '../data/testimonials.json';
const testimonialsUsers = readFile;

const sayDiv = document.querySelector(".say");
const sayLogo = sayDiv.querySelector(".say__icon");
const sayText = sayDiv.querySelector(".say__text");

class TestimonialsItem{
  constructor(user, index, countOnPage, realCount=4){
    this.realCount = realCount;
    this.index = index + 1;
    this.posClass = "pos1";
    switch (this.realCount){
      case 1: this.posClass =`poscenter`; break;
      case 2: this.posClass =`pos${index + 1}`; break; // 1 2
      case 3: this.posClass =`pos${index + 1}`; break; // 2 3 4
      case 4: this.posClass =`pos${index + 1}`; break; //1 2 3 4
    }

    this.img = user.img;
    this.logo = user.logo;
    this.text = user.text;
    this.countOnPage = countOnPage;
  }
  makeActive(e){
    const imgArray = container.querySelectorAll(".testimonials_photo");
    imgArray.forEach((cur)=>{
        cur.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  makeContent(){
    const divUser = document.createElement("img");
    divUser.classList.add("testimonials_photo");
    divUser.src = this.img;
    divUser.classList.add(this.posClass);
    //mobile version
    // if (this.countOnPage == 1){
    //   divUser.classList.add(`poscenter`);
    // }
    // //tablets and PC version
    // else{
    //   divUser.classList.add(`pos${this.index}`);
    // }
    if (this.index === 1){
      divUser.classList.add("active");
      sayLogo.src = this.logo;
      sayText.textContent = `" ${this.text} "`;
    }
    divUser.addEventListener("click", (e)=>{
      this.makeActive(e);
      sayLogo.src = this.logo;
      sayText.textContent = `" ${this.text} "`;
    });
    container.append(divUser);
  }
}


class TestimonialsPhoto{
  constructor(start_index = 0){
    this.start_index = start_index;
    // this.window_width = window.innerWidth;
    // this.window_width = screen.width;
    this.window_width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    this.countOnPage = 4;
    this.showNext = false;
    this.showPrev = false;
    this.end_index = this.start_index + this.countOnPage;
    if (this.end_index > testimonialsUsers.length){
      this.end_index = testimonialsUsers.length;
    }
  };

  makePhotoClasses(){
    // console.log(this.window_width);
    switch (true) {
      case (this.window_width < 760):  this.countOnPage = 1; break;
      case (this.window_width >= 760 && this.window_width <= 1200): this.countOnPage = 2; break;
      case (this.window_width >= 1200 && this.window_width <= 1600): this.countOnPage=3; break;
    }
    this.end_index = this.start_index + this.countOnPage;
    if (this.end_index > testimonialsUsers.length){
      this.end_index = testimonialsUsers.length;
    }
  }
  makeArrow(type="prev"){
    const arrow = document.createElement("a");
    arrow.classList.add("testimonials_arrow");
    if (  (type=="prev" && !this.showPrev) || (type=="next" && !this.showNext) ){
            arrow.textContent = ' ';
            container.append(arrow);
            return;
          }
    switch (type){
      case "prev": 
        arrow.textContent = "<";
        arrow.addEventListener("click", () => {
          // this.start_index-= this.countOnPage;
          this.start_index -= 1;
          this.end_index = this.start_index + this.countOnPage;
          if (this.end_index > testimonialsUsers.length){
            this.end_index = testimonialsUsers.length;
          }
          this.makePhotosArray();
        });
        break;
      case "next":
        arrow.textContent = ">";
        arrow.addEventListener("click", () => {
          // this.start_index+= this.countOnPage;
          this.start_index += 1;
          this.end_index = this.start_index + this.countOnPage;
          if (this.end_index > testimonialsUsers.length){
            this.end_index = testimonialsUsers.length;
          }
          this.makePhotosArray();
        });
    }
    container.append(arrow);
  }
  makePhotosArray(){
    this.makePhotoClasses();
    container.innerHTML = '';
    this.showPrev = (this.start_index==0)?false:true;
    this.showNext = ((this.start_index + this.countOnPage) < testimonialsUsers.length) ? true : false;

    this.makeArrow("prev");
    // if (this.start_index > 0){
    //   this.makeArrow("prev");
    // }    
    const usersArr = testimonialsUsers.slice(this.start_index, this.end_index);
    const realCount = usersArr.length;
    usersArr.forEach((cur, i)=>{
      const item = new TestimonialsItem(cur, i, this.countOnPage, realCount);
      item.makeContent();
    });

    // if ((this.start_index + this.countOnPage) < testimonialsUsers.length){
    //   this.makeArrow("next");
    // }
    this.makeArrow("next");
  }
}

const mainContent = new TestimonialsPhoto();
mainContent.makePhotosArray();

window.addEventListener("resize", mainContent.makePhotosArray());