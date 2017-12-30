import { Directive } from '@angular/core'
import { Validator, FormGroup, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
    selector: '[validate-location]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {

    validate(c: AbstractControl): { [key: string]: any; } {
        const formGroup = <FormGroup>c
        const root  = <FormGroup>c.root

        const addressControl = formGroup.controls['address']
        const cityControl = formGroup.controls['city']
        const countryControl = formGroup.controls['country']
        const onlineUrlControl = root.controls['onlineUrl']

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
