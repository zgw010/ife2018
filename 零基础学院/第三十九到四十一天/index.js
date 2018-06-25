const divABC=document.querySelector('#contABC');
const divDEF=document.querySelector('#contDEF');
const button = document.querySelectorAll('button')
console.log(window.location)
console.log(Array.from(window.location.search.slice(1).split("&")[0].split("=")[1]))
function render() {
  
  if(reqHash()===""){
    return
  }
  if(reqHash() in {A:"A",B:"B",C:"C"}){
    renderDiv(divABC);
    console.log("a")
  }else{
    renderDiv(divDEF);
    console.log("d")
  }
}
// history.pushState和history.replaceState都不会触发hashchange
// window.addEventListener("hashchange", render);
button.forEach((e) => {
  e.addEventListener("click", function () {
    history.replaceState({}, "页面标题", "#"+e.innerHTML);// = e.innerHTML;
    render()
  });
})
render();
function renderDiv(div){
  div.innerHTML=reqHash();
}
function reqHash(){
  return window.location.hash.slice(1);
}