function insert(num) {
    const displayvalue = document.querySelector('.result').value
    document.querySelector('.result').value = displayvalue + num

}
function clean() {
    document.querySelector('.result').value = ""
}


function calcular() {
    const displayvalue = document.querySelector('.result').value
    document.querySelector('.result').value = eval(displayvalue)
}
function reverse() {
    const displayvalue = document.querySelector('.result').value
    document.querySelector('.result').value = displayvalue * -1
}