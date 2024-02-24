//buttons
let Genarate = document.querySelector('#Genarate')
let clipboard = document.querySelector('#clipboard')

// getting check-boxes
let include_uppercase_letters = document.querySelector('#uppercase');
let include_lowercase_letters = document.querySelector('#lowercase');
let include_numbers = document.querySelector('#numbers');
let include_Symbols = document.querySelector('#Symbols');

//output field
let showoutput = document.querySelector('#showoutput')

//resourses...
    const upp =[
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];
    const low =[
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];
    const symbol =['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '~', '`'];
    

let passwordlength = 10 ; /*Default length for password */
Genarate.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red'
    let passwordlength2 = document.querySelector('#passwordlength').value
    let number = parseInt(passwordlength2)
    //setting password length according to user input 
    if(number !== '' && !isNaN(number)/*The expression !isNaN(number) is checking if the value stored in the variable number is a valid number or not. */ ){ 
        passwordlength = number
    }


    
    let flag = 0 
    if( include_uppercase_letters.checked){
        let flag = 1
    }
    if( include_lowercase_letters.checked){
        let flag = 2
    }
    if( include_numbers .checked){
        let flag = 3
    }
    if( include_Symbols.checked){
        let flag = 4
    }
    //making normal password 
    let password = []; 
    for(i=1 ;i<=passwordlength ;i++){
        let collect = Math.floor(Math.random() * (10 - 0 + 0)) + 0;
        password.push(collect)
    }
    console.log(password);
    const FinalArray = password.join(''); //join works only on a array
    const FinalString = FinalArray.toString()
    console.log(FinalString);
    //showing password to html 
    showoutput.textContent = FinalString

    //Adding uppercse letters 
    if(flag === 1){
        alert('coool nnoob')
        
    }

    function addingUpperCase(){
        
    }
});

/*Use .toString() for arrays: If you're directly assigning an array to textContent, it won't work. Convert the array to a string using password.toString() before assignment. */