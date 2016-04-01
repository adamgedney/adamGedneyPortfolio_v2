import Ember from 'ember';
//import _ from 'underscore';

const {getOwner} = Ember;
//$ = Ember.$,
let $this,
	self,
	imagePath = '/images/codeTools/',

	component = {
		route : '/',
		logos :[
			{path:imagePath + 'angularjs-logo.png',alt:'Angular Logo'},
			{path:imagePath + 'apigateway.png',alt:'AWS API Gateway Logo'},
			{path:imagePath + 'autoprefixer-logo.png',alt:'Autoprefixer Logo'},
			{path:imagePath + 'AWeber-Logo.png',alt:'AWeber Logo'},
			{path:imagePath + 'aws-logo.png',alt:'AWS Logo'},
			{path:imagePath + 'babel.png',alt:'Babel Logo'},
			{path:imagePath + 'bitbucket.png',alt:'Bitbucket Logo'},
			{path:imagePath + 'bluebird.png',alt:'Bluebird Logo'},
			{path:imagePath + 'bower.png',alt:'Bower Logo'},
			{path:imagePath + 'chrome.png',alt:'Chrome Logo'},
			{path:imagePath + 'cloudFront-small.png',alt:'AWS Cloudfront Logo'},
			{path:imagePath + 'composeLogo.png',alt:'Compose.io Logo'},
			{path:imagePath + 'digital-ocean-logo-4x3.png',alt:'Digital Ocean Logo'},
			{path:imagePath + 'docs_sheets_slides.png',alt:'Google Apps Logos'},
			{path:imagePath + 'druplicon-small.png',alt:'Drupal Logo'},
			{path:imagePath + 'DynamoDB.png',alt:'AWS DynamoDB Logo'},
			{path:imagePath + 'ec2.png',alt:'AWS EC2 Logo'},
			{path:imagePath + 'el-capitan.png',alt:'OSX Logo'},
			{path:imagePath + 'eoa.png',alt:'Email on Acid Logo'},
			{path:imagePath + 'es6-logo.png',alt:'ES6 Logo'},
			{path:imagePath + 'Evernote-icon.png',alt:'Evernote Logo'},
			{path:imagePath + 'express.png',alt:'ExpressJS Logo'},
			{path:imagePath + 'git.png',alt:'GIT Logo'},
			{path:imagePath + 'github.png',alt:'Github Logo'},
			{path:imagePath + 'grunt.png',alt:'Grunt Logo'},
			{path:imagePath + 'gulp.png',alt:'Gulp Logo'},
			{path:imagePath + 'handlebars-logo.png',alt:' Logo'},
			{path:imagePath + 'html5.png',alt:'HTML5 Logo'},
			{path:imagePath + 'html-css-js.png',alt:'HTML5 CSS3 ES2015 Logo'},
			{path:imagePath + 'illustrator.png',alt:'Adobe Illustrator Logo'},
			{path:imagePath + 'lambda.png',alt:'AWS Lambda Logo'},
			{path:imagePath + 'linux.png',alt:'Linux Logo'},
			{path:imagePath + 'logo-node.png',alt:' Logo'},
			{path:imagePath + 'mailchimp-logo2.png',alt:'Mailchimp Logo'},
			{path:imagePath + 'Mandrill_Logo.png',alt:'Mandrill Logo'},
			{path:imagePath + 'meteor.png',alt:'Meteor Logo'},
			{path:imagePath + 'mongodb-logo-large.png',alt:'MongoDB Logo'},
			{path:imagePath + 'MySQL.png',alt:'MySQL Logo'},
			{path:imagePath + 'npm.png',alt:'npm Logo'},
			{path:imagePath + 'photoshop.png',alt:'Adobe Photoshop Logo'},
			{path:imagePath + 'php.png',alt:'PHP Logo'},
			{path:imagePath + 'PhpStorm.png',alt:'PHPStorm Logo'},
			{path:imagePath + 'react.png',alt:'React Logo'},
			{path:imagePath + 'require.png',alt:'RequireJS Logo'},
			{path:imagePath + 'route53.0-vector-stencils-library',alt:'AWS Route 53 Logo'},
			{path:imagePath + 's3.png',alt:'AWS S3 Logo'},
			{path:imagePath + 'sass.png',alt:'SASS Logo'},
			{path:imagePath + 'slack-chat.png',alt:'Slack Logo'},
			{path:imagePath + 'sns.png',alt:'AWS SNS Logo'},
			{path:imagePath + 'socketio2.png',alt:'Socket.io Logo'},
			{path:imagePath + 'Sublime-Text-2.png',alt:'Sublime Text 3 Logo'},
			{path:imagePath + 'terminal.png',alt:'Bash Logo'},
			{path:imagePath + 'trello.png',alt:'Trello Logo'},
			{path:imagePath + 'underscore_js.png',alt:'_ Logo'},
			{path:imagePath + 'Virtualbox_logo.png',alt:'VirtualBox Logo'},
			{path:imagePath + 'webpack.png',alt:'Webpack Logo'},
			{path:imagePath + 'wordpress.png',alt:'WordPress Logo'},
			{path:imagePath + 'yeoman-logo.png',alt:'Yeoman Logo'}

		],
		rendered(that){
			$this = that;
			self  = this;

			// Set current route
			self.route = getOwner($this).lookup('controller:application').currentPath;

			// Set Properties/helpers
			$this.setProperties(self.properties);

			// Attach Event Handlers
			self.attachHandlers();
		},
		properties : {
			toolLogos : Ember.computed(()=>{
				return self.logos;
			})
		},
		attachHandlers(){

		}
	};

// Export Component
export default Ember.Component.extend({
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	}
});
