/* for contactpage form validation*/

const form=document.getElementById("form");

const username=document.getElementById("name");
const email=document.getElementById("email");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    if(usernameValue==''){
        setErrorFor(username,'Please fill your name');
    }
    else{
         setSuccessFor(username);
    }
    if(emailValue==''){
        setErrorFor(email,'Please fill your email');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'Not a valid email')
    }
    else{
         setSuccessFor(email);
    }

}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';

}

