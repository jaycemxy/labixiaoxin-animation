const string = `
    #head * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #head *::before, #head *::after {
        box-sizing: border-box;
    }

    body {
        background-color:#b0cac7;
    }

    #head {
        width: 100vh;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .face {
        width: 250px;
        height: 250px;
        background-color: #ffb78e;
        position: absolute;
        left: 50%;
        border: 2px solid #000;
        border-radius: 70% 65% 12% 90% / 70% 50% 70% 65%;
    }
    .face::before {
        content: "";
        position: absolute;
        width: 65px;
        height: 80px;
        background-color: #ffb78e;
        border-radius: 80% 65% 73% 80% / 80% 40% 30% 70%;
        border-top: 2px solid #000;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        transform: translate(-60px,100px) rotate(-10deg);
    }
    .face::after {
        content: "";
        position: absolute;
        width: 155px;
        height: 150px;
        background-color: #ffb78e;
        border-radius: 90% 65% 80% 90% / 40% 100% 70% 60%;
        transform: translate(145px,98px);
        border-right: 4px solid #000;
    }
    .hair {
        width: 150px;
        height: 15px;
        position: absolute;
        background-color: #000;
        border-radius: 45% 65% 0% 100% / 100% 100% 0% 0%;
        top: -2px;
        left: 39px;
    }
    .hair::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 140px;
        background-color: #000;
        border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
        top: -5px;
        left: -49px;
        transform: rotate(20deg);
        z-index: -1;
    }

    .eyebrowLeft {
        position: absolute;
        background-color: #000;
        width: 67px;
        height: 25px;
        border-radius: 30px;
        transform: rotate(137deg);
        top: 12px;
        left: 9px;
        animation: hello 0.4s infinite ease-in-out;
    }
    .eyebrowLeft::after {
        content: "";
        position: absolute;
        background-color: #000;
        width: 67px;
        height: 25px;
        border-radius: 30px;
        transform: rotate(85deg);
        top: -24px;
        right: 25px;
    }
    .eyebrowRight {
        position: absolute;
        background-color: #000;
        width: 67px;
        height: 25px;
        border-radius: 30px;
        transform: rotate(137deg);
        top: 12px;
        left: 130px;
        animation: hello 0.4s infinite ease-in-out;
    }
    .eyebrowRight::after {
        content: "";
        position: absolute;
        background-color: #000;
        width: 67px;
        height: 25px;
        border-radius: 30px;
        transform: rotate(85deg);
        top: -24px;
        right: 25px;
    }

    @keyframes hello {
        to {top: -0.1px}
    }

    .eyeLeft {
        position: absolute;
        width: 68px;
        height: 60px;
        background-color: #000;
        border-radius: 50%;
        top: 80px;
        left: 42px;
    }
    .eyeLeft::before {
        content: "";
        position: absolute;
        width: 80px;
        height: 60px;
        border-top: 4px solid #000;
        border-radius: 53% 47% 45% 55% / 38% 52% 48% 66%;
        top: -25px;
        left: -2px;
    }
    .eyeLeft::after {
        content: "";
        position: absolute;
        background-color: #fff;
        width: 26px;
        height: 23px;
        border-radius: 50%;
        top: 16px;
        left: 19px;
    }

    .eyeRight {
        position: absolute;
        width: 68px;
        height: 60px;
        background-color: #000;
        border-radius: 50%;
        top: 80px;
        left: 143px;
        z-index: 1;
    }
    .eyeRight::before {
        content: "";
        position: absolute;
        width: 80px;
        height: 60px;
        border-top: 4px solid #000;
        border-radius: 53% 47% 45% 55% / 38% 52% 48% 66%;
        top: -25px;
        left: -2px;
    }
    .eyeRight::after {
        content: "";
        position: absolute;
        background-color: #fff;
        width: 26px;
        height: 23px;
        border-radius: 50%;
        top: 16px;
        left: 19px;
    }
    .mouth {
        position: absolute;
        width: 45px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #000;
        background-color: rgb(165,67,84);
        top: 205px;
        right: 50px;
        z-index: 2;
        animation: wow 2s infinite ease-in-out;
    }

    @keyframes wow {
        0% {transform: scale(0.3, 0.5)}
        10% {transform: scale(1, 1)}
        20% {transform: scale(0.3, 0.5)}
        30% {transform: scale(1, 1)}
        40% {transform: scale(0.3, 0.7)}
        60% {transform: scale(1, 1)}
        80% {transform: scale(0.8, 0.3)}
        100% {transform: scale(0.5, 0.9)}
    }
`

const player = {
    id: undefined,
    speed: 100,
    n: 1,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo.innerText = string.substring(0, player.n);
        player.ui.demo2.innerHTML = string.substring(0, player.n);
        player.bindEvents();
        player.play();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: ()=> {
        for (let key in player.events) {
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: ()=>{
        player.n += 1
        if(player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n);
        player.ui.demo2.innerHTML = string.substring(0, player.n);
        player.ui.demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        player.id = setInterval(player.run, player.speed);
    },
    pause: ()=> {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.speed = 300;
        player.play();
    },
    normal: ()=> {
        player.pause();
        player.speed = 100;
        player.play();
    },
    fast: ()=> {
        player.pause();
        player.speed = 0;
        player.play();
    },
}

player.init();

