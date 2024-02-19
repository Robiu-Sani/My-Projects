const seats = document.querySelectorAll(".seat");
const copenInput = document.getElementById("copenInput");
const setLeft = document.getElementById("setLeft");
const selectedSeat = document.getElementById("selectedSeat");
const totalPriceadd = document.getElementById("totalPriceadd");
const GrandTotal = document.getElementById("GrandTotal");
const getCopne = document.getElementById("getCopne");
const applyCopne = document.getElementById("applyCopne");
const NumberBox = document.getElementById("NumberBox");
const submit = document.getElementById("submit");
const Complite = document.getElementById("Complite");
const closes = document.getElementById("close");
const setnumber = document.getElementById("setnumber");
const fullBus = document.getElementById("fullBus")
const checkVawserSeat = document.getElementById("checkVawserSeat")


const coupon1 = 'NEW15'
const coupon2 = 'Couple 20';
let totalAmount = 0;
let GrandAmount = 0;
let seatCount = 0
let totalSet = 40;


setLeft.innerHTML= totalSet
submit.style.cursor = "no-drop";

NumberBox.addEventListener('input', () => {
    SubmitBtnWork();
})

closes.addEventListener('click', () => {
    Complite.classList.remove('active')
    window.location.reload()
})

applyCopne.addEventListener('click' , () => {
    OfferSystem();
})


seats.forEach(element => {
    element.addEventListener('click', () => {
        seatCount++
        totalAmount = seatCount * 550 
        const seatnumber = element.textContent
        const addSeat = `<div class="flex justify-between items-center p-2">
                                <small id="checkVawserSeat" class="text-black">${seatnumber}</small>
                                <small class="text-black">Economoy</small>
                                <small class="text-black">550</small>
                                </div>`
        if (seatCount <= 4 ) {
            if (element.classList.contains('bgActive')) {
                alert('You already select this seat')
                    seatCount--
                } else {
                    element.classList.add('bgActive')
                    selectedSeat.innerHTML += addSeat
                    totalPriceadd.innerText = totalAmount
                    GrandTotal.innerText = totalAmount
                    setnumber.innerText = seatCount
                    totalSet = totalSet - 1
                    setLeft.innerHTML= totalSet
                }
            } else {
                alert('You already select 4 seat. In our services , you can select only 4 seat. ')
        }
        (seatCount >= 4)? copenInput.classList.add('active') : ''
        SubmitBtnWork();
    });
}); 

submit.addEventListener('click', () => {
    if (NumberBox.value !== "" && seatCount !== 0) {
        Complite.classList.add('active');
    }else{
        alert('You must hove to fill the Your number box by your number')
    }
    
})


function OfferSystem(){
    if (getCopne.value == coupon1) {
        GrandTotal.innerText = parseInt((totalPriceadd.textContent / 100) * 85);
        copenInput.classList.remove('active');
    }else if (getCopne.value == coupon2){
        GrandTotal.innerText = parseInt((totalPriceadd.textContent / 100) * 80);
        copenInput.classList.remove('active');
    }else if(getCopne.value == "" || getCopne.value !== coupon1 || getCopne.value !== coupon2){
        alert("Please check your coupon Your coupon is not match as muth as we have?")
    }
    else {
        GrandTotal.innerText = totalAmount
    }
}


function SubmitBtnWork(){
    if (seatCount == 0) {
        alert('You have to select any Available seat')
        NumberBox.value = ""
    } else {
        if (NumberBox.value !== "" && seatCount !== 0) {
            submit.style.background = '#16a34a';
            submit.style.pointerEvents = "auto";
            submit.style.cursor = "pointer";
        }else{
            submit.style.background = 'gray';
            submit.style.cursor = "no-drop";
        }
    }
}
