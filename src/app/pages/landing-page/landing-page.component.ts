import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RandomMemoryCardComponent } from '../../components/random-memory-card/random-memory-card.component';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, RandomMemoryCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {}
