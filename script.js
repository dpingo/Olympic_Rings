console.log("canvas")
var canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")


ctx.font = "22px Comic Sans MS";
ctx.fillStyle = "#ad6cd9";
ctx.fillText("At least one of the Olympic Rings' colors appears in every national flag.", 45, 75);
//rectangle
ctx.beginPath()
ctx.strokeStyle="grey"
ctx.lineWidth=2
ctx.rect(250,200,275,150)
ctx.stroke()
//circle
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=4
ctx.arc(300,250,40,0,2*Math.PI)
//ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="#fcba03"
ctx.lineWidth=4
ctx.arc(340,300,40,0,2*Math.PI)
//ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=4
ctx.arc(387,250,40,0,2*Math.PI)
//ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=4
ctx.arc(430,300,40,0,2*Math.PI)
//ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=4
ctx.arc(477,250,40,0,2*Math.PI)
//ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
ctx.stroke()

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "#de507d";
ctx.fillText("Olympic rings", 300, 500);

