const inputBox = document.getElementById('inputBox')
const ListContainer = document.getElementById('ListContainer')
document.getElementById('addTask').addEventListener('click',() => {
    if (inputBox.value === '') {
        window.alert(`you must write something!!`)
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        ListContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
})

ListContainer.addEventListener('click', ev => {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
        saveData()
    }
    else if(ev.target.tagName == 'SPAN'){
        ev.target.parentElement.remove()
        saveData()
    }
}, false)

let saveData = () => {
    localStorage.setItem('data', ListContainer.innerHTML)
}
let showTask = () => {
    ListContainer.innerHTML = localStorage.getItem('data')
}
showTask()