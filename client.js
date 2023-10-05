window.onload = () => {
        let button = document.getElementById("btn");
     
        // executing the function with button basically listening to it
        button.addEventListener("click", calculateBMI);
    };

function calculateBMI() {
    let height = document.getElementById('Height').value
    let weight = document.getElementById('Weight').value
    let result = document.getElementById('result')

   if (height === "" || isNaN(height)){
    result.innerHTML = "Add yo stats bitch boi "
   }
   else if (weight === "" || isNaN(weight)) {
    result.innerHTML = "Add yo stats bitchty boi"
   }
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2) * 2;
 
        let baddeath = Math.floor(Math.random() * 30)
        let normaldeath = Math.floor(Math.random() * 80)
        let badbaddeath = Math.floor(Math.random() * 30)
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `You are going to die in the next ${badbaddeath} years`;
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `You are going to die in the next> ${normaldeath} years`;
 
        else result.innerHTML =
            `You are going to die in the next ${baddeath} years`;
    }
}
