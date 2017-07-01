const chai = require('chai');
const assert = chai.assert;
const amareis = require('./index');

describe('I Am, you are, he, she, it is', function() {
  it('should return "am" on "I"', function(done) {
    var am = amareis('I');
    assert.equal(am, 'am');
    done();
  });
  it('should return "are" on "we"', function(done) {
    var are = amareis('we');
    assert.equal(are, 'are');
    done();
  });
  it('should return "are" on "you"', function(done) {
    var are = amareis('you');
    assert.equal(are, 'are');
    done();
  });
  it('should return "is" on "he"', function(done) {
    var is = amareis('he');
    assert.equal(is, 'is');
    done();
  });
  it('should return "is" on "she"', function(done) {
    var is = amareis('she');
    assert.equal(is, 'is');
    done();
  });
  it('should return "is" on "it"', function(done) {
    var is = amareis('it');
    assert.equal(is, 'is');
    done();
  });
  it('should return "are" on "they"', function(done) {
    var are = amareis('they');
    assert.equal(are, 'are');
    done();
  });
  it('should return "is" on singular cases', function(done) {
    var is = amareis('ball');
    assert.equal(is, 'is');
    done();
  });
  it('should return "are" on plural cases', function(done) {
    var are = amareis('balls');
    assert.equal(are, 'are');
    done();
  });
  it('should return "is" on special singular cases ex. "octopus"', function(
    done
  ) {
    var is = amareis('octopus');
    assert.equal(is, 'is');
    done();
  });
});
