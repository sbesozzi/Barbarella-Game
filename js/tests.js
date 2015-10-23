import GoodGuy from './goodguy';
import BadGuy from './badguy';

(function() {
  'use strict';

// Good Guy
  describe('About good guy', function() {

    // Before Each instance
    beforeEach(function() {
      window.x = new GoodGuy();
    });

    describe('create a good guy', function(){
      it('should create an instance of good guy', function () {
        // let x = new GoodGuy();
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
      // let x = new GoodGuy();
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function() {
      it('should lower score, after getting hit', function() {
      // let x = new GoodGuy();
        x.hit();
        expect(x.health).to.be.below(100);
       });
    });

  });

}());
