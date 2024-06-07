const login=document.getElementById("login")
const login2=document.querySelector(".Log-In")
const signup=document.querySelector(".Sign-Up")
const popup1=document.querySelector(".popUpForm-SignIn")
const popup2=document.querySelector(".popUpForm-SignUp")
login.addEventListener("click",()=>{
    //console.log("Click")
    popup1.style.display="block"
    
})

login2.addEventListener("click",()=>{
    //console.log("Click")
    popup1.style.display="block"
    popup2.style.display="none"
    

})

signup.addEventListener("click",()=>{
    //console.log("Click")
    popup1.style.display="none"
    popup2.style.display="block"
    
    
})

