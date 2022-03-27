function selectionEquip1() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementById("team").src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/icons/jugadores.png";

    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/first_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/first_equipment_back.jpg";
  } else {
    document.getElementById("team").src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/icons/jugadoras.jpg";

    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/first_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/first_equipment_back.jpg";
  }
}

function selectionEquip2() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/second_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/second_equipment_back.jpg";
  } else {
    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/second_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/second_equipment_back.jpg";
  }
}

function selectionEquip3() {
  if (document.getElementById("genero").value == "eqMen") {
    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/third_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/men/third_equipment_back.jpg";
  } else {
    document.getElementsByClassName("img-equipment")[0].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/third_equipment_front.jpg";

    document.getElementsByClassName("img-equipment")[1].src =
      "file:///C:/Users/USUARIO/Desktop/Platzi/Curso%20Practico%20de%20JavaScript/Curso-basico-JavaScript/assets/woman/third_equipment_back.jpg";
  }
}
