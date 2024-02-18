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
const coupon1 = 'NEW15'
const coupon2 = 'Couple 20';
let totalAmount = 0;
let GrandAmount = 0;
let seatCount = 0
let totalSet = 40;


setLeft.innerHTML= totalSet

submit.addEventListener('click', () => {
    Complite.classList.add('active');
})

closes.addEventListener('click', () => {
    Complite.classList.remove('active')
    window.location.reload();
})

NumberBox.addEventListener('change', () => {
    if (NumberBox !== '') {
        submit.classList.add('active');
        submit.classList.remove('hidden')
    }else{
        submit.classList.remove('active')
    }
})

applyCopne.addEventListener('click' , () => {
    if (getCopne.value == coupon1) {
        GrandTotal.innerText = parseInt((totalPriceadd.textContent / 100) * 85)
    }else if (getCopne.value == coupon2){
        GrandTotal.innerText = parseInt((totalPriceadd.textContent / 100) * 80)
    }else if(getCopne.value == "" || getCopne.value !== coupon1 || getCopne.value !== coupon2){
        alert("Please check your coupon Your coupon is not match as muth as we have?")
    }
    else {
        GrandTotal.innerText = totalAmount
    }
})


seats.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('bgActive')
        element.style.pointerEvents = "none";
        seatCount++
        totalSet = totalSet - 1
        totalAmount = seatCount * 550 
        setLeft.innerHTML= totalSet
        setnumber.innerText = seatCount
        const seatnumber = element.textContent
        totalPriceadd.innerText = totalAmount
        GrandTotal.innerText = totalAmount
        const addSeat = `<div class="flex justify-between items-center p-2">
                                <small class="text-black">${seatnumber}</small>
                                <small class="text-black">Economoy</small>
                                <small class="text-black">550</small>
                                </div>`
        selectedSeat.innerHTML += addSeat
        if (seatCount >= 4) {
            document.getElementById("fullBus").style.pointerEvents = "none";
            copenInput.classList.add('active');
        }
    });
}); 


