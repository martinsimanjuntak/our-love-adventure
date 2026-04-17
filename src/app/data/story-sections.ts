import { StorySection } from '../models/content.model';

export const STORY_SECTIONS: StorySection[] = [
  {
    id: 'level-1',
    level: 'Chapter 01',
    title: 'Awal bermula dari hubungan',
    date: '30 April 2022',
    description:
      'Semua ini awalnya gara-gara si Alvin yang mau ngejodohin kita. Lucunya, di awal kita berdua sama-sama gak mau, tapi entah kenapa tetep lanjut ngobrol dan interaksi lewat WA, sampai akhirnya cerita ini pelan-pelan mulai kebentuk.',
    mood: 'Ga ada perasaan, tapi entah kenapa kayak ada yang nuntun.',
    accent: 'linear-gradient(135deg, rgba(141, 92, 246, 0.95), rgba(255, 179, 159, 0.9))',
    mediaLabel: 'Interaksi pertama',
    mediaSource: 'foto/kenalan-pertama.jpg',
    mediaAlt: 'Kenangan foto kenalan pertama',
  },
  {
    id: 'level-2',
    level: 'Chapter 02',
    title: 'Momen PDKT',
    date: '30 April 2022 - 30 April 2023',
    description:
      'Setelah mulai chat, kita jadi sering cerita soal diri kita masing-masing, keseharian, dan hal-hal random yang kita lakuin. Kalau dibilang ini PDKT, sebenarnya juga kayak bukan PDKT, karena kita gak pernah ngebahas ke arah hubungan pacaran. Tapi waktu itu kita udah sering banget telponan, hampir tiap malam, dan semuanya jalan mulus tanpa beban. Ujung-ujungnya, itu semua malah berubah jadi kebiasaan yang bikin kita makin nyambung.',
    mood: 'PDKT yang aneh tapi menyenangkan.',
    accent: 'linear-gradient(135deg, rgba(255, 179, 159, 0.95), rgba(141, 92, 246, 0.88))',
    mediaLabel: 'Mulai deket',
    mediaSource: 'foto/pdkt-web.jpg',
    mediaAlt: 'Foto tahap PDKT',
  },
  {
    id: 'level-3',
    level: 'Chapter 03',
    title: 'Momen Jadian',
    date: '30 April 2023',
    description:
      'Di momen jadian ini, yang paling membekas adalah waktu kamu sempat bimbang soal hubungan ini mau dibawa ke mana. Kamu juga sempat ragu buat lanjutin. Tapi di saat itu kita ngobrol dan sama-sama sepakat kalau hubungan ke tahap yang lebih serius memang jadi tujuan kita berdua. Tepat setelah 1 tahun kita jalanin masa PDKT, akhirnya kita resmi berpacaran.',
    mood: 'Awal mulai journey hubungan dimulai.',
    accent: 'linear-gradient(135deg, rgba(141, 92, 246, 0.92), rgba(255, 154, 179, 0.88))',
    mediaLabel: 'Hari kita jadian',
    mediaSource: 'foto/jadian-web.jpg',
    mediaAlt: 'Foto momen jadian',
  },
  {
    id: 'level-4',
    level: 'Chapter 04',
    title: 'Masa Pacaran',
    date: '30 April 2023 - Selamanya',
    description:
      'Sudah 3 tahun kita jalanin hubungan ini, dan maunya bakal terus selamanya. Banyak hal yang udah kita lewatin bareng, dari yang seru sampai yang bikin capek juga. Kita masih sering egois, sering berantem karena hal kecil maupun besar, bahkan pernah gak saling ngobrol selama beberapa hari. Tapi di balik itu semua, hubungan ini tetep terasa seru dan menyenangkan buat dijalanin. Seiring waktu berjalan, hubungan kita juga ikut tumbuh jadi lebih kuat.',
    mood: 'Perjalanan yang seru dan akan tetap seru.',
    accent: 'linear-gradient(135deg, rgba(255, 182, 193, 0.92), rgba(141, 92, 246, 0.88))',
    mediaLabel: 'Masa pacaran',
    mediaSource: 'foto/pacaran-web.jpg',
    mediaAlt: 'Foto masa pacaran',
  },
];
