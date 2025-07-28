function displayMousePosition(division = 1){
    push();
    text("mouse X: "+floor(mouseX/division)*division, 0, 20);
    text("mouse Y: "+floor(mouseY/division)*division, 0, 35)
    pop();
}

function displayFrameRate(division=1){
    push();
    text("Frame Count: "+floor(frameCount/division), 0, 50);
    pop();
}

class Button{
    constructor(x,y,w,h, color = 255){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    
        this.display = function(){
            push();
            fill(color);
            rect(x,y,w,h);
            pop();
        }

        this.mouseIn = function(){
            if( (mouseX>=x && mouseX<= x+w) && (mouseY>=y && mouseY<= y+h) ){
                return true;
            }
            else{
                return false;
            }
        }
    }

    
}