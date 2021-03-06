import Physics from './physics';
import MovingObject from './moving_object';
import Cannon from './cannon';
import Cannonball from './cannonball';

const DEFAULTS = {
  COLOR: '#ca271c',
  RADIUS: 15,
  SPEED: 1
};

class Bubble extends MovingObject{
  constructor(options = {}) {
    options.color = Physics.randomColor();
    options.radius = DEFAULTS.RADIUS;
    options.pos = options.pos || options.game.randomPosition(options.radius);
    // console.log('my position: ', options.pos);
    options.vel = options.vel || Physics.randomVec(DEFAULTS.SPEED);
    // console.log('my velocity: ', options.vel);
    super(options);
    // debugger;
  }

  bounce(x, y, otherObject) {
    this.vel = [x, y];
    this.pos = [this.pos[0] + x, this.pos[1] + y];
  }

  collideWith(otherObject) {
    if (otherObject instanceof Cannon) {
      // replace with bounce
      // otherObject.relocate();
      console.log("collideWith Cannon");
      return true;
    } else if (otherObject instanceof Cannonball) {
      // bubble disappears, actually they both disappear, depending on the level
      // in level one they both disappear
      // in level two only the cannonball disappears
      // debugger;
      this.remove();
      otherObject.remove();

      return true;
    }
  }
}

export default Bubble;
