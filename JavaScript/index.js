//Reverse the word
function reverse(str){
    if(str === "")    //Stopping condition
    {
    return str      //If the condition is true, display the inverted word  
    }
    else
    {
        return reverse(str.substr(1)) + str[0]   //Otherwise, proceed to the next letter
    }
}

function inverseaza(){
    var nr = document.getElementById('rec').value;
    var calc = reverse(nr);
    document.getElementById('checkText').innerHTML = calc;
    document.getElementById('inputTextID').innerHTML = nr;
}
            

//Calculate factorial
function fact(x){
    if((x<=1))      //If x is less or equal with 1
    {
    return 1;     //The result of the factorial is 1
    }
    else
    {
        return(x*fact(x-1)); 
    }
}

function calculeaza()
{
    var nr1 = document.getElementById('rec1').value;
    var calc1 = fact(nr1);
    document.getElementById('checkValue').innerHTML = calc1;
    document.getElementById('inputValueID').innerHTML = nr1;
}
