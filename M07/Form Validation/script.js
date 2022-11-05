function isValid() {
    if (firstName() && lastName() && userName() && password() && address() && city() && country() && zipCode() && comments() && email() && phone() && phone()
    )
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
}

/*-----------------------------FIRST--------------*/

FirstName.addEventListener('blur', firstName, false);
function firstName() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname === "null" || firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters")
    } else {
        validFirstname = true;
        console.log("First name valid")
    };

    //Code for the last Name 

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;


    //5) return status of each field
    return (validFirstname);
};


/*-------------------------Last Name----------------------------*/

LastName.addEventListener('blur', lastName, false);
function lastName() {
    //1) Create variable
    var validLastName = false;

    //2) read value from HTML
    var lastName = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastName === "null" || lastName === "" || lastName.length > 50) {
        errorMessages += "<p>The Last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
    } else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last Name  invalid — bad characters")
    } else {
        validLastName = true;
        console.log("Last Name valid")
    };


    //Code for the last Name 


    //4) Send error message to HTML

    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastName);
};


/*---------------------Email Validation ------------------------------------*/

Email.addEventListener('blur', email, false);
function email() {
    //1) Create variable
    var validEmail = false;
    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //2) read value from HTML
    var email = document.getElementById("Email").value;
    var errorMessages = "";

    //3) Do validation
    if (email === "null" || email === "" || !email.match(checkEmail)) {
        errorMessages += "<p>Your  email is required</p>";
        console.log(" invalid email ")
    }
    else {
        validEmail = true;
        console.log("valid email")
    };
    //4) Send error message to HTML

    document.getElementById("email").innerHTML = errorMessages;

    //5) return status of each field
    return (validEmail);
};



/*--------------------------PHONE VALIDATION---------------------------------*/

Phone.addEventListener('blur', phone, false);
function phone() {
    //1) Create variable
    var validPhone = false;

    //2) read value from HTML
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    //3) Do validation
    if (isNaN(phone) || phone === "null" || phone === "" || phone.length > 15) {
        errorMessages += "<p>Your phone is required , only numerical values and cannot be greater than 15 characters.</p>";
        console.log("phone invalid — length")
    }
    else {
        validPhone = true;
        console.log("valid phone")
    };
    //4) Send error message to HTML

    document.getElementById("phone").innerHTML = errorMessages;

    //5) return status of each field
    return (validPhone);
};



/*---------------------USERNAME----------------------------------*/

UserName.addEventListener('blur', userName, false);
function userName() {
    //1) Create variable
    var validUserName = false;

    //2) read value from HTML
    var userName = document.getElementById("UserName").value;
    var errorMessages = "";

    //3) Do validation
    if (userName === "null" || userName === "" || userName.length > 12) {
        errorMessages += "<p>Your Username is required and cannot be greater than 12 characters</p>";
        console.log("UserName invalid — length")
    } else if (userName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("UserName  invalid — bad characters")
    } else {
        validUserName = true;
        console.log("valid UserName")
    };


    //Code for the last Name 


    //4) Send error message to HTML

    document.getElementById("userName").innerHTML = errorMessages;

    //5) return status of each field
    return (validUserName);
};



/*---------------------Password----------------------------------*/

Password.addEventListener('blur', password, false);
function password() {
    //1) Create variable
    var validPassword = false;
    var checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/

    //2) read value from HTML
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    //3) Do validation
    if (!password.match(checkPassword) || password.length > 7) {
        errorMessages += "<p>Your Password requires 1 upper-case, 1 lower-case, 1 numeric or more, 1 special character and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length")
    }
    else {
        validPassword = true;
        console.log("valid Password")
    };
    //4) Send error message to HTML

    document.getElementById("password").innerHTML = errorMessages;

    //5) return status of each field
    return (validPassword);
};

/*-----------------------Address---------------------------------------*/

Address.addEventListener('blur', address, false);
function address() {
    //1) Create variable
    var validAddress = false;

    //2) read value from HTML
    var address = document.getElementById("Address").value;
    var errorMessages = "";

    //3) Do validation
    if (address === "null" || address === "") {
        errorMessages += "<p>Your Address is required.</p>";

    } else {
        validAddress = true;
        console.log("valid Address")
    };
    //4) Send error message to HTML

    document.getElementById("address").innerHTML = errorMessages;

    //5) return status of each field
    return (validAddress);
};



/*-----------------------City---------------------------------------*/

City.addEventListener('blur', city, false);
function city() {
    //1) Create variable
    var validCity = false;

    //2) read value from HTML
    var city = document.getElementById("City").value;
    var errorMessages = "";

    //3) Do validation
    if (city === "null" || city === "") {
        errorMessages += "<p>Your City is required.</p>";

    } else {
        validCity = true;
        console.log("valid City selection")
    };
    //4) Send error message to HTML

    document.getElementById("city").innerHTML = errorMessages;

    //5) return status of each field
    return (validCity);
};


/*-----------------------State---------------------------------------*/

State.addEventListener('blur', state, false);
function state() {
    //1) Create variable
    var validState = false;

    //2) read value from HTML
    var state = document.getElementById("State").value;
    var errorMessages = "";

    //3) Do validation
    if (state === "null" || state === "") {
        errorMessages += "<p>Your State Selection is required.</p>";

    } else {
        validState = true;
        console.log("valid State selection")
    };
    //4) Send error message to HTML

    document.getElementById("state").innerHTML = errorMessages;

    //5) return status of each field
    return (validState);
};

/*-----------------------Country---------------------------------------*/

Country.addEventListener('blur', country, false);
function country() {
    //1) Create variable
    var validCountry = false;

    //2) read value from HTML
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    //3) Do validation
    if (country === "null" || country === "") {
        errorMessages += "<p>Your Country Selection is required.</p>";

    } else {
        validCountry = true;
        console.log("valid Country selection")
    };
    //4) Send error message to HTML

    document.getElementById("country").innerHTML = errorMessages;

    //5) return status of each field
    return (validCountry);
};




/*-----------------------ZipCode---------------------------------------*/


ZipCode.addEventListener('blur', zipCode, false);
function zipCode() {
    //1) Create variable
    var validZipCode = false;
    var codeNumber = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    //2) read value from HTML
    var zipCode = document.getElementById("ZipCode").value;
    var errorMessages = "";

    //3) Do validation
    if (isNaN(zipCode) || zipCode === "null" || zipCode === "" || zipCode === "USA" || zipCode.length > 5 || !zipCode.match(codeNumber)) {
        errorMessages += "<p>Your zipCode is required , only numerical values and cannot be greater than 5 characters</p>";
        console.log("zipCode invalid — length")
    }
    else {
        validZipCode = true;
        console.log("valid zipCode")
    };
    //4) Send error message to HTML

    document.getElementById("zipCode").innerHTML = errorMessages;

    //5) return status of each field
    return (validZipCode);
};



/*-----------------------Comments---------------------------------------*/


Comments.addEventListener('blur', comments, false);
function comments() {
    //1) Create variable
    var validComments = false;

    //2) read value from HTML
    var comments = document.getElementById("Comments").value;
    var errorMessages = "";

    //3) Do validation
    if (comments === "null" || comments === "") {
        errorMessages += "<p>Your Comments cannot be empty</p>";
        console.log("Comments is needed")
    }
    else {
        validComments = true;
        console.log("valid Comments")
    };
    //4) Send error message to HTML

    document.getElementById("Comments").innerHTML = errorMessages;

    //5) return status of each field
    return (validComments);
};
