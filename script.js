function runTheNumbers()
        {  // gets the numbers

            var income = document.getElementById('incomeVal').value;
            var bills = document.getElementById('expenseVal').value;
            var bar = document.getElementById('bar-fill');
            var result = document.getElementById('result-text');
            // sees how much money is spent (debt to income ratio)

           if (income === "" || bills === "")
           {
             result.innerText = "Please enter some values!! ";
             return;
           }   

            var monthly = income / 12;
            var ratio = (bills / monthly) * 100;
            //checks each condition and sees which type of risk it is (low or high?)

             income = Number(income); //convert it to numbers
              bills = Number(bills);         

             //calculateions
             var monthly = income/12;
             var ratio = (bills / monthly) * 100;

            if (ratio < 15) 
            {
                result.innerText = "Level 1: Very Low Risk";
                bar.style.width = "20%";
                bar.style.backgroundColor = "green";
            } 
            else if (ratio < 30) 
            {
                result.innerText = "Level 2: Low Risk";
                bar.style.width = "40%";
                bar.style.backgroundColor = "blue";
            } 
            else if (ratio < 50) 
            {
                result.innerText = "Level 3: Medium Risk";
                bar.style.width = "60%";
                bar.style.backgroundColor = "yellow";
            } 
            else if (ratio < 75) 
            {
                result.innerText = "Level 4: High Risk";
                bar.style.width = "80%";
                bar.style.backgroundColor = "orange";
            } 
            else 
            {
                result.innerText = "Level 5: Super High Risk";
                bar.style.width = "100%";
                bar.style.backgroundColor = "red";
            }
        }
