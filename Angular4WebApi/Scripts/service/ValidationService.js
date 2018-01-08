"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.nospaceValidator = function (control) {
        var re = / /;
        if (control.value && control.value.match(re)) {
            return { nospace: true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=ValidationService.js.map