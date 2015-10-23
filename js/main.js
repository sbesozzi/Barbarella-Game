import $ from 'jquery';
import _ from 'underscore';

import GoodGuy from './goodguy';
import BadGuy from './badguy';

// Good Guy Instance
let barbarella = new GoodGuy();

// Bad Guy Instance
let budgies = new BadGuy();
// let dolls = new BadGuy();
// let tyrant = new BadGuy();

// Select DOM Nodes
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');
let ggAttack = $('.ggAttack');

//Show default health
ggHealth.text(barbarella.health);
bgHealth.text(budgies.health);

// Setting up .on events
ggAttack.on('click', function() {
  // Create random hit points
  // Good Guy attack!
  let num = _.random(0, 25);
    budgies.hit(num);

  // If bad guy health <= to 0...
  if (budgies.health <= 0) {
    // bgHealth.text('Blasted!');
    alert('Barbarella Wins!');

  // Else bad guy health alert 
  } else {
    var bgHealth = document.getElementbyId("bgHealth");
    bgHealth.value = barbarella.hit(20);
    bgHealth.text(budgies.health);
    alert('Killer Budgies Attacking!!!');

    // // Good guy health show color change
    var ggHealth = document.getElementById("ggHealth");
    ggHealth.value = budgies.hit(5);

    // ggHealth.css('color', 'red');
    ggHealth.text(barbarella.health);
    // setTimeout( function() {
    //   ggHealth.css('color', 'purple');
    // }, 1000);
  };

    console.log(budgies);
  
});


