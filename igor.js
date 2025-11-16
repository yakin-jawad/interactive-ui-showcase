function validateName(name) {
    let regex = /^[A-Za-z\s]+$/;
    return (regex.test(name));
}

function validatePhone(phone) {
    let regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return (regex.test(phone));
}

function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (!validateName(name) && !(validatePhone(phone)))
    {
        return "ERROR: your name can only include letters and spaces, and your phone number must be in the format: (###) ###-####.";
    }

    if (!validateName(name))
    {
        return "ERROR: your name can only include letters and spaces.";
    }

        if (!validatePhone(phone))
    {
        return "ERROR: your phone number must be in the format: (###) ###-####.";
    }

    return "";
}

function adjustPhone(phone) {
    return(phone.replace(/\(/g, "").replace(/\) /g, "-"));
}

function showForm() {
    let error = validateForm();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let adjustedPhone = adjustPhone(phone);

    if (!error) {
        document.getElementById("error").textContent = "";
        document.getElementById("user-output").innerHTML = `<p> Name: ${name} </p>
                                                            <p> Address: ${address} </p>
                                                            <p> Phone: ${adjustedPhone} </p>`;
    }

    else {
        document.getElementById("user-output").innerHTML = "";
        document.getElementById("error").textContent = error;
    }
}

function maximize() {
    $("#tyler").animate({width: "100%", height: "100%", top: "0px"}, 4000);
    $("#tyler").css({position: "fixed"});
    $("#photoInfo").show(4000);
    $("#photoInfo").arctext({radius: 200, dir: 1, rotate: true});
    $(".material-symbols-outlined").show(4000);
    $("#current-time").hide();
}

function minimize() {
    $("#tyler").animate({width: "300px", height: "auto"}, 4000);
    $("#tyler").css({position: "static"});
    $(".material-symbols-outlined").hide(0);
    $("#photoInfo").hide(0);
    $("#current-time").show();
}

function setTime() {
    let timeNow = new Date();
    let formattedTime = timeNow.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

    document.getElementById("current-time").innerHTML = formattedTime;
}

function showTime() {
    setInterval(setTime, 1000);
}
