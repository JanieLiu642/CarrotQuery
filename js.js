
let buttons = document.getElementsByClassName('btn')
    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            ckBtn(buttons[i].innerHTML)
        })
    }


let mem = 0
let num = 0
let res = 0
let op = "+"
let calculated = false

function ckBtn(btn) {
    if (!isNaN(btn)) {
       pressNumber(btn)
    } else if (btn === "=") {
       requestAnswer()
    } else if (btn === "AC") {
        mem = 0
        setTextBox("0")
    } else if (btn === "π") {
        setTextBox("3.1415926")
        calculated = true
    } else if (btn === "√") {
        mem = Math.sqrt(Number(getTextBoxValue()))
        res = Math.sqrt(Number(getTextBoxValue()))
        setTextBox(mem)
        calculated = true
    } else if (btn === "➡") {
        num = getTextBoxValue()
        if (num.length > 1) {
            num = num.substr (0, num.length - 1)
            setTextBox(num)
        } else {
            setTextBox("0")
        }
    } else if (btn === "+" || btn === "-" || btn === "x" || btn === "÷") {
        mem = getTextBoxValue()
        op = btn
        setTextBox("0")
    } else {
        i = getTextBoxValue()
        calculated = false
        if (i[i.length-1] !== ".") {
            setTextBox(getTextBoxValue() + ".")
        } else {
            setTextBox(getTextBoxValue())
        }

    }
}

function getTextBoxValue() {
    return document.getElementById("display").innerText // Store number into memory
}

function setTextBox(num) {
    document.getElementById("display").innerText = num
}

function pressNumber(num) {
    let i = getTextBoxValue()
    if (i === "0" || calculated === true) {
        setTextBox('' + num) // Punch in single number
        calculated = false
    } else {
    setTextBox(i + num)
    }
}

function requestAnswer() {
    num = Number(getTextBoxValue())
    mem = Number(mem)
    res = 0
    if (op === "+") {
        res = add(mem, num)
    } else if (op === "-") {
        res = subtract(mem, num)
    } else if (op === "x") {
        res = times(mem, num)
    } else {
        res = divide(mem, num)
    }
    setTextBox(res)
    mem = res
    calculated = true
}

function add(x,y) {
    return x + y
}

function subtract(x,y) {
    return x - y
}

function times(x,y) {
    return x * y
}

function divide(x,y) {
    if (y === 0) {
        return "0"
    } else {
        return x / y
    }
}