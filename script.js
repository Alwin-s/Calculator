function displayNumber(num){
result.value+=num
}

//clear box function
function clearBox(){
    result.value='';
}

//result evaluate expression
function evaluateExp(){
    // //method 1
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    //method 2
    result.value=eval(result.value)
}

//clear on by one
function removelastitem(){
    result.value=result.value.slice(0,-1)
}