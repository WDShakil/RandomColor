## Random rgb background color

---

### HTML CODE :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Project JS</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">SoftStok</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <section class="py-5" id="bannerSection">
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div id="inputform">
              <div class="row">
                <div class="col-6">
                  <input
                    type="text"
                    id="fname"
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="text"
                    id="lname"
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="mt-3">
                <select name="" id="skill" class="form-select">
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Full Stack Web Developer">
                    Full Stack Web Developer
                  </option>
                  <option value="Wordpress Expert">Wordpress Expert</option>
                  <option selected value="MERN Stack Developer">
                    MERN Stack Developer
                  </option>
                </select>
              </div>
              <div class="d-grid mt-3">
                <button id="submitbtn" type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <h4 id="pname"></h4>
            <h6 class="text-muted">
              Professional <span class="skillplace"></span>
            </h6>
          </div>
        </div>
      </div>
    </section>
    <div
      class="colorbtn btn"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-custom-class="custom-tooltip"
      data-bs-title="This top tooltip is themed via CSS variables."
    >
      <i class="fa-solid fa-rotate coloricon"></i>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

### CSS CODE :

```css
.itemStyle {
  list-style: none;
  font-size: 18px;
}

#myprogressbar {
  height: 2px;
  display: none;
}
.showbar {
  display: block;
  height: 2px;
  width: 0%;
  margin-top: 4px;
}
.skillplace::selection {
  background-color: yellow;
}
.colorbtn {
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
}
```

### Javascript Code :

```javascript
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
```
