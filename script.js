function openNav() {
  const sideNav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  if (sideNav) {
    sideNav.style.width = "250px";
  }

  if (main) {
    main.style.marginLeft = "250px";
  }

  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav() {
  const sideNav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  if (sideNav) {
    sideNav.style.width = "0";
  }

  if (main) {
    main.style.marginLeft = "0";
  }

  document.body.style.backgroundColor = "white";
}

