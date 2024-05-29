
//inputs
const DayInput = document.getElementById("day");
const MonthInput = document.getElementById("month");
const YearInput =document.getElementById("year");

//lables
const lab1 = document.querySelector(".lab1");
const lab2 = document.querySelector(".lab2");
const lab3 = document.querySelector(".lab3");

//container of each input
const dayCont = document.querySelector(".day-cont");
const monthCont = document.querySelector(".month-cont");
const yearCont = document.querySelector(".year-cont");

//results
const YY = document.querySelector(".YY");
const MM = document.querySelector(".MM");
const DD = document.querySelector(".DD");

//no repeted text
let isCreateElement1 = false;
let isCreateElement2 = false;
let isCreateElement3 = false;
let isCreateElement4 = false;
let isCreateElement5 = false;

//button
const button = document.querySelector(".btn");

button.addEventListener("click", function(e){
  e.preventDefault()
  //declaration of days in marray
  const monthsandday = [0,31,28,31,30,31,30,31,31,30,31,30,31]
  //declatation of time
  const d = new Date();
  let currentDay = d.getDate();
  let currentMonth = d.getMonth() + 1;
  let currentYear = d.getFullYear();
  
  let numDayInput = Number(DayInput.value);
  let numMonthInput = Number(MonthInput.value)
  let numYearInput = Number(YearInput.value)
  
  //creat elemets
  let p1 = document.createElement("p");
  p1.className = "inputP1";
  p1.innerHTML = "This field is required";

  let p2 = document.createElement("p");
  p2.className = "inputP2";
  p2.innerHTML = "This field is required";

  let p3 = document.createElement("p");
  p3.className = "inputP3";
  p3.innerHTML = "This field is required";

  let p4 = document.createElement("p");
  p4.className = "inputP4"
  p4.innerHTML = "Must be a valid date"

  let p5 = document.createElement("p");
  p5.className = "inputP5"
  p5.innerHTML = "Must be a valid date"

  let p6 = document.createElement("p");
  p6.className = "inputP6"
  p6.innerHTML = "Must be a valid date"

  let p7 = document.createElement("p");
  p7.className = "inputP7"
  p7.innerHTML = "Must be a valid date"

  // Clear previous error messages
  
  if (isCreateElement1) {
    const oldP1 = dayCont.querySelector(".inputP1");
    if (oldP1) dayCont.removeChild(oldP1);
    isCreateElement1 = false;
    lab1.style.color ="var(--Smokey-grey)";
    DayInput.style.border = "1px solid var(--Smokey-grey)";
  }


  
  if (isCreateElement2) {
    const oldP2 = monthCont.querySelector(".inputP2");
    if (oldP2) monthCont.removeChild(oldP2);
    isCreateElement2 = false;
    lab2.style.color ="var(--Smokey-grey)";
    MonthInput.style.border = "1px solid var(--Smokey-grey)";
  }

  
    if (isCreateElement3) {
      const oldP3 = yearCont.querySelector(".inputP3");
      if (oldP3) yearCont.removeChild(oldP3);
      isCreateElement3 = false;
      lab3.style.color ="var(--Smokey-grey)";
      YearInput.style.border = "1px solid var(--Smokey-grey)";
    }

    if(monthsandday[numMonthInput] >= numDayInput){
      if (isCreateElement4) {
        const oldP4 = dayCont.querySelector(".inputP4");
        if (oldP4) dayCont.removeChild(oldP4);
        isCreateElement3 = false;
        lab1.style.color ="var(--Smokey-grey) ";
        DayInput.style.border = "1px solid var(--Smokey-grey)";
        lab3.style.color ="var(--Smokey-grey)";
        YearInput.style.border = "1px solid var(--Smokey-grey)";
        lab2.style.color ="var(--Smokey-grey)";
        MonthInput.style.border = "1px solid var(--Smokey-grey)";
      }
    }

    if(numYearInput < currentYear || numMonthInput <= 12 || numDayInput <= 31){
      if(isCreateElement5){
        const oldP5 = dayCont.querySelector(".inputP5");
        if (oldP5) dayCont.removeChild(oldP5);

        const oldP6 = monthCont.querySelector(".inputP6");
        if (oldP6) monthCont.removeChild(oldP6);

        const oldP7 = yearCont.querySelector(".inputP7");
        if (oldP7) yearCont.removeChild(oldP7);
        isCreateElement3 = false;
        lab1.style.color ="var(--Smokey-grey)";
        DayInput.style.border = "1px solid var(--Smokey-grey)";
        lab2.style.color ="var(--Smokey-grey)";
        MonthInput.style.border = "1px solid var(--Smokey-grey)"
        lab3.style.color ="var(--Smokey-grey)";
        YearInput.style.border = "1px solid var(--Smokey-grey)";
        isCreateElement5 = false
      }
    }

  //if in input box no value inesrt
  if(DayInput.value == ""){
    lab1.style.color ="var(--Light-red)";
    DayInput.style.border = "1px solid var(--Light-red)";
    if(!isCreateElement1){
      dayCont.appendChild(p1);
      isCreateElement1 = true;
    }
    
  };

  if(MonthInput.value == ""){
    if(!isCreateElement2){
      monthCont.appendChild(p2)
      isCreateElement2 = true;
    }
    lab2.style.color ="var(--Light-red)";
    MonthInput.style.border = "1px solid var(--Light-red)";
    
  };

  if(YearInput.value == ""){
    if(!isCreateElement3){
      yearCont.appendChild(p3);
      isCreateElement3 = true;
    }
    lab3.style.color ="var(--Light-red)";
    YearInput.style.border = "1px solid var(--Light-red)";
    
}
  //months and days checker
  if(monthsandday[numMonthInput] < numDayInput){
    if(!isCreateElement4){
      dayCont.appendChild(p4);
      isCreateElement4 = true;
    }
    lab1.style.color ="var(--Light-red) ";
    DayInput.style.border = "1px solid var(--Light-red)";
    lab3.style.color ="var(--Light-red)";
    YearInput.style.border = "1px solid var(--Light-red)";
    lab2.style.color ="var(--Light-red)";
    MonthInput.style.border = "1px solid var(--Light-red)";
}

  //if the date of borth is grater than current period

    else if(numYearInput > currentYear || numMonthInput > 12 || numDayInput > 31){
      if(!isCreateElement5){
        dayCont.appendChild(p5)
        monthCont.appendChild(p6)
        yearCont.appendChild(p7)
        isCreateElement5 = true;
      }
      lab1.style.color ="var(--Light-red)";
      DayInput.style.border = "1px solid var(--Light-red)";
      lab2.style.color ="var(--Light-red)";
      MonthInput.style.border = "1px solid var(--Light-red)"
      lab3.style.color ="var(--Light-red)";
      YearInput.style.border = "1px solid var(--Light-red)";
  }
  //claculation the age
  else if(numYearInput > 0 && numMonthInput > 0 && numDayInput > 0){
    if(currentMonth > numMonthInput){
      let numYEr = currentYear - 1
      let numMon = numMonthInput + 12

      let subtarct1year = numYEr - numYearInput;
      let substract1mont = numMon - currentMonth ;
      let substract1day = currentDay - numDayInput;

      YY.innerHTML = `${subtarct1year}`;
      MM.innerHTML = `${substract1mont}`;
      DD.innerHTML = `${substract1day}`
      
    }
    else{
      let subYear = currentYear - numYearInput;
      let submont = currentMonth - numMonthInput;
      let subDay = currentDay - numDayInput;
      YY.innerHTML = `${subYear}`;
      MM.innerHTML = `${submont}`;
      DD.innerHTML = `${subDay}`
    }
  }
})