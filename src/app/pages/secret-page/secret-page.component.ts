import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrl: './secret-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretPageComponent {}
