const item = document.querySelector('.item')

item.addEventListener('dragstart',dragstart )
item.addEventListener('dragend' ,dragend )

function dragstart(event) {
console.log('drag start', event.target);
event.target.classList.add('hold')
event.target.classList.add('hide')
}

function dragend() {
    console.log('drag end');
    event.target.classList.remove('hold')
}