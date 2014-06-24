Game.CrewMemberController = Ember.ObjectController.extend({
	actions: {
		selected: function() {
	 		this.set('isSelected', true);
		}
	},

	isSelected: false,
});