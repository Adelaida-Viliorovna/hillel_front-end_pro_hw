let ladder = {
    step: 0, 

    up: function () {
        this.step++;
        return this; 
        // return this.step++;
    },

    down: function () {
        this.step--;
        return this; 
        // return this.step--;
    },

    showStep: function () {
        console.log(this.step);
        return this; 
        // return console.log(this.step);
    }
};

ladder.up().up().down().showStep(); // 1
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
