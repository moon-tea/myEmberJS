function JSCreateCrewmember() {
	console.log("create crewmember: Cato");
	var controller = Game.__container__.lookup("controller:crewmembers");
	var boundSend = controller.send.bind(controller);
	boundSend('gmCreateCrewmember','Cato', 'human', 'male-1');
}
