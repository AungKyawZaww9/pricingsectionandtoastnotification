// UI
// Start pricing change
const label = document.getElementById('label');
// console.log(label);

const checkbox = document.getElementById('checkbox');
// console.log(checkbox);

const basic = document.getElementById('basic');
const pro = document.getElementById('pro');
const platin = document.getElementById('platin');
// console.log(basic,pro,platin);

const changes = document.querySelectorAll('.change');
// console.log(change);

label.addEventListener('click',()=>{
    if(!checkbox.checked){
        // console.log('a');
        [basic.innerText,pro.innerText,platin.innerText] = [948,1788,4788];
        // [basic.style.color,pro.style.color,platin.style.color] = ["green","grey","red"];
        
        changes.forEach((change)=>{
            change.innerText = "Yearly";
        });

    }else{
        // console.log("b");
        [basic.innerText,pro.innerText,platin.innerText] = [79,149,399];
        // [basic.style.color,pro.style.color,platin.style.color] = ["black","black","black"];

        changes.forEach((change)=>{
            change.innerText = "Monthly";
        });

    }
});

// End pricing change


// Start Slider Bar
const fasone = document.querySelector('.fasone');
// console.log(fasone);
const btnone = document.querySelector('.btn1');
// console.log(btnone);

const filltwo = document.querySelector('.fastwo');
// console.log(filltwo);

const btntwo = document.querySelector('.btn2');
// console.log(btntwo);

const fillthree = document.querySelector('.fasthree');
// console.log(filltwo);

const btnthree = document.querySelector('.btn3');
// console.log(btntwo);

const slider = document.querySelector('.slider');
// console.log(slider);

const messages = ["Wow! That is great", "Thanks For Your Choose","Thanks You", "Nice! Choose"];


btnone.addEventListener('click',()=>{
    // console.log("hey");

    fasone.classList.add('floatingone');
    creatdiv();
    
});

btntwo.addEventListener('click',()=>{
    // console.log("hey");

    filltwo.classList.add('floatingtwo');
    creatdiv();
});

btnthree.addEventListener('click',()=>{
    // console.log("hey");

    fillthree.classList.add('floatingthree');
    creatdiv();
});


function creatdiv(){
    const div = document.createElement('div');
    div.classList.add('slidebar');
    div.classList.add('active');
    div.innerText = randommessage();

    slider.appendChild(div);
    // console.log(div);

    setTimeout(()=>{
        div.remove();
    },1500);
}


function randommessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

// console.log(randommessage());

// End Slider Bar