import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ejercicio-2';
  botonVisible = true;

  constructor(private router: Router) {}

  redirigirAOtraPagina() {
    this.router.navigate(['formulario']);

    this.botonVisible = false;
  }
}
