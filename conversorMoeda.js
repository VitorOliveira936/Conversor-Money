

const button = document.getElementsByTagName("button");
const input = document.getElementById("valor");
const moOne = document.getElementById("money1");
const moTwo = document.getElementById("money2");
const image = document.getElementById("coin2");
const select = document.getElementById("para");
const text2 = document.getElementById("text2");


function onClick() {
        const valor = input.value;
        moOne.innerHTML = `R$ ${valor}`;
        const valor2 = input.value/5.14;
        moTwo.innerHTML = `RS$ ${valor2.toFixed(2)}`;

        select.addEventListener('change', function(){
            if (select.value == "€ Euro") {
            const valor3 = input.value/5.54;
            moTwo.innerHTML = `€ ${valor3.toFixed(2)}` ;
            image.src = "./Assets/euro.png";
            text2.innerHTML = "Euro";
                
        } else if (select.value == "£ Libra") {
            const valor4 = input.value/6.44;
            moTwo.innerHTML = `£ ${valor4.toFixed(2)}`;
            image.src = "./Assets/libra 1.png";
            text2.innerHTML = "Libra";
    
        } else if (select.value == "Bitcoin") {
            const valor5 = input.value/324687.25;
            moTwo.innerHTML = valor5.toFixed(2);
            image.src = "./Assets/bitcoin 1.png";
            text2.innerHTML = "Bitcoin";

        } else if (select.value == "RS$ Dolar Americano") {
            moOne.innerHTML = `R$ ${valor}`;
            moTwo.innerHTML = `RS$ ${valor2.toFixed(2)}`;
            image.src = "./Assets/estados-unidos.png";
            text2.innerHTML = "Dolar Americano";
        }
    })
}   


