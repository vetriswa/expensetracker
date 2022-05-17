async function resetPassWord(event) {
    console.log("reset password clicked >>>> ");

    event.preventDefault();

    const form = document.getElementById('r-form');
    const formData = new FormData(form);

    const email = formData.get('email');

    console.log('email >> ', email);

    const res = await axios.get('http://localhost:3000/resetpassword');



}