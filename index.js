function sentMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

const serviceID = "service_7zec4xt";
const templteID = "template_5ze6yde";

emailjs
.send(serviceID,templteID,params)
.then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent seccussfully");  
    })
.catch((err) => console.log(err));
}