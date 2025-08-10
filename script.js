const share = document.getElementById("shareIcon");
const shareDetails = document.getElementById("shareDetails");
const authorDetails = document.getElementById("authorDetails");
const darkIcon = document.getElementById("shadeIcon");
const attribution = document.getElementById("attribution");

// window.addEventListener("resize", function () {
//   const currentWidth = window.innerWidth;
//   const targetWidth = 1000; // Your desired width in pixels

//   if (currentWidth > targetWidth) {
//     // Execute your desired JavaScript code here
//     console.log("fine");
//     share.addEventListener("click", (event) => {
//       shareDetails.classList.remove("hidden-div");
//       authorDetails.classList.remove("hidden-div");
//       share.style.backgroundColor = "hsl(217, 19%, 35%)";
//     });
//   } else {
//     share.addEventListener("click", (event) => {
//       authorDetails.classList.add("hidden-div");
//       shareDetails.classList.remove("hidden-div");
//       attribution.classList.add("hidden-div");
//     });

//     darkIcon.addEventListener("click", (event) => {
//       authorDetails.classList.remove("hidden-div");
//       shareDetails.classList.add("hidden-div");
//       attribution.classList.remove("hidden-div");
//     });
//   }
// });

share.addEventListener("click", (event) => {
  authorDetails.classList.add("authorHidden");
  shareDetails.classList.remove("hidden-div");
  attribution.classList.add("hidden-div");
});

darkIcon.addEventListener("click", (event) => {
  authorDetails.classList.remove("authorHidden");
  shareDetails.classList.add("hidden-div");
  attribution.classList.remove("hidden-div");
});
