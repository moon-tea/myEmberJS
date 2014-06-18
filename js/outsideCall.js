function JSCreateItem() {
	console.log("create oak");
	var controller = Game.__container__.lookup("controller:items");
	var boundSend = controller.send.bind(controller);
	boundSend('gmCreateItem','oak');
}
