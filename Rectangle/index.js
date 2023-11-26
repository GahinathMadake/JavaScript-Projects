
let box = document.getElementById('middlediv');

console.log("Hello");

function execute(details){
    let boxposition = box.getBoundingClientRect();
    // console.log(boxposition);
    let inside = details.clientX - boxposition.left;
    // console.log(inside);



    if(inside < boxposition.width/2){
        let wc = (300-inside)*255/300;
        box.style.backgroundColor = 'rgb(' + wc + ',' + 0 + ',' + 0 + ')';
    }
    else if(inside > boxposition.width/2){
        let wc = (inside-300)*255/300;
        box.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + wc + ')';
    }
}
box.addEventListener('mousemove',execute);