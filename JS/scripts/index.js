let bagItems;

onLoad();

function onLoad(){
    // localStorage.clear();
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems= bagItemsStr?JSON.parse(bagItemsStr):[];
    displayItemsOnHomepage();
    displayBagIcon();
}



function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}


function displayBagIcon(){
    let bagItemCntElement=document.querySelector('.bagItemCnt')
    
    if(bagItems.length>0){
        bagItemCntElement.innerHTML=bagItems.length;
        bagItemCntElement.style.visibility='visible';
    }
    else{
        bagItemCntElement.style.visibility= 'hidden';
    }
}

function displayItemsOnHomepage(){
    
    let itemsContainerElement=document.querySelector('.items-container')
    if(!itemsContainerElement)return;
    let innerHTML=""

    items.forEach((item)=>{

        innerHTML+=`

        <div class="item-container">
        
            <a href=""><img class="item-image" src=${item.image}></a>
        
            <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
        
            <div class="company-name">${item.company}</div>
        
            <div class="item-name">${item.item_name}</div>
        
            <div class="price">
                <span class="current-price">Rs.${item.current_price}</span>
                <span class="original-price">Rs. ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
        
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        
        </div>
        `
       
    })
    itemsContainerElement.innerHTML=innerHTML;
}
