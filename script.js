const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yessBtn = document.querySelector(".yess-btn");
const nahBtn = document.querySelector(".nah-btn");

yessBtn.addEventListener("click", () => {
  question.innerHTML = "RAYYY can't wait";
  gif.src =
  "https://media1.tenor.com/images/5acd718308f3d8212a9279d094ae8ea2/tenor.gif?itemid=16191958";
});

nahBtn.addEventListener("mouseover", () => {
  const nahBtnRect = nahBtn.getBoundingClientRect();
  const maxX = window.innerWidth - nahBtnRect.width;
  const maxY = window.innerHeight - nahBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nahBtn.style.left = randomX + "px";
  nahBtn.style.top = randomY + "px";
});