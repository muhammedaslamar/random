const ContainerE1 = document.querySelector(".container");
for (let i = 0; i < 150; i++) {
  const ColourContainerE1 = document.createElement("div");
  ColourContainerE1.classList.add("color-container");
  ContainerE1.appendChild(ColourContainerE1);
}

const Color_ContainerE1s = document.querySelectorAll(".color-container");
ColourAdder();
function ColourAdder() {
  Color_ContainerE1s.forEach((ColourContainerE1) => {
    const CickColour = RandomColour();
    ColourContainerE1.style.backgroundColor = "#" + CickColour;
    ColourContainerE1.innerHTML = "#" + CickColour;
  });
}
RandomColour();
function RandomColour() {
  const chars = "0123456789abcdef";
  let ColourS1 = "";
  const ColourLength = 6;
  for (let j = 0; j < ColourLength; j++) {
    const RandomNum = Math.floor(Math.random() * chars.length);
    ColourS1 += chars.substring(RandomNum, RandomNum + 1);
  }
  return ColourS1;
}
