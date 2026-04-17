import { QuizQuestion } from '../models/content.model';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'quiz-1',
    question: 'Di manakah tempat kita jadian?',
    options: [
      {
        text: 'Pom Bensin',
        feedback: 'Belum tepat. Bukan di sini tempat resminya hubungan ini dimulai.',
      },
      {
        text: 'Mixue Cengkareng',
        feedback: 'Yap, bener banget. Di sinilah momen jadian itu resmi terjadi.',
        isCorrect: true,
      },
      {
        text: 'Jus Kode',
        feedback: 'Masih salah, coba inget lagi tempat yang paling spesial itu.',
      },
    ],
  },
  {
    id: 'quiz-2',
    question: 'Apa makanan kesukaan Maxvania?',
    options: [
      {
        text: 'Ramen Seroikya',
        feedback: 'Bener. Ini makanan kesukaan Maxvania.',
        isCorrect: true,
      },
      {
        text: 'Misop Silimbat',
        feedback: 'Belum tepat, bukan ini jawabannya.',
      },
      {
        text: 'Ketoprak Tebet',
        feedback: 'Salah tipis, tapi bukan ini yang paling disuka.',
      },
    ],
  },
  {
    id: 'quiz-3',
    question: 'Hewan apa yang tidak punya tempat tinggal?',
    options: [
      {
        text: 'Kucing',
        feedback: 'Bukan, masih belum tepat.',
      },
      {
        text: 'Anjing',
        feedback: 'Masih salah, coba pilih yang paling receh jawabannya.',
      },
      {
        text: 'Pinguin',
        feedback: 'Benar, Karena Pinguingsi',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'quiz-4',
    question: 'Siapa artis kesukaan Maxvania?',
    options: [
      {
        text: 'Tulus',
        feedback: 'Bukan, belum tepat.',
      },
      {
        text: 'Uan Juicy Luicy',
        feedback: 'Masih belum, coba inget lagi.',
      },
      {
        text: 'Zayn',
        feedback: 'Zayn memang artis favorit, tapi orang favoritnya adalah Martin.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'quiz-5',
    question: 'Apa yang bikin hubungan ini jadi lebih dewasa?',
    options: [
      {
        text: 'Kita',
        feedback: 'Bener. Ini termasuk salah satu jawaban bonus yang benar.',
        isCorrect: true,
      },
      {
        text: 'Dua-duanya',
        feedback: 'Betul juga. Jawaban bonus ini juga benar.',
        isCorrect: true,
      },
      {
        text: 'Kebersamaan',
        feedback: 'Iya, ini juga benar. Bonus question jadi aman.',
        isCorrect: true,
      },
    ],
  },
];
