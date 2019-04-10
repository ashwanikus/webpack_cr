require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");


const header = `<div class="row">
<nav>
  <a href="#" class="logo">
    <img src="./static/images/logo.png" alt="Sabka Bazaar" srcset="" class="logo">
  </a>
  <div>
    <input type="checkbox" id="hamberger" />

    <label class="nav_btn" for="hamberger">

      <div class="center">
        <div class="icon">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div>
      </div>
    </label>
    <span class="cart_btn">
      <a href="cart.html" class="btn_to_cart">
        <i class="cart_icon">
          <svg version="1.1" width="30" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"
            style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span>0</span>
        </i>
        <span>0 items</span>
      </a>
    </span>
    <div class="nav_link">
      <ul class="align_left">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
      </ul>
      <ul class="align_right">
        <li><a href="login.html">SignIn</a></li>
        <li><a href="signup.html">Register</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>`;




const footer = `<div class="row">
                <p>
                    Copyright &copy; 2011 &mdash; 2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </p>
                </div>`;


document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

var pathname = window.location.pathname;
switch (pathname) {
  case '/index.html':
    console.log(window.location.pathname);
    var categoriesXHttp = new XMLHttpRequest();
    categoriesXHttp.open("GET", "categories", true);
    categoriesXHttp.onload = function () {
      if (categoriesXHttp.status >= 200 && categoriesXHttp.status < 400) {
        var data = JSON.parse(categoriesXHttp.responseText);
        createCategoryContainer(data);
      } else {
        console.log("We conected to the server, but it returned an error.");
      }
    }
    categoriesXHttp.onerror = function () {
      console.log("Connection Error");
    }
    categoriesXHttp.send();

    var bannerXHttp = new XMLHttpRequest();
    bannerXHttp.open("GET", "banners", true);
    bannerXHttp.onload = function () {
      if (bannerXHttp.status >= 200 && bannerXHttp.status < 400) {
        var data = JSON.parse(bannerXHttp.responseText);
        createSlideshow(data);
      } else {
        console.log("We conected to the server, but it returned an error.");
      }
    }
    bannerXHttp.onerror = function () {
      console.log("Connection Error");
    }
    bannerXHttp.send();


    function createCategoryContainer(data) {
      console.log("Data: ", data);
      var categoryTemplate = document.getElementById("categoryTemplates").innerHTML;
      var compiledTemplate = Handlebars.compile(categoryTemplate);
      var generatedHtml = compiledTemplate(data);

      var categoryContainer = document.getElementById("category_container");
      categoryContainer.innerHTML = generatedHtml;
    }

    function createSlideshow(data) {
      var slideshowTemplates = document.getElementById("slideshowTemplates").innerHTML;
      var slideshowCompiledTemplate = Handlebars.compile(slideshowTemplates);
      var generatedHtml = slideshowCompiledTemplate(data);

      var categoryContainer = document.getElementById("slideshow");
      categoryContainer.innerHTML += generatedHtml;

      showSlides(slideIndex);

      var elem = document.getElementById("next");
      setInterval(function () {
        elem.click();
      }, 4000);
    }
    break;
  case '/products.html':
    console.log(window.location.pathname);
    break;
  case '/login.html':
    console.log(window.location.pathname);
    break;
  case '/signup.html':
    console.log(window.location.pathname);
    break;
}

