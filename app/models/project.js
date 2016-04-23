import DS from 'ember-data';


export default DS.Model.extend({
  	uuid : DS.attr('number'),
	title:DS.attr('string'),
	description:DS.attr('string'),
	featuredImage:DS.attr('string'),
	screenshots: DS.attr('object')
});
