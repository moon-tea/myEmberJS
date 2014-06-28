Game.Router.map(function () {
	this.resource('crewmembers', { path: '/' }, function () {
		//this.route('active');
		//this.route('completed');
	});
});

Game.CrewmembersRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('crewmember');
	}
});

Game.crewmembersIndexRoute = Ember.Route.extend({
	setupController: function () {
		this.controllerFor('crewmembers').set(this.modelFor('crewmembers'));
	}
});