import { Directive } from '@angular/core'
import { Validator, FormGroup, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
    selector: '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {

    validate(c: AbstractControl): { [key: string]: any; } {
        let formGroup = <FormGroup>c
        let root  = <FormGroup>c.root

        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']
        let onlineUrlControl = root.controls['onlineUrl']

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null
        } else {
            return { validateLocation: false }
        }
    }

    registerOnValidatorChange?(fn: () => void): void {
    }
    
}