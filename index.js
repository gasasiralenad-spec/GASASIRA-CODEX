const display=document.getElementById ("display");

function appendToDisplay(value){
    display.value += value;
}


function clearDisplay() {
    let display=
   document.getElementById("display");
   display.value =
   display.value.slice(0,-1);
}



function calculate(){
    try{
        display.value=eval(display.value);  
    }catch(error){
        display.value="Error";
    }

}
function toRadians(degree){
    return degree *(Math.PI/180);
}
function sin(degree){
    return Math.sin(toRadians(degree));
}
function cos(degree){
    return Math.cos(toRadians(degree));
}
//Example
console.log(sin(30));//0.5
console.log(cos(60));//0.5

let angle = Math.PI / 2; //90 degrees in radians
let sinvalue = Math.sin(angle);
let cosvalue = Math.cos(angle);

console.log(sinvalue);//1
console.log(cosvalue);//0


                    function calculateSin() {
                        let value =
                    document.getElementById("display").value;
                    document.getElementById("display").value=Math.sin(value * Math.PI / 180);
                    }
                    function calculateCos() {
                        let value =
                    document.getElementById("display").value;
                    document.getElementById("display").value=Math.cos(value * Math.PI / 180);
                    }
                    function calculateTan() {
                        let value =
                        document.getElementById('display').value;
                        document.getElementById("display").value=Math.tan(value * Math.PI/180);

                    }
                    function calculate(type){
                        let angle =
                        document.getElementById("display").value;
                        if (angle===""){
                        document.getElementById("display").innerHTML="display:Enter an angle";
                                                    return;
                    }
                    //convert degrees to radians
                    let radians = angle*Math.PI/180;
                    let display;
                    if(type ==="sec"){
                        display = 1 / Math.cos(radians);
                    }
                    else if (type === "cosec"){
                        display = 1 / Math.sin(radians);
                    }
                    else if(type === "cot"){
                        display= 1 / Math.tan(radians);
                    }

                    document.getElementById("display").innerHTML= "display:" + display.toFixed(4);
            }
console.log("sec(60degree) =", sec(60));