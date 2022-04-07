const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const clock = document.querySelector(".clock");

function setDate() {
  const paletteList = [
    "#e3f2fd",
    "#ce93d8",
    "#90caf9",
    "#42a5f5",
    "#d32f2f",
    "#f44336",
    "#66bb6a",
    "#81c784",
    "#388e3c",
    "#ffa726",
    "#d1ff33",
    "#c6ff00",
  ];

  clock.style.backgroundColor = `${
    paletteList[getRandomInteger(paletteList.length)]
  }`;

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondHand.style.backgroundColor = `${
    paletteList[getRandomInteger(paletteList.length)]
  }`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  minsHand.style.backgroundColor = `${
    paletteList[getRandomInteger(paletteList.length)]
  }`;

  const hours = now.getHours();
  const hourDegrees = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  hourHand.style.backgroundColor = `${
    paletteList[getRandomInteger(paletteList.length)]
  }`;
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

setInterval(setDate, 1000);
