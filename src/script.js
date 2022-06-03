const top_btn=document.getElementById('top-btn');
window.onscroll=function(){scroll()};
function scroll(){
    if(document.documentElement.scrollTop>400){
        top_btn.style.display='block';
    }
    else{
        top_btn.style.display='none';
    }
}
setTimeout(()=>{
    document.querySelector('.sample').style.display='none'
},2000)