function myAlert() {
    alert("Hai haiii")
}

// ==========================

function showPrompt() {
    const firstName = prompt("your first name")
    const lastName = prompt("your last name")

    myName(firstName, lastName)
}

function myName(firstName, lastName) {
    alert(firstName + ' ' + lastName)
}

// ==========================

function showPromptReturn() {
    const condition = prompt("Apakah hujan? (Y/N) ")

    weather(condition)
}

function weather(condition) {
    if (condition == "Y") {
        return alert("Kamu harus bawa payung nihhh, awas sakit kena hujan")
    }

    return alert("Hari cerah kok jadi ga usah bawa payung, tetap jaga kesehatan ya")
}