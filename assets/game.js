let player = {
    health: 50,
    specialty: 10,
    guard: 15,
    attack: 3
}

let item = {
    modifier: 1.5,
    amount: 2
}

let enemy = {
    health: 50,
    specialty: 10,
    guard: 15,
    attacks: ['slap1','slap2','slap3','parry1','parry2','mean eye','pump iron','insult'],
    appearance: [
        'dandy-man-vintage-image-GraphicsFairy.jpg',
    ]
}

let actTurn = 0;

let enHealth = document.getElementById('en-health')
let plHealth = document.getElementById('pl-health')
let plGuard = document.getElementById('pl-guard')
let amount = document.getElementById('amount')
let plSpecialty = document.getElementById('special-bar')

enHealth.innerText = enemy.health.toString();
plHealth.innerText = player.health.toString();
plGuard.innerText = player.guard.toString();
plSpecialty.innerText = player.specialty.toString();

amount.innerText = item.amount.toString();

function draw() {
    
}

function slap() {
    var attack = enemy.health - player.attack;
    if (enemy.attack[3] || enemy.attack[4]) {
        enemy.guard - player.attack;
    }
    enemy.health = attack;
    enHealth.innerText = enemy.health.toString();
    draw();
}

function specialAct() {
    if (enemy.attack[3] || enemy.attack[4]) {
        enemy.health - Math.floor(player.attack * 0.75);
    }
    enemy.health - Math.floor(player.attack * Math.floor(Math.random() * (4 - 2)));
    draw();
}

function plItem() {
    var item = player.attack * item.modifier;
    if (item.amount == 0) {
        item.amount = item.amount + 0;
    } else {
    item.amount = item.amount --;
    player.attack = item; 
    }
    draw();
}

function guard() {
    if (player.guard = 0) {
        return null;
    }
    var block = player.guard - enemy.attack
    draw();
}