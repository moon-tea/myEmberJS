window.Game = Ember.Application.create();

Game.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'items-emberjs'
});

//Game.ApplicationAdapter = DS.FixtureAdapter.extend();