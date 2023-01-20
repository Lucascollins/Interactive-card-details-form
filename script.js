"use strict"

window.addEventListener('load',()=>{
    //inputs
    const card_name = document.getElementById("card_name")
    const card_number = document.getElementById("card_number")
    const mm = document.getElementById("mm")
    const yy = document.getElementById("yy")
    const cvc = document.getElementById("cvc")
    const form =document.getElementById("form")
    const form_inputs = document.getElementById("form_inputs")
    const congratulations  = document.getElementById('congratulations')

    //insert
    const cardNUMBER = document.getElementById("CARD-NUMBER-INSERT")
    const cardNAME = document.getElementById("NAME-INSERT") 
    const cardMM = document.getElementById("MM-INSERT")
    const cardYY = document.getElementById("YY-INSERT")
    const cardCVC= document.getElementById("CVC-INSERT")
    
   //regex
   const name_regex = /^[a-zA-Z ]+$/
   const number_regex = /^\d+$/;

   //error-message
   const name_error = document.getElementById("error-name")
   const number_error = document.getElementById("error-number")
   const mm_error = document.getElementById("error-mm")
   const yy_error = document.getElementById("error-yy")
   const cvc_error = document.getElementById("error-cvc")

    //INPUTS EVENTS
    card_name.addEventListener('click',(e)=>{
        cardNAME.innerText = ""
        card_name.addEventListener('keyup',(e)=>{
            cardNAME.innerText = card_name.value          
        })
    })
    card_number.addEventListener('click',(e)=>{
        cardNUMBER.innerText = ""
        card_number.addEventListener('keyup',(e)=>{
            var result = "";
            var source = card_number.value.replace(/\s/g, '');
            for (var i = 0; i < source.length; i++) {
                if (i % 4 == 0 && i != 0) {
                    result += " ";
            }
                result += source[i];
            }
            cardNUMBER.innerText = result
            
        }) 
    })
    mm.addEventListener('click',(e)=>{
        cardMM.innerText = ""
        mm.addEventListener('keyup',(e)=>{
            cardMM.innerText = mm.value
        }) 
    })
    yy.addEventListener('click',(e)=>{
        cardYY.innerText = ""
        yy.addEventListener('keyup',(e)=>{
            cardYY.innerText = yy.value
        }) 
    })
    cvc.addEventListener('click',(e)=>{
        cardCVC.innerText = ""
        cvc.addEventListener('keyup',(e)=>{
            cardCVC.innerText = cvc.value
        }) 
    })

    


    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        let name_value;
        let number_value;
        let mm_value;
        let yy_value;
        let cvc_value;


        let name_test = name_regex.test(card_name.value)
        let number_test = number_regex.test(card_number.value)


        if(card_name.value != undefined){
            name_error.style.display = "flex"
            name_error.style.color = "red"
            if(name_test == true){
                name_error.style.color = "hsl(134, 84%, 55%)"
                name_error.innerText ="True"
                name_value = 1
            }
        }
        if(card_number.value != undefined ){
            number_error.style.display = "flex"
            number_error.style.color = "red"
            if(number_test == true && card_number.value.length == 16){
                number_error.style.color = "hsl(134, 84%, 55%)"
                number_error.innerText ="True"
                number_value = 1
            }else if(number_test == false && card_number.value.length >= 1){
                number_error.style.color = "red"
                number_error.innerText ="Wrong format, numbers only."
            }
         }
        if(mm.value != undefined ){
            mm_error.style.display = "flex"
            mm_error.style.color = "red"
            if(mm.value.length == 2 && mm.value <= 12){
                mm_error.style.color = "hsl(134, 84%, 55%)"
                mm_error.innerText ="True"
                mm_value = 1
            }
         }
        if(yy.value != undefined ){
            yy_error.style.display = "flex"
            yy_error.style.color = "red"
            if(yy.value.length == 2){
                yy_error.style.color = "hsl(134, 84%, 55%)"
                yy_error.innerText ="True"
                yy_value = 1
            }
         }
        if(cvc.value != undefined ){
            cvc_error.style.display = "flex"
            cvc_error.style.color = "red"
            if(cvc.value.length == 3){
                cvc_error.style.color = "hsl(134, 84%, 55%)"
                cvc_error.innerText ="True"
                cvc_value = 1
            }
         }
        
        if(name_value == 1 && number_value == 1 && cvc_value == 1 && mm_value == 1 && yy_value == 1){
            displayNone(form_inputs)
            congratulations.style.display = "flex"
        }
       
         
        
    

        
    })
    
    function displayNone(e){
        e.style.display = "none"
    }

})