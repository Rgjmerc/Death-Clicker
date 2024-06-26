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
let kCost = 10
let knifeCost = document.getElementById("knifeCost")
let dCost = 50
let dynamiteCost = document.getElementById("dynamiteCost")
let bCost = 250
let bombCost = document.getElementById("bombCost")
let mCost = 500
let missileCost = document.getElementById("missileCost")
let nCost = 1000
let nukeCost = document.getElementById("nukeCost")

let bgMusic = new Howl({
    src: ["audio/bgmusic.ogg"],
    autoplay: true,
    volume: .65,
    loop: true
})

let knifesound = new Howl({
    src: ["audio/knife.mp3"],
    volume: .4
})

let deathsound = new Howl({
    src: ["audio/click.ogg"]
})

let dynamitesound = new Howl({
    src: ["audio/Dynamite.mp3"],
    volume: .5
})

let bombsound = new Howl({
    src: ["audio/bomb.mp3"],
    volume: .25
})

let missilesound = new Howl({
    src: ["audio/missile.mp3"],
    volume: 2
})

let nukesound = new Howl({
    src: ["audio/nuke.mp3"]
})

function muteMusic() {
    document.getElementById("mutebutton").style.display = "none"
    document.getElementById("playbutton").style.display = "inline-block"
    bgMusic.pause()
}
function playMusic() {
    document.getElementById("playbutton").style.display = "none"
    document.getElementById("mutebutton").style.display = "inline-block"
    bgMusic.play()
}
function increasePoints() {
    deathsound.play()
    points = points + 1 + (knife * .2)
    tracker.innerText = points.toFixed(1) + " Deaths"
}
function purchaseKnife() {
    knifesound.play()
    kCost = 10 + knife ** 2.25
    if (points >= kCost) {
        points = points - kCost
        tracker.innerText = points.toFixed(1) + " Deaths"
        knife = knife + 1
        knifeAmmount.innerText = knife + " Knives Owned"
        knifeCost.innerText = ("Cost: ") + (10 + knife ** 2.25).toFixed(1)
    } else {
        alert("Not enough deaths!")
    }
}
function purchaseDynamite() {
    dynamitesound.play()
    dCost = 250 + dynamite ** 2.75
    if (points >= dCost) {
        points = points - dCost
        tracker.innerText = points.toFixed(1) + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
        dynamiteCost.innerText = ("Cost: ") + (250 + dynamite ** 2.75).toFixed(1)
    } else {
        alert("Not enough deaths!")
    }
}
function purchaseBomb() {
    bombsound.play()
    bCost = 750 + bomb ** 3.25
    if (points >= bCost) {
        points = points - bCost
        tracker.innerText = points.toFixed(1) + " Deaths"
        bomb = bomb + 1
        bombAmmount.innerText = bomb + " Bombs Owned"
        bombCost.innerText = ("Cost: ") + (750 + bomb ** 3.25).toFixed(1)
    } else {
        alert("Not enough deaths!")
    }
}
function purchaseMissile() {
    missilesound.play()
    mCost = 2500 + missile ** 3.75
    if (points >= mCost) {
        points = points - mCost
        tracker.innerText = points.toFixed(1) + " Deaths"
        missile = missile + 1
        missileAmmount.innerText = missile + " Missiles Owned"
        missileCost.innerText = ("Cost: ") + (2500 + missile ** 3.75).toFixed(1)
    } else {
        alert("Not enough deaths!")
    }
}
function purchaseNuke() {
    nukesound.play()
    nCost = 10000 + nuke ** 4.25
    if (points >= nCost) {
        points = points - nCost
        tracker.innerText = points.toFixed(1) + " Deaths"
        nuke = nuke + 1
        nukeAmmount.innerText = nuke + " Nukes Owned"
        nukeCost.innerText = ("Cost: ") + (10000 + nuke ** 4.25).toFixed(1)
    } else {
        alert("Not enough deaths!")
    }
}
function gameLoop() {
    points = points + (1 * dynamite) + (10 * bomb) + (25 * missile) + (50 * nuke) 
}
function checker() {
    tracker.innerText = points.toFixed(1) + " Deaths"
    cps = (1 * dynamite) + (10 * bomb) + (25 * missile) + (50 * nuke) 
    cpsAmmount.innerText = cps + " deaths per second"
    if (points < 10 + knife ** 2.25) {
        document.getElementById("knifebtn").disabled = true;
    }else{
        document.getElementById("knifebtn").disabled = false;
    }
    if (points < 250 + dynamite ** 2.75) {
        document.getElementById("dynamitebtn").disabled = true;
    }else{
        document.getElementById("dynamitebtn").disabled = false;
    }
    if (points < 750 + bomb ** 3.25) {
        document.getElementById("bombbtn").disabled = true;
    }else{
        document.getElementById("bombbtn").disabled = false;
    }
    if (points < 2500 + missile ** 3.75) {
        document.getElementById("missilebtn").disabled = true;
    }else{
        document.getElementById("missilebtn").disabled = false;
    }
    if (points < 10000 + nuke ** 4.25) {
        document.getElementById("nukebtn").disabled = true;
    }else{
        document.getElementById("nukebtn").disabled = false;
    }
}

setInterval(gameLoop, 1000)
setInterval(checker, 1)
