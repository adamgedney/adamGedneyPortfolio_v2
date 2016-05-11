import Ember from 'ember';
import _ from 'npm:underscore';
import Promise from 'npm:bluebird';
import ScrollMagic from 'npm:scrollmagic';


const {getOwner} = Ember;
const imagePath = '/images/codeTools/';
const projects = [
	{
		id : 1,
		title:'GenSizer SPA',
		description:'A generator size estimation tool for Assurance Power. Built with vanilla JS, JQuery, and CSS3 for animations. Project created while an employee at Green Group Studio in Lake Worth, FL.',
		featuredImage:`/images/work/alliedGen/landing.jpeg`,
		screenshots:[
			{path:`/images/work/alliedGen/landing.jpeg`,
				title:'Site landing',
				description:'',
				features :[
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/alliedGen/percent.jpeg`,
				title:'Percentage interface',
				description:'',
				features :[
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/alliedGen/tons.jpeg`,
				title:'CSS Scrollwheel selector',
				description:'',
				features :[
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/alliedGen/type.jpeg`,
				title:'Type selector',
				description:'',
				features :[
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'CSS3',
						subDescription : ''
					}
				]
			},
		]
	},
	{
		id : 2,
		title:'Company Portal',
		description:'A company portal providing internal tools and interfaces for the company AWS microservice API. Built in MeteorJS using ES6 and SASS. I was responsible for designing and developing the application.',
		featuredImage:`/images/work/companyPortal/portal_dashboard.png`,
		screenshots:[
			{path:`/images/work/companyPortal/portal_dashboard.png`,
				title:'Portal Dashboard',
				description:'The dashboard is where the user lands after login and it is a visual representation of the modules accessible to the user by their role.',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					},
					{
						description:'Default Background',
						subDescription : 'Can be a hex color or an image'
					}
				]
			},
			{path:`/images/work/companyPortal/1_catalog_module_list_view.png`,
				title:'Catalog Manager List View',
				description:'The main list view for catalog items. Used as the starting point for the metadata editing workflow.',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					},
					{
						description:'DataTable Component',
						subDescription : 'Handles infinite scroll, selected items, and external requests.'
					},
					{
						description:'Admin tools',
						subDescription : 'Catalog managers have access to user role tools via this page.'
					}
				]
			},
			{path:`/images/work/companyPortal/2_catalog_module_user_role_management_modal.png`,
				title:'User Role Management',
				description:'A full role management system operating off a Mongo Database',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/companyPortal/3_catalog_module_create_modal.png`,
				title:'Create Modal',
				description:'From this modal users can enter either the movie or series create interfaces.',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/companyPortal/5_catalog_module_create_series_modal.png`,
				title:'Series Creation',
				description:'When creating a series, the user titles the series, determines the number of seasons and episodes per season. This is then sent to the server for entity creation.',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					},
					{
						description:'Incrementer Component',
						subDescription : 'Made from Blaze dynamic templates'
					}
				]
			},
			{path:`/images/work/companyPortal/6_catalog_module_series_page_top.png`,
				title:'Series View Top',
				description:'Here the user edits metadata for series entities',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					},
					{
						description:'Select Components',
						subDescription : 'All multiselects are components'
					}
				]
			},
			{path:`/images/work/companyPortal/7_catalog_module_series_page_bottom.png`,
				title:'Series View Bottom',
				description:'Here the user enters season level metadata and can drill-down into episodes',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/companyPortal/8_catalog_module_title_page_top.png`,
				title:'Movie View',
				description:'Movie entity metadata forms',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					}
				]
			},
			{path:`/images/work/companyPortal/9_catalog_module_title_page_bottom.png`,
				title:'Versions View',
				description:'Movie and episode version metadata and segment interfaces',
				features :[
					{
						description:'ES6',
						subDescription : ''
					},
					{
						description:'JQuery',
						subDescription : ''
					},
					{
						description:'SASS/CSS3',
						subDescription : ''
					}
				]
			}
		]
	},
	{
		id : 3,
		title:'Graphic Design, Digital Art, & Logos',
		description:'A collection of some of the graphic & logo design stuff I\'ve worked on',
		featuredImage:`/images/work/graphic/pbzAd.png`,
		screenshots:[
			{path:`/images/work/graphic/pbzAd.png`,
				title:'A Florida Magazine Advertisement',
				description:''
			},
			{path:`/images/work/graphic/BizCard-Meditrina-BizCardMockup2300x1673.jpg`,
				title:'Napa Valley Concierge Service Logo Design and Business Cards',
				description:''
			},
			{path:`/images/work/graphic/bottle-09ck.png`,
				title:'Wine Label Edits and ATF Approval Adjustments',
				description:''
			},
			{path:`/images/work/graphic/Consider.png`,
				title:'Digital Art',
				description:''
			},
			{path:`/images/work/graphic/considerSharpening.png`,
				title:'Digital Art',
				description:''
			},
			{path:`/images/work/graphic/Cop-ernicus.png`,
				title:'Digital Art',
				description:''
			},
			{path:`/images/work/graphic/gedney_adam_p1.jpg`,
				title:'Adobe Illustrator Gradient Mesh Art',
				description:''
			},
			{path:`/images/work/graphic/Gedney_Adam_Travel_Poster.png`,
				title:'Travel Poster',
				description:''
			},
			{path:`/images/work/graphic/Gedney_Adam_Travel_Poster3.png`,
				title:'Travel Poster',
				description:''
			},
			{path:`/images/work/graphic/GraphicDesign-OrbitsAd-Mockup800x600.jpg`,
				title:'Adobe Illustrator Mock Advertisement for Orbitz',
				description:''
			},
			{path:`/images/work/graphic/Logo-COW-Mockup800x600.jpg`,
				title:'Napa Valley Winery Logo',
				description:''
			},
			{path:`/images/work/graphic/Logo-StudioByKeliann-Mockup.png`,
				title:'Hair Salon Logo',
				description:''
			},
			{path:`/images/work/graphic/mono.png`,
				title:'Digital Art',
				description:''
			},
			{path:`/images/work/graphic/Print-AubertOrder-Mockup1500x956.jpg`,
				title:'Napa Valley Exclusive Winery Order Form',
				description:''
			},
			{path:`/images/work/graphic/Print-MayaMenu-Mockup1500x1017.jpg`,
				title:'Napa Valley Bar Menu',
				description:''
			},
			{path:`/images/work/graphic/Print-TerroirCalistogaPostCard-Mockup.png`,
				title:'Wine Club Offer Postcard Advertisement',
				description:''
			},
			{path:`/images/work/graphic/Print-ZosimaPostCard-Mockup1920x1280.jpg`,
				title:'Post Card Mailer',
				description:''
			}
		]
	},
	{
		id : 4,
		title:'Jericho Canyon Vineyard',
		description:'A WordPress Website & Graphic Design',
		featuredImage:`/images/work/jericho/label-ck09Bottle.png`,
		screenshots:[
			{path:`/images/work/jericho/label-ck09Bottle.png`,
				title:'Wine Label Work',
				description:''
			},
			{path:`/images/work/jericho/JerichoCanyonVineyardWebsite.png`,
				title:'100+ Page Custom WordPress Site',
				description:''
			},
			{path:`/images/work/jericho/label-ch10toppic.png`,
				title:'Wine Label Work',
				description:''
			},
			{path:`/images/work/jericho/label-ootoppic.png`,
				title:'Wine Label Work',
				description:''
			}
		]
	},
	{
		id : 5,
		title:'Loloi Rugs',
		description:'Custom site built on .Net',
		featuredImage:`/images/work/loloi/loloi_home.jpeg`,
		screenshots:[
			{path:`/images/work/loloi/loloi_home.jpeg`,
				title:'Home Page',
				description:''
			},
			{path:`/images/work/loloi/Loloi.jpeg`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 6,
		title:'Mantissa Software Synth',
		description:'An Actionscript software synth',
		featuredImage:`/images/work/mantissa/mantissa-landing.png`,
		screenshots:[
			{path:`/images/work/mantissa/mantissa-landing.png`,
				title:'Landing Page',
				description:''
			},
			{path:`/images/work/mantissa/mantissasite1.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/mantissa/mantissasite2.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/mantissa/mantissasite3.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/mantissa/mantissasite4.jpg`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 7,
		title:'Librety Harbor NJ',
		description:'',
		featuredImage:`/images/work/libertyHarbor/LibertyHarborNJ.com.jpg`,
		screenshots:[
			{path:`/images/work/libertyHarbor/LibertyHarborNJ.com.jpg`,
				title:'libertyharbornj.com',
				description:''
			}
		]
	},
	{
		id : 8,
		title:'SYnergy Industries',
		description:'',
		featuredImage:`/images/work/synergy/synergyEventProduction.png`,
		screenshots:[
			{path:`/images/work/synergy/synergyEventProduction.png`,
				title:'Synergy Industries Event Production Landing Page',
				description:''
			},
			{path:`/images/work/synergy/synergy1.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/synergy/synergy2.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/synergy/synergy3.jpg`,
				title:'',
				description:''
			},
			{path:`/images/work/synergy/synergy4.jpg`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 9,
		title:'Orthodox Quote of the Day',
		description:'',
		featuredImage:`/images/work/OQOTD/oqotd.jpeg`,
		screenshots:[
			{path:`/images/work/OQOTD/oqotd.jpeg`,
				title:'Orthodox Quote of the Day API Interface & Subscription signup page',
				description:''
			}
		]
	},
	{
		id : 10,
		title:'Parables.tv',
		description:'',
		featuredImage:`/images/work/parables/parables1.png`,
		screenshots:[
			{path:`/images/work/parables/parables1.png`,
				title:'',
				description:''
			},
			{path:`/images/work/parables/parables2.png`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 11,
		title:'sgwebmarketing.com',
		description:'',
		featuredImage:`/images/work/sgWebMarketing/sgweb.jpeg`,
		screenshots:[
			{path:`/images/work/sgWebMarketing/sgweb.jpeg`,
				title:'',
				description:''
			},
			{path:`/images/work/sgWebMarketing/services-sgweb.jpeg`,
				title:'',
				description:''
			},
			{path:`/images/work/sgWebMarketing/webdev-sgweb.jpeg`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 12,
		title:'tokuhd.com',
		description:'',
		featuredImage:`/images/work/tokuhd/toku.png`,
		screenshots:[
			{path:`/images/work/tokuhd/toku.png`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 13,
		title:'Trello Clone',
		description:'',
		featuredImage:`/images/work/trelloClone/s1.png`,
		screenshots:[
			{path:`/images/work/trelloClone/s1.png`,
				title:'',
				description:''
			},
			{path:`/images/work/trelloClone/s2.png`,
				title:'',
				description:''
			},
			{path:`/images/work/trelloClone/s3.png`,
				title:'',
				description:''
			},
			{path:`/images/work/trelloClone/s4.png`,
				title:'',
				description:''
			}
		]
	},
	{
		id : 14,
		title:'Wellio.co',
		description:'',
		featuredImage:`/images/work/Wellio/wellio.co.jpeg`,
		screenshots:[
			{path:`/images/work/Wellio/wellio.co.jpeg`,
				title:'',
				description:''
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
			let store = $this.get('data');

			// Set current route
			self.route = getOwner($this).lookup('controller:application').currentPath;

			// Set Properties/helpers
			$this.setProperties(self.properties);
			$this.set('showProjectDetail',false);


			//model retrieval
			var post = store.findAll('project')
				.then(res=>{
					console.log(res.objectAt(9).get('title'));
				});

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
			const $body = $('body');

			// PRwevent body scrolling under overlay
			if($body.hasClass('noscroll')){
				$body.removeClass('noscroll');
			}else{
				$body.addClass('noscroll');
			}

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
