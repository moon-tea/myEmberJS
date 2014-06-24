function JSCreateCrew() {
	console.log("create crew_member: Cato");
	var controller = Game.__container__.lookup("controller:crew_members");
	var boundSend = controller.send.bind(controller);
	boundSend('gmCreateCrewMember','Cato', 'human');
}
