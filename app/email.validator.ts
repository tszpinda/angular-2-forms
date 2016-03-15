import {Directive, Provider, forwardRef} from 'angular2/core';
import {NG_VALIDATORS, Validator, Control} from 'angular2/common';

const EMAIL_VALIDATOR = new Provider(NG_VALIDATORS, {useExisting: forwardRef(() => EmailValidator), multi: true});

@Directive({
    selector: '[my-email-validator]',
    providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {

    validate(c: Control): {[key: string]: any} {
        var inputValue = c.value;
        console.log('validating...', inputValue);
        if(inputValue == null)
            return null; 

        var dotAt = inputValue.lastIndexOf('.');
        var atAt = inputValue.lastIndexOf('@');
        var len = inputValue.length;

        if(dotAt > 0 && atAt > 0 && len > 3) {
            if(atAt < len - 3 && dotAt != len - 1 && atAt < dotAt)
                return null;

        }

        return {'emailValidation': 'Email is invalid'};
    }

}
