import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RANDOM_MEMORIES } from '../../data/random-memories';

@Component({
  selector: 'app-random-memory-card',
  templateUrl: './random-memory-card.component.html',
  styleUrl: './random-memory-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomMemoryCardComponent {
  protected readonly memories = RANDOM_MEMORIES;
  protected readonly currentMemory = signal(RANDOM_MEMORIES[0]);

  protected showRandomMemory(): void {
    const nextMemory = this.memories[Math.floor(Math.random() * this.memories.length)];
    this.currentMemory.set(nextMemory);
  }
}
