import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ending-page',
  imports: [RouterLink],
  templateUrl: './ending-page.component.html',
  styleUrl: './ending-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndingPageComponent {}
