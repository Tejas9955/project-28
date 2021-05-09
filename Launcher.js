class Launcher {
    constructor(bodyA,pointB){
  
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.04,
           length:10
        }
        this.pointB=pointB
        this.Launcher=Constraint.create(options);
        World.add(world,this.Launcher);
    }
    fly(){
        this.Launcher.bodyA=null;
    }
      display(){
          if(this.Launcher.bodyA){
      var pointA=this.Launcher.bodyA.position;
      var pointB=this.pointB;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
          }
      }
  }