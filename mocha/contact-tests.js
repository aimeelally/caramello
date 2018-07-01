import Contact from '../src/classes/Contact.js';

var test = window.unitjs;

var contact = new Contact();

// CONTACT CLASS
describe('Contact', function() {
  it('Should be a function', function(){
    test.assert(typeof Contact === 'function');
  });

  it('Should send a form without error', function(done) {
    this.timeout(5000);
    var form = JSON.stringify({
      name: 'aimee',
      email: 'aimee@test.com',
      message: 'TEST: aimee is testing'
    });

    contact.sendMessage(form)
    .then(function(err) {
      if (!err) done();
      else done(err);
    });
  });


});

export default {};