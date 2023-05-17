'use strict';

const list = [
  {
    text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint',
    colorCode: '#1B4F72',
    imgUrl: 'https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg',
    pos1: 'top',
    pos2: 'end',
  },
  {
    text: 'Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman',
    colorCode: '#ecf0f1',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg',
    pos1: 'top',
    pos2: 'center',
  },
  {
    text: 'The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg',
    colorCode: '#007bff',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg',
    pos1: 'top',
    pos2: 'start',
  },
];
const domObj = document.getElementById('js-target');
const genButton = document.getElementById('js-button');

function motivationalSpeechWallpaper(text, colorCode, imgUrl, pos1, pos2) {
  const wallpaperDiv = document.createElement('div');
  const wallpaperImg = document.createElement('img');
  const wallpaperP = document.createElement('p');

  wallpaperDiv.classList.add('w-75', 'mx-auto', 'mt-4', 'position-relative');
  wallpaperDiv.style.height = 'fit-content';

  wallpaperImg.src = imgUrl;
  wallpaperImg.classList.add('w-100', 'h-auto');

  wallpaperP.classList.add('h5', 'position-absolute', `${pos1}-50`, `${pos2}-50`, 'fs-2', 'p-3');
  wallpaperP.style.color = `${colorCode}`;
  wallpaperP.innerText = text;

  wallpaperDiv.append(wallpaperImg);
  wallpaperDiv.append(wallpaperP);

  domObj.append(wallpaperDiv);
}

let numStorage;

function getRandomNum() {
  let j = 0;
  while (j < 1000) {
    let randomNum = Math.floor(Math.random() * list.length);
    if (numStorage != randomNum) {
      numStorage = randomNum;
      return randomNum;
    }
    j++;
  }
}

genButton.addEventListener('click', () => {
  domObj.innerHTML = '';
  genButton.innerText = 'Regenerate';
  let randomNum = getRandomNum();

  let item = list[randomNum];
  motivationalSpeechWallpaper(item.text, item.colorCode, item.imgUrl, item.pos1, item.pos2);
});
