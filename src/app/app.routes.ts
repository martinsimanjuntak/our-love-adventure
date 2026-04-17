import { Routes } from '@angular/router';
import { EndingPageComponent } from './pages/ending-page/ending-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { StoryPageComponent } from './pages/story-page/story-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'story', component: StoryPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'secret', component: SecretPageComponent },
  { path: 'ending', component: EndingPageComponent },
  { path: '**', redirectTo: '' },
];
