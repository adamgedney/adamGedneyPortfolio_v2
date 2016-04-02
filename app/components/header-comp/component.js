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

			self.initScrollMagic();
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

		/**
		 * Event handlers
		 * @param e
		 */
		handlers(){

			// Menu item click
			$('.header__menuItem').click(function(e){
				e.preventDefault();
				console.log(e,'rrr');
			});
		},

		/**
		 * Setup ScrollMagic controller
		 */
		initScrollMagic(){
			// init controller
			//var scrollMagicController = new ScrollMagic.Controller();
			//
			//// create a scene
			//new ScrollMagic.Scene({
			//	triggerElement : '.who',
			//	duration: 100,  // the scene should last for a scroll distance of 100px
			//	offset: 50      // start this scene after scrolling for 50px
			//})
			//	.setPin(".who h2") // pins the element for the the scene's duration
			//	.addTo(scrollMagicController); // assign the scene to the controller
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
