import Ember from 'ember';

const {getOwner} = Ember;

let $ = Ember.$,
	$this,
	self,

	component = {
		route : '/',
		willRender() {
			//this.set('projects', projects);
		},
		rendered(that){
			$this = that;
			self  = this;

			// Set current route
			self.route = getOwner($this).lookup('controller:application').currentPath;

			// Set Properties/helpers
			$this.setProperties(self.properties);

			//self.initScrollMagic();
		},
		properties : {
			projects : Ember.computed(()=>{
				//return $this.projects;
			})
		},

		/**
		 * Event handlers
		 * @param e
		 */
		handlers(){

			// Menu item click
			//$('.header__menuItem').click(function(e){
			//	e.preventDefault();
			//	console.log(e,'rrr');
			//});
		}
	};

// Export Component
export default Ember.Component.extend({
	willRender : component.willRender,
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	didInsertElement:component.handlers
});
