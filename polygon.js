class Polygon{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r
        //this.height=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        image(polygon_img,pos.x,pos.y,30,30)
    }
      
}