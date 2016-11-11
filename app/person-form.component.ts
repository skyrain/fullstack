import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
    // use relative path
    moduleId: module.id,

    selector: 'person-form',
    templateUrl: 'person-form.component.html'
})

export class PersonFormComponent {

}
