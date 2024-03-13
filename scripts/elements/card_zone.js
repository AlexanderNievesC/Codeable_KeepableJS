const values = [
  {
    title: "Note1",
    subtitle: "My first note",
    color: "red",
  },
  {
    title: "Note2",
    subtitle: "My second note",
    color: "blue",
  },
];

const Card_zone = (function () {
  const template = `
    <div id="card">

      <form id="card__main">
          <input class="title" placeholder="The title for my new note"></input>
          <input class="subtitle" placeholder="This is the body for the note"></input>
          <div id="detail_card">
            <img id="paletteImage" src="/images/palette.svg">
            <div id="alert">Keep it!</div>          
          </div>
      </form>

      <div class="hidden"> 
          <div class="circle" style=" border: 1px solid var(--gray) "></div>
          <div class="circle" style=" border: 1px solid var(--darkpink);  background-color: var(--darkpink)"></div>
          <div class="circle" style=" border: 1px solid var(--orange);  background-color: var(--orange)"></div>
          <div class="circle" style=" border: 1px solid var(--yellow);  background-color: var(--yellow)" ></div>
          <div class="circle" style=" border: 1px solid var(--green);  background-color: var(--green)" ></div>
          <div class="circle" style=" border: 1px solid var(--turquoise);  background-color: var(--turquoise)" ></div>
          <div class="circle" style=" border: 1px solid var(--lightblue);  background-color: var(--lightblue)" ></div>
          <div class="circle" style=" border: 1px solid var(--blue);  background-color: var(--blue)" ></div>
          <div class="circle" style=" border: 1px solid var(--purple);  background-color: var(--purple)" ></div>
          <div class="circle" style=" border: 1px solid var(--pink);  background-color: var(--pink)" ></div>
      </div >
       
      <div id="main">No notes to keep</div>  
      <div id="js-note"></div>
       
    </div>
    `;

  const individual = (title, subtitle, color) => {
    const template = `
    <div id="individual-note" style="background-color: ${color}">
      <div id="head" >
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
      </div>
      <div id="element-side">
        <img id="paletteImage" src="/images/palette.svg">
        <img id="trash" src="/images/Frame 8.svg">
      </div>
    </div>
    `;

    return template.toString();
  };

  const addNote = () => {
    const alert_div = document.getElementById("alert");
    const div_main = document.getElementById("main");
    const js_note = document.getElementById("js-note");
    const main_note = document.getElementById("card__main");

    alert_div.addEventListener("click", () => {
      div_main && (div_main.style.display = "none");

      const title = document.querySelector(".title").value;
      const subtitle = document.querySelector(".subtitle").value;
      var value = window.getComputedStyle(main_note);
      var color = value.getPropertyValue("background-color");

      js_note.innerHTML += individual(title, subtitle, color);
    });
  };

  const toggle = () => {
    const symbol = document.getElementById("paletteImage");
    const palette = document.querySelector(".hidden");

    symbol.addEventListener("click", () => {
      palette.classList.toggle("palette_block");
      palette;
      console.log(symbol, palette);
    });
  };

  const addColor = () => {
    var circles = document.querySelectorAll(".circle");
    var main_card = document.getElementById("card__main");

    circles.forEach((circle) => {
      circle.addEventListener("click", () => {
        var value = window.getComputedStyle(circle);
        var color = value.background;

        main_card.style.background = color;
      });
    });
  };

  return {
    toString() {
      return template;
    },
    addListeners() {
      addNote();
      toggle();
      addColor();
    },
  };
})();
