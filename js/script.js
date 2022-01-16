let crossToClose = document.querySelector(".btn-close-calc"),
    windowCalc = document.querySelector(".block-calc"),
    buttonToOpen = document.querySelector(".calc-button");

crossToClose.addEventListener("click", function () {
    windowCalc.classList.remove("show");
});

buttonToOpen.addEventListener("click", function(){
    windowCalc.classList.add("show");
});

const valueRange0 = document.getElementById('output0'),
      valueRange1 = document.getElementById('output1'),
      valueRange2 = document.getElementById('output2'),
      valueRange3 = document.getElementById('output3');

let rangeValueRoyalty = document.getElementById('range0'),
      rangeMainRedactor = document.getElementById('range1'),
      rangeJоournalist = document.getElementById('range2'),
      rangeСorrespondent = document.getElementById('range3');

let totalCost = document.getElementById('full-cost');

const inputsRange = document.querySelectorAll('.input-range');

const checkBtns = document.querySelectorAll('.block-filter__checkbox-input');
const showValue = () =>{
    valueRange0.innerHTML = rangeValueRoyalty.value*1000;
    valueRange1.innerHTML = rangeMainRedactor.value*1000;
    valueRange2.innerHTML = rangeJоournalist.value*1000;
    valueRange3.innerHTML = rangeСorrespondent.value*1000;   
}

showValue();

       


for(let input of inputsRange){
    input.addEventListener('input', () => {
        showValue();
        totalPrice();
    })
}



let inputCheck0 = document.getElementById("input-check-0");
    inputCheck1 = document.getElementById("input-check-1");
    inputCheck2 = document.getElementById("input-check-2");
    inputCheck3 = document.getElementById("input-check-3");
    inputCheck4 = document.getElementById("input-check-4");
    inputCheck5 = document.getElementById("input-check-5");
    inputCheck6 = document.getElementById("input-check-6");
    inputCheck7 = document.getElementById("input-check-7");
    inputCheck8 = document.getElementById("input-check-8");
    inputCheck9 = document.getElementById("input-check-9");
    inputCheck10 = document.getElementById("input-check-10");

    let royalty,
        findJournalist,
        mainRedactor,
        journalist,
        correspondent,
        disigner,
        seoSite,
        referalTrafic,
        socialTrafic,
        mainSiteTrafic,
        checkUniqueText;

const totalPrice = () =>{
    /*First checkbox*/
    if (inputCheck0.checked) {
        rangeValueRoyalty.removeAttribute('disabled');
        royalty = 5000;
    }else{
        rangeValueRoyalty.setAttribute('disabled', 'disabled'); 
        royalty = 0;
        rangeValueRoyalty.value = 0;
        valueRange0.innerHTML = 0;
    }
    /*Second checkbox*/
    if (inputCheck1.checked) {
        findJournalist = 10000;        
    }else{
        findJournalist = 0;
    }
    /*Third checkbox*/
    if (inputCheck2.checked) {
        rangeMainRedactor.removeAttribute('disabled');
        mainRedactor = 15000;
    }else {
        rangeMainRedactor.setAttribute('disabled', 'disabled'); 
        mainRedactor = 0;
        rangeMainRedactor.value = 0;
        valueRange1.innerHTML = 0;
    }
    /*4-th checkbox*/
    if (inputCheck3.checked) {
        rangeJоournalist.removeAttribute('disabled');
        journalist = 10000; 
    }else {
        rangeJоournalist.setAttribute('disabled', 'disabled'); 
        journalist = 0;
        rangeJоournalist.value = 0;
        valueRange2.innerHTML = 0;
    }
    /*5-th checkbox*/
    if (inputCheck4.checked) {
        rangeСorrespondent.removeAttribute('disabled');
        correspondent = 10000;
    }else {
        rangeСorrespondent.setAttribute('disabled', 'disabled'); 
        correspondent = 0;
        rangeСorrespondent.value = 0;
        valueRange3.innerHTML = 0;
    }
     /*6-th checkbox*/
     if (inputCheck5.checked) {
        disigner = 500;        
    }else{
        disigner = 0;
    }
     /*7-th checkbox*/
     if (inputCheck6.checked) {
        seoSite = 15000;        
    }else{
        seoSite = 0;
    }
     /*8-th checkbox*/
     if (inputCheck7.checked) {
        referalTrafic = 1200;        
    }else{
        referalTrafic = 0;
    }
     /*9-th checkbox*/
     if (inputCheck8.checked) {
        socialTrafic = 15000;        
    }else{
        socialTrafic = 0;
    }
     /*10-th checkbox*/
    if (inputCheck9.checked) {
        mainSiteTrafic = 1000;        
    }else{
        mainSiteTrafic = 0;
    }
     /*11-th checkbox*/
    if (inputCheck10.checked) {
        checkUniqueText = 2000;        
    }else{
        checkUniqueText = 0;
    }
    totalCost.innerHTML = (royalty + (rangeValueRoyalty.value*45)) + findJournalist
                        + ((rangeMainRedactor.value*15) + mainRedactor)
                        + ((rangeJоournalist.value*8)+ journalist)
                        +  ((rangeСorrespondent.value*10) + correspondent)
                          +disigner
                          +seoSite
                          +referalTrafic
                          +socialTrafic
                          +mainSiteTrafic
                          +checkUniqueText;
                          
}

