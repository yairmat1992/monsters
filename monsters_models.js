//this is the class body allow us to use methods
class Monster {
    constructor(name, color, image_adress) {
        this.id = `${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.color = color;
        this.image_adress = image_adress
        this.x = "0px"
        this.y = "0px"
        this.selected = false

    }
    //does not working
    //////////////////////////
    // Monster.prototype.keys = function () {
    //   return this.firstName + " " + this.lastName;
    //};

    //creating the monster container and define the 'select' cleacking event
    createMonsterUI() {
        const monsterUI = document.createElement("div");
        monsterUI.style.left = this.x;
        monsterUI.style.top = this.y;
        monsterUI.style.display = "inline-block"
        monsterUI.style.position = "relative"
        monsterUI.style.textAlign = "center"
        monsterUI.style.backgroundColor = "pink"
        monsterUI.addEventListener("click", function () {
            selectMonster(monster_name.innerHTML)
            monsterUI.style.border = "red solid 2px"
        })
        //the boolean of the selected UI
        if (!this.selected) { monsterUI.style.border = "none" }
        //the monster UI elements,keys,and values
        ///////////////////////////////////////////////////
        const monster_name = document.createElement("h4")
        monster_name.innerText = this.name
        monster_name.style.backgroundColor = "pink"
        const monsterImg = document.createElement("img");
        monsterImg.src = this.image_adress;
        monsterImg.width = 200;
        monsterImg.height = 200;
        monsterImg.style.border = "pink dashed 3px"
        ///////////////////////////////////////////////////
        const rightBtn = document.createElement("button")
        rightBtn.style.position = "absolute"
        rightBtn.style.bottom = "100px"
        rightBtn.style.left = "198px"
        rightBtn.innerHTML = "right"
        rightBtn.classList.add("btn", "btn-info")
        rightBtn.addEventListener("click", function () {
            moveRight(monster_name.innerText)
            draw()
        })
        ///////////////////////////////////////////////////
        const leftBtn = document.createElement("button")
        leftBtn.style.position = "absolute"
        leftBtn.style.top = "100px"
        leftBtn.style.right = "199px"
        leftBtn.innerHTML = "left"
        leftBtn.classList.add("btn", "btn-info")
        leftBtn.addEventListener("click", function () {
            moveLeft(monster_name.innerText)
            draw()
        })
        ///////////////////////////////////////////////////
        const upBtn = document.createElement("button")
        upBtn.style.position = "absolute"
        upBtn.style.bottom = "237px"
        upBtn.style.left = "70px"
        upBtn.innerText = "up"
        upBtn.classList.add("btn", "btn-info")
        upBtn.addEventListener("click", function () {
            moveUp(monster_name.innerText)
            draw()
        })
        ///////////////////////////////////////////////////
        const downBtn = document.createElement("button")
        downBtn.style.position = "absolute"
        downBtn.style.top = "237px"
        downBtn.style.left = "63px"
        downBtn.innerHTML = "down"
        downBtn.classList.add("btn", "btn-info")
        downBtn.addEventListener("click", function () {
            moveDown(monster_name.innerText)
            draw()
        })
        //appensding all of the 'ingredients' into the monster UI container
        monsterUI.append(monsterImg, monster_name, upBtn, downBtn, rightBtn, leftBtn);
        return monsterUI
    }
}
console.log(monsters);

/*
does not working

if (!Object.keys) {
    Object.keys = function len(obj) {
        var keys = [],
            k;
        for (k in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, k)) {
                keys.push(k);
            }
        }
        console.log(Object.keys.length);

    };
}



Object.prototype.lenght = function (obj) {
    var len = Object.keys(obj).length;
    return len
}

*/

