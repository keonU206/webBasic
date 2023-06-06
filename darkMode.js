const bodyObject = {
  linkSetColor: function (color) {
    let a_list = document.querySelectorAll("a");
    let i = 0;
    while (i < a_list.length) {
      a_list[i].style.color = color;
      i++;
    }
  },
  bodySetColor: function (font, bgi) {
    let target = document.querySelector("body");
    target.style.color = font;
    target.style.backgroundColor = bgi;
  },
};

function bodySetColor(font, bgi) {
  let target = document.querySelector("body");
  target.style.color = font;
  target.style.backgroundColor = bgi;
}

function darkMode(self) {
  if (self.value === "밤") {
    bodyObject.bodySetColor("white", "black");
    bodyObject.linkSetColor("powderblue");
    self.value = "낮";
  } else {
    bodyObject.bodySetColor("black", "white");
    bodyObject.linkSetColor("black");
    self.value = "밤";
  }
}
