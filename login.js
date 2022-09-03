const userNameInput=document.querySelector(".userNameInput");

const passwordInput=document.querySelector(".passwordInput");

const userNameMsg=document.querySelector(".userNameMsg");

const userPasswordMsg=document.querySelector(".passwordMsg");

const siginMsg=document.querySelector(".singinStatus");

const singinBtn=document.querySelector(".loginButton");

singinBtn.addEventListener("click",sigIn);

function sigIn(event){
    event.preventDefault();
    userNameMsg.innerHTML="";
    userPasswordMsg.innerHTML="";
    const userNameValue=userNameInput.value;
    const passwordValue=passwordInput.value;

    let ifSendData=true;

    if(userNameValue.length===0 || userNameValue.indexOf("@")===-1||userNameValue.indexOf(".")===-1){
        userNameMsg.innerHTML="ایمیل خود را وارد کنید"
        ifSendData=false
    }

    if(passwordValue.length===0){
        userPasswordMsg.innerHTML="پسورد را وارد کنید"
        ifSendData=false
    } else if(passwordValue.length<6){
        userPasswordMsg.innerHTML='پسورد نباید کمتر از 6 کارکتر باشد'
        ifSendData=false
    }

    if(ifSendData){
        const body=JSON.stringify({
            userName:userNameValue,
            password:passwordValue,
        })
        const headears={
            "Content-type":"application/json"
        }
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:body,
            headers:headears
        })
        .then(response=>{
            if(response.ok){
                siginMsg.innerHTML="عملیات موفقیت آمیز بود"
            }
        })
    }

}