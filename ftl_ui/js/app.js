window.Game = Ember.Application.create();

Game.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'crewmembers-emberjs'
});

//Game.ApplicationAdapter = DS.FixtureAdapter.extend();