let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: 'A person was like a city. You couldnt let a few less desirable parts put you off the whole. There may be bits you dont like, a few dodgy side streets and suburbs, but the good stuff makes it worthwhile.' ,
person: 'Matt Haig, The Midnight Library'
},{
    quote: 'Before, I wanted to say: "I found love!" But now, I want to say: "I found a person. And he belongs to me and I belong to him.',
    person:'C. JoyBell C.'
}
,{
    quote: 'Plants are more courageous than almost all human beings: an orange tree would rather die than produce lemons, whereas instead of dying the average person would rather be someone they are not',
    person:'Mokokoma Mokhonoana'
}
,{
    quote: 'Dont run while eating',
    person:'najeed kashan'
}]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
