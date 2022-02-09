//contador de los corazones
const korazon = document.getElementById("corazon");
const contador1 = document.getElementById("kokoro");

let i = 0;
korazon.addEventListener("click", () => {
  console.log(i++);
  contador1.innerHTML = i;
  console.log(i);
});

// contador de los unicornios
const unicornIo = document.getElementById("unicorn");
const unicornioCont = document.getElementById("unicorncont");

let u = 0;
unicornIo.addEventListener("click", () => {
  console.log(u++);
  unicornioCont.innerHTML = u;
  console.log(u);
});

// contador de los guardados

const save = document.getElementById("guardar");
const saveCont = document.getElementById("guardarcont");

let s = 0;
save.addEventListener("click", () => {
  console.log(s++);
  saveCont.innerHTML = s;
  console.log(s);
});

const submit = document.getElementById("sub");
// esta es la funcion constructora para crear los posts
submit.addEventListener("click", () => {
  const comment = document.getElementById("coma").value;
  $("#comentPost").append(
    $("<div/>")
      .attr("id", "post")
      .css({
        height: "125px",
        width: "500px",
        display: "flex",
        "flex-direction": "row",
        "margin-top": "10px",
      })
      .append(
        $("<div/>")
          .attr("id", "imagen")
          .css({
            width: "10%",
          })
          .append(
            $("<img/>")
              .attr(
                "src",
                "http://pm1.narvii.com/7516/a23a93d5913cdd3178db840e394d96033c2199f0r1-604-508v2_00.jpg"
              )
              .css({
                width: "50%",
                height: "30px",
                "border-radius": "50%",
                "margin-left": "8px",
                "margin-top": "5px",
              })
          ),
        $("<div/>")
          .attr("id", "condenido")
          .css({
            width: "90%",
            border: "ridge",
            "border-width": "thin",
            "border-radius": "8px",
            "border-color": "grey",
          })
          .append(
            $("<div/>")
              .attr("id", "head")
              .css({
                width: "95%",
                display: "flex",
                "flex-direction": "row",
                "justify-content": "space-between",
              })
              .append(
                $("<p/>")
                  .attr("id", "arriba")
                  .text("Rajvir Singh _____ Dec 5")
                  .css({
                    "font-size": "small",
                  }),
                $("<p/>").attr("id", "ESEVEJE").text("...").css({
                  "font-size": "medium",
                })
              ),
            $("<p/>").attr("id", "contexto").text(comment).css({
              "margin-top": "1px",
            })
          )
      )
  );
  console.log("doingsomething");
});
