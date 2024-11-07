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

////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////

function toggleSettings() {
    const settingsPage = document.querySelector('#settings-page');
    settingsPage.classList.toggle('active'); 

}

////////////////////////////////////////////////////////////////////////

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

}

////////////////////////////////////////////////////////////////////////

const joystick = document.querySelector("#joystick");
const innerCircle = document.querySelector("#inner-circle");

let isDragging = false;
let startX, startY;


let maxMoveRadius = (joystick.offsetWidth - innerCircle.offsetWidth) / 2;

innerCircle.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    innerCircle.style.cursor = "grabbing";

});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < maxMoveRadius) {
        innerCircle.style.left = `calc(50% + ${deltaX}px)`;
        innerCircle.style.top = `calc(50% + ${deltaY}px)`;
    } else {
        let angle = Math.atan2(deltaY, deltaX);
        innerCircle.style.left = `calc(50% + ${maxMoveRadius * Math.cos(angle)}px)`;
        innerCircle.style.top = `calc(50% + ${maxMoveRadius * Math.sin(angle)}px)`;
    }

    const direction = getDirection(deltaX, deltaY);
    console.log("Direction:", direction);

});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        innerCircle.style.left = "50%";
        innerCircle.style.top = "50%";
        innerCircle.style.cursor = "grab";
        isDragging = false;
    }

});

function getDirection(x, y) {
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle >= -45 && angle <= 45) return "Right";
    if (angle > 45 && angle < 135) return "Up";
    if (angle >= 135 || angle <= -135) return "Left";
    if (angle < -45 && angle > -135) return "Down";
    return "Center";

}

////////////////////////////////////////////////////////////////////////

const serviceUuid = "19b10010-e8f2-537e-4f6c-d104768a1214";
let myCharacteristic;
let myValue = 0;
let myBLE;

function setup() {
    myBLE = new p5ble();
    createCanvas(200, 200);
    textSize(20);
    textAlign(CENTER, CENTER);

    const connectButton = createButton("Connect");
    connectButton.mousePressed(connectToBle);

}

function connectToBle() {
    myBLE.connect(serviceUuid, gotCharacteristics);

}

function gotCharacteristics(error, characteristics) {
    if (error) console.log("error: ", error);
    console.log("characteristics: ", characteristics);
    myCharacteristic = characteristics[0];
    myBLE.read(myCharacteristic, gotValue);

}

function gotValue(error, value) {
    if (error) console.log("error: ", error);
    console.log("value: ", value);
    myValue = value;
    myBLE.read(myCharacteristic, gotValue);

}

function draw() {
    background(250);
    text(myValue, 100, 100);

}

function toggleArrow() {
    const arrowToggle = document.querySelector("#arrow-toggle");
    const joystick = document.querySelector("#joystick");
    const arrowButtons = document.querySelector("#arrow-buttons");

    if (arrowToggle.checked) {
        joystick.style.display = "none";         
        arrowButtons.style.display = "grid";     
    } else {
        joystick.style.display = "block";        
        arrowButtons.style.display = "none";    
    }
}

document.querySelector("#arrow-toggle").addEventListener("change", toggleArrow);

toggleArrow();

function toggleSettings() {
    const settingsPage = document.querySelector('#settings-page');
    settingsPage.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const settingsPage = document.querySelector('#settings-page');
    const settingsIcon = document.querySelector('.settings-icon');

    if (settingsPage.classList.contains('active') && 
        !settingsPage.contains(event.target) && 
        !settingsIcon.contains(event.target)) {
        settingsPage.classList.remove('active');
    }
});
