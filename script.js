const options = document.querySelectorAll('.option');
const userImg = document.getElementById('userImg');
const cpuImg = document.getElementById('cpuImg');
const resultBox = document.getElementById('resultBox')

let userOption = '';
let cpuAction = '';
let isStart = false;

options.forEach(option => {
    option.addEventListener('click', () => {
       if (!isStart) {
        isStart = true;

        imageUser = userImg.querySelector('img');
        imageUser.classList.add('active');
        imageCpu = cpuImg.querySelector('img');
        imageCpu.classList.add('active');
        
        resultBox.textContent = "Wait.."
        

        let time = setTimeout(() => {
            const currentValue = option.dataset.value;
            console.log(currentValue);
            const targetUserImg = option.querySelector('img');

            imageUser.src = targetUserImg.src;

            imageUser.classList.remove('active');
            imageCpu.classList.remove('active');

            userOption = currentValue;

            CPUOption();

            getResult();

            isStart = false;
        }, 2500)
       }
    })
});


function CPUOption() {
    const cpu = ['R', 'P', 'S'];
    let randomNumber = Math.floor(Math.random() * 3);

    cpuAction = cpu[randomNumber];

    const cpuImage = cpuImg.querySelector('img');
    cpuImage.src = `img/${cpuAction}.svg`;
}

function getResult() {
    let variants = {
        RR: "Draw",
        RP: "Cpu",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "You",
      };
      
      let result = variants[userOption + cpuAction];
      resultBox.textContent = userOption === cpuAction ? "Draw" : `${result} Won!!`;
}