function guildsdd() {
  var x = document.getElementById("guilds-dropdown");
  var y = document.getElementById("guilds");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "1rem 1rem";
  }
}

function moneydd() {
  var x = document.getElementById("money-dropdown");
  var y = document.getElementById("money");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "1rem 1rem";
  }
}

function weaponsdd() {
  var x = document.getElementById("weapons-dropdown");
  var y = document.getElementById("weapons");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "1rem 1rem";
  }
}

function navigationbar() {
  var x = document.getElementById("navigationbar-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var y = document.getElementById("dingleberry");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function dropdownsdesktop() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}