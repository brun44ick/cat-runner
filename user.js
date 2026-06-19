class User {
    constructor() {
        this.points = 0
        this.highScore = 0
        this.fish = 0
        this.currCat = "1"
    }
}

class Cat {
    constructor(canvas, catData) {
        this.canvas = canvas
        this.catData = catData
        this.ctx = canvas.getContext("2d");
        this.x = 50
        this.y = this.canvas.height -50
        this.loadImage()
    }
    loadImage() {
        this.image = new Image()
        this.image.src = this.catData.image;
        this.image.style.width = "50px";
        this.ctx.drawImage(image, this.x , this.y, 50,50)
    }
}

class CatMananger {
    constructor() {
        this.cats = [
            {
                id: 1,
                name: 'Barik',
                age: 11,
                background: 'Кот с зоомагазина',
                habits: 'Любит сбегать из дома',
                bio: 'Старый, но боевой',
                image: "src/zhozhik.jpg"
            }, 

        ]
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById("game")
        this.ctx = this.canvas.getContext("2d");

        this.catMananger = new CatMananger()
        this.cat = new Cat(this.canvas, this.catMananger.cats[0])
        console.log(this.catMananger.cats[0])
    }
}

window.addEventListener('DOMContentLoaded', () => {
    game = new Game();
});