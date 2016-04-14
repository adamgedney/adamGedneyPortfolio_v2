import Ember from 'ember';
import ScrollMagic from 'npm:scrollmagic';

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

			//self.initScrollMagic();
		},
		properties : {
			menuItems : Ember.computed(()=>{
				return [
					{href:'#who',text:'Who I Am',pageIndex:1},
					{href:'#tools',text:'Tools',pageIndex:2},
					{href:'#work',text:'Work',pageIndex:3},
					//{href:'#codepen',text:'Codepen',pageIndex:1},
					//{href:'#video',text:'Video',pageIndex:1},
					{href:'#contact',text:'Contact',pageIndex:4}
				];
			})
		},

		/**
		 * Event handlers
		 * @param e
		 */
		handlers(){

			//self.initScrollify();

			// Menu item click
			$('.header__menuItem').click(function(e){
				//e.preventDefault();
				//Ember.$.scrollify.move(+$(this).attr('data-index'));
			});

		},

		/**
		 * Setup Scrollify plugin for smooth scrolling and snap
		 * http://projects.lukehaas.me/scrollify/#home
		 */
		initScrollify(){
			Ember.$.scrollify({
				section : ".page",
				standardScrollElements :".work"
				//sectionName : "section-name"
			});
		},

		/**
		 * Setup ScrollMagic controller
		 */
		initScrollMagic(){
			 //init controller
			let scrollMagicController = new ScrollMagic.Controller();

			new ScrollMagic.Scene({
				triggerElement : '#work',
				duration: 100,  // the scene should last for a scroll distance of 100px
				offset: 50      // start this scene after scrolling for 50px
			})
				.setPin(".timeline__itemTitle") // pins the element for the the scene's duration
				.addTo(scrollMagicController); // assign the scene to the controller
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
