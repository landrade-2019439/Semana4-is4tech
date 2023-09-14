import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    // Agregar el icono de copiar al elemento
    this.addCopyIcon();
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Eliminar el icono de copiar cuando el mouse sale
    this.removeCopyIcon();
  }

  @HostListener('click') onClick() {
    // Copiar el valor del elemento al portapapeles (sin el emoji)
    this.copyToClipboard();
  }

  private addCopyIcon() {
    const icon = document.createElement('div');
    icon.textContent = '📋'; // Puedes cambiar este contenido a cualquier otro ícono o texto
    icon.style.cursor = 'pointer';
    icon.style.display = 'inline-block';
    icon.style.marginLeft = '5px';
    this.el.nativeElement.appendChild(icon);
  }

  private removeCopyIcon() {
    const icons = this.el.nativeElement.querySelectorAll('div');
    icons.forEach((icon: Element) => {
      icon.remove();
    });
  }

  private copyToClipboard() {
    const valueToCopy = this.el.nativeElement.textContent;
    const tempInput = document.createElement('input');
    // Remover el emoji antes de copiar
    const valueWithoutEmoji = valueToCopy.replace('📋', '');
    tempInput.value = valueWithoutEmoji;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
}
