// Selecionar itens

var menuItem = document.querySelectorAll('.item-menu')

function select() 
{
    menuItem.forEach((item)=>
        item.classList.remove('on')
    )
    this.classList.add('on')
}

menuItem.forEach((item)=>
    item.addEventListener('click', select)
)

// Expandir itens 

var sideExp = document.querySelector('#btn-exp')
var sideMenu = document.querySelector('.nav-side')

sideExp.addEventListener('click', function()
{
    sideMenu.classList.toggle('expand')
})