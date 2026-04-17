export interface StorySection {
  id: string;
  level: string;
  title: string;
  date: string;
  description: string;
  mood: string;
  accent: string;
  mediaLabel: string;
  mediaSource: string;
  mediaAlt: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  caption: string;
  thumbnail: string;
  source: string;
}

export interface QuizOption {
  text: string;
  feedback: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}
