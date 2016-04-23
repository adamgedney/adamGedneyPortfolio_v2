import Ember from 'ember';
import _ from 'npm:underscore';

const projects = [
	{
		uuid : 1,
		id : 1,
		title:'GenSizer SPA',
		description:'A generator size estimation tools for Assurance Power',
		featuredImage:`/images/work/alliedGen/landing.jpeg`,
		screenshots:[
			{path:`/images/work/alliedGen/landing.jpeg`,
				title:'Site landing',
				description:''
			},
			{path:`/images/work/alliedGen/percent.jpeg`,
				title:'Percentage interface',
				description:''
			},
			{path:`/images/work/alliedGen/tons.jpeg`,
				title:'CSS Scrollwheel selector',
				description:''
			},
			{path:`/images/work/alliedGen/type.jpeg`,
				title:'Type selector',
				description:''
			},
		]
	},
	{
		uuid : 2,
		id : 2,
		title:'Company Portal',
		description:'A company portal providing internal tools and interfaces for the company AWS microservice API.',
		featuredImage:`/images/work/companyPortal/portal_dashboard.png`,
		screenshots:[
			{path:`/images/work/companyPortal/portal_dashboard.png`,
				title:'Portal Dashboard',
				description:''
			},
			{path:`/images/work/companyPortal/1_catalog_module_list_view.png`,
				title:'Catalog Manager List View',
				description:''
			},
			{path:`/images/work/companyPortal/2_catalog_module_user_role_management_modal.png`,
				title:'User Role Management',
				description:''
			},
			{path:`/images/work/companyPortal/3_catalog_module_create_modal.png`,
				title:'Create Modal',
				description:''
			},
			{path:`/images/work/companyPortal/5_catalog_module_create_series_modal.png`,
				title:'Series Creation',
				description:''
			},
			{path:`/images/work/companyPortal/6_catalog_module_series_page_top.png`,
				title:'Series View Top',
				description:''
			},
			{path:`/images/work/companyPortal/7_catalog_module_series_page_bottom.png`,
				title:'Series View Bottom',
				description:''
			},
			{path:`/images/work/companyPortal/8_catalog_module_title_page_top.png`,
				title:'movie View',
				description:''
			},
			{path:`/images/work/companyPortal/9_catalog_module_title_page_bottom.png`,
				title:'Versions View',
				description:''
			}
		]
	},
	{
		uuid : 3,
		id : 3,
		title:'Graphic Design, Digital Art, & Logos',
		description:'A collection of some of the graphic & logo design work I\'ve done or worked on',
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
		uuid : 4,
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
		uuid : 5,
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
		uuid : 6,
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
		uuid : 7,
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
		uuid : 8,
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
		uuid : 9,
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
		uuid : 10,
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
		uuid : 11,
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
		uuid : 12,
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
		uuid : 13,
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
		uuid : 14,
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

export default Ember.Route.extend({
	model: function () {
		let store = this.store,
			projs = [];

		// Run through each project
		_.each(projects, proj=>{

			// Create & save the new model record
			let project = store.createRecord('project',proj);
			project.save();
		});



		//store.query('project').then((result) => {
		//	let meta = result.findRecord('project', 1);
		//
		//});


		//store.query('projects', { filter: { uuid: 1 } }).then(function(res) {
		//	// Do something with `peters`
		//	console.log('RES',res);
		//});

		//var post = store.findAll('project')
		//	.then(res=>{
		//		console.log(res.objectAt(9).get('title'));
		//	});



		//console.log(App.Projects.find('1'));

		return store;
		//return Ember.RSVP.hash({});
	},
	actions : {}
});
