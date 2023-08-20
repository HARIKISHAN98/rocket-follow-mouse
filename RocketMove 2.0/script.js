let rocket = document.querySelector('.rocket');

document.addEventListener('mousemove',(e)=>{
    move(e);
})

const move = (e)=>{

    //get x co-ordinate from the event object property pageX
    let x = e.pageX;
    //get y co-ordinate from the event object property pageY
    let y = e.pageY;


    //add x in px to style left
    rocket.style.left = x + 'px';
    rocket.style.top = y + 'px';
}











