import CamelService from '../src/services/CamelService.js';
var test = window.unitjs;
describe('CamelService', function(){
  it('Return an array containing a function', function(){
    test.assert(typeof CamelService[0] === 'function');
  });

  it('Should strip simple html', function(){
    var service = CamelService[0]();
    var sampleHTML = '<p>this is a paragraph</p>';
    var result = service.stripHTML(sampleHTML);
    test.assert(result === 'this is a paragraph');
  });
  
});

export default {};