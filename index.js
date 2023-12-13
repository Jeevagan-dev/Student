let menu = document.getElementsByClassName("menu");
let list = document.getElementsByTagName('ul')[0];

menu[0].addEventListener('click',function(){
    
    list.classList.toggle('show');

});

let listItems = document.getElementsByClassName('list');

for(let i=0 ; i<listItems.length;i++){
    listItems[i].addEventListener('click',function(){
        list.classList.remove('show');
    })
}

let dropItem = document.getElementsByClassName('drop');

for(let i=0 ; i<dropItem.length;i++){
    dropItem[i].addEventListener('click',function(){
        list.classList.remove('show');
    })
}