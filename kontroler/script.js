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
            console.log("top emoji klik");
        });
    }
}

function emojiBottom() {
    const bottomElement = document.querySelector(".emoji-bottom");

    if (bottomElement) {
        bottomElement.addEventListener("click", function() {
            console.log("bottom emoji klick");
        });
    }
}

function emojiRight() {
    const rightElement = document.querySelector(".emoji-right");

    if (rightElement) {
        rightElement.addEventListener("click", function() {
            console.log("right emoji klik");
        });
    }
}

function emojileft() {
    const leftElement = document.querySelector(".emoji-left");

    if (leftElement) {
        leftElement.addEventListener("click", function() {
            console.log("left emoji klik");
        });
    }
}

emojiHorn();
emojiTop();
emojiBottom();
emojiRight();
emojileft();

function arrowUp() {
    const upElement = document.querySelector(".arrow-up");

    if (upElement) {
        upElement.addEventListener("click", function() {
            console.log("up klik")
        })
    }
}

function arrowDown() {
    const downElement = document.querySelector(".arrow-down");

    if (downElement) {
        downElement.addEventListener("click", function() {
            console.log("down klik")
        })
    }
}

function arrowLeft() {
    const leftElement = document.querySelector(".arrow-left");

    if (leftElement) {
        leftElement.addEventListener("click", function() {
            console.log("left klik")
        })
    }
}

function arrowRight() {
    const rightElement = document.querySelector(".arrow-right");

    if (rightElement) {
        rightElement.addEventListener("click", function() {
            console.log("right klik")
        })
    }
}

arrowUp();
arrowDown();
arrowLeft();
arrowRight();

function toggleSettings() {
    const settingsPage = document.getElementById('settings-page');
    settingsPage.classList.toggle('active'); 
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
