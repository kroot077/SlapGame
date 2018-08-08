let player = {
    health: 100,
    specialty: 30,
    guard: 25,
    attack: 3
}

let tonic = {
    modifier: 2,
    amount: 1
}

let protein = {
    modifier: 10,
    amount: 2
}

let milk = {
    modifier: 5,
    amount: 2
}

let enemy = {
    health: 75,
    specialty: 20,
    guard: 25,
    attacks: ['slap1', 'slap2', 'slap3', 'slap4', 'slap5', 'wallop'],
    appearance: [
        'dandy-man-vintage-image-GraphicsFairy.jpg',
    ]
}

let hit = 0;
let actTurn = 0;

function cycle() {
    if (player.health <= -10 || enemy.health <= -10) {
        document.getElementById('slap').disabled = true;
        document.getElementById('special').disabled = true;
        document.getElementById('paddler').disabled = true;
        document.getElementById('guard').disabled = true;
        document.getElementById('tonic').disabled = true;
        document.getElementById('protein').disabled = true;
        document.getElementById('milk').disabled = true;
        player.health = 0;
        enemy.health = 0;
    } else {
        document.getElementById('hits').innerText = hit.toString();
        document.getElementById('en-health').innerText = enemy.health.toString();
        document.getElementById('pl-health').innerText = player.health.toString();
        document.getElementById('pl-guard').innerText = player.guard.toString();
        document.getElementById('special-bar').innerText = player.specialty.toString();
        document.getElementById('amount').innerText = tonic.amount.toString();
        document.getElementById('amount2').innerText = protein.amount.toString();
        document.getElementById('amount3').innerText = milk.amount.toString();
    }
}

function enAction() {
    let action = enemy.attacks;
    let rand = action[Math.floor(action.length * Math.random())]
    let plHealth1 = player.health + Math.floor(Math.random() * (3-1) + 1);
    let plHealth2 = player.health + Math.floor(Math.random() * (4-10) + 4);
    let plHealth3 = player.health + Math.floor(Math.random() * (0-20) + 0);
    if (rand = action[0] || action[1] || action[2]) {
        player.health = plHealth1;
    }
    if (rand = action[3] || action[4]) {
        player.health = plHealth2;
    }
    if (rand = action[5]) {
        player.health = plHealth3;
    }
}

function slap() {
    var attack = enemy.health - player.attack;
    enemy.health = attack;
    hit ++;
    enAction();
    cycle();
} 

function plMuscle() {
    var muscle = Math.floor(player.attack) * Math.floor(tonic.modifier);
    var tncAmount = tonic.amount - 1;
    if (tonic.amount <= 0) {
        document.getElementById('tonic').disabled = true;
    } else {
        tonic.amount = tncAmount;
        player.attack = muscle;
    }
    enAction();
    cycle();
}

function plProtein() {
    var pr = Math.floor(player.specialty) + Math.floor(protein.modifier);
    var prAmount = protein.amount - 1;
    if (protein.amount <= 0) {
        document.getElementById('protein').disabled = true;
    } else {
        protein.amount = prAmount;
        player.specialty = pr;
    }
    enAction();
    cycle();
}

function plMilk() {
    var mk = Math.floor(player.guard) + Math.floor(milk.modifier);
    var mkAmount = milk.amount - 1;
    if (milk.amount <= 0) {
        document.getElementById('milk').disabled = true;
    } else {
        milk.amount = mkAmount;
        player.guard = mk;
    }
    enAction();
    cycle();
}