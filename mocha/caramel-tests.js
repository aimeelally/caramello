import Caramel from '../src/classes/Caramel.js';

var test = window.unitjs;

var caramel = new Caramel();

// CARAMEL CLASS
describe('Caramel', function(){
  it('Should be a function', function(){
    test.assert(typeof Caramel === 'function');
  });

  it('Should strip simple html', function(){
    var sampleHTML = '<p>this is a paragraph</p>';
    var result = caramel.stripHTML(sampleHTML);
    test.assert(result === 'this is a paragraph');
  });

  it('Should capitalise the first letter of a string', function(){
    var sampleString = 'lorem ipsum something something';
    var result = caramel.capitaliseFirstLetter(sampleString);
    test.assert(result === 'Lorem ipsum something something');
  });

  it('Should convert a string to camel case', function(){
    var sampleString = 'lorem ipsum something something';
    var result = caramel.convertToCamelCase(sampleString);
    test.assert(result === 'loremIpsumSomethingSomething');
  });

  it('Should strip numbers from a string', function(){
    var sampleString = 'lorem ips8um somet3hing somet6hing';
    var result = caramel.stripNumbers(sampleString);
    test.assert(result === 'lorem ipsum something something');
  });

  it('Should strip special characters from a string', function(){
    var sampleString = 'lorem ips!@£$%^&*()_+-=#[]{}\'\"|<>?,./um something something';
    var result = caramel.stripSpecialCharacters(sampleString);
    test.assert(result === 'lorem ipsum something something');
  });
  
});

export default {};