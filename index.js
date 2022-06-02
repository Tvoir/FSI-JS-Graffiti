
// Select some elements...

let header = document.querySelector('#page-header');
header.style.textAlign ='left';

let dogPics = document.querySelectorAll('.dog-image');
for(let i = 0; i < dogPics.length; i++){
    dogPics[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i <dogName.length; i++){
dogName[i].style.textAlign ='left'
}

let footer = document.querySelector('.footer');
footer.style.color ='Blue';



