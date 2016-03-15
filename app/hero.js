System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, email, password, name, howDidYouFindUs) {
                    this.id = id;
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.howDidYouFindUs = howDidYouFindUs;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map