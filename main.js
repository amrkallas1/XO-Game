let title = document.querySelector(".title span");
let turn = document.querySelectorAll(".turn span");
let boxes = document.querySelectorAll(".box");

let winArray=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7]];
let winx=[];
let x=0;
let wino=[];
let o=0;
let end=0;
let player = document.createElement("span");
function selectUser() {
  turn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      player = ele.innerHTML;
      ele.parentElement.remove();
      title.innerHTML = player;
    });
  });
}
selectUser();

function play(id) {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerHTML == "") {
        box.innerHTML = player;
        box.style.pointerEvents="none";
        box.classList.add(player);
        box.classList.add("end");
        end++;
      if (player == "X") {
            player = "O";
            title.innerHTML = player;
      } else {
            player = "X";
            title.innerHTML = player;
      }
    }
    if(box.classList.contains("X")){
        winx.push(parseInt(box.dataset.str))
        if(winx.length>=3){
            for(let i=0;i<winArray.length;i++){
                for(let j=0;j<winArray[i].length;j++){
                    for(let k=0;k<winx.length;k++){
                        if(winx[k]==winArray[i][j]){
                            x++;
                        }
                    }
                }
                if(x==3){
                    document.querySelector(".title").innerHTML=`<span>X</span> Winner`;
                    document.body.style.pointerEvents="none"
                }else{
                    x=0
                }
            }
        }
        
    }

    else if(box.classList.contains("O")){
        wino.push(parseInt(box.dataset.str))
        if(wino.length>=3){
            for(let i=0;i<winArray.length;i++){
                for(let j=0;j<winArray[i].length;j++){
                    for(let k=0;k<wino.length;k++){
                        if(wino[k]==winArray[i][j]){
                            o++;
                        }
                    }
                }
                if(o==3){
                    document.querySelector(".title").innerHTML=`<span>O</span> Winner`;
                    document.body.style.pointerEvents="none"
                }else{
                    o=0
                }
            }
        }
        
    }
    if(end==9){
        document.querySelector(".title").innerHTML=`<span>There is no winner</span>`;
    }
    });
  });
  
}
play();

//1 5 9

//1 3 5 9



