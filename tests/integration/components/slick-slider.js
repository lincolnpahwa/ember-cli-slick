import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-cli-slick', 'Integration | Component | ember cli slick', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-cli-garuda-slick}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-cli-garuda-slick}}
      template block text
    {{/ember-cli-garuda-slick}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
