let mydiv = document.querySelector('.my-div');

document.addEventListener('mousemove',(e)=>{
    move(e);
})

const move = (e)=>{
    var x = e.pageX;
    var y = e.pageY;

    mydiv.style.left = x + 'px';//-70 
    mydiv.style.top = y + 'px'; //-100
}


