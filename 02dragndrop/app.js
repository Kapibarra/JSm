const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart )
item.addEventListener('dragend' ,dragend )

for (const placeholder of placeholders) {
    console.log(placeholder)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
console.log('drag start', event.target);
event.target.classList.add('hold')
setTimeout(() => event.target.classList.add('hide') , 0 )
}

function dragend(event) {
    console.log('drag end');
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {

}
function dragenter(event) {

}
function dragleave(event) {

}
function dragdrop(event) {

}