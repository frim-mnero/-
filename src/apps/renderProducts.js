const cardContainer = document.querySelector(".product__item_card");

getCard();
async function getCards(){
    console.log('work');
    const response = await fetch('../src/apps/products.json');
    console.log(response);

    const cardArray = await response.json();
    console.log(cardArray);

    renderCards(cardArray);
  
}

function renderCards(cardArray) {
    cardArray.forEach(function(element) {
        const cardHTML = `
                        <div class="product__item_card">
                                <img src="${element.image}" alt="" class="item_card-img">
                                <p class="item_card-title">Коммутатор Allied Telesyn AT-8124XL</p>
                                <div class="item_card-buy">
                                    <button class="item_card-btn">Забронировать</button>
                                    <p class="item_card-price">53 000 ₽</p>
                                </div>
                            </div>
                        `;
   
        
    cardContainer.insertAdjacentHTML('beforeend',cardHTML);
    });

}