const display=document.getElementById('display')





function appendDisplay(input){
display.value+=input
}
function clearAll(){
    display.value=''

}
function toCalculate(){
try{

display.value=eval(display.value)

}
catch(error){
    display.value='Error';
}
}