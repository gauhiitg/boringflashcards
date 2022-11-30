const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("createBox")[0];
const question = document.getElementById("question");
const key = document.getElementById("keyword");
const answer = document.getElementById("answer");
let abArray = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')): [];
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): []; //research this topic:
let k =0;

function delFC(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
    abArray = [];
}

function hideFC(){
    createBox.style.display = 'none';
}

function createFC(){
    createBox.style.display = 'block'
    question.value = '' 
    answer.value = '' 
    key.value = '' 
}

function addFC(){
    var FC_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }
    contentArray.push(FC_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    answer.value = '' 
    question.value = '' 
    key.value = '' 
          
}

contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement('h2');
    var h2_answer = document.createElement('h2')
    var key_answer = document.createElement('textarea');
    var check = document.createElement('button');
    var tex = document.createTextNode("Submit");
    check.appendChild(tex);
    div.appendChild(check);
    key_answer.setAttribute("Id", 'ans');

    const keyA = key.value;  
    abArray.push(keyA);
    localStorage.setItem('key', JSON.stringify(abArray));

    check.addEventListener('click', function(){
        const y = document.getElementById('ans').value;
        console.log(abArray)
        for (let i = 0; i < abArray.length ; i++) {
            const c = abArray[i]
            if(y.includes(c)){ 
                alert('right') 
                break
            }   
          } 
    });

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top:1pxsolid red; padding: 15px; margin-top: 30px"); //research
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style","text-align:center; display:none; color:#A56C12; font-size: 25px");
    h2_answer.innerHTML = text.my_answer;
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(key_answer);

    div.addEventListener("dblclick", function(){
        if(h2_answer.style.display == "none"){
            h2_answer.style.display = "block";
        }
        else{
            h2_answer.style.display="none";
        }
    })
    flashcards.appendChild(div);

    var text = document.createTextNode("Delet");
    var butt = document.createElement('button');
    butt.appendChild(text);
    butt.setAttribute('style', 'text-align:center; color:black; font-size: 15px; margin:0; padding: 0');
    div.appendChild(butt);
    butt.addEventListener('click', function(){
        div.style.display = "none";
        butt.style.display = "none";
        localStorage.removeItem('items');
        //contentArray.splice(0);
        localStorage.setItem('items', JSON.stringify(contentArray));
    });
    

}

const str = 'the quick brown fox jumps over the lazy dog';

const word ='brown fox';

//stack subject wise- probably diff webpages, share flashcrads w friends
//make one after the other not all like a library view
//<footer><a href="game.html">play game</a></footer>