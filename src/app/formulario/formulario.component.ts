import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formulario: FormGroup;
  mostrarCamposExtras = false;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [
        Validators.maxLength(45),
        CustomValidators.NoEmptyValidator(),
        CustomValidators.WhiteSpaceAtStartEndValidator(),
        CustomValidators.NoSpecialCharactersValidator()
      ]],
      fechaNacimiento: ['',[
      CustomValidators.NoEmptyValidator(),
      CustomValidators.MaxDateOfBirthValidator()]],
      nit: ['', [
        Validators.required,
        CustomValidators.NitValidator()
      ]],
      comentario: ['', [
        Validators.maxLength(200),
        CustomValidators.NoEmptyValidator(),
        CustomValidators.WhiteSpaceAtStartEndValidator(),
        CustomValidators.NoSpecialCharactersValidator()
      ]],
      nuevoIngreso: [false],
      telefonoEmergencia: [''],
      direccion: ['']
    });

    this.formulario.get('nuevoIngreso')!.valueChanges.subscribe((value) => {
      const telefonoEmergenciaControl = this.formulario.get('telefonoEmergencia');
      const direccionControl = this.formulario.get('direccion');

      if (value) {
        telefonoEmergenciaControl!.setValidators(Validators.required);
        direccionControl!.setValidators(Validators.required);
      } else {
        telefonoEmergenciaControl!.clearValidators();
        direccionControl!.clearValidators();
      }

      telefonoEmergenciaControl!.updateValueAndValidity();
      direccionControl!.updateValueAndValidity();
    });
  }

  validarCampo(campo: string) {
    const control = this.formulario.get(campo);

    if (control) {
      if (control.dirty) {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    }
  }

  guardar() {
    if (this.formulario.valid) {
      console.log('Nuevo ingreso activado:', this.formulario.get('nuevoIngreso')!.value);

      console.log(this.formulario.value);
    } else {
      console.log('El formulario no es válido. Corrija los siguientes errores:');
      Object.keys(this.formulario.controls).forEach(field => {
        const control = this.formulario.get(field);
        if (control && control.invalid) {
          console.log(`${field}:`, control.errors);
        }
      });
    }
  }

  limpiar() {
    this.formulario.reset();
  }

  validarNombre() {
    const nombreControl = this.formulario.get('nombre');
    if (nombreControl) {
      nombreControl.updateValueAndValidity();
    }
  }

  mostrarLimiteAlcanzado(campo: string, limite: number) {
    const control = this.formulario.get(campo);

    if (control && control.value.length === limite) {
      console.log(`¡Se ha alcanzado el límite de ${limite} caracteres en el campo "${campo}"!`);
    }
  }
}
