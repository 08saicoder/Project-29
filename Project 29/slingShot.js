class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        World.add(world, this.polygonImage);
    }

    fly(){
        this.sling.bodyA = null;
    }


}