function calculate(event) {
    event.preventDefault()

    const firstOperand = document.getElementById("first-oprnd").value
    const secondOperand = document.getElementById("sec-oprnd").value
    const operator = document.getElementById("opr").options[opr.selectedIndex].text

    // Have not used conditions because it's for the next topic
    const result = eval(firstOperand + operator + secondOperand)

    document.getElementById("result").innerText = result
}