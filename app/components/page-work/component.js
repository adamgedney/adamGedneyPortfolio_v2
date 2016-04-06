import Ember from 'ember';
import _ from 'npm:underscore';
import Promise from 'npm:bluebird';

const {getOwner} = Ember;
const imagePath = '/images/codeTools/';
const projects = [
	{
		id : 1,
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
		id : 2,
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
		id : 3,
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
		id : 4,
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
		id : 1,
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
		id : 1,
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
		id : 1,
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
		id : 1,
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
		id : 1,
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
		id : 1,
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
		id : 1,
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
			$this.set('showProjectDetail',false);
		},

		properties : {
			projects : Ember.computed(()=>projects),
			showProjectDetail: Ember.computed(()=>false),
			currentProject: Ember.computed(()=>{}),
		},

		/**
		 * Event handlers
		 */
		handler : {
			toggleDetail(){
				component.toggleDetail(this);
				//this.set('showProjectDetail',!this.get('showProjectDetail'));
			},

			setCurrentProject(projectID){
				const self = this;

				component.getProjectByID({projectID})
					.then(component.setCurrentProject)
					.then(()=>{
						component.toggleDetail(self);
					});
			}
		},

		/**
		 * Get a project by ID
		 * @param args
		 */
		getProjectByID : args=>new Promise((resolve,reject)=>{
			const project = _.findWhere(projects,{id:args.projectID});
			resolve(project);
		}),

		/**
		 * bind the current project to props
		 * @param project
		 */
		setCurrentProject : project=>new Promise((resolve,reject)=>{
			$this.set('currentProject',project);
			resolve(project);
		}),

		/**
		 * Toggles the project detail view
		 * @param $this
		 */
		toggleDetail($this){
			$this.set('showProjectDetail',!$this.get('showProjectDetail'));
		}

	};

// Export Component
export default Ember.Component.extend({
	willRender : component.willRender,
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	didInsertElement:component.handlers,
	toggleDetail : component.handler.toggleDetail,
	setCurrentProject : component.handler.setCurrentProject
});
