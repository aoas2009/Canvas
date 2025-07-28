//Crie os corpos aqui:
function setup() {
    createCanvas(1200, 920);

    clearButton = new Button(700, 10, 90, 80);
    strokeButton = new Button(575, 17.5, 105, 22.5);
    // RgbButton = new Button()
    redRGB = new Button(320, 10, 130, 25);
    greenRGB = new Button(320, 35, 130, 25);
    blueRGB = new Button(320, 60, 130, 25);

    whiteButton = new Button(10, 50, 55, 35, "white");
    redButton = new Button(75, 50, 55, 35, "red");
    blackButton = new Button(10, 10, 55, 35, "black");
    yellowButton = new Button(75, 10, 55, 35, "yellow");
    blueButton = new Button(140, 10, 55, 35, "blue");
    greenButton = new Button(140, 50, 55, 35, "green");
    orangeButton = new Button(205, 10, 55, 35, "orange");
    purpleButton = new Button(205, 50, 55, 35, "purple");
}

let division = 20
let color = "black"
let strokeX = 627.5
let redX = 320;
let greenX = 320;
let blueX = 320;
let corP5;


function draw() {
    let redMap = floor(map(redX, 320, 450, 0, 255));
    let greenMap = floor(map(greenX, 320, 450, 0, 255));
    let blueMap = floor(map(blueX, 320, 450, 0, 255));
    // let corP5 = p5.color(redMap, greenMap, blueMap);
    
    // background(255);
    // drawGrid(700,20, true);
    push();
    strokeWeight(5);
    fill(0,0,0,0);
    rect(2.5, 2.5, 1195, 915);
    fill(255,255, 255)
    rect(0, 0, 800, 100);
    pop();
       // Background do menu
    
    // displayMousePosition(10);
    // Interface
    clearButton.display();
    push();
    textSize(25);
    text("clear", 720, 55);
    pop();
    
    push();
    fill("gray");
    rect(562.5, 15, 125, 25);
    strokeWeight(2.5)
    line(675, 27.5, 580, 27.5);
    fill(255)
    ellipse(strokeX, 27.5, 15);
    textSize(20);
    fill(0)
    text(division, 530, 35)
    pop();

    push();
    rectMode(CENTER);
    fill("gray")
    rect(627.5, 67.5, 40, 40);
    fill(color);
    rect(627.5, 67.5, division, division);
    pop();

    push();
    fill("darkred");
    rect(310, 10, 150, 25);
    fill("darkgreen");
    rect(310, 35, 150, 25);
    fill("darkblue");
    rect(310, 60, 150, 25);
    fill("black");
    textSize(20);
    text("R:",280, 27.5);
    text("G:",280, 52.5);
    text("B:",282, 77.5);
    text(redMap, 475, 27.5);
    text(greenMap, 475, 52.5);
    text(blueMap, 475, 77.5);
    strokeWeight(2);
    line(320, 22.5, 450, 22.5);
    line(320, 47.5, 450, 47.5);
    line(320, 72.5, 450, 72.5);
    fill("white");
    ellipse(redX, 22.5, 15);
    ellipse(greenX, 47.5, 15);
    ellipse(blueX, 72.5, 15);
    pop();
    
    blueButton.display();
    redButton.display();
    blackButton.display();
    yellowButton.display();
    whiteButton.display();
    greenButton.display();
    orangeButton.display();
    purpleButton.display();

    // redRGB.display();
    // greenRGB.display();
    // blueRGB.display();
    

    let blockX = floor(mouseX/division)
    let blockY = floor(mouseY/division)
    
    // Interações com Mouse
    
    // Desenhar
    if(mouseIsPressed && mouseInCanvas()){
        push();
        if(typeof color[0] === "string"){
                fill(color);
                stroke(0, 0, 0, 0);
            }
            else{
                fill(color[0], color[1], color[2]);
                stroke(color[0], color[1], color[2]);
            }
        // fill(color);
        // stroke(color);
        rect(blockX*division, blockY*division, division, division);
        pop();
    }
    
    if(mouseIsPressed){
        if(clearButton.mouseIn()){
            push();
            fill(255);
            stroke(255);
            rect(0,0,1200,1000);
            pop();
        }
        else if(strokeButton.mouseIn()){
            strokeX = mouseX
            division = floor(map(strokeX, 575, 680, 10, 30))
        }

        else if(redRGB.mouseIn()){
            redX = mouseX;
            color = [redMap, greenMap, blueMap]
            
        }
        else if(greenRGB.mouseIn()){
            greenX = mouseX;
            color = [redMap, greenMap, blueMap]
        }

        else if(blueRGB.mouseIn()){
            blueX = mouseX;
            color = [redMap, greenMap, blueMap]
        }

        else if(whiteButton.mouseIn()){
            color = "white";
            redX = 450
            greenX = 450
            blueX = 450
        }
        else if(blueButton.mouseIn()){
            color = "blue";
            redX = 320
            greenX = 320
            blueX = 450
        }
        else if(redButton.mouseIn()){
            color = "red";
            redX = 450
            greenX = 320
            blueX = 320
        }
        else if(blackButton.mouseIn()){
            color = "black";
            redX = 320
            greenX = 320
            blueX = 320
        }
        else if(yellowButton.mouseIn()){
            color = "yellow";
            redX = 450
            greenX = 450
            blueX = 320
        }
        else if(greenButton.mouseIn()){
            color = "green";
            redX = 320
            greenX = 450
            blueX = 320
        }
        else if(orangeButton.mouseIn()){
            color = "orange";
            redX = 450
            greenX = 404.5
            blueX = 320
        }
        else if(purpleButton.mouseIn()){
            color = "purple";
            redX = 386
            greenX = 320
            blueX = 386
        }
        
        
    }

}

function keyPressed(){
    
}

function mouseInCanvas(){
    if(mouseY>=100){
        return true;
    }
    else{
        return false;
    }
}
