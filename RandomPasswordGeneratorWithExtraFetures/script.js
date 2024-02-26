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
let clipboardValue 

Genarate.addEventListener('click',()=>{
    let passwordlength2 = document.querySelector('#passwordlength').value
    let number = parseInt(passwordlength2)

    //setting password length according to user input or if there is no input so the default value is 10 
    passwordlength = !isNaN(number) && number > 0 ? number : 10 ;

    /*making normal password */
    let password = []; 
    for(i=1 ;i<=passwordlength ;i++){
        let collect = Math.floor(Math.random()*10);
        if(passwordlength!==password.length){
            password.push(collect)
        }
    }
    console.log(password);
    let FinalArray = password.join(''); //join works only on a array
    let Finalvalue = parseInt(FinalArray.toString())
    // clipboardValue = Finalvalue
    console.log(Finalvalue);


    /*showing password to html*/ 
    // showoutput.textContent = Finalvalue

    
    
    /*Adding items to password according to check boxes*/
    let currentpass = ""
    let CharecterArray = [] 
    
    CharecterArray.push(password)
    if( include_uppercase_letters.checked){ CharecterArray.push(upp)}
    if( include_lowercase_letters.checked){CharecterArray.push(low)}
    if( include_Symbols.checked){CharecterArray.push(symbol)}

    console.log(CharecterArray);



    /*main code for choosing item randomly */
function getRandomValues(data , numIwant){
    const MakingSingle = [].concat(...data) //making all array in a single array form
    /* Select random values using Array.prototype.sample*/
    const RandomValue = MakingSingle.sort(()=>Math.random()-0.5).slice(0,numIwant)
    return RandomValue
}

const selectedValues = getRandomValues(CharecterArray, number);
    let AddedArray = selectedValues.join(''); //join works only on a array
    let AddedFinalvalue = AddedArray.toString()
    clipboardValue = AddedFinalvalue
console.log(selectedValues);
showoutput.textContent = AddedFinalvalue

});



/*Copy to the clip board */
clipboard.addEventListener('click',()=>{
    navigator.clipboard.writeText(clipboardValue)
    .then(()=>{
        console.log('copied to clipboard');
    })
    .catch((err)=>{
        console.log('errroor',err);
    })
});