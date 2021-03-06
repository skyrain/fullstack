import { Component } from '@angular/core';
import { Person } from './Person';
import { PersonService } from './person.service'

@Component({
    // use relative path
    moduleId: module.id,

    selector: 'person-form',
    templateUrl: 'person-form.component.html'
})

export class PersonFormComponent {
    public submitted: boolean = false;
    public person: Person = new Person('tianyu', 'qiu');
    //TODO should exist better way to do this
    public active: boolean = true;

    private errorMessage: string;

    constructor(private personSvc: PersonService) { }


    public newPerson() {
        this.person = new Person('', '');
        this.active = false;
        setTimeout(() => { this.active = true }, 0);
    }

    public onSubmit() {
        this.submitted = true;

        this.personSvc.addPerson(this.person)
            .subscribe(
            person => console.log(person.firstName + person.lastName),
            error => this.errorMessage = <any>error);
    }

}
