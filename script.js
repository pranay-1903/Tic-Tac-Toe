let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgc=document.querySelector(".msg-c");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();


    });

});

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgc.classList.add("hide");
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! The winner is ${winner}`;
    msgc.classList.remove("hide");
    disableboxes();
}

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2===pos3)
                showWinner(pos1);
        }

    }

}

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

