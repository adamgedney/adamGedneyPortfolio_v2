import Ember from 'ember';
//import _ from 'underscore';

const {getOwner} = Ember;

let $ = Ember.$,
	$this,
	self,

	component = {
		route : '/',
		rendered(that){
			$this = that;
			self  = this;

			// Set current route
			self.route = getOwner($this).lookup('controller:application').currentPath;

			// Set Properties/helpers
			$this.setProperties(self.properties);

			// Attach Event Handlers
			self.attachHandlers();
		},
		properties : {
			menuItems : Ember.computed(()=>{
				return [
					{href:'#who',text:'Who I Am'},
					{href:'#tools',text:'Tools'},
					{href:'#work',text:'Work'},
					{href:'#codepen',text:'Codepen'},
					{href:'#video',text:'Video'},
					{href:'#contact',text:'Contact'}
				];
			})
		},
		attachHandlers(){

		}
	};

// Export Component
export default Ember.Component.extend({
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	}
});
