let adviceslip = [];

function renderAdviceslip() {
  adviceList.innerHTML = `
    <h3>ADVİCE${adviceslip.slip.id}</h3>
    <h2>${adviceslip.slip.advice}</h2>
    <div class="icon"><img src="assets/img/Group.svg" alt="icon"></div>`; 

}


btn.addEventListener('click',init);

function init() {
  fetch("https://api.adviceslip.com/advice")
    .then( res => res.json())
    .then( res => {
      adviceslip = res;
      renderAdviceslip();
    });
}

init();