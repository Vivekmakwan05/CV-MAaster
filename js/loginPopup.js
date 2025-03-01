document.querySelector("#show-login")
    .addEventListener("click", function () {
        document.querySelector(".form-container").classList.add("active");
        document.querySelector(".popup").style.display = "flex";
    });
document.querySelector(".popup .close-btn")
    .addEventListener("click", function () {
        document.querySelector(".form-container").classList.remove("active");
        document.querySelector(".popup").style.display = "none";
    });
    

    document.addEventListener("DOMContentLoaded", function (event) {
        event.preventDefault();
        const formContainer = document.getElementById("main");
        const title = document.getElementById("title");
        const name = document.getElementById('name');
        const buttonSignup = document.getElementById('Signup');
        const buttonLogin = document.getElementById("login");
        const toggleText = document.querySelector(".toggle");
        const closeBtn = document.querySelector(".close-btn");
    
        let isLogin = false;
    
        function toggleForm() {
            isLogin = !isLogin;
            if (isLogin) {
                title.textContent = "Login";
                name.style.display = "none";
                toggleText.textContent = "Don't have an account? Sign Up";
                buttonSignup.style.display = 'none';
                buttonLogin.style.display = 'block';
            } else {
                title.textContent = "Sign Up";
                toggleText.textContent = "Already have an account? Login";
                name.style.display = "block";
                buttonSignup.style.display = 'block';
                buttonLogin.style.display = 'none';
            }
        }
    
        toggleText.addEventListener("click", toggleForm);
    
        closeBtn.addEventListener("click", function () {
            formContainer.classList.remove("active");
        });
    
        function showPopup() {
            formContainer.classList.add("active");
        }
        document.getElementById("openFormBtn")?.addEventListener("click", showPopup);
    });
    
