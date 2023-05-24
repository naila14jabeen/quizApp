console.log("question");
const question = [
    {
        'que': 'Which of the following is Markup language?',
        'a': 'HTMl',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHp',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript launched?',
        'a': '1996',
        'b': '1994',
        'c': '1995',
        'd': 'none of the above',
        'correct': 'c'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading StyleSheet',
        'c': 'Jason Object Notation',
        'd': 'none of the above',
        'correct': 'b'
    }]
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('queBox')
// console.log(queBox)
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        console.log('end')
        return endQuiz()
    }
reset()
    const data = question[index]
    console.log(data)
    queBox.innerText = `${index+1}) ${data.que}` ;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () =>{
    // console.log(question)
    const data = question[index];
    // console.log(data)
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
// function previous() {
//     if (i <= 0) {
//         return false;
//     }
//     i--;
//     imageTag.setAttribute('src', images[i]);
// }
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    
    optionInputs.forEach(
        (input) =>{
            input.checked = false
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML * `
    <h3>Thank You for playing the Quiz </h3>
    <h2> ${right} / ${wrong} are correct </h2>
    `
}

console.log('fgh')

//this is intial call
loadQuestion();