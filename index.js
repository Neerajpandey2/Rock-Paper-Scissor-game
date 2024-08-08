// selecting all the usefull element by querry selector --
const input        =       document.querySelectorAll('.images');
const msgs         =       document.querySelector('.msg');
let  userScore     =       document.querySelector('#user');
let computerScore  =       document.querySelector('#machine');
let userScore1     =       0;
let computerScore1 =       0;

// using for each loop for applying click even to all images. without loop we cant apply event
//  on every image no matters they have same classes or not --
input.forEach(button => {
    button.addEventListener('click',()=>{

        let idd = button.getAttribute('id');
// used math.random method to generate random digit between 0 to 2 --
        const computer = ()=>{
            let com = Math.floor(Math.random()*3);
// using if else for different condition of user winning or lossing game
            let comin;
            if (com==0){
                   comin = "stone"
                 }
            else if(com==1) {
                    comin = "paper"
                 }
            else {
                    comin = "scissior"
                 }
            
            if(idd == "stone"  && comin == "stone" || idd == "paper"  && comin == "paper" || idd == "scissior"  && comin == "scissior"   ){
              
                    msgs.style.backgroundColor = "blue";
                    msgs.innerText = `match was draw because computer also has ${comin}`;
            }
            else if ( idd == "stone" && comin ==  "scissior" || idd == "paper" && comin ==  "stone" || idd == "scissior" && comin ==  "paper"  ){
               
                    userScore1++
                    userScore.innerText = `${userScore1}`;
                    msgs.style.backgroundColor = "green";
                    msgs.innerText = `you win by because computer has ${comin}`;
            }
            else{
               
                    computerScore1++
                    computerScore.innerText = `${computerScore1}`;
                    msgs.style.backgroundColor = "red";
                    msgs.innerText = `you lost because computer has ${comin}`;

               }
        } 

// executing the computer function in which the if else statements were written   --     
           computer();

      
    
     
    });
});

