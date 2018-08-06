function GameService () {

}

let player = {
    health: 50,
    specialty: 50,
    guard: 50,
    attack: 3,
}

let enemy = {
    health: 50,
    specialty: 50,
    guard: 50,
    attacks: ['slap1','slap2','slap3','parry1','parry2','mean eye','pump iron','insult'],
}

let enemyIndex = ['slap1','slap2','slap3','parry1','parry2','mean eye','pump iron','insult']
let enHealth1 = 50;

let actTurn = 0;

let spclIndex = ['backhand', 'palm', 'pinch nose']
let itemIndex = ['muscle tonic']

let enHealth = document.getElementById('enHealth')
let plHealth = document.getElementById('plHealth')
const slct1 = document.getElementById('slap')
const slct2 = document.getElementById('specialty')
const slct3 = document.getElementById('items')
const slct4 = document.getElementById('guard')

function values () {
    enHealth.innerText = enemy.health.toString();
    plHealth.innerText = player.health.toString();
}

function turn () {
    for ( let i = 0 ; i <= 2; i++) {
        if (i = 0) {
            return ;
        }
        if (i - 0) {

        }
    }

}

function slap() {
    if (enemy.attack[3] || enemy.attack[4]) {
        enHealth1 - Math.floor(player.attack * 0.75);
    }
    enemy.health - player.attack;
}

function special() {
    let type = spclIndex[Math.random() * (3 - 0) + 0];
    if (enemyIndex[0]) {
        plHealth - Math.random() * (2 - 0) + 0;
    }
    if (enemyIndex[1]) {
        plHealth - Math.random() * (7 - 3) + 3;
    }
    if (enemyIndex[2]) {
        plHealth - Math.random() * (12 - 8) + 3;
    }
    if (enemyIndex[3]) {

    }
}

function item() {
    let type = spclIndex[Math.random() * (3 - 0) + 0];
    if (enemyIndex[0]) {
        plHealth - Math.random() * (2 - 0) + 0;
    }
    if (enemyIndex[1]) {
        plHealth - Math.random() * (7 - 3) + 3;
    }
    if (enemyIndex[2]) {
        plHealth - Math.random() * (12 - 8) + 8;
    }
    if (enemyIndex[3]) {

    }
}

function enemyTurn() {
    let type = spclIndex[Math.random() * (3 - 0) + 0];
    if (enemyIndex[0]) {
        plHealth - Math.random() * (2 - 0) + 0;
    }
    if (enemyIndex[1]) {
        plHealth - Math.random() * (7 - 3) + 3;
    }
    if (enemyIndex[2]) {
        plHealth - Math.random() * (12 - 8) + 3;
    }
    if (enemyIndex[3]) {

    }
    return type;
}

function menu () {

}

if (enHealth1 == 0 || plHealth == 0) {
    slct1.disabled = true;
    slct2.disabled = true;
    slct3.disabled = true;
    slct4.disabled = true;
} 