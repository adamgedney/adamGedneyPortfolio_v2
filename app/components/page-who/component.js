import Ember from 'ember';

const {getOwner} = Ember;

let $ = Ember.$,
	$this,
	self,
	bio,

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
			bio : Ember.computed(()=>{
				return bio;
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


bio = "<p>My name is Adam Gedney and I'm a Front End Developer who works on the full stack. I have a love for Javascript anything so I work on front-end interactions, single page apps, and node back ends. I love building RESTful APIs in Express, but have more recently moved over to AWS for building APIs with a aim to provide for serverless clients on S3.</p> <br />" +
	"<p>My current stack is ES6, Babel via Gulp or Webpack, with sass to style everything. As for frameworks, I work in Meteor and Ember2 (This site was built in Ember2 & it's running serverless on AWS S3). I have dabbled in React and have a few components in production.</p>";
