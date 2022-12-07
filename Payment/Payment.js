function check() {

    // Full Name Input
    let fname = document.getElementById("fname");
    if(fname.value == ""){
        window.alert("Enter the Full Name");
        fname.focus();
        return false;
    }


    // Email Input
    let email = document.getElementById("email");
    if(email.value == ""){
        window.alert("Enter the Email");
        email.focus();
        return false;
    }


    // Address Input
    let adr = document.getElementById("adr");
    if(adr.value == ""){
        window.alert("Enter the Address");
        adr.focus();
        return false;
    }


    // City Input
    let city = document.getElementById("city");
    if(city.value == ""){
        window.alert("Enter the City");
        city.focus();
        return false;
    }


    // State Input
    let state = document.getElementById("state");
    if(state.value == ""){
        window.alert("Enter the State");
        state.focus();
        return false;
    }


    // PIN Code Input
    let zip = document.getElementById("zip");
    if(zip.value == ""){
        window.alert("Enter the PIN Code");
        zip.focus();
        return false;
    }


    // Name on Card
    let cname = document.getElementById("cname");
    if(cname.value == ""){
        window.alert("Enter the Name on Card");
        cname.focus();
        return false;
    }


    // Credit card number Input
    let ccnum = document.getElementById("ccnum");
    if(ccnum.value == ""){
        window.alert("Enter the Credit card number");
        ccnum.focus();
        return false;
    }


    // Exp Month Input
    let expmonth = document.getElementById("expmonth");
    if(expmonth.value == ""){
        window.alert("Enter the Exp Month");
        expmonth.focus();
        return false;
    }


    // Exp Year Input
    let expyear = document.getElementById("expyear");
    if(expyear.value == ""){
        window.alert("Enter the Exp Year");
        expyear.focus();
        return false;
    }


    // CVV Input
    let cvv = document.getElementById("cvv");
    if(cvv.value == ""){
        window.alert("Enter the CVV");
        cvv.focus();
        return false;
    }

    window.location.reload();
}