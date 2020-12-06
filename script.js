const colorPad = document.getElementById("color-pad");
const sliderValueText = document.getElementById("slider-value");
const slider = document.getElementById("color-slider");
const resetBtn = document.getElementById("reset-btn");
const themeSlider = document.getElementById("theme-slider");
const root = document.documentElement;

function newBox(x) {
   colorPad.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
   colorPad.style.gridTemplateRows = `repeat(${x}, 1fr)`;

   colorPad.innerHTML = "";

   const numberofBoxes = x * x;
   createBox(numberofBoxes);
}

function createBox(numberofBoxes) {
   for (i = 0; i < numberofBoxes; i++) {
      const box = document.createElement("button");
      box.classList.add("color-box");
      colorPad.appendChild(box);
   }
}

function colorGenerator() {
   var letters = "0123456789ABCDEF";
   var color = "#";
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function setRandomColor(e) {
   if (!e.target.closest("button")) return;

   e.target.style.backgroundColor = colorGenerator();
}

function resetColor(e) {
   if (!e.target.closest("button")) return;

   e.target.style.backgroundColor = "rgb(250, 227, 255)";
}

function updateColorPad() {
   const sliderValue = slider.value;
   sliderValueText.innerText = `${sliderValue}*${sliderValue}`;

   newBox(sliderValue);
}

function changeTheme() {
   const value = themeSlider.value;
   const background = root.style;
   const backgroundImg = root.style;

   switch (value) {
      case "0":
         background.setProperty("--color", "rgb(34, 195, 185)");
         backgroundImg.setProperty(
            "--gradient",
            "linear-gradient(328deg,rgba(34, 195, 185, 1) 0%,rgba(180, 45, 253, 1) 100%)"
         );
         break;
      case "1":
         background.setProperty("--color", "#FBDA61");
         backgroundImg.setProperty(
            "--gradient",
            "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"
         );
         break;
      case "2":
         background.setProperty("--color", " #fad961");
         backgroundImg.setProperty(
            "--gradient",
            "linear-gradient(90deg, #fad961 0%, #f76b1c 100%)"
         );
         break;
      case "3":
         background.setProperty("--color", " #faaca8");
         backgroundImg.setProperty(
            "--gradient",
            "linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%)"
         );
         break;
      default:
         break;
   }
}

newBox(14);

slider.addEventListener("input", updateColorPad);

resetBtn.addEventListener("click", () => {
   sliderValueText.textContent = "14*14";
   slider.value = 14;
   newBox(14);
});

colorPad.addEventListener("mouseover", setRandomColor);
colorPad.addEventListener("click", setRandomColor);
colorPad.addEventListener("dblclick", resetColor);
themeSlider.addEventListener("input", changeTheme);
