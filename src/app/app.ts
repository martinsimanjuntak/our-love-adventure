import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteShellComponent } from './components/site-shell/site-shell.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
