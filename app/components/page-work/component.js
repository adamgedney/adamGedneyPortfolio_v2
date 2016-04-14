import Ember from 'ember';
import _ from 'npm:underscore';
import Promise from 'npm:bluebird';
import ScrollMagic from 'npm:scrollmagic';


const {getOwner} = Ember;
const imagePath = '/images/codeTools/';
const projects = [
	{
		id : 1,
		title:'Trello Clone',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		featuredImage:`http://placekitten.com/1200/900`,
		screenshots:[
			{path:`http://placekitten.com/500/400`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit,',
				features : [
					{description: 'Javascript, HTML5, CSS3, Sass', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
				]
			},
			{path:`http://placekitten.com/500/400`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
				features : [
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'}
				]
			},
			{path:`http://placekitten.com/500/400`,
				title:'Screenshot #1',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
				features : [
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
					{description: 'Javascript', subDescription:'ES6'},
				]
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

			//self.initScrollMagic();

		},

		/**
		 * Template loaded
		 */
		afterRenderEvent(){
			self.handler.attach();
		},

		properties : {
			projects : Ember.computed(()=>projects),
			showProjectDetail: Ember.computed(()=>false),
			currentProject: Ember.computed(()=>{})
		},

		/**
		 * Event handlers
		 */
		handler : {
			// Generic jquery handlers
			attach(){
				const offset = 300,// sets init value to comfortable visual trigger before container
					  initTimelineContainerAt = Math.floor($('#work').position().top - offset),
					  $container = $('.timeline__container'),
					  $items = $('.timeline__item');

				let firstRun = true;

				// When we reach the scroll point, trigger animations on work container
				$(document).on('scroll',function(){

					self.scrollPointReached(initTimelineContainerAt,
						Math.floor($('body').scrollTop()),
						firstRun,
						()=>{//callback on In

							const params = {
								$container,
								$items,
								direction :'in'
							};

							self.animateInContainer(params)
								.then(self.animateItems);
							firstRun = false;

						},()=>{//callback on Out

							const params = {
								$container,
								$items,
								direction :'out'
							};

							// reset appearance on scroll out
							self.animateItems(params)
								.then(self.resetWorkContainer);
							firstRun = true;
					});//on Out
				});

				//// Hover over work item
				//$(document).on('mouseenter','#work',function(){
				//	self.animateItems($('.timeline__item'));
				//});
			},

			toggleDetail(){
				component.toggleDetail(this);
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
		},

		/**
		 * Setup ScrollMagic controller
		 */
		//initScrollMagic(){
		//	//init controller
		//	var scrollMagicController = new ScrollMagic.Controller();
		//
		//	// create a scene
		//	new ScrollMagic.Scene({
		//		triggerElement : '#work',
		//		duration: 100,  // the scene should last for a scroll distance of 100px
		//		offset: 50      // start this scene after scrolling for 50px
		//	})
		//		.setPin(".timeline__itemTitle") // pins the element for the the scene's duration
		//		.addTo(scrollMagicController); // assign the scene to the controller
		//},

		/**
		 * Animate in the work items container
		 * @param args
		 */
		animateInContainer : args=>new Promise((resolve,reject)=>{
			args.$container.attr('class','timeline__container timeline__container--show ');

			resolve(Object.assign({},args));
		}),

		/**
		 * add animations to item entrances
		 * @param $items
		 */
		animateItems : args=>new Promise((resolve,reject)=>{
			const animationsIn = ['fadeInUp','fadeInDownBig', 'fadeInLeft','fadeInRight','bounceInUp','bounceInDown',
			'bounceInLeft','bounceInRight','flipInX','flipInY','slideInUp','slideInLeft','slideInDown','slideInRight'],
					animationsOut = ['fadeOutUp','fadeOutDown', 'fadeOutLeft','fadeOutRight','bounceOutDown',
				'bounceOutLeft','bounceOutRight','flipOutX','flipOutY','slideOutUp','slideOutLeft','slideOutRight'];

			let animations = animationsOut;

			// Set animation direction
			if(args.direction === 'in'){
				animations = animationsIn;
			}

			args.$items.each(function(){
				const animation = Math.floor(Math.random() * animations.length);

				// Rmeove all residual animation classes & add new animation
				$(this).attr('class', 'animated timeline__item');
				$(this).addClass(animations[animation]);

				// Reset after animation to prevent css transform conflicts
				setTimeout(()=>{
					$(this).attr('class', 'animated timeline__item');
				},1000);
			});


			// Delay resolve until animations have finished, on out
			if(args.direction === 'out'){
				setTimeout(()=>{
					resolve(Object.assign({},args));
				},1000);
			}else{
				resolve(Object.assign({},args));
			}
		}),

		/**
		 * Remove animation classes and hide container
		 */
		resetWorkContainer(args){
			args.$container.attr('class','timeline__container');
		},

		/**
		 * Handler for triggering at a scroll point
		 * @param initAt
		 * @param scrollTop
		 * @param firstRun
		 * @param cb
		 */
		scrollPointReached(initAt,scrollTop,firstRun,cbIn,cbOut){
			if(initAt < scrollTop && firstRun){
				cbIn();
			}

			if(initAt > scrollTop && !firstRun){
				cbOut();
			}
		}
	};

// Export Component
export default Ember.Component.extend({
	willRender : component.willRender,
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	didInsertElement(){
		// Important for manipulating DOM after render
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : component.afterRenderEvent,
	//didInsertElement:component.handlers,
	toggleDetail : component.handler.toggleDetail,
	setCurrentProject : component.handler.setCurrentProject
});
