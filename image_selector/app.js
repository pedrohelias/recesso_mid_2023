const images = [
    {
        id: 1,
        img: "images/aer-28-baral-chief-of-compliance.jpg",
    },
    {
        id: 2,
        img: "images/ltr-19-gandalf-the-white.jpg",
    },
    {
        id: 3,
        img: "images/ltr-207-gandalf-the-grey.jpg",
    },
];

const newImage = document.getElementById("image-selected");
let leftBut = document.querySelector(".butLeft");
let rightBut = document.querySelector(".butRight");

let counter = 0;


leftBut.addEventListener("click", function(){
    counter--
    //console.log(counter)
    if(counter < 0){
        counter = 2;
    }
    newImage.src = images[counter].img
})

rightBut.addEventListener('click', function(){
    counter++
    //console.log(counter)
    if(counter > images.length-1){
        counter = 0;
    }
    newImage.src = images[counter].img
})


