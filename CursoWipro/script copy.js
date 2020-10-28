const body = document.querySelector('body');


//const div1 = document.createElement('div');
//div1. innerHTML='Div criada '
//div1. setAttribute("class", "estilosCSS2");
//body.appendChild(div1);


//const div = document.querySelectorAll('.estilosCSS2');
//console.log(div);

//for(let x= 0; x <  div.lenght; x++){
  //div[x].innerHTML=`${x} texto trocado`;

  
  

  function renderCalendar(){
    const table = document.createElement("table");
    table.setAttribute("border","1");
    table.setAttribute("width","500")
    body.appendChild(table);

    
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    
    const tr = document.createElement('tr');
    thead.appendChild(tr);

    //tr.innerHTML = "<td>dssds<td>"

    const th = document.createElement("th");
    tr.appendChild(th);
    th.setAttribute("colspan","7");
    th.innerText= "Setembro em JS";

    const tr2 = document.createElement("tr");
    thead.appendChild(tr2);

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const th6 = document.createElement("th");
    const th7 = document.createElement("th");

    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    tr2.appendChild(th6);
    tr2.appendChild(th7);

    th1.innerText = "Dom";
    th2.innerText = "Seg";  
    th3.innerText = "Ter";
    th4.innerText = "Qua";
    th5.innerText = "Qui";
    th6.innerText = "Sex";
    th7.innerText = "Sab";
  }
    
renderCalendar();

