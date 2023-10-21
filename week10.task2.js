function postMessage(){
    console.log('Я учу JavaScript!');
}
postMessage();


const image = document.getElementById('main__img');

function changePhoto(){
    image.src="./assets/images/cat-grey.jpg";
}

function changeNextPhoto(){
    image.src="./assets/images/cat-white.jpg"
}


function calculateTotalPrice(quantity=2,price=15000000){
    const result = quantity*price;
    return alert(`Стоимость покупки ${result.toLocaleString("ru-RU")} рублей`);
}


