import { GalleryItem } from '../models/content.model';

const TOTAL_GALLERY_ITEMS = 60;

export const GALLERY_ITEMS: GalleryItem[] = Array.from(
  { length: TOTAL_GALLERY_ITEMS },
  (_, index) => {
    const itemNumber = String(index + 1).padStart(2, '0');
    const source = `foto/galeri/kenangan-${itemNumber}.jpg`;

    return {
      id: `gallery-${itemNumber}`,
      type: 'image',
      title: `Kenangan ${itemNumber}`,
      caption: 'Potongan momen seru kita yang selalu enak buat diulang lagi.',
      thumbnail: source,
      source,
    } satisfies GalleryItem;
  }
);
