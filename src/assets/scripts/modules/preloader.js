// Получим прелоудер
const preloader = document.querySelector(".preloader");
// Получим картинки на странице
const images = document.getElementsByTagName("img");
// Получим количество картинок на странице
const imagesCount = images.length;
// Блок, отображающий проценты
const percentBlock = document.querySelector(".preloader__progress-percent");
// Количество процентов на загрузку одной картинки
const percentStep = 100 / imagesCount;
// Количество загруженных картинок
var loadedImages = 0;

for (var i = 0; i < imagesCount; i++) {
  // Создадим клон изображения
  var imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
}

function imageLoaded() {
  // Увеличим количество загруженных картинок
  loadedImages++;

  // Увеличим размер штриха
  const circles = document.querySelectorAll(".preloader__circle");
  Array.from(circles).forEach((item, index) => {
    item.style.strokeDashoffset =
      (251 / 100) * (100 - percentStep * loadedImages);
  });

  // Увеличим счетчик на странице
  percentBlock.innerHTML = ((percentStep * loadedImages) << 0) + "%";

  if (loadedImages >= imagesCount) {
    setTimeout(function() {
      if (!preloader.classList.contains("preloader--done")) {
        preloader.classList.add("preloader--done");
      }
    }, 1000);
  }
}
