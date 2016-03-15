import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';
import {EmailValidator} from './email.validator';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html',
    directives: [EmailValidator]
})
export class HeroFormComponent {

    active = true;
    howDidYouFindUsOptions = ['Am Just Smart ass', 'News'];
    //id, email, name, pass, how
    model = new Hero(18, 'dr@smart.com', 'longishPassword', 'Dr Awesome', this.howDidYouFindUsOptions[0]);

    submitted = false;
    onSubmit() {
        this.submitted = true;
    } 

    register() {
        this.model = new Hero(42, '', '', '');  
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    get diagnostic() { return JSON.stringify(this.model); }

}


