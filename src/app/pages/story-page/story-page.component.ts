import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STORY_SECTIONS } from '../../data/story-sections';

@Component({
  selector: 'app-story-page',
  imports: [CommonModule],
  templateUrl: './story-page.component.html',
  styleUrl: './story-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryPageComponent {
  protected readonly storySections = STORY_SECTIONS;
}
