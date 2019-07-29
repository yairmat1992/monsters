//this is the object (replacement of array and based on class/constructor)
const monsters = {
    "Fogscreamer": new Monster("Fogscreamer", "green", "https://www.playmonster.com/wp-content/uploads/2019/02/Entbrat.png"),
    "Vampling": new Monster("Vampling", "green", "https://i.pinimg.com/736x/b2/53/36/b25336fe10b2e2fbb709889f9b3e74c1--cartoon-monsters-cute-monsters.jpg"),
    "Brinelich": new Monster("Brinelich", "blue", "https://keystoclarity.com/wp-content/uploads/2013/06/Monsters_Dance_Green.png")
}
//buttons&container
const container = document.querySelector("#container");
const genBTN = document.querySelector("#generate")
genBTN.addEventListener("click", generate)
const re_locateBTN = document.querySelector("#relocate")
re_locateBTN.addEventListener("click", generate)


//generating the object in a random position
function generate() {
    for (let monster in monsters) {
        monsters[monster].x = apllyLocation(10, 500) + "px"
        monsters[monster].y = apllyLocation(10, 500) + "px"
    }
    draw()
    console.log(monsters)
}
//math random function -can be apply by using parameters x&y
function apllyLocation(x, y) {
    return Math.floor(Math.random() * (x - y)) + y;
}

//drawing to the dom and clearing the dom in order to prevent duplications
function draw() {
    clear()
    for (let monster in monsters) {
        container.append(monsters[monster].createMonsterUI())
    }
}
function clear() {
    container.innerHTML = ""
}

//up&down functions using the Y axis
function moveUp(monsterName) {
    monsters[monsterName].y = `${parseInt(monsters[monsterName].y) - 10}px`
}

function moveDown(monsterName) {
    monsters[monsterName].y = `${parseInt(monsters[monsterName].y) + 10}px`
}


//up&down functions using the X axis
function moveRight(monsterName) {
    monsters[monsterName].x = `${parseInt(monsters[monsterName].x) + 10}px`
}

function moveLeft(monsterName) {
    monsters[monsterName].x = `${parseInt(monsters[monsterName].x) - 10}px`
}
//the select function- based on the  definition of the"this=false" lacated in the constructor
function selectMonster(monsterName) {

    monsters[monsterName].selected = true
    //'ready to use' function from the internet-based on arrow keys code event
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                moveLeft(monsterName);
                draw()
                break;
            case 38:
                moveUp(monsterName);
                draw()
                break;
            case 39:
                moveRight(monsterName);
                draw()
                break;
            case 40:
                moveDown(monsterName);
                draw()
                break;
        }
    };
}

//need to fugure it out!!!!!!!!


//Object.prototype.len = function len() {
   // let some = 0
   // foreach(Object.keys.length)
   // return some++
//}


//for (let monster in monsters) {
  //  monsters[monster].__proto__.len = function len() {
    //    return Monster.keys

    //}
//}


