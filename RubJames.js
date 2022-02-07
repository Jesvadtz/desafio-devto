
//contador de los corazones
const korazon = document.getElementById("corazon");
const contador1 = document.getElementById("kokoro");

let i = 0;
korazon.addEventListener("click",() => {
    console.log( i++ )
    contador1.innerHTML =  i;
    console.log(i);
   });
 
// contador de los unicornios
   const unicornIo = document.getElementById("unicorn");
   const unicornioCont = document.getElementById("unicorncont");
   
   let u = 0;
   unicornIo.addEventListener("click",() => {
       console.log( u++ )
       unicornioCont.innerHTML =  u;
       console.log(u);
      });  

// contador de los guardados

const save = document.getElementById("guardar");
const saveCont = document.getElementById("guardarcont");

let s = 0;
save.addEventListener("click",() => {
    console.log( s++ )
    saveCont.innerHTML =  s;
    console.log(s);
   });  