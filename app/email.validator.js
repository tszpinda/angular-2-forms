System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var EMAIL_VALIDATOR, EmailValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            EMAIL_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, { useExisting: core_1.forwardRef(function () { return EmailValidator; }), multi: true });
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.prototype.validate = function (c) {
                    var inputValue = c.value;
                    console.log('validating...', inputValue);
                    if (inputValue == null)
                        return null;
                    var dotAt = inputValue.lastIndexOf('.');
                    var atAt = inputValue.lastIndexOf('@');
                    var len = inputValue.length;
                    if (dotAt > 0 && atAt > 0 && len > 3) {
                        if (atAt < len - 3 && dotAt != len - 1 && atAt < dotAt)
                            return null;
                    }
                    return { 'emailValidation': 'Email is invalid' };
                };
                EmailValidator = __decorate([
                    core_1.Directive({
                        selector: '[my-email-validator]',
                        providers: [EMAIL_VALIDATOR]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailValidator);
                return EmailValidator;
            }());
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
//# sourceMappingURL=email.validator.js.map