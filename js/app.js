let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let submitbtn = document.getElementById("submitbtn");
let fullName = document.getElementById("pname");
let skils = document.getElementById("skill");
let skillplace = document.querySelector(".skillplace");
let bannerSection = document.querySelector("#bannerSection");
let colorbtn = document.querySelector(".colorbtn");

submitbtn.addEventListener("click", function () {
  let fNameValue = fName.value;
  let lNameValue = lName.value;
  fullName.innerText = fNameValue + lNameValue;
  skillplace.textContent = skils.value;
  fName.value = "";
  lName.value = "";
});

colorbtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  bannerSection.style.backgroundColor = `rgb(${r},${g},${b})`;
  colorbtn.style.backgroundColor = `rgb(${r},${g},${b})`;
});
