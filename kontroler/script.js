function emojiHorn() {
    const hornElement = document.querySelector(".horn");

    if (hornElement) {
        hornElement.addEventListener("click", function() {
            console.log("Horn");
        });
    }
}

function emojiTop() {
    const topElement = document.querySelector(".emoji-top");

    if (topElement) {
        topElement.addEventListener("click", function() {
            console.log("top klik");
        });
    }
}

function emojiBottom() {
    const bottomElement = document.querySelector(".emoji-bottom");

    if (bottomElement) {
        bottomElement.addEventListener("click", function() {
            console.log("bottom klick");
        });
    }
}

function emojiRight() {
    const rightElement = document.querySelector(".emoji-right");

    if (rightElement) {
        rightElement.addEventListener("click", function() {
            console.log("right klik");
        });
    }
}

function emojileft() {
    const leftElement = document.querySelector(".emoji-left");

    if (leftElement) {
        leftElement.addEventListener("click", function() {
            console.log("left klik");
        });
    }
}

emojiHorn();
emojiTop();
emojiBottom();
emojiRight();
emojileft();