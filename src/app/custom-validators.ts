import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

// A) NoSpecialCharactersValidator
export class CustomValidators {
  static NoSpecialCharactersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pattern = /^[a-zA-Z0-9\s]*$/;
      const isValid = pattern.test(control.value);

      if (!isValid) {
        return { noSpecialCharacters: 'El campo no debe contener caracteres especiales. Solo se permiten letras y números.' };
      }

      return null;
    };
  }

  // B) NoEmptyValidator
  static NoEmptyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value || value.trim() === '') {
        return { noEmpty: 'El campo no puede estar vacío.' };
      }

      return null;
    };
  }

  // C) WhiteSpaceAtStartEndValidator
  static WhiteSpaceAtStartEndValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && (value.startsWith(' ') || value.endsWith(' '))) {
        return { whiteSpaceAtStartEnd: 'No deben haber espacios en blanco al principio o al final del campo.' };
      }

      return null;
    };
  }

  // D) NitValidator
  static NitValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pattern = /^\d{4}\d{3}\d{1}$/; // Define tu patrón para NIT
      const value = control.value;

      if (!value || pattern.test(value)) {
        return null;
      }

      return { nitInvalid: 'El formato del NIT es incorrecto. Debe tener el formato XXXXXXX.' };
    };
  }

  static MaxDateOfBirthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentDate = new Date();
      const selectedDate = new Date(control.value);

      if (selectedDate > currentDate) {
        return { maxDateOfBirth: 'No es permitido seleccionar una fecha mayor a la actual' }; // Fecha de nacimiento mayor a la fecha actual
      }

      return null; // Fecha de nacimiento válida
    };
  }
}
