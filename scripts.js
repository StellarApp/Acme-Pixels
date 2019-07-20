let rowNo = 3;
let colNo = 3;

/* 
outer array points to the same new Array
const grid = (new Array(rowNo)).fill(new Array(colNo).fill(''));
*/

const grid = (new Array(rowNo)).fill().map(row => {
    return (new Array(colNo)).fill('');
});

const canvas = document.querySelector('#grid');

/* actions */
const addRow = document.querySelector('#addRow');
const rmRow = document.querySelector('#rmRow');
const addCol = document.querySelector('#addCol');
const rmCol = document.querySelector('#rmCol');

addRow.addEventListener('click', () => {
    rowNo += 1;
    grid.push(new Array(colNo).fill(''));
    renderGrid();
})

rmRow.addEventListener('click', () => {
    
    if(rowNo > 1){
        rowNo -= 1;
        grid.pop();
        renderGrid();
    } else {
        alert ("At least one row is required")
    }
    
})

addCol.addEventListener('click', () => {
    colNo += 1;
    grid.map(row =>  row.push(new Array(colNo).fill('')));
    renderGrid();

})

rmCol.addEventListener('click', () => {
    
    if(colNo >1){
        colNo -= 1;
        grid.map(row => row.pop());
        renderGrid();
    } else {
        alert("At least one column is required")
    }
    
})

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
            return `<div class="${cell}"></div>`
        }).join('')}</div>`
    }).join('')
    canvas.innerHTML = render
    document.querySelectorAll('.row').forEach((row, rowIndex) => {
        row.querySelectorAll('div').forEach((cell, cellIndex) => {
            cell.addEventListener('click', (ev) => {
                let currentClass = ev.target.className;
                console.log('before', {rowIndex, cellIndex, grid})
                if(currentClass === selectedColor){
                    cell.classList.remove(selectedColor);
                    grid[rowIndex][cellIndex] = ""
                } else {
                    cell.className = selectedColor;
                    grid[rowIndex][cellIndex] = selectedColor
                }
                console.log('after', {rowIndex, cellIndex, grid})
            })
        })
    })
}
renderGrid()