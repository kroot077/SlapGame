let player = {
    health: 50,
    specialty: 10,
    guard: 15,
    attack: 3
}

let item = {
    modifier: 2,
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

let hit = 0;
let actTurn = 0;

enHealth.innerText = enemy.health.toString();
plHealth.innerText = player.health.toString();
plGuard.innerText = player.guard.toString();
plSpecialty.innerText = player.specialty.toString();

amount.innerText = item.amount.toString();

function cycle() {
    if (player.health <= 0 || enemy.health <=0) {
        document.getElementById('slap').disabled = true;
        document.getElementById('special').disabled = true;
        document.getElementById('item').disabled = true;
        document.getElementById('guard').disabled = true;
    } else {
        document.getElementById('en-health').innerText = enemy.health;
        document.getElementById('pl-health').innerText = player.health;
        document.getElementById('pl-guard').innerText = player.guard;
        document.getElementById('special-bar').innerText = player.specialty;
        document.getElementById('amount').innerText = item.amount;
    }
}

function slap() {
    var attack = enemy.health - player.attack;
    enemy.health = attack;
    hit ++;
    cycle();
}

function specialAct() {
    var sp = enemy.health - Math.floor(player.attack * Math.floor(Math.random() * (4 - 2)));
    if (player.specialty <= 0) {
        document.getElementById('special').disabled = true;
    }
    enemy.health = sp;
    hit ++;
    cycle();
}

function plItem() {
    var item = player.attack * item.modifier;
    if (item.amount <= 0) {
        document.getElementById('item').disabled = true;
    } else {
    item.amount --;
    player.attack = item; 
    }
    cycle();
}

function guard() {
    if (player.guard == 0) {
        document.getElementById('guard').disabled = true;
    }
    var block = player.guard - enemy.attack
    cycle();
}

cycle()