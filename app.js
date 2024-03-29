/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var CheaterComponent = (function () {
    function CheaterComponent() {
        this.name = 'Alice';
        this.isSearched = false;
    }
    CheaterComponent.prototype.searchName = function (sName) {
        this.name = sName;
        this.isSearched = true;
    };
    CheaterComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.searchName($event.target.value);
            $event.target.value = null;
        }
    };
    CheaterComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n\t<h1 *ng-if=\"isSearched\">{{ name }}, is a Cheater!!!</h1>\n\t<input #nametext (keyup)=\"doneTyping($event)\">\n\t<button (click)=\"searchName(nametext.value)\">Search Name</button>",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], CheaterComponent);
    return CheaterComponent;
})();
angular2_1.bootstrap(CheaterComponent);
