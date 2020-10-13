(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(400, 250);
        createPlatform(170, 460, 0.5);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);

createPlatform(420, 470);           // normal platform
createPlatform(100, 250, 0.3)       // small horizontal platform (30% the normal width)
createPlatform(300, 600, 0.1, 12)   // tall vertical wall (30% the normal width and 10x the height)

createCollectable(type.steve, 200, 400, 4, 0.3)
createCollectable(type.db, 200, 405, 4 ,0.3)
createCollectable(type.kennedi, 50, 600, 10, 0.1)
createCollectable(type.max, 160, 420, 5, 0.4)

createCannon("top", 300, 200)
createCannon("bottom", 200, 400)
createCannon("left", 400, 1000)
createCannon("right",5000,700)



