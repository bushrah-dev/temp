let cel = document.getElementById("cel")
let fah = document.getElementById("fah")
cel.addEventListener("input", ()=>{
    fah.value = ((cel.value * 9) / 5 + 32).toFixed(3)  
    if(!cel.value) fah.value = ""
} )
fah.addEventListener("input", () => {
    cel.value = (((fah.value -32) * 5) / 9).toFixed(3)
    if(!fah.value) cel.value = ""

})