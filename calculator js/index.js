var calculatorDisplay = ""

function btnClick(e){
    if(e == "1" || e == "2" || e == "3" || e == "4"){
        if(e == "AC"){
            calculatorDisplay = ""
        }
        else{
            calculatorDisplay = calculatorDisplay + e
            console.log(calculatorDisplay)
        }
        document.getElementById("display").value = calculatorDisplay
    }
    else{
        console.log("input harus berupa angka dan simbol")
    }
}

document.getElementById("display").addEventListener('input', function displayChange() {

    console.log(this.value)
    let e = this.value
    let chars = /^[0-9]+$/

    if (chars.test(e)){
        console.log("digits")
    } else{
        console.log("not digits")
    }

})

