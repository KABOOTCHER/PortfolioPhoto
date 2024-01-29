let inputName = document.getElementById('name')
let inputMail = document.getElementById('email')
let sendButton = document.getElementById('submit')



let FirstProjButton = document.getElementById('FirstProjButton')
let SecondProjButton = document.getElementById('SecondProjButton')

let Firstproj = document.querySelector('.Firstproj')
let Secondproj  = document.querySelector('.Secondproj')
let FirstprojFull = document.querySelector('.FirstProjFull')
let SecondprojFull  = document.querySelector('.SecondProjFull')

let CloseFirstButton = document.getElementById('CloseFirstButton')
let CloseSecondButton = document.getElementById('CloseSecondButton')


let linkSelector = document.getElementsByTagName('a')

let modalHeader = document.querySelector(".modalHeader")
let modalSubtitle = document.querySelector(".modalSubtitle")


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");







//-----------------------МОДАЛЬНОЕ ОКНО


const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();

  }
  
});

// open modal function
const openModal = function () {

    

    if (inputMail.value.length > 0 & inputName.value.length > 0 & inputMail.value.includes('@') == true){
        modalHeader.textContent = "Спасибо за отправленную заявку";
        modalSubtitle.textContent = " Я свяжусь с вами в ближайшее время";

        
        sendButton.addEventListener("click", openModal);        

    
    } else if (inputMail.value.includes('@') == false & (inputMail.value.length > 0 & inputName.value.length > 0) ){
        modalHeader.textContent = "Произошла ошибка";
        modalSubtitle.textContent = "Введите корректный адрес электронной почты";

        
        sendButton.addEventListener("click", openModal);        
    } else{
        modalHeader.textContent = "Произошла ошибка";
        modalSubtitle.textContent = " Заполните все поля перед отправкой";

        
        sendButton.addEventListener("click", openModal);    }

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  inputName.value = ""
  inputMail.value = ""

    

};
// open modal event

sendButton.addEventListener("click", openModal);





//-----------------------ОТКРЫТИЕ БЛОКОВ 


FirstProjButton.addEventListener("click",() =>{

    Firstproj.style.display = "none"
    FirstprojFull.style.display = "flex"
    
})
CloseFirstButton.addEventListener("click",() =>{

    Firstproj.style.display = "flex"
    FirstprojFull.style.display = "none"
})

SecondProjButton.addEventListener("click",() =>{

    Secondproj.style.display = "none"
    SecondprojFull.style.display = "flex"
})
CloseSecondButton.addEventListener("click",() =>{

    Secondproj.style.display = "flex"
    SecondprojFull.style.display = "none"
})

//-----------------------СТАРЫЙ СЛАЙДЕР







//-----------------------НОВЫЙ СЛАЙДЕР


let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = slider.querySelector('.next');
  let back = slider.querySelector('.back');
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    slide[i].classList.remove('block');

    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    
    // slide[i] - следующий слайд. Показываем.
  });  

  
  back.addEventListener('click', function() {
    slide[i].classList.remove('block');

    // slide[i] - открытый слайд. Скрываем.
    
    i = (i - 1 + slide.length) % slide.length ; // (*1)
    
    slide[i].classList.add('block');
    
    // slide[i] - следующий слайд. Показываем.
  });  
}








//-----------------------СТИЛИЗОВАННЫЙ КУРСОР


document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
  
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
  
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })



// попробовать сделаьт отправку формы куда либо