let storeToDos = [];
 document.getElementById('todoForm').addEventListener('submit',function(e){
    e.preventDefault();

    let container = document.getElementById('section2');
let message=document.getElementById('todoMessage').value;
let text = document.createElement('p');
    text.textContent = message
    text.id='message'
storeToDos.push(message)
container.appendChild(text)
let deleteBtn = document.createElement('button');
deleteBtn.textContent =`Delete`;
deleteBtn.id= 'delete'
text.insertAdjacentElement('beforeEnd',deleteBtn)
deleteBtn.addEventListener('click',function (e){
    e.preventDefault()
let messageIndex =storeToDos.indexOf(message);
if(messageIndex>-1){
storeToDos.splice(messageIndex,1)}
 text.remove()

})
}

)

