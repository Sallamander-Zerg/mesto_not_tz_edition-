let popupcontaner = document.getElementById('popupcontaner');
let openform = document.getElementById('openform');
let saveform = document.getElementById('saveform');
let closeform= document.getElementById('close');
let newname= document.getElementById('field1');
let newjob = document.getElementById('field2');
let job = document.querySelector('.profile__text');
let name = document.querySelector('.profile__title');
let form = document.querySelector('.popup__form');
openform.addEventListener('click',()=>{
  popupcontaner.classList.add('popup__active');
  newname.value = name.textContent;
  newjob.value = job.textContent;
});
closeform.addEventListener('click',()=>{
  popupcontaner.classList.remove('popup__active');
});
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = newname.value;
  job.textContent = newjob.value;
  popupcontaner.classList.remove('popup__active'); 
}
form.addEventListener('submit', formSubmitHandler);



let likeButton = document.querySelectorAll('.element__LikeButton');
for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", ()=>{
    likeButton[i].classList.toggle('like');
  });
}