let points = 0
let tracker = document.getElementById("tracker")
let dynamite = 0
let dynamiteAmmount = document.getElementById("dynamite")
let knife = 0
let knifeAmmount = document.getElementById("knife")


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
        alert("Not enough deaths! You need at least 10 deaths to buy a knife")
    }
}
function purchaseDynamite() {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
    } else {
        alert("Not enough deaths! You need at least 50 deaths to buy dynamite")
    }
}
