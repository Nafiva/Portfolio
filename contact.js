const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "58pt-vN643EFHjg-m";
const serviceID = "service_no14ipj";
const templateID = "template_wqo0nnj";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    submitBtn.innerText = "Just A Moment ....";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };


emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message sent Succesfully";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    })

    .catch((error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";

    });

    
}); 
