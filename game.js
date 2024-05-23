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

function increasePoints() {
    points = points + 1
    tracker.innerText = points + " Deaths"
}
function purchaseKnife() {
    if (points >= 10) {
        points = points - 10
        tracker.innerText = points + " Deaths"
        knife = knife + 1
        knifeAmmount.innerText = knife + " Knives Owned"
    } else {
        alert("Not enough deaths! You need at least 10 deaths to buy a Knife")
    }
}
function purchaseDynamite() {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
    } else {
        alert("Not enough deaths! You need at least 50 deaths to buy Dynamite")
    }
}
function purchaseBomb() {
    if (points >= 250) {
        points = points - 250
        tracker.innerText = points + " Deaths"
        bomb = bomb + 1
        bombAmmount.innerText = bomb + " Bombs Owned"
    } else {
        alert("Not enough deaths! You need at least 250 deaths to buy Bombs")
    }
}
function purchaseMissile() {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points + " Deaths"
        missile = missile + 1
        missileAmmount.innerText = missile + " Missiles Owned"
    } else {
        alert("Not enough deaths! You need at least 500 deaths to buy Missiles")
    }
}
function purchaseNuke() {
    if (points >= 1000) {
        points = points - 1000
        tracker.innerText = points + " Deaths"
        nuke = nuke + 1
        nukeAmmount.innerText = nuke + " Nukes Owned"
    } else {
        alert("Not enough deaths! You need at least 10000 deaths to buy Nukes")
    }
}
function gameLoop() {
    points = points + (0.2 * knife)
    tracker.innerText = points.toFixed(2) + " Deaths"
}
setInterval(gameLoop, 1000)