import { CardState } from "./CardState";
import { CardType } from "./types";

const TYPES: CardType[] = ['bee', 'campfire', 'carrot', 'cheese', 'diamond', 'leaf', 'heart', 'map', 'mushroom', 'treasure'];

export class PairsGameState {
  cards: CardState[] = [];

  constructor() {
    this.randomize();
  }

  /**
   * Dynamic list of all cards that have been flipped over, but not marked as found.
   */
  get flipped() {
    return this.cards.filter((card) => card.flipped.current && !card.found.current);
  }

  /**
   * Flip the given card, if possible, then check to see if the flipped cards are the same.
   */
  flipCard(card: CardState) {
    if ((this.flipped.length < 2 || card.flipped.current) && !card.found.current) {
      card.flipped.current = !card.flipped.current;
      this.checkFlipped();
      this.checkAll();
    }
  }

  /**
   * Check to see if there are two flipped cards, and if they are the same, then mark them as found
   * so that they stay flipped, otherwise, flip them back over automatically after 1 second.
   */
  checkFlipped() {
    const { flipped } = this;

    if (flipped.length === 2) {
      if (flipped[0].type.current === flipped[1].type.current) {
        flipped[0].found.current = true;
        flipped[1].found.current = true;
      } else {
        this.shakeAndResetFlipped();
      }
    }
  }

  
  shakeAndResetFlipped() {
    setTimeout(() => {
      this.flipped.forEach(({ shake }) => shake.current = true);
    }, 500);
    setTimeout(() => {
      this.flipped.forEach(({ flipped }) => flipped.current = false);
    }, 1500);
  }

  /**
   * Check to see if all of the pairs have been found. If so, reset the board.
   */
  checkAll() {
    if (this.cards.every((card) => card.found.current)) {
      setTimeout(() => {
        this.cards.forEach((card) => {
          card.flipped.current = false;
          card.found.current = false;
        });
      }, 2000);
      setTimeout(() => {
        this.randomize();
      }, 3000);
    }
  }

  randomize() {
    this.cards = [];
    const unused = new Map(TYPES.map((type) => [type, 2]));

    while (unused.size > 0) {
      const entries = Array.from(unused.entries());
      const [type, count] = entries[Math.floor(Math.random() * entries.length)];
      this.cards.push(new CardState(type));

      if (count === 1) {
        unused.delete(type);
      } else {
        unused.set(type, count - 1);
      }
    }
  }
}
