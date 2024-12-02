const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}
let h1 = document.querySelector('h1')
h1.innerHTML+= '<p>Hello Boys <button id="button"> Yess </button> </p> '
let newBox = document.createElement('p');
newBox.id = 'box';
newBox.innerHTML = `<div>
    <li class="list">This is a list</li>
    <li class="list">This is a list</li>
    <li class="list">This is a list</li>
    <li class="list">This is a list</li>
    <li class="list">This is a list</li>
</div>` 
h1.insertAdjacentElement('afterEnd',newBox);
let button = document.getElementById('button')
button.style.backgroundColor='yellow'
button.addEventListener('click', function (e){
    e.preventDefault();
    if(newBox.style.display=='none'){
        newBox.style.display='block'
    }else {
        newBox.style.display='none'

    }
})
let list = document.getElementsByClassName('list')
let count = 0 ;
  for(let each of list ){
    count++;
    each.style.backgroundColor= 'Green';
    each.style.marginTop='20px'
    each.textContent= `${count} A chicken example`
  }

