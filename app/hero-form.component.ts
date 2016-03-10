import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {

    powers = ['Smart ass', 'Gibby gobby'];

    model = new Hero(18, 'Dr Smart', this.powers[0], 'Chuck overstreet');

    submitted = false;
    onSubmit() {
        this.submitted = true;
    } 

  get diagnostic() { return JSON.stringify(this.model); }

}


