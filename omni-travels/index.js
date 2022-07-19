"use strict";
let numRows = 32;
let numCols = 29;

window.onload = function () {
  let imgParent = document.querySelector("#map-img");

  //   for (let i = 0; i < numRows; i++) {
  imgParent.append(createRow([7]));
  imgParent.append(createRow([5, 6, 7, 8]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11, 12]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11]));
  imgParent.append(createRow([8, 9, 10, 11]));
  imgParent.append(createRow([7, 8, 9, 10]));
  imgParent.append(createRow([7, 8, 9, 10, 11, 12]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11, 12, 25, 26, 27]));
  imgParent.append(createRow([5, 6, 7, 8, 9, 10, 11, 12, 24, 25, 26, 27, 28]));
  imgParent.append(
    createRow([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20, 23, 24, 25, 26, 27,
      28,
    ])
  );
  imgParent.append(
    createRow([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23,
      24, 25, 26,
    ])
  );
  imgParent.append(
    createRow([
      3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23,
      24, 25, 26,
    ])
  );
  imgParent.append(
    createRow([
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26,
    ])
  );
  imgParent.append(
    createRow([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      23, 24, 25,
    ])
  );
  imgParent.append(
    createRow([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24,
    ])
  );
  imgParent.append(
    createRow([
      1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25,
    ])
  );

  imgParent.append(
    createRow([2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
  );
  imgParent.append(
    createRow([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
  );
  imgParent.append(createRow([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

  imgParent.append(createRow([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
  imgParent.append(createRow([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
  imgParent.append(createRow([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
  imgParent.append(createRow([5, 6, 7, 8, 9, 10, 11, 12, 13]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11, 12]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11, 12]));
  imgParent.append(createRow([6, 7, 8, 9, 10, 11, 12]));
  imgParent.append(createRow([7, 8, 9, 10, 11]));
  imgParent.append(createRow([7, 8, 9, 10, 11]));
  imgParent.append(createRow([8, 9, 10, 11]));
  imgParent.append(createRow([8, 9, 10]));
  imgParent.append(createRow([9]));
  // imgParent.append(createRow([0, 3, 9]));

  //   }
};

function createRow(arr) {
  let dotRow = document.createElement("div");
  dotRow.classList.add("dot-row");

  for (let i = 0; i < numCols; i++) {
    dotRow.append(createDot(arr.findIndex((el) => el == i) != -1));
  }

  return dotRow;
}

function createDot(isBlue = false) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (isBlue) dot.classList.add("dot-primary");
  return dot;
}

// const sectionAbout = document.querySelector(".section-aboutUs");
// const sectionContact = document.querySelector(".section-contactUs");

// sectionContact.classList.add("hidden");
// sectionAbout.classList.add("hidden");
// const sectionHeader = document.querySelector(".mainPage");
// const aboutModal = function () {
//   sectionAbout.classList.remove("hidden");
//   sectionContact.classList.add("hidden");
//   sectionHeader.classList.add("hidden");
// };
// const contactModal = function () {
//   sectionContact.classList.remove("hidden");
//   sectionAbout.classList.add("hidden");
//   sectionHeader.classList.add("hidden");
// };

// sectionAbout.addEventListener("click", aboutModal);
// sectionContact.addEventListener("click", contactModal);
