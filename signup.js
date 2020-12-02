

  //get Dom elements 
  const domElements={
    submitButton: document.querySelector('.submit_button'),
    passWordInput:document.querySelector('.password'),
    domForm:document.querySelector('.container_form'),
    firstname:document.querySelector('.firstName'),
    lastname:document.querySelector('.lastName'),
    username:document.querySelector('.username'),
    school:document.querySelector('.school'),
    department:document.querySelector('.department'),
    emailInput:document.querySelector('.email')
  }



// helperFunction for pattern matching
const matchPattern= (str,pattern)=> pattern.test(str)

//helper function for diplaying error feedback
const displayError=(element,msg)=>{ 
    //update the text in the small tag
    element.parentNode.querySelector('small').innerHTML=msg
    //add the error class to the elements parent
    element.parentNode.classList.add('error')
 }

// helper function for removing error
const removeErrorMsg= element=>  element.parentNode.classList.remove('error')



// helper function for passwordVerification
 const validatePassword=()=>{
     //password value
   passwordValue=domElements.passWordInput.value.trim()
   //password validation
  if (passwordValue.length===0){
      displayError(domElements.passWordInput,'Password is required')
  }
  else if(passwordValue.length<8){
       displayError(domElements.passWordInput,"Password must be at least 6 charcters")

   }
   else{
     removeErrorMsg(domElements.passWordInput)
   }
}


// helper function for validating email

const validateEmail=()=>{
    //email regular expression
    const emailRegexp= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //email value
        const emailValue=domElements.emailInput.value.trim()

    //email validation
        if(emailValue==='' || !(matchPattern(emailValue,emailRegexp))){
            displayError(domElements.emailInput,"Please enter a valid mail address")
        }else{
            removeErrorMsg(domElements.emailInput)
        }
}



//helper function for validating other text fields
const validateField = (element)=>{
    const elementValue= element.value.trim()
    const labelValue = element.parentNode.querySelector('label').textContent
    if( elementValue.length === 0){
        displayError(element,`${labelValue} is required`)
    }
    else{
        removeErrorMsg(element)
    }
}






const validation= ()=>{
    //password verification
    validatePassword()

    //email verification 
    validateEmail()

    //validate other fields 
    validateField(domElements.firstname)
    validateField(domElements.lastname)
    validateField(domElements.username)
    validateField(domElements.school)
    validateField(domElements.department)


//add event listener to all fields to keep validating on input change
    domElements.domForm.addEventListener('keyup',(e)=>{
        if(e.target.matches('.password')){
            validatePassword()
        }
        if(e.target.matches('.email')){
            validateEmail()
        }
        if(e.target.matches('.firstName')){
        validateField(e.target)
    }
        if(e.target.matches('.lastName')){
        validateField(e.target)
    }
        if(e.target.matches('.username')){
        validateField(e.target)
    }
        if(e.target.matches('.school')){
        validateField(e.target)
    }
        if(e.target.matches('.department')){
        validateField(e.target)
    }
    })


}


domElements.domForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    validation()
})


