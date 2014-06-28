Game.CrewMemberController = Ember.ObjectController.extend({
	actions: {
		selected: function() {
	 		console.log("isHover");
	 		this.set('isSelected', true);
		},
		mouseOver: function() {
	 		console.log("isHover");
	 		this.set('isHover', true);
		}
	},

	isSelected: false,
	isHover: false
});