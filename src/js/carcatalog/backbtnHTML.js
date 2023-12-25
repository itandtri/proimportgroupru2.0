'use strict'

export function backBtnHTML () {
  document.querySelector(".carsCatalog").insertAdjacentHTML(
      "beforeend",
      `
          <a href='' class = "subsection--content backBtn " data-catalog="back">
                   главное меню каталога
                  </a> `
    );
  };

