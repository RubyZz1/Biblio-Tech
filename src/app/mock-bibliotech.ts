import { Book } from './bibliotech';
import { Page } from './bibliotech';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Titre du livre 1',
    resume: 'Résumé du livre 1',
    image: 'url_de_l_image_1',
    createdAt: new Date('2024-04-02'),
    updatedAt: new Date('2024-04-02'),
  },
  {
    id: 2,
    title: 'Titre du livre 2',
    resume: 'Résumé du livre 2',
    image: 'url_de_l_image_2',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-01'),
  },
];

export const PAGE: Page[] = [
  {
    id: 1,
    title: 'Première Page',
    content: 'Contenu de la première page.',
    createdAt: new Date('2024-04-06'),
    updateAt: new Date('2024-04-06')
},
{
    id: 2,
    title: 'Deuxième Page',
    content: 'Contenu de la deuxième page.',
    createdAt: new Date('2024-04-05'),
    updateAt: new Date('2024-04-05')
}
];