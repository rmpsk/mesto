let popup = document.querySelector('.popup');

let openPopupBtn = document.getElementById('open_popup_btn');

let closePopupBtn = document.querySelector('.popup__close');
 
let popupOverlay = document.querySelector('.popup__overlay');

let submit = document.querySelector('.popup__form');

let nameText = document.querySelector('.info__text-title');

let descText = document.querySelector('.info__text-subtitle');

let name = document.querySelector("#name");

let desc = document.querySelector("#desc");

function openPopup() {
    popup.classList.add('popup_opened');
    name.value = nameText.textContent;
    desc.value = descText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameText.textContent = name.value;
    descText.textContent = desc.value;
    closePopup();
}

openPopupBtn.addEventListener('click', function (event) { 
    openPopup(); 
    });

closePopupBtn.addEventListener('click', function (event) { 
    closePopup(); 
    });

popupOverlay.addEventListener('click', function (event) { 
    closePopup(); 
    });

submit.addEventListener('submit', formSubmitHandler);




