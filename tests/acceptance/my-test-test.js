import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'dummy-app-acceptance-test/tests/helpers/start-app';

var application;

module('Acceptance | my test', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /my-test', function(assert) {
  visit('/my-test');

  andThen(function() {
    assert.equal(currentURL(), '/my-test');
  });
});
