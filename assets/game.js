let player = {
    health: 100,
    specialty: 30,
    guard: 15,
    attack: 4
}

let tonic = {
    modifier: 3,
    amount: 1
}

let protein = {
    modifier: 15,
    amount: 2
}

let milk = {
    modifier: 10,
    amount: 2
}

let enemy = {
    health: 120,
    attacks: ['slap1', 'slap2', 'slap3', 'slap4', 'slap5', 'wallop']
}

let hit = 0;

function cycle() {
    if (player.health <= 0) {
        document.getElementById('pl-health').innerText = 'KO';
        document.getElementById('slap').disabled = true;
        document.getElementById('special').disabled = true;
        document.getElementById('paddler').disabled = true;
        document.getElementById('guard').disabled = true;
        document.getElementById('tonic').disabled = true;
        document.getElementById('protein').disabled = true;
        document.getElementById('milk').disabled = true;
    }
    else if (enemy.health <= 0) {
        document.getElementById('en-health').innerText = 'KO';
        document.getElementById('slap').disabled = true;
        document.getElementById('special').disabled = true;
        document.getElementById('paddler').disabled = true;
        document.getElementById('guard').disabled = true;
        document.getElementById('tonic').disabled = true;
        document.getElementById('protein').disabled = true;
        document.getElementById('milk').disabled = true;
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
//tests correctly

function backHand() {
    var sp = enemy.health - Math.floor(player.attack * Math.floor(Math.random() * (4 - 2) + 2));
    var spDown = player.specialty - 6;
    if (player.specialty <= 0) {
        document.getElementById('special').disabled = true;
    } else {
        enemy.health = sp;
        player.specialty = spDown;
        hit ++;       
    } 
    enAction();
    cycle();
}
//tests correctly

function paddler() {
    var paddle = Math.floor(player.attack * Math.floor(Math.random() * (3 - 1) + 1));
    var spDown = player.specialty - 12;
    if (player.specialty <= 0) {
        document.getElementById('special').disabled = true;
    } else {
        player.specialty = spDown
        for (let i = 0 ; i <= 3 ; i++) {
            enemy.health = enemy.health - paddle;
            hit ++;
        }
    }
    enAction();
    cycle();
}

function guard() {
    var block = player.guard - 5;
    var health = player.health + 10;
    if (player.guard <= 0) {
        document.getElementById('guard').disabled = true;
    } else {
        player.guard = block;
        player.health = health;
    }
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

function resetBtn() {
    player.health = 100;
    player.specialty = 30;
    player.guard = 15;
    player.attack = 4;
    tonic.amount = 1;
    protein.amount = 2;
    milk.amount = 2;
    enemy.health = 120;
    hit = 0;
    cycle();
}

cycle();