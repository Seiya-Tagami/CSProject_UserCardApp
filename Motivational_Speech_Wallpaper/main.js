'use strict';

let domObj = document.getElementById('target');

function motivationalSpeechWallpaper(text, colorCode, imgUrl, pos1, pos2) {
  const wallpaperDiv = document.createElement('div');
  const wallpaperImg = document.createElement('img');
  wallpaperImg.src = imgUrl;
}
motivationalSpeechWallpaper(
  'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint',
  '1B4F72',
  'https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg',
  'top',
  'right'
);

motivationalSpeechWallpaper(
  'The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg',
  '007bff',
  'https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg',
  'center',
  'left'
);

motivationalSpeechWallpaper(
  'Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman',
  'ecf0f1',
  'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg',
  'center',
  'center'
);
