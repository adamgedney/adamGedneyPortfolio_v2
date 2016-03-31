import Ember from 'ember';
//import _ from 'underscore';

const {getOwner} = Ember;
let $this,
	self,
	//$ = Ember.$

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
		footerMenuItems : Ember.computed(()=>{
			return [
				{href:'#who',text:'Who I Am'},
				{href:'#work',text:'Work'},
				{href:'#tools',text:'Tools'},
				{href:'mailto:adam.gedney@gmail.com?Subject=adamgedney.com inquiry',text:'Contact'}
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
