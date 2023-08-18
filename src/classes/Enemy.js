import K from "../kaboom";
import enemySprite from "../../assets/images/sprites/enemy.png";
import { getRandomNumber } from "../helpers/math";

K.loadSprite("enemy", enemySprite);

export class Enemy {
  constructor(position, spriteName, moveSpeed, scale) {
    const posX = getRandomNumber(
      position.top - K.height("enemy"),
      position.bottom + K.height("enemy")
    );
    this.sprite = K.add([
      K.sprite("enemy"),
      K.pos(500, posX),
      K.area(),
      K.scale(1),
      K.body(),
      enemyMovement(this),
      "enemy",
    ]);
  }
}

function enemyMovement() {
  return {
    add() {},
    update() {
      this.move(-100, 0);
    },
  };
}
