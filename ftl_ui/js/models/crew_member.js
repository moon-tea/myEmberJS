Game.Crew_member = DS.Model.extend({
	name: DS.attr('string'),
	race: DS.attr('string'),
	img_path: DS.attr('string'),
	health: DS.attr('int')
});

Game.Item.FIXTURES = [
	{
		id: 1,
		name: 'Ceasar',
		race: 'human',
		img_path: 'img/crew/races/human/MaleHuman1.png',
		health: 100
	},
	{
		id: 2,
		name: 'Pompey',
		race: 'mantis',
		img_path: 'img/crew/races/mantis/Mantis1.png',
		health: 100
	},
	{
		id: 3,
		name: 'Crassus',
		race: 'slug',
		img_path: 'img/crew/races/slug/Slug1.png',
		health: 100
	}
];