const link = 'https://gahinathmadake.github.io/JavaScript-Projects/';

// function which stops the scrolling of background
function preventScroll(e){
    e.preventDefault();
    return false;
}

// Button click using Js
let shareButtons = document.querySelectorAll('.btns button');
let spanButtons = document.querySelectorAll('.btnI span');

shareButtons[0].addEventListener('click',()=>{
    document.querySelector('.heading .paraHeading').innerHTML = "Share My Profile";
    document.querySelector('.paraIcon p').innerHTML = "share this via";
    document.querySelector('.paraIcon i').style.visibility = 'visible';
    

    spanButtons[0].classList.add('fa-whatsapp');
    spanButtons[1].classList.add('fa-instagram');
    spanButtons[2].classList.add('fa-twitter');
    spanButtons[3].classList.add('fa-linkedin');
    spanButtons[4].classList.add('fa-facebook');

    spanButtons[0].href=`whatsapp://send?text=${link}`;
    spanButtons[1].href=``;
    spanButtons[2].href="";
    spanButtons[3].href=`https://www.linkedin.com/sharing/share-offsite/?u=${link}`;
    spanButtons[4].href="https://www.facebook.com/sharer/sharer.php?u=http//xxxxxxxxx.co.uk/index.html/";

    let modal = document.querySelector('.shareFollow');
    modal.classList.add('active');

    // Disable scrolling of the page
    document.querySelector('#wrapper').addEventListener('wheel', preventScroll, {passive: false});
});

shareButtons[1].addEventListener('click',()=>{
    let myProfile = 'https://www.linkedin.com/in/gahinath-madake-28517b2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    open(myProfile);
});




// Opening Icons button Links
function openLink(btn){
    console.log(btn);
    open(btn.href);
}
spanButtons[0].addEventListener('click',()=>openLink(spanButtons[0]));
spanButtons[1].addEventListener('click',()=>{
    navigator.clipboard.writeText(`${link}`);
    alert('Link is copied. This API has some problems, We will fix it very soon');
});
spanButtons[2].addEventListener('click',()=>{
    navigator.clipboard.writeText(`${link}`);
    alert('Link is copied. This API has some problems, We will fix it very soon');
});
spanButtons[3].addEventListener('click',()=>openLink(spanButtons[3]));
spanButtons[4].addEventListener('click',()=>openLink(spanButtons[4]));


let clickIcon = document.querySelector('.paraIcon i');
clickIcon.addEventListener('click',()=>{
    navigator.clipboard.writeText(`${link}`);
    alert('Link is Coppied, you are free to share it.');
});



// Removing The Modal from screen
let overlay = document.querySelector('.overlay');
let crossSign = document.querySelector('.heading #cross');
overlay.addEventListener('click',removeModal);
crossSign.addEventListener('click',removeModal);

function removeModal(){
    let modal = document.querySelector('.shareFollow');
    modal.classList.remove('active');
    // Disable scrolling of the page
    document.querySelector('#wrapper').removeEventListener('wheel', preventScroll, {passive: false});
}




// Play video using js
let boxes = document.querySelectorAll('.projectBox');

boxes.forEach(box =>{
    let Division =new String(box.id);
    let video = document.querySelector(`#${Division} video`);

    box.addEventListener('mouseover', ()=>{
    video.play();
    video.loop = Infinity;
    });

    box.addEventListener('mouseout', ()=>{
        video.pause();
    });
});


