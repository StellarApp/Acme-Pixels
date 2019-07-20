let rowNo = 3;
let colNo = 3;
const grid = (new Array(rowNo)).fill(new Array(colNo).fill(''));
const canvas = document.querySelector('#grid');

/* colors */
const colorSelectors = document.querySelectorAll('#colors > div')
let selectedColor = 'fireBrick';

colorSelectors.forEach(selector => {
    selector.addEventListener('click', (ev) => {
        selectedColor = ev.target.className
        colorSelectors.forEach(unselected => {
            unselected.classList.remove('selected')
        })
        selector.classList.add('selected')
    })
})

/* canvas */
const renderGrid = () => {
    const render = grid.map(row => {
        return `<div class="row">${row.map(cell => {
            return `<div class="cell">${cell}</div>`
        }).join('')}</div>`
    }).join('')
    canvas.innerHTML = render
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle(selectedColor)
        })
    })
}
renderGrid()