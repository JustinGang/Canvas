/**
 * Created by mac on 16/6/28.
 */



(function(){

    function Main(){
        this._context2d = document.getElementById("canvas").getContext("2d");

        this._infoDiv = document.getElementById("info");
        this._currenTime = 0;

        this._r = new ucai.Rect(100, 100);
        this._r.x = 200;
        this._r.y = 200;
        this._r.regX = 50;
        this._r.regY = 50;
        this.render(this._currentTime);
    }

    Main.prototype.render = function(time){
        var deltaTime = time - this._currentTime;
        this._r.rotation += .01;

        this._r.draw(this._context2d);

        requestAnimationFrame(this.render.bind(this));
    };


    new Main();

})();