import DS from 'ember-data';

export default DS.Model.extend({
	path: DS.attr('string'),
	title: DS.attr('string'),
	description: DS.attr('string'),
	project : DS.belongsTo('project')
});