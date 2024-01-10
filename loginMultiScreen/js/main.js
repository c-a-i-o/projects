// start code library jQuery //
$(document).ready(function () {



    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var next1 = document.getElementById("next1");
    var next2 = document.getElementById("next2");
    var back1 = document.getElementById("back1");
    var back2 = document.getElementById("back2");
    var progress = document.getElementById("progress");
    var submit = document.getElementById("submit")

    const user = "caio";
    const pass = "c";

    var userInput = document.getElementById("user");
    var passwordInput = document.getElementById("password");
    var confirmPassInput = document.getElementById("confirmpass");

    var result = {
        instagramInput: document.getElementById("instagram").value,
        githubInput: document.getElementById("github").value,
        twitterInput: document.getElementById("twitter").value,
        firstNameInput: document.getElementById("firstname").value,
        lastNameInput: document.getElementById("lastname").value,
        phoneInput: document.getElementById("phone").value
    };

    var loginError = document.getElementById("loginError");

    // variable with loading html code
    var load = '<span class="loader"></span>';

    // create this variable so you can later delete it
    var $loadElement;

    // get the reference from div #loading to delete 
    var deleteDiv = document.getElementById("loading");




    next1.onclick = function () {

        // function to validate login
        if (validateLogin(
            userInput.value,
            passwordInput.value,
            confirmPassInput.value)) {

            // put the load in the html and associate the variable
            $loadElement = $(load).appendTo("#loading");

            // css code for loading
            $("#loading").css({
                margin: 'auto',
                textAlign: 'center',
            });

            // set a timer to scroll through the page
            setTimeout(function () {

                // after the timer, delete the loading
                // $loadElement.remove();

                // delete everything inside div #loading
                if (deleteDiv) {
                    deleteDiv.innerHTML = '';
                }

                form1.style.left = "-450px";
                form2.style.left = "40px";
                progress.style.width = "240px";

                loginError.textContent = "";

                // timer
            }, 2500);

        } else {
            alert("- LOGIN ERROR -");
            loginError.textContent = "- LOGIN ERROR -";
        }
    }





    back1.onclick = function () {

        form1.style.left = "40px";
        form2.style.left = "450px";
        progress.style.width = "120px";
    }

    next2.onclick = function () {
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    }

    back2.onclick = function () {
        form2.style.left = "40px";
        form3.style.left = "450px";
        progress.style.width = "240px";
    }

    submit.onclick = function () {
        form3.style.top = "-400px";

        console.log(result);




        var resultContainer = $("<div class='showfinal'></div>");

        // Adicionar as informações do objeto result ao elemento div
        resultContainer.append("<h4>Instagram: " + result.instagramInput + "</h4>");
        resultContainer.append("<h4>Github: " + result.githubInput + "</h4>");
        resultContainer.append("<h4>Twitter: " + result.twitterInput + "</h4>");
        resultContainer.append("<h4>First Name: " + result.firstNameInput + "</h4>");
        resultContainer.append("<h4>Last Name: " + result.lastNameInput + "</h4>");
        resultContainer.append("<h4>Phone: " + result.phoneInput + "</h4>");

        setTimeout(() => {
            // Adicionar o elemento div à classe "container"
            $(".container").append(resultContainer);

        }, 1000);
    }













    // function to validate login, password and confirm password
    function validateLogin(userInput, passwordInput, confirmPassInput) {
        return userInput === user &&
            passwordInput === pass &&
            confirmPassInput === passwordInput;
    }

});