import { Letters } from '../data/Letters';
import { CategoryList } from '../data/CategoryList';

export class Randomizer {
  private static previousCategories: number[] = [];

  static getRandomCategories(count: number) {
    const categories: number[] = [];

    while (categories.length < count) {
      const next = this.random(CategoryList.length);
      if (this.previousCategories.indexOf(next) === -1
        && categories.indexOf(next) === -1) {
        categories.push(next);
      }
    }

    this.previousCategories = categories;
    return categories.map((index) => CategoryList[index]);
  }

  private static unseenLetters = Letters;
  static getRandomLetter() {
    if (this.unseenLetters.length === 0) this.unseenLetters = Letters;
    const nextLetter = this.unseenLetters[this.random(this.unseenLetters.length)];
    this.unseenLetters = this.unseenLetters.replace(nextLetter, '');
    return nextLetter;
  }

  private static random(max: number) {
    return Math.floor(Math.random() * max);
  }
}
