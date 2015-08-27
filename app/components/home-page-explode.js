import Ember from 'ember';

export default Ember.Component.extend({
	showingHome: true,
	actions: {
		toggleHome() {
			this.set('showingHome', !this.get('showingHome'));
		}
	}
});	