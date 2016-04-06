import Ember from 'ember';

const {getOwner} = Ember;
const imagePath = '/images/codeTools/';
const projects = [
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	},
	{
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/200/300`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
			}
		]
	}
];

let $ = Ember.$,
	$this,
	self,

	component = {
		route : '/',
		willRender() {
			this.set('projects', projects);
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
				return $this.projects;
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
