let btn=document.querySelector('button');
let input1=document.getElementById('input1');
let input2=document.getElementById('input2');
let bady=document.querySelector('body');
let table=document.createElement('table');
table.style.borderCollapse="collapse";
table.style.border="1px solid black";
table.style.marginTop="20px";

//vornamenRandom 
var tdinnerhtml=[
"Adelward","Adelhard","Albert","Albero","Balduin",
"Bernward","Birger","Dagmar","Dedo","Ebbo",
"Eike","Fons","Friedemann","Germana","Göbel"
];
function randomNam(Nam){
var index= Math.floor(Math.random()*Nam.length);
return Nam[index];
}
 //RaumRandom
var thinnerhtml=["Raum1","Raum2","Raum3","Raum4","Raum5","Raum6"];
function randomRaum(Raum){
  var index= Math.floor(Math.random()*Raum.length);
  return Raum[index];
  }
  //table erstellen
  btn.addEventListener('click',()=>{
    bady.appendChild(table);
    for(let j=0;j<input1.value;j++){
      let tr=document.createElement('tr');
      tr.style.border="1px solid black";
      tr.style.borderCollapse="collapse";
      
      if(j===0){
        for(let i=0;i<input2.value;i++){
          let th=document.createElement('th'); 
          th.innerHTML=randomRaum(thinnerhtml);
          th.style.border="1px solid black";
          th.style.borderCollapse="collapse";
          th.style.padding="8px";
          tr.appendChild(th);
          table.appendChild(tr);
        }
      }else {
        for(let i=0;i<input2.value;i++){
          let td=document.createElement('td');
          td.innerHTML=randomNam(tdinnerhtml);
          td.style.border="1px solid black";
          td.style.borderCollapse="collapse";
          td.style.padding="8px";
          tr.appendChild(td);
          table.appendChild(tr);
        }
      }
     }
  })
