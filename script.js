
function validateSyntax() { 
    let input = document.getElementById('petInput').value.trim(); 
   let result = ''; 
   // Placeholder for validation result
    // TODO: Write your validation logic here 
    // Check if input starts with 'pet_' and followed by alphanumeric characters 
    
    if (input.startsWith('pet_')) {
        let valueAfterUnderscore = input.split('_')[1];

        if (/\d/.test(valueAfterUnderscore) && /[a-z]/i.test(valueAfterUnderscore) && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(valueAfterUnderscore)) {
            result = 'Valid Syntax';
        } else {
            result = 'Invalid Syntax';
        }
    } else { 
        result = 'Invalid Syntax';
    } 

    document.getElementById('result').innerText = result; 
}


    