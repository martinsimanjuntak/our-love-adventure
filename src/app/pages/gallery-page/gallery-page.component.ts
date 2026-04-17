import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { GALLERY_ITEMS } from '../../data/gallery-items';
import { GalleryItem } from '../../models/content.model';

const GALLERY_TRACKS = [
  'foto/music/5 Seconds of Summer - She Looks So Perfect (Lyric Video).mp3',
  'foto/music/Harry Styles - Sweet Creature (Audio).mp3',
] as const;

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPageComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly backgroundAudio = viewChild<ElementRef<HTMLAudioElement>>('backgroundAudio');
  protected readonly activeTrack = GALLERY_TRACKS[Math.floor(Math.random() * GALLERY_TRACKS.length)];
  protected readonly galleryItems = GALLERY_ITEMS;
  protected readonly firstColumn = this.galleryItems.filter((_, index) => index % 3 === 0);
  protected readonly secondColumn = this.galleryItems.filter((_, index) => index % 3 === 1);
  protected readonly thirdColumn = this.galleryItems.filter((_, index) => index % 3 === 2);
  protected readonly isMusicPlaying = signal(false);
  protected readonly musicReady = signal(true);

  constructor() {
    afterNextRender(() => {
      void this.tryAutoPlay();

      const resumeOnFirstInteraction = () => {
        void this.tryAutoPlay();
      };

      window.addEventListener('pointerdown', resumeOnFirstInteraction, { once: true });
      window.addEventListener('keydown', resumeOnFirstInteraction, { once: true });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('pointerdown', resumeOnFirstInteraction);
        window.removeEventListener('keydown', resumeOnFirstInteraction);
      });
    });
  }

  protected async toggleMusic(): Promise<void> {
    const audio = this.backgroundAudio()?.nativeElement;
    if (!audio || !this.musicReady()) {
      return;
    }

    if (audio.paused) {
      try {
        audio.volume = 0.35;
        await audio.play();
        this.isMusicPlaying.set(true);
      } catch {
        this.musicReady.set(false);
      }
      return;
    }

    audio.pause();
    this.isMusicPlaying.set(false);
  }

  protected handleAudioError(): void {
    this.musicReady.set(false);
    this.isMusicPlaying.set(false);
  }

  private async tryAutoPlay(): Promise<void> {
    const audio = this.backgroundAudio()?.nativeElement;
    if (!audio || !this.musicReady() || !audio.paused) {
      return;
    }

    try {
      audio.volume = 0.35;
      await audio.play();
      this.isMusicPlaying.set(true);
    } catch {
      this.isMusicPlaying.set(false);
    }
  }
}
