Game.Crewmember = DS.Model.extend({
	name: DS.attr('string'),
	race: DS.attr('string'),
	img_path: DS.attr('string'),
	health: DS.attr('number'),
	isSelected: DS.attr('boolean'),
	isHover: DS.attr('boolean'),
	combatSkill: DS.attr('number'),
	enginesSkill: DS.attr('number'),
	pilotingSkill: DS.attr('number'),
	repairSkill: DS.attr('number'),
	shieldsSkill: DS.attr('number'),
	weaponsSkill: DS.attr('number')	
});

Game.Crewmember.FIXTURES = [
	{
		id: 1,
		name: 'Ceasar',
		race: 'human',
		img_path: 'male-1',
		health: 100,
		isSelected: true,
		isHover: true,
		combatSkill: 0,
		enginesSkill: 0,
		pilotingSkill: 100,
		repairSkill: 0,
		shieldsSkill: 0,
		weaponsSkill: 0		
	},
	{
		id: 2,
		name: 'Pompey',
		race: 'mantis',
		img_path: 'mantis-1',
		health: 100,
		isSelected: true,
		isHover: false,
		combatSkill: 80,
		enginesSkill: 0,
		pilotingSkill: 0,
		repairSkill: 10,
		shieldsSkill: 45,
		weaponsSkill: 0
	},
	{
		id: 3,
		name: 'Crassus',
		race: 'slug',
		img_path: 'slug-1',
		health: 100,
		isSelected: true,
		isHover: false,
		combatSkill: 30,
		enginesSkill: 100,
		pilotingSkill: 0,
		repairSkill: 15,
		shieldsSkill: 0,
		weaponsSkill: 0
	}
];