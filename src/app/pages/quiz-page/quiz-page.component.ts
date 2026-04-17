import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { QUIZ_QUESTIONS } from '../../data/quiz-questions';
import { QuizOption } from '../../models/content.model';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPageComponent {
  protected readonly questions = QUIZ_QUESTIONS;
  protected readonly selectedAnswers = signal<Record<string, QuizOption>>({});
  protected readonly answeredCount = computed(
    () => Object.keys(this.selectedAnswers()).length
  );
  protected readonly correctCount = computed(
    () => Object.values(this.selectedAnswers()).filter((answer) => answer.isCorrect).length
  );
  protected readonly allAnswered = computed(
    () => this.answeredCount() === this.questions.length
  );
  protected readonly passed = computed(
    () => this.allAnswered() && this.correctCount() === this.questions.length
  );

  protected chooseAnswer(questionId: string, option: QuizOption): void {
    this.selectedAnswers.update((current) => ({ ...current, [questionId]: option }));
  }

  protected resetQuiz(): void {
    this.selectedAnswers.set({});
  }
}
