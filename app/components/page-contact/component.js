import Ember from 'ember';

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
		},
		properties : {
			items : Ember.computed(()=>{
				return [];
			})
		},

		/**
		 * Event handlers
		 * @param e
		 */
		handlers(){


		}
	};

// Export Component
export default Ember.Component.extend({
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	didInsertElement:component.handlers
});
