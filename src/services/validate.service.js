let validateEmail = (email) => {
    return String(email).
        toLowerCase().
        match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

let validatePassword = (password) => {
    return String(password).
        match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
}


let validatePhone = (phone) => {
    return phone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);
}

export default {
    validateEmail,
    validatePassword,
    validatePhone
};