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

document.getElementById('enHealth').innerText = player.health.toString()

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

function slap() {
    if (enemy.attack[3] || enemy.attack[4]) {
        enemy.health - Math.floor(player.attack * 0.75);
    }
    enemy.health - player.attack;
}

if (enemy.health == 0 || player.health == 0) {
    slct1.disabled = true;
    slct2.disabled = true;
    slct3.disabled = true;
    slct4.disabled = true;
} 