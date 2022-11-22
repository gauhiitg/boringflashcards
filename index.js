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
    var FC_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }
    contentArray.push(FC_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '' 
    answer.value = '' 
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
}

//option to delete one card, stack subject wise- probably diff webpages, share flashcrads w friends
//make one after the other not all like a library view
