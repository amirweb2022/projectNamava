let header = document.getElementById("header");
let image = [
  "/assest/image/dinamit.jpg",
  "/assest/image/khaton.jpg",
  "/assest/image/khosof.jpg",
];
let span = [
  "/assest/image/dinamit-title.png",
  "/assest/image/khaton-title.png",
  "/assest/image/khosof-title.png",
];
let img = document.getElementById("image");
let textContent = ["دینامیت", "خاتون", "خسوف"];
let text = document.getElementById("text-slide");
let Button = document.getElementById("btn-light-name");
let textButton = ["خرید بلیت", "قسمت ها", "قسمت ها"];
let index = 0;

const forward = () => {
  index++;
  img.removeAttribute("src");
  if (index > image.length - 1) {
    index = 0;
  }
  header.style.background = `url(${image[index]})`;
  img.setAttribute("src", `${span[index]}`);
  header.style.backgroundPosition = "center";
  header.style.backgroundRepeat = "no-repeat";
  header.style.backgroundSize = "cover";
  text.innerHTML = `${textContent[index]}`;
};
const backward = () => {
  index--;
  img.removeAttribute("src");
  if (index < 0) {
    index = image.length - 1;
  }
  header.style.background = `url(${image[index]})`;
  header.style.backgroundPosition = "center";
  header.style.backgroundRepeat = "no-repeat";
  header.style.backgroundSize = "cover";
  img.setAttribute("src", `${span[index]}`);
  text.innerHTML = `${textContent[index]}`;
};
setInterval(function () {
  index++;
  img.removeAttribute("src");
  if (index > image.length - 1) {
    index = 0;
  }
  header.style.backgroundImage = `url(${image[index]})`;
  header.style.backgroundPosition = "center";
  header.style.backgroundRepeat = "no-repeat";
  header.style.backgroundSize = "cover";
  img.setAttribute("src", `${span[index]}`);
  text.innerHTML = `${textContent[index]}`;
  Button.innerHTML = `${textButton[index]}`;
}, 5000);
const carousel = document.querySelector(".container-box1");
let counter = 1;
const imageCount = 9;
const imageSize = 300;
function startCarousel() {
    if (counter >= imageCount) counter = 0;
    carousel.style.transform = "translateX(" + imageSize * counter + "px)";
    counter++;
}
const carouselpro = document.querySelector(".container-box2");
let counter1 = 1;
const imageCountads = 9;
const imageSizeadsd = 300;
function startCarousel1() {
  if (counter1 >= imageCountads) 
  counter1 = 0;
  carouselpro.style.transform = "translateX(" + imageSizeadsd * counter1 + "px)";
  counter1++;
}
const carouselIran = document.querySelector(".container-box3");
let counter2 = 1;
const imageCountgh = 5;
const imageSizehj = 300;
function startCarousel2() {
  if (counter2 >= imageCountgh) 
  counter2 = 0;
  carouselIran.style.transform = "translateX(" + imageSizehj * counter2 + "px)";
  counter2++;
}
const carouselmini = document.querySelector(".container-box4");
let counter3 = 1;
const imageCountghc = 9;
const imageSizehjc = 300;
function startCarousel3() {
  if (counter3 >= imageCountghc) 
  counter3 = 0;
  carouselmini.style.transform = "translateX(" + imageSizehjc * counter3 + "px)";
  counter3++;
}
window.onload = getdata();
window.onload = getdatapro();
window.onload = getdataproNew();
window.onload = getdataproIran();
window.onload = getdatapromini();
function getdata() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/src/js/data.json", true);
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status === 200) {
      var carouselPro = document.querySelector(".carouselPro");
      var output = "";
      data.forEach((data) => {
        output += ` <div class="card bg-dark text-light me-3" style="width: 20%; height: 100%;" ${data.id}>
                <img src="${data.img}" class="card-img-top" width="100%">
                <div class="card-body">
                  <h6 class="card-title py-1">${data.title}</h6>
                  <p class="card-text">${data.description}</p>
                  <p class="card-text">${data.date}</p>
                </div>
            </div>`;
      });
      const carousel = document.querySelector(".container-box");
      let counter = 1;
      const imageCount = 5;
      const imageSize = 400;
      window.onload = startCarousel();
      function startCarousel() {
        if (counter >= imageCount) 
        counter = 0;
        setInterval(() => {
            carousel.style.transform = "translateX(" + imageSize * counter + "px)";
            counter++;
            startCarousel();
        }, 6000);
      }
      carouselPro.innerHTML = output;
    }
  };
  xhr.send();
}
function getdatapro() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/src/js/datapro.json", true);
    xhr.onload = function () {
      var data = JSON.parse(this.response);
      if (xhr.status === 200) {
        var carouselProVizhe = document.querySelector(".carouselProvizh");
        var output = "";
        data.forEach((data) => {
          output += `<a href="#" class="text-decoration-none">
          <div class="box-movie position-relative mx-2">
              <img src="${data.imgmovie}" class="rounded">
              <div class="overlay">
                  <p class="text-light">${data.overtitle}</p>
                 <div>
                  <i class="fas fa-heart text-light"></i>
                  <span class="text-light">${data.number}</span>
              </div>
              <div class="mt-1">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="#ffffff" class="t-icon-0-1-159"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg></span>
                  <span class="text-light">${data.nomre}</span>
              </div>
              </div>
              <p class="text-light title-pro">${data.title}</p>
          </div>
          </a>`;
          carouselProVizhe.innerHTML = output;
        });
      }
    };
    xhr.send();
}
function getdataproNew() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/src/js/datapronew.json", true);
    xhr.onload = function () {
      var data = JSON.parse(this.response);
      if (xhr.status === 200) {
        var carouselProVizhe1 = document.querySelector(".carouselProvizh1");
        var output = "";
        data.forEach((data) => {
          output += `<a href="#" class="text-decoration-none">
          <div class="box-movie position-relative mx-2">
              <img src="${data.imgmovie}" class="rounded">
              <div class="overlay">
                  <p class="text-light">${data.overtitle}</p>
                 <div>
                  <i class="fas fa-heart text-light"></i>
                  <span class="text-light">${data.number}</span>
              </div>
              <div class="mt-1">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="#ffffff" class="t-icon-0-1-159"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg></span>
                  <span class="text-light">${data.nomre}</span>
              </div>
              </div>
              <p class="text-light title-pro">${data.title}</p>
          </div>
          </a>`;
          carouselProVizhe1.innerHTML = output;
        });
      }
    };
    xhr.send();
}
function getdataproIran() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/src/js/dataIran.json", true);
    xhr.onload = function () {
      var data = JSON.parse(this.response);
      if (xhr.status === 200) {
        var carouselProVizhe2 = document.querySelector(".carouselProvizh2");
        var output = "";
        data.forEach((data) => {
          output += `<a href="#" class="text-decoration-none">
          <div class="box-movie position-relative mx-2">
              <img src="${data.imgmovie}" class="rounded">
              <div class="overlay">
                  <p class="text-light">${data.overtitle}</p>
                 <div>
                  <i class="fas fa-heart text-light"></i>
                  <span class="text-light">${data.number}</span>
              </div>
              <div class="mt-1">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="#ffffff" class="t-icon-0-1-159"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg></span>
                  <span class="text-light">${data.nomre}</span>
              </div>
              </div>
              <p class="text-light title-pro">${data.title}</p>
          </div>
          </a>`;
          carouselProVizhe2.innerHTML = output;
        });
      }
    };
    xhr.send();
}
function getdatapromini() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/src/js/datamini.json", true);
    xhr.onload = function () {
      var data = JSON.parse(this.response);
      if (xhr.status === 200) {
        var carouselProVizhe3 = document.querySelector(".carouselProvizh3");
        var output = "";
        data.forEach((data) => {
          output += `<a href="#" class="text-decoration-none">
          <div class="box-movie position-relative mx-2">
              <img src="${data.imgmovie}" class="rounded">
              <div class="overlay">
                  <p class="text-light">${data.overtitle}</p>
                 <div>
                  <i class="fas fa-heart text-light"></i>
                  <span class="text-light">${data.number}</span>
              </div>
              <div class="mt-1">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="#ffffff" class="t-icon-0-1-159"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg></span>
                  <span class="text-light">${data.nomre}</span>
              </div>
              </div>
              <p class="text-light title-pro">${data.title}</p>
          </div>
          </a>`;
          carouselProVizhe3.innerHTML = output;
        });
      }
    };
    xhr.send();
}