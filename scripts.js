function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("The minimum value must be LESS than the maximum value")
    }
    
    else {
        const finalResult = Math.floor(Math.random() * (max - min + 1)) + min

        alert(finalResult)
    }
}