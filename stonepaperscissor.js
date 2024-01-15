let choices = document.querySelectorAll(".content") ; 
let msg = document.querySelector("#msg-inner") ;
let usershow = document.querySelector(".usershow") ; 
let computershow = document.querySelector(".computershow") ; 
let user1 = document.querySelector("#user1") ; 
let user2 = document.querySelector("#computer1") ; 
let userscore = 0 ; 
let computerscore = 0; 
let reset = document.querySelector("#reset") ; 


// const showWinner = (user_choice) =>
// {
//     let options = ["Rock","Paper" , "Scissor"] ; 
//     let idx = Math.floor(Math.random()*3) ; 
//     let computer_choice = options[idx] ; 
//     console.log(`your choice is :- ${user_choice}`) ; 
//     console.log(`computer choice is :- ${computer_choice}`) ; 
//     if(user_choice === computer_choice)
//     {
//         console.log("Match is Draw ") ; 
//     }
//     else
//     {
//         if(user_choice === "Scissor")
//         {
//             let correct = computer_choice === "Rock" ? false : true ; 
//             if(correct)
//             {
//                 console.log(`Winner is :- ${user_choice}`) ; 
//             }
//             else
//             {
//                 console.log(`Winner is :- ${computer_choice}`) ; 
//             }
//         }
//         else if(user_choice === "Rock")
//         {
//             let corr = computer_choice ==="Paper" ? false : true ; 
//             if(corr)
//             {
//                 console.log(`Winner is :- ${user_choice}`) ; 
//             }
//             else
//             {
//                 console.log(`Winner is :- ${computer_choice}`) ; 
//             }
//         }
//         else 
//         {
//             let crr = computer_choice === "Scissor" ?false:true ; 
//             if(crr)
//             {
//                 console.log(`Winner is :- ${user_choice}`) ; 
//             }
//             else
//             {
//                 console.log(`Winner is :- ${computer_choice}`) ; 
//             }
//         }
//     }
// }
const showWinner = (user_choice) =>
{
    let options = ["Rock","Paper" , "Scissor"] ; 
    let idx = Math.floor(Math.random()*3) ; 
    let computer_choice = options[idx] ; 
    if(user_choice === computer_choice)
    {
        msg.innerText = `Match is draw ` ; 
        msg.style.backgroundColor = "orange" ; 
        msg.style.color = "white" ; 
        usershow.innerText = user_choice ; 
        computershow.innerText = computer_choice ; 
    }
    else
    {
        if(user_choice === "Scissor")
        {
            if(computer_choice === "Rock")
            {
                msg.innerText = `You Lost ${computer_choice} beats ${user_choice}` ; 
                msg.style.backgroundColor = "Red" ; 
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user2.innerText = ++computerscore ;  
            }
            else
            {
                msg.innerText = `You win !!!${user_choice} beats ${computer_choice}` ; 
                msg.style.backgroundColor = "green" ; 
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user1.innerText = ++userscore; 
            }
        }
        else if(user_choice === "Rock")
        {
            if(computer_choice === "Scissor")
            {
                msg.innerText = `You win !!!${user_choice} beats ${computer_choice}` ; 
                msg.style.backgroundColor = "green" ; 
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user1.innerText = ++userscore; 
            }
            else
            {
                msg.innerText = `You Lost ${computer_choice} beats ${user_choice}` ; 
                msg.style.backgroundColor = "red" ; 
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user2.innerText = ++computerscore ;  
            }
        }
        else 
        {
            if(computer_choice === "Rock")
            {
                msg.innerText = `You win !!!${user_choice} beats ${computer_choice}` ; 
                msg.style.backgroundColor = "green" ;
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user1.innerText = ++userscore; 
            }
            else
            {
                msg.innerText =  `You Lost ${computer_choice} beats ${user_choice}` ; 
                msg.style.backgroundColor = "red" ; 
                usershow.innerText = user_choice ; 
                computershow.innerText = computer_choice ; 
                user2.innerText = ++computerscore;  
            }
        }
    }
}





choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        let choice_id = choice.getAttribute("id") ;
        // console.log(`The button that is clicked is ${choice_id}`) ; 
        showWinner(choice_id) ; 
    });
})
// for(let choice of choices)
// {
//     choice.addEventListener("click",()=>
//     {
//         console.log("Rock,Scissor or paper is clicked .")
//     })
// }
const resetgame = ()=>
{
    user1.innerText = 0 ; 
    user2.innerText = 0 ; 
    msg.innerText = "Start the game" ; 
    msg.style.backgroundColor = "chocolate" ; 
    usershow.innerText = "You" ; 
    computershow.innerText = "Computer" ; 
}
reset.addEventListener("click",resetgame) ; 
