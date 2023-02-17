function Bellboy(yoe,name,work) {
    this.yoe=yoe;
    this.name=name;
    this.work=work;
    this.clean=function()
    {
        alert("Cleaning in progress");
    }
}

var callboy=new Bellboy(9,"Sam",["Lobby"]);

callboy.name();