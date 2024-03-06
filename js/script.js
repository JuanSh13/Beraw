// Barra de Navegacion Mobile 
const barsIcon = document.querySelector('.bars-icon');
const asideNavigation = document.querySelector('.aside-navigation');

let active = false;

barsIcon.addEventListener('click', () => {

  if(!active) {
    asideNavigation.style.display = "flex";
    active = !active;
  }
  else {
    asideNavigation.style.display = "none";
    active = !active;
  }

});

let applicationsNumber =  document.querySelector('.applications-number');
let clientsNumber =  document.querySelector('.clients-number');
let websitesNumber =  document.querySelector('.websites-number');
let membersNumber =  document.querySelector('.members-number');


function dataAccount(etq, data) {
  num = 0;
  myInterval = setInterval(() => {
    if(num >= data) {
      clearInterval(myInterval);
    }
    else {
      // console.log(num);
      num++;
      return etq.textContent = num;
    }
  }, 1);
}

dataAccount(applicationsNumber, 699);
dataAccount(clientsNumber, 456);
dataAccount(websitesNumber, 150);
dataAccount(membersNumber, 600);