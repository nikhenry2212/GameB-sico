const body = document.querySelector('body');
const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"

];
const dateNow = new Date();
const currentMonth = dateNow.getMonth();
dateNow.setDate(1);
dateNow.setMonth(0);
const firstDayWeek = dateNow.getDay();




function renderCalendar(){
    const table = document.createElement('table');
    table.setAttribute('border','1');
    table.setAttribute('width', '500');
    body.appendChild(table);

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const th = document.createElement('th');
    tr.appendChild(th);
    th.setAttribute('colspan', '7');
    //th.innerText = `${monyhs[currentMonth]} em JS`;
    th.innerText  = months[currentMonth] + "em JS";

    renderDaysHead(thead);
    renderDaysBody(tbody);
}

function renderDaysHead(thead){
    const tr = document.createElement('tr');
    for (let x=0; x < days.length; x++) {
        const th = document.createElement('th');
        th.innerText = days[x];
        tr.appendChild(th);
    }
    thead.appendChild(tr)
}

function renderDaysBody(tbody){
    let tr ;// = document.createElement('tr');
    let repeat = 0;
    let qtyDays = 30;
    while(repeat<= qtyDays + firstDayWeek){
      if(repeat % 7 === 0){
        tr = document.createElement("tr");
        tbody.appendChild(tr);
      }
      let day = ((repeat+1)- firstDayWeek);
        const td = document.createElement('td');
        td.innerText = repeat >= firstDayWeek ? day : ' ';
        tr.appendChild(td);
        repeat++;
        
           
    }
  }

renderCalendar();