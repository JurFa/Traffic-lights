// Traffic lights.

function switchLights() {
  setTimeout(() => {
    document.querySelector(".red").style.backgroundColor = "red";
    document.querySelector(".yellow").style.backgroundColor = "rgb(87, 83, 83)";
    document.querySelector(".green").style.backgroundColor = "rgb(87, 83, 83)";

    setTimeout(() => {
      document.querySelector(".red").style.backgroundColor = "red";
      document.querySelector(".yellow").style.backgroundColor = "yellow";
      document.querySelector(".green").style.backgroundColor =
        "rgb(87, 83, 83)";

      setTimeout(() => {
        document.querySelector(".red").style.backgroundColor =
          "rgb(87, 83, 83)";
        document.querySelector(".yellow").style.backgroundColor =
          "rgb(87, 83, 83)";
        document.querySelector(".green").style.backgroundColor = "green";

        setTimeout(() => {
          document.querySelector(".red").style.backgroundColor =
            "rgb(87, 83, 83)";
          document.querySelector(".yellow").style.backgroundColor = "yellow";
          document.querySelector(".green").style.backgroundColor = "green";
          switchLights();
        }, 3000);
      }, 2000);
    }, 2000);
  }, 3000);
}

switchLights();
