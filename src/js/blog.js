"use strict";

import readFile from '../data/testimonials.json';
const testimonialsUsers = readFile;
const container = document.querySelector(".section_blog");
const blogDiv = document.querySelector(".blog");
const blogLogo = blogDiv.querySelector(".blog__icon");
const blogLogoPic = blogDiv.querySelector('[type]');
const blogText = blogDiv.querySelector(".blog__text");

class Blog{
  constructor(user, index, photoblock){
    this.img = user.img;
    this.logo = user.logo;
    this.text = user.text;
    this.index = index;
    this.photoblock = photoblock;
  }
  makeActive(e){
    const imgArray = container.querySelectorAll(".blog_photo");
    imgArray.forEach((cur)=>{
        cur.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  makeContent(){
    const divUser = document.createElement("img");
    divUser.classList.add("blog_photo");
    divUser.src = this.img;
    if (this.index === 0){
      divUser.classList.add("active");
      blogLogo.src = this.logo;
      blogLogoPic.srcset = this.logo.replace("jpg", "webp");
      blogLogoPic.srcset = this.logo.replace("png", "webp");
      blogText.textContent = `" ${this.text} "`;
     }
    divUser.addEventListener("click", (e)=>{
      this.makeActive(e);
      blogLogo.src = this.logo;
      blogText.textContent = `" ${this.text} "`;
      blogLogoPic.srcset = this.logo.replace("jpg", "webp");
      blogLogoPic.srcset = this.logo.replace("png", "webp");
    });
    this.photoblock.append(divUser);
  }
}

const photos = container.querySelectorAll(".photo");
photos.forEach((cur, index)=>{
  const item = new Blog(testimonialsUsers[index], index, cur);
  item.makeContent();
});

