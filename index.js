const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("createBox")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): []; //research this topic:

function delFC(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function hideFC(){
    createBox.style.display = 'none';
}

function createFC(){
    createBox.style.display = 'block'
    question.value = '' 
    answer.value = '' 
}

function addFC(){
    href="main.html"
}

contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement('h2');
    var h2_answer = document.createElement('h2');

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top:1pxsolid red; padding: 15px; margin-top: 30px"); //research
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style","text-align:center; display:none; color:#A56C12; font-size: 25px");
    h2_answer.innerHTML = text.my_answer;
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none"){
            h2_answer.style.display = "block";
        }
        else{
            h2_answer.style.display="none";
        }
    })
    flashcards.appendChild(div);

    var text = document.createTextNode("Del");
    var butt = document.createElement('button');
    butt.appendChild(text);
    butt.addEventListener('click', function(){
        div.style.display = "none";
        butt.style.display = "none";
        localStorage.removeItem('items');
        //contentArray.splice(text);
        localStorage.setItem('items', JSON.stringify(contentArray));
    });
    butt.setAttribute('style', 'text-align:center; color:black; font-size: 15px; margin:0; padding: 0');
    flashcards.appendChild(butt);

}


//stack subject wise- probably diff webpages, share flashcrads w friends
//make one after the other not all like a library view
//<footer><a href="game.html">play game</a></footer>