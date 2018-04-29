const screens=document.querySelectorAll('.screen img');
const selects = document.querySelectorAll('.select img');
let i=1;
function addAnimation(){
  let index=this.getAttribute("index");//获取当前点击图片的 自定义属性index的值
  screens[index-1].style.zIndex = ++i;//点击后播放动画
  screens[index-1].classList.add('img'+index);
    
}
function deleteAnimation() {
  let index = this.className[6]; //获取当前点击图片的类名 的第六个字符串 例如加入类名是select1 img1  则会获取到1,这个跟上面的获取index起到的作用是一样的  
  screens[index-1].classList.toggle('img'+index);//动画播放结束后回复原始设置
}
selects.forEach(select => select.addEventListener('click', addAnimation));//给每个select图片添加点击事件监听
screens.forEach(select => select.addEventListener('animationend', deleteAnimation)); //给每个screen图片添加动画事件结束监听