let points = 0
let tracker = document.getElementById("tracker")
let dynamite = 0
let dynamiteAmmount = document.getElementById("dynamite")
let knife = 0
let knifeAmmount = document.getElementById("knife")
let bomb = 0
let bombAmmount = document.getElementById("bomb")
let missile = 0
let missileAmmount = document.getElementById("missile")
let nuke = 0
let nukeAmmount = document.getElementById("nuke")
let cps = 0
let cpsAmmount = document.getElementById("cps")

function increasePoints() {
    points = points + 1 + (knife * .2)
    tracker.innerText = points.toFixed(2) + " Deaths"
}
function purchaseKnife() {
    if (points >= 100) {
        points = points - 100
        tracker.innerText = points.toFixed(2) + " Deaths"
        knife = knife + 1
        knifeAmmount.innerText = knife + " Knives Owned"
    } else {
        alert("Not enough deaths! You need at least 100 deaths to buy a Knife")
    }
}
function purchaseDynamite() {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points.toFixed(2) + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
    } else {
        alert("Not enough deaths! You need at least 500 deaths to buy Dynamite")
    }
}
function purchaseBomb() {
    if (points >= 2500) {
        points = points - 2500
        tracker.innerText = points.toFixed(2) + " Deaths"
        bomb = bomb + 1
        bombAmmount.innerText = bomb + " Bombs Owned"
    } else {
        alert("Not enough deaths! You need at least 2500 deaths to buy Bombs")
    }
}
function purchaseMissile() {
    if (points >= 5000) {
        points = points - 5000
        tracker.innerText = points.toFixed(2) + " Deaths"
        missile = missile + 1
        missileAmmount.innerText = missile + " Missiles Owned"
    } else {
        alert("Not enough deaths! You need at least 5000 deaths to buy Missiles")
    }
}
function purchaseNuke() {
    if (points >= 10000) {
        points = points - 10000
        tracker.innerText = points.toFixed(2) + " Deaths"
        nuke = nuke + 1
        nukeAmmount.innerText = nuke + " Nukes Owned"
    } else {
        alert("Not enough deaths! You need at least 10000 deaths to buy Nukes")
    }
}
function gameLoop() {
    points = points + (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    cps = (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    tracker.innerText = points.toFixed(2) + " Deaths"
    cpsAmmount.innerText = cps + " deaths per second"
}
setInterval(gameLoop, 1000)