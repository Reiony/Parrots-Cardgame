let imagelist = ["./images/bobrossparrot.gif",
 "./images/bobrossparrot.gif",
  "./images/explodyparrot.gif",
   "./images/explodyparrot.gif",
"./images/fiestaparrot.gif",
 "./images/fiestaparrot.gif", 
 "./images/metalparrot.gif", 
 "./images/metalparrot.gif",
  "./images/revertitparrot.gif",
   "./images/revertitparrot.gif",
"./images/tripletsparrot.gif",
 "./images/tripletsparrot.gif",
  "./images/unicornparrot.gif",
   "./images/unicornparrot.gif"];
let gifelements = [];
let selectedgif;
let contador = 0;
let NumIns;
const selectUl = document.querySelector("ul");

function shufflecards(){
    for (let i=0; i<NumIns; i++){
        gifelements.push(imagelist[i]);
        gifelements.sort(comparador);
    }
}
function showCards(){
    const instruction = prompt ("Escolha de 4 a 14 o número de cartas para jogar (4,6,8,10,12 ou 14)");
    NumIns = Number(instruction);
    if (NumIns<4 | NumIns>14 | isNaN(NumIns)| NumIns%2==1){
        showCards();
    } else {
        shufflecards();
        while (contador<NumIns){
            selectedgif = gifelements[contador];
            console.log(selectedgif);
            selectUl.innerHTML += `<li class="card" onclick="flipCard(this)">
            <div class="card-front">
                <img src="./images/front.png" alt="">
            </div>
            <div class="card-back">
                <img class="parroty"src="${selectedgif}" alt="">
            </div>
            </li>`
            contador ++;
        } 
    }
}

let selectedCardList=[]
let firstcard;
let secondcard;

function flipCard(ClickedCard){
    const selecionacarta= document.querySelector("ul li");

    if (selectedCardList.length==0){
        if(ClickedCard.classList.contains("flipped")==false){
            ClickedCard.classList.add("flipped");
            ClickedCard.removeAttribute("onclick");
            firstcard=ClickedCard;
            getimgclass= firstcard.querySelector(".parroty");
            getimgsrc= getimgclass.getAttribute("src");
            selectedCardList.push(getimgsrc);
        } else {
        }
    } else if (selectedCardList.length==1){
        if (ClickedCard.classList.contains ("clicado") == false ){
            ClickedCard.classList.add("flipped");
            ClickedCard.removeAttribute("onclick");
            secondcard=ClickedCard;
            getimgclass= secondcard.querySelector(".parroty");
            getimgsrc= getimgclass.getAttribute("src");
            selectedCardList.push(getimgsrc);
        }
    } else {
        flipCardynamic();
    }
    setTimeout(flipCardynamic,1000);
}

let jogadas = 0;
let jogadascorretas=0;
function flipCardynamic(){
    if(selectedCardList.length==2){
        if(selectedCardList[0]==selectedCardList[1]){
            selectedCardList=[];
            jogadas++;
            jogadascorretas++;
            terminajogo();
        } else {
            firstcard.setAttribute("onclick", "flipCard(this)");
            secondcard.setAttribute("onclick", "flipCard(this)");
            firstcard.classList.remove("flipped");
            secondcard.classList.remove("flipped");
            selectedCardList=[];
            jogadas++;
        }
    }
}

function terminajogo(){
    if(jogadascorretas==NumIns/2){
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}
function comparador() { 
    return Math.random() - 0.5; 
}

showCards();