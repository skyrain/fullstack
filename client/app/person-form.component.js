"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Person_1 = require('./Person');
var person_service_1 = require('./person.service');
var PersonFormComponent = (function () {
    function PersonFormComponent(personSvc) {
        this.personSvc = personSvc;
        this.submitted = false;
        this.person = new Person_1.Person('tianyu', 'qiu');
        // should exist better way to do this
        this.active = true;
    }
    PersonFormComponent.prototype.newPerson = function () {
        var _this = this;
        this.person = new Person_1.Person('', '');
        this.active = false;
        setTimeout(function () { _this.active = true; }, 0);
    };
    PersonFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //test restful api
        this.personSvc.getPerson().then(function (person) { return console.log(person.firstName); });
    };
    PersonFormComponent = __decorate([
        core_1.Component({
            // use relative path
            moduleId: module.id,
            selector: 'person-form',
            templateUrl: 'person-form.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], PersonFormComponent);
    return PersonFormComponent;
}());
exports.PersonFormComponent = PersonFormComponent;
//# sourceMappingURL=person-form.component.js.map