const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 1000,
    slidesPerView: 1,
    breakpoints:{
        1200:{
        slidesPerView: 2,
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let form=document.getElementById('send');
form.onclick=function(event){
  event.preventDefault();

  let name=document.getElementById('name');
  let phone=document.getElementById('phone');
  let agree=document.getElementById('agree');
  errors=false;

  if(name.value.trim()==''){
    name.className='is-invalid';
    errors=true;
  }else{
    name.className='';

  }
  if(phone.value.trim()==''){
    phone.className='is-invalid';
    errors=true;
  }else{
    phone.className='';
  }

  if(!agree.checked){
    agree.nextElementSibling.className='error';
    errors=true;
  }else{
    agree.nextElementSibling.className='';
  }

  if(errors){
    alert('Заполните все поля!');
  }else{
    alert('Ваша заявка успешно отправлена!');
    name.value='';
    phone.value='';
    agree.checked=false;
  }
}