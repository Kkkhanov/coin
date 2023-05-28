let out1 = document.getElementById('out-1');
let but1 = document.getElementById('but-1');
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
let main = document.getElementById('main')
let result = document.getElementById('result')


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

function f1(){
    const students = [
        {name: 'Khanov' , score: random(2, 5)},
        {name: 'Abramov' , score: random(2, 5)},
        {name: 'Kuznetsov' , score: random(2, 5)},
        {name: 'Akhmetov' , score: random(2, 5)},
        {name: 'Vasilyev' , score: random(2, 5)},
        {name: 'Kharchenko' , score: random(2, 5)},
        {name: 'Andreev' , score: random(2, 5)},
        {name: 'Kennedy' , score: random(2, 5)},
        {name: 'Batullin' , score: random(2, 5)},
        {name: 'Kovin' , score: random(2, 5)}
    ]
    
    let string = '<tr><td>Фамилия</td><td>Оценка</td></tr>'
    
    students.forEach(el=> {
        string += '<tr><td>' + el.name + '</td><td>' + el.score + '</td></tr>'
    })

    out1.innerHTML = string;
}

function f2(){
    let side = random(1, 2);
    
    if(side == 1){
        result.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/9/90/RR5714-0002.png')
        main.style.display = 'none'
    }
    else if(side == 2){
        result.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/RR5216-0060-21_50_%D1%80%D1%83%D0%B1%D0%BB%D0%B5%D0%B9_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B9_%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%BE%D0%BD%D0%BE%D1%81%D0%B5%D1%86.png')
        main.style.display = 'none'
    }
    console.log(side)
}

but1.onclick = f1;
but2.onclick = f2;
but3.onclick = function(){
    location.reload();
}