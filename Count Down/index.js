const end = "20 March 2024 10:00PM";
document.querySelector('#timer h3').innerText = end;

function date(){
    let now = new Date();
    let future = new Date(2024,2,20,10,0,0);
    let diff = (future - now)/1000;

    if(diff<0)
    return;

    let time = document.querySelectorAll('#timer input');

    time[0].value = Math.floor(diff/(24*3600));
    time[1].value = Math.floor((diff/3600)%24);
    time[2].value = Math.floor((diff/60)%(60));
    time[3].value = Math.floor(diff % 60);
}

date();

setInterval(()=>{
    date();
},1000);
