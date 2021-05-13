var canvas=new fabric.Canvas("myCanvas")
var playerX=500,playerY=300,partWidth=30,partHeight=30;
var playerObject,partObject;

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        console.log(playerObject)
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject);
    });
}
function blockUpdate(partImage){
    fabric.Image.fromURL(partImage,function(Img){
        partObject=Img;
        console.log(partObject)
        partObject.scaleToWidth(partWidth)
        partObject.scaleToHeight(partHeight)
        partObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(partObject);
    });
}
playerUpdate()
window.addEventListener('keydown',keyDownAction)
function keyDownAction(event){
    console.log(event.keyCode)
    if(event.keyCode==65){
        goLeft()
    }
    if(event.keyCode==87){
        goUp()
    }
    if(event.keyCode==68){
        goRight()
    }
    if(event.keyCode==83){
        goDown()
    }
    if(event.keyCode==96){
        blockUpdate("captain_america_left_hand.png")
    }
    if(event.keyCode==97){
        blockUpdate("hulk_face.png")
    }
    if(event.keyCode==98){
        blockUpdate("hulk_left_hand.png")
    }
    if(event.keyCode==99){
        blockUpdate("hulk_right_hand.png")
    }
    if(event.keyCode==100){
        blockUpdate("hulk_legs.png")
    }
    if(event.keyCode==101){
        blockUpdate("ironman_face.png")
    }
    if(event.keyCode==102){
        blockUpdate("ironman_body.png")
    }
    if(event.keyCode==103){
        blockUpdate("ironman_left_hand.png")
    }
    if(event.keyCode==104){
        blockUpdate("ironman_right_hand.png")

 }
    if(event.keyCode==105){
        blockUpdate("ironman_legs.png")

 }
    if(event.keyCode==111){
        blockUpdate("spiderman_face.png")

 }
    if(event.keyCode==106){
        blockUpdate("spiderman_body.png")

 }
    if(event.keyCode==109){
        blockUpdate("spiderman_left_hand.png")

 }
    if(event.keyCode==107){
        blockUpdate("spiderman_right_hand.png")

 }
    if(event.keyCode==13){
        blockUpdate("spiderman_legs.png")

 }
    if(event.keyCode==110){
        blockUpdate("thor_face.png")

 }
    if(event.keyCode==17){
        blockUpdate("thor_left_hand.png")

 }
    if(event.keyCode==16){
        blockUpdate("thor_legs.png")

 }
 if(event.keyCode==77 && event.shiftKey==true){
    partWidth-=10
    partHeight-=10
    document.getElementById("currentW").textContent=blockWidth;
    document.getElementById("currentH").textContent=blockHeight;
}
if(event.keyCode==80 && event.shiftKey==true){
    blockWidth+=10
    blockHeight+=10
    document.getElementById("currentW").textContent=blockWidth;
    document.getElementById("currentH").textContent=blockHeight;
}


}
 function goLeft(){
    if(playerX>0){
        playerX-=30
        canvas.remove(playerObject)
        playerUpdate()
    
    }
 }
 function goUp(){
    if(playerY>0){
        playerY-=30
        canvas.remove(playerObject)
        playerUpdate()
    
    }
 }
 function goRight(){
    if(playerX<850){
        playerX+=30
        canvas.remove(playerObject)
        playerUpdate()
    
 } }
   function goDown(){
    if(playerY<460){
        playerY+=30
        canvas.remove(playerObject)
        playerUpdate()
    
    }
}  
