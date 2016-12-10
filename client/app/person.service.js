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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// use enhanced Observable implementation toPromise method
require("rxjs/add/operator/toPromise");
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        //!!! need "http://" in front
        this.personsUrl = 'http://192.168.1.105:8080';
        //send data needs header info
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    PersonService.prototype.addPerson = function (person) {
        return this.http.post(this.personsUrl + "/addPerson", { person: person }, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PersonService.prototype.getPersons = function () {
        return this.http.get(this.personsUrl + "/persons")
            .map(this.extractData)
            .catch(this.handleError);
    };
    PersonService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PersonService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map