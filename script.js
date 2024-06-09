'use strict';

const showButton = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');
const hiddenClass = document.querySelector('.modal');
const overlayClass = document.querySelector('.overlay');

function removeHiddenClass() {
  hiddenClass.classList.remove('hidden');
  overlayClass.classList.remove('hidden');
}

function addHiddenClass() {
  hiddenClass.classList.add('hidden');
  overlayClass.classList.add('hidden');
}

showButton.forEach(item => {
  item.addEventListener('click', removeHiddenClass);
})

closeButton.addEventListener('click', addHiddenClass);
overlayClass.addEventListener('click', addHiddenClass);


document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        if(!hiddenClass.classList.contains('hidden')){
            addHiddenClass();
        }
        
    }
})