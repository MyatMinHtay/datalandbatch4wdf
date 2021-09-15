// UL
const minnum = document.querySelector(".minnumber"),
maxnum = document.querySelector(".maxnumber"),
guessinput = document.querySelector("#guessinput"),
guessbtn = document.querySelector("#guessbtn"),
message1 = document.querySelector(".message1"),
message2 = document.querySelector(".message2"),
game = document.getElementById('game');

// Game Value
let min = 1,
    max = 10,
    gameleft = 3,
    winningNumber = getrandomnum(min,max);

    minnum.textContent = min;
    maxnum.innerText = max;

    guessbtn.addEventListener("click", function(){
        
        let guess = parseInt(guessinput.value);

        if(guess < min || guess > max || isNaN(guess)){
            //console.log(`Please enter a number between ${min} to ${max}`);

            //message2.innerText = `Please enter a number between ${min} to ${max}`;

            setmessages2(`Please enter a number between ${min} to ${max}`,"red");

        }

        if(guess === winningNumber){
            // Gameover Won 
    
            // disable input 
    
            // guessinput.disabled = true;
    
            // // border color
            // guessinput.style.borderColor = "green";
            
            // // message 1 
            //setmessage1(`${winningNumber} is correct!,You Win`,"green");
            // message1.innerText = `${winningNumber} is correct! ,You Won `;
    
            // play again 
            // guessbtn.value = `Play Again`;

            //အ ေပၚကလို အမ်ားႀကီး မေရးခ်င္လို႔ function တစ္ခုကိုသံုးၿပီး ခ်ဳပ္လိုက္တာ

            gameover(true,`${winningNumber} is correct!,You Won`);


        }else{
            gameleft--;


            if(gameleft === 0){
                // Gameover Lost 

                // disable input 
                // guessinput.disabled = true;

                // borderColor

                // guessinput.style.borderColor = "red";

                // message 
                //setmessage1(`Game over , You Lost ,The Correct Number Was ${winningNumber}`,"red");

                // play again 
                // guessbtn.value = `Play Again`;

                gameover(false,`Game over, You Lost, The correct number was ${winningNumber}`);

            }else{
                // Game Continue 

                // border color 
                guessinput.style.borderColor ="red";
                // clear input 
                guessinput.value='';
                // message 
                setmessage1(`${guess} is not correct, ${gameleft} guess left`,"red");

                if(!isNaN(guess)){
                    setmessage1( `${guess} is not correct, ${guessleft} guess left`,"red");
                }
            }
        }

        

    });

// Message 

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}
function setmessages2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent ='';
    },2000);
}

// Game over 
function gameover (won,msg){
    let color;

    won === true ? color = "green" : color="red";

    // disable inut 
    guessinput.disabled= true;

    // border color 
    guessinput.style.borderColor = color;

    // message 
    setmessage1(msg,color);

    // play again 

    guessbtn.value = "Play Again";

    // add class 
    guessbtn.classList.add('play-again');
}

// Play Again 
 game.addEventListener('mouseup',(e)=>{
    //  console.log(e.target);

    if(e.target.className === 'guessbtn play-again'){
        // console.log('i am working '); 

        window.location.reload();
    }
 });

//  winning Number 

function getrandomnum(min,max){
    

    let rdmnumber = Math.floor(Math.random()*(max-min)+1);

    // console.log(rdmnumber);
    return rdmnumber;
}