const btnLogin = document.getElementById("BTN_LOGIN")

const etxEmail = document.getElementById("ETX_EMAIL")
const etxPassword = document.getElementById("ETX_PASSWORD")

btnLogin.addEventListener("click", (e) => {

    fetch("http://localhost:3000/user/token", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
            email:etxEmail.value,
            password:etxPassword.value
        })
    }).then(rawResponse=>rawResponse.json()).then(response=>console.log(response)).catch(e=>console.log(e))

})