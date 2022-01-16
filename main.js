let form = document.querySelector('.js-form'),
    forminput = document.querySelectorAll('.js-in'),
    mailinput = document.querySelector('.js-in-email'),
    nameinput = document.querySelector('.js-in-name'),
    snameinput = document.querySelector('.js-in-sname'),
    temainput = document.querySelector('.js-in-tema'),
    span = document.querySelectorAll('.span');


function validateEmail(email){
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

function validateName(name){
    let reg = /^[a-zA-Z\s]{2,20}$/;
    return reg.test(String(name).toLowerCase());
}

function validateSname(sName){
    let reg = /^[a-zA-Z\s]{2,20}$/;
    return reg.test(String(sName).toLowerCase());
}


form.onsubmit = function () {
    let emptyinput = Array.from(forminput).filter(input => input.value === ''),
        emailval = mailinput.value,
        phone = document.getElementById('phone').value,
        nameval = nameinput.value,
        snameval = snameinput.value,
        Temaval = temainput.value,
        quantity = document.getElementById('quantity').value;


    forminput.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('is-invalid');
            document.getElementById("notation-tm").style.color = "brown";
            document.getElementById("notation-tm").innerHTML = "Please, fill Inputs";
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            document.getElementById("notation-tm").innerHTML = "";
        }
    })

    if (emptyinput.length !== 0){
        // console.log('inputs not field')
        valid(forminput, span, 'Заполните форму')
        return false;
    }

    //
    // if (!validatephone(phoneval)){
    //     phoneinput.classList.add('is-invalid');
    //     return false;
    // }else {
    //     phoneinput.classList.remove('is-invalid');
    //     phoneinput.classList.add('is-valid');
    // }

    if (!validateName(nameval)){
        document.getElementById("notation-name").style.color = "brown";
        document.getElementById("notation-name").innerHTML = "Please, enter 2-20 characters";
        nameinput.classList.add('is-invalid');
        return false;
    }else {
        nameinput.classList.remove('is-invalid');
        nameinput.classList.add('is-valid');
        document.getElementById("notation-name").innerHTML = ""
    }

    if (!validateSname(snameval)){
        document.getElementById("notation-sname").style.color = "brown";
        document.getElementById("notation-sname").innerHTML = "Please, enter 2-20 characters";
        snameinput.classList.add('is-invalid');
        return false;
    }else {
        snameinput.classList.remove('is-invalid');
        snameinput.classList.add('is-valid');
        document.getElementById("notation-sname").innerHTML = ""
    }

    if (!validateEmail(emailval)){
        document.getElementById("notation-em").style.color = "brown";
        document.getElementById("notation-em").innerHTML = "Enter correct Email";
        mailinput.classList.add('is-invalid');
        return false;
    }else {
        mailinput.classList.remove('is-invalid');
        mailinput.classList.add('is-valid');
        document.getElementById("notation-em").innerHTML = ""
    }

    if (!validateTema(Temaval)){
        document.getElementById("notation-tm").style.color = "brown";
        document.getElementById("notation-tm").innerHTML = "Please, enter 3-50 characters";
        temainput.classList.add('is-invalid');
        return false;
    }else {
        temainput.classList.remove('is-invalid');
        temainput.classList.add('is-valid');
        document.getElementById("notation-tm").innerHTML = ""
    }

    function valid(form, el, mess){
        el.innerHTML = mess;
    }


    if ((validateSname(snameval)) != false && (validateName(nameval)) != false && (validateEmail(emailval)) != false && quantity != "" && (validateTema(Temaval)) != false && phone != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "<h4>Information about your order</br><br>";
        document.getElementById("summary").innerHTML += "Hello, " + nameval + " " + snameval + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p>Email: " + emailval + "</br>";
        document.getElementById("summary").innerHTML += "<p>Phone number: " + phone + "</br>";
        document.getElementById("summary").innerHTML += "Number of licenses: " + quantity + "</br>";
        document.getElementById("summary").innerHTML += "<p>Your brief description of the company: " + Temaval + "</br>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services </p>";
    } else {
        return false;
    }

    return false;
}