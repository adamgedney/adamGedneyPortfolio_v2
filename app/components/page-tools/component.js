import Ember from 'ember';
//import _ from 'underscore';

const {getOwner} = Ember;
const imagePath = '/images/codeTools/';

/**
 * Tools logos for the Tools section
 * @type {*[]}
 */
const toolLogos = [
	{path:imagePath + 'angularjs-logo.png',alt:'Angular'},
	{path:imagePath + 'apigateway.png',alt:'AWS API Gateway'},
	{path:imagePath + 'autoprefixer-logo.png',alt:'Autoprefixer'},
	{path:imagePath + 'AWeber-Logo.png',alt:'AWeber'},
	{path:imagePath + 'aws-logo.png',alt:'AWS'},
	{path:imagePath + 'babel.png',alt:'Babel'},
	{path:imagePath + 'bitbucket.png',alt:'Bitbucket'},
	{path:imagePath + 'bluebird.png',alt:'Bluebird'},
	{path:imagePath + 'bower.png',alt:'Bower'},
	{path:imagePath + 'chrome.png',alt:'Chrome'},
	{path:imagePath + 'cloudFront-small.png',alt:'AWS Cloudfront'},
	{path:imagePath + 'composeLogo.png',alt:'Compose.io'},
	{path:imagePath + 'digital-ocean-logo-4x3.png',alt:'Digital Ocean'},
	{path:imagePath + 'docs_sheets_slides.png',alt:'Google Appss'},
	{path:imagePath + 'druplicon-small.png',alt:'Drupal'},
	{path:imagePath + 'DynamoDB.png',alt:'AWS DynamoDB'},
	{path:imagePath + 'ec2.png',alt:'AWS EC2'},
	{path:imagePath + 'el-capitan.png',alt:'OSX'},
	{path:imagePath + 'eoa.png',alt:'Email on Acid'},
	{path:imagePath + 'es6-logo.png',alt:'ES6'},
	{path:imagePath + 'Evernote-icon.png',alt:'Evernote'},
	{path:imagePath + 'express.png',alt:'ExpressJS'},
	{path:imagePath + 'git.png',alt:'GIT'},
	{path:imagePath + 'github.png',alt:'Github'},
	{path:imagePath + 'grunt.png',alt:'Grunt'},
	{path:imagePath + 'gulp.png',alt:'Gulp'},
	{path:imagePath + 'handlebars-logo.png',alt:''},
	{path:imagePath + 'html5.png',alt:'HTML5'},
	{path:imagePath + 'html-css-js.png',alt:'HTML5 CSS3 ES2015'},
	{path:imagePath + 'illustrator.png',alt:'Adobe Illustrator'},
	{path:imagePath + 'lambda.png',alt:'AWS Lambda'},
	{path:imagePath + 'linux.png',alt:'Linux'},
	{path:imagePath + 'logo-node.png',alt:''},
	{path:imagePath + 'mailchimp-logo2.png',alt:'Mailchimp'},
	{path:imagePath + 'Mandrill_Logo.png',alt:'Mandrill'},
	{path:imagePath + 'meteor.png',alt:'Meteor'},
	{path:imagePath + 'mongodb-logo-large.png',alt:'MongoDB'},
	{path:imagePath + 'MySQL.png',alt:'MySQL'},
	{path:imagePath + 'npm.png',alt:'npm'},
	{path:imagePath + 'photoshop.png',alt:'Adobe Photoshop'},
	{path:imagePath + 'php.png',alt:'PHP'},
	{path:imagePath + 'PhpStorm.png',alt:'PHPStorm'},
	{path:imagePath + 'webstorm.png',alt:'WebStorm'},
	{path:imagePath + 'react.png',alt:'React'},
	{path:imagePath + 'require.png',alt:'RequireJS'},
	{path:imagePath + 'route53.png',alt:'AWS Route 53'},
	{path:imagePath + 's3.png',alt:'AWS S3'},
	{path:imagePath + 'sass.png',alt:'SASS'},
	{path:imagePath + 'slack-chat.png',alt:'Slack'},
	{path:imagePath + 'sns.png',alt:'AWS SNS'},
	{path:imagePath + 'socketio2.png',alt:'Socket.io'},
	{path:imagePath + 'Sublime-Text-2.png',alt:'Sublime Text 3'},
	{path:imagePath + 'terminal.png',alt:'Bash'},
	{path:imagePath + 'trello.png',alt:'Trello'},
	{path:imagePath + 'underscore_js.png',alt:'_'},
	{path:imagePath + 'Virtualbox_logo.png',alt:'VirtualBox'},
	{path:imagePath + 'webpack.png',alt:'Webpack'},
	{path:imagePath + 'wordpress.png',alt:'WordPress'},
	{path:imagePath + 'yeoman-logo.png',alt:'Yeoman'}

];

//$ = Ember.$,
let $this,
	self,

	component = {
		route : '/',
		willRender() {
			// Set the "categories" property to a JavaScript object
			// with the category name as the key and the value a list
			// of products.
			this.set('toolLogos', toolLogos);
		},
		rendered(that){
			$this = that;
			self  = this;

			// Set current route
			self.route = getOwner($this).lookup('controller:application').currentPath;

			// Set Properties/helpers
			$this.setProperties(self.properties);
console.log($this);
			// Attach Event Handlers
			self.attachHandlers();
		},
		properties : {
			toolLogos : Ember.computed(()=>{
				return $this.toolLogos;
			})
		},
		attachHandlers(){

		}
	};

// Export Component
export default Ember.Component.extend({
	willRender : component.willRender,
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	}
});
