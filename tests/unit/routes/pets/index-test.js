import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pets/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pets/index');
    assert.ok(route);
  });
});
