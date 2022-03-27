function selectionEquip1() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementById("team").src = "icons/jugadores.png";

    document.getElementsByClassName("img-equipment")[0].src =
      "assets/men/first_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/men/first_equipment_back.jpg";
  } else {
    document.getElementById("team").src = "icons/jugadoras.jpg";

    document.getElementsByClassName("img-equipment")[0].src =
      "assets/woman/first_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/woman/first_equipment_back.jpg";
  }
}

function selectionEquip2() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementsByClassName("img-equipment")[0].src =
      "assets/men/second_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/men/second_equipment_back.jpg";
  } else {
    document.getElementsByClassName("img-equipment")[0].src =
      "assets/woman/second_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/woman/second_equipment_back.jpg";
  }
}

function selectionEquip3() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementsByClassName("img-equipment")[0].src =
      "assets/men/third_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/men/third_equipment_back.jpg";
  } else {
    document.getElementsByClassName("img-equipment")[0].src =
      "assets/woman/third_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "assets/woman/third_equipment_back.jpg";
  }
}
