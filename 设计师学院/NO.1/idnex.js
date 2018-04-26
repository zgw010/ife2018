// 获取文字,下划线,button
const button = document.querySelector('.button');
const span = document.querySelector('.span');
const underline = document.querySelector('.underline');
function borderShow(){
  // 如果下划线已经显示就修改为默认样式,如果下划线没显示,就显示下划线,并且把文字改为蓝色
  if (underline.style.transform === 'scaleX(1)') {
    underline.style.transform = 'scaleX(0)';
    span.style.color = 'black';
  }else{
    underline.style.transform = 'scaleX(1)';
    span.style.color = 'blue';
  }
}
button.addEventListener('click', borderShow);//添加click事件监听
