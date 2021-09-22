function generatenewlink()
{
    var length=10;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) 
    {
    result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    //return result;
   // let inputVal = document.getElementById("newlink").value;
    alert("your meeting id is " +result);
}

function getinputvalue() {
    
        // Selecting the input element and get its value 
        let inputVal = document.getElementById("inputlink").value;
        // Displaying the value
        alert(inputVal);
 }
