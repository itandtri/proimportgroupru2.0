'use strict'

export function headerPhotoClick () {
  document.querySelector(".header__photo").addEventListener("click", (e) => {
    document.querySelector(".main").scrollIntoView({ behavior: "smooth" });
    });
  };

