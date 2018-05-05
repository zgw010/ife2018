const inputs = document.querySelectorAll('.form__input');
const labels = document.querySelectorAll('.form__label');
const btn = document.querySelector('.btn');
for(let i=0;i<2;++i){
  inputs[i].onfocus=function(){
    labels[i].style.height='calc(120%)';
  }
  inputs[i].onblur=function(){
    if(this.value!==''){
      labels[i].style.height='calc(120%)';
      if(inputs[1-i].value!==''){
        btn.classList.add('animated');
        btn.classList.add('pulse');
      }
    }else{
      labels[i].style.height='calc(99%)';
      btn.classList.remove('animated');
      btn.classList.remove('pulse');
    }
  }
}