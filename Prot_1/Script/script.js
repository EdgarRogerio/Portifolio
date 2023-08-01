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