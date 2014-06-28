Game.CrewMembersController = Ember.ArrayController.extend({
	actions: {
		createCrewMember: function() {
			// Get the item name set by the "New Item" text field
			var name = this.get('newName');
			if (!name.trim()) { return; }

			// Create the new Item model
			var item = this.store.createRecord('crewMember', {
				name: name,
			});

			// Clear the "New Item" text field
			this.set('newName', '');

			// Save the new model
			item.save();
		},
		
		gmCreateCrewMember: function(name, race, img_path) {
			// Get the item name set by GameMaker
			if (!name.trim() || !race.trim()) { return; }

			// Create the new Item model
			var crewMember = this.store.createRecord('crewMember', {
				name: name,
				race: race,
				img_path: img_path
			});			

			// Save the new model
			crewMember.save();
		}
	}/*,
		
	numRemaining: function() {
		return this.filterBy('isUsed', false).get('length');
	}.property('@each.isUsed'),
	
	numUsed: function() {
		return this.filterBy('isUsed', true).get('length');
	}.property('@each.isUsed'),
	
	hasUsed: function() {
		return (this.get('numUsed') > 0); 
	}.property('numUsed'),
		
	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')*/
});