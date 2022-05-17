var isDark = false;



async function getLogInInfo(e) {

    console.log("In frontend login method >>> ");

    e.preventDefault();

    const userEmail = document.getElementById('LogInEmail').value;
    const userPass = document.getElementById('LogInPassword').value;

    console.log('LogIn details', userEmail, userPass);

    try {
        const res = await axios.post("http://localhost:3000/login", {
            "email": userEmail,
            "password": userPass
        });

        // console.log('loginData >>> ' , res.data.token);

        if (res.status === 200) {
            localStorage.setItem("authToken", res.data.token);
            location.href = "./homepage.html";
        } else if (res.status === 401) {
            alert("Invalid Credentials");
        } else if (res.status === 404) {
            alert("User not found");
        } else {
            console.log(res);
        }


    } catch (err) {
        // alert(`${resMessage}`);
        alert("Invalid Credentials")
            // console.log(err);
    }


}


async function getSignUpInfo(e) {

    console.log("getting frontend signup >>> ");

    e.preventDefault();
    const userName = document.getElementById('signupUserName').value;
    const userEmail = document.getElementById('signupEmail').value;
    const userPhNo = document.getElementById('signupUserPhNo').value;
    const userPassword = document.getElementById('signupPassword').value;

    console.log('signup details', userName, userEmail, userPhNo, userPassword);

    try {
        const res = await axios.post("http://localhost:3000/signup", {
            "name": userName,
            "email": userEmail,
            "phoneno": userPhNo,
            "password": userPassword
        });

        console.log('res from backend ', res);
        console.log('res from backend ', res.status);

        if (res.status === 200) {
            alert("user created successfulyy");
        } else if (res.status === 400) {
            alert("Invalid credentials!");
        } else {
            console.log(res);
        }

    } catch (e) {
        alert("User already exists")
    }

}

function resetPassword() {
    location.href = './resetPassWord.html';
}


var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup() {
    x.style.display = "none";
    y.style.display = "block";
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.display = "block";
    y.style.display = "none";
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}