import Ember from 'ember';
import _ from 'npm:underscore';
import Promise from 'npm:bluebird';

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
		},

		afterRenderEvent(){
			self.map.initialize();
		},

		properties : {
			items : Ember.computed(()=>{
				return [];
			})
		},

		/**
		 * Event handlers
		 * @param e
		 */
		handler:{
			/**
			 * Procedure for form mailing
			 */
			submitForm(){
				self.mailer.getForm()
					.then(self.mailer.parseForm)
					.then(self.mailer.sendForm)
					.then(self.mailer.clearForm)
					.then(()=>{
						alert('Contact Form Sent. Thanks!');
					});
			}

		},

		mailer :{
			/**
			 * Get the form from the DOM
			 * @param args
			 */
			getForm : args=>new Promise((resolve,reject)=>{
				resolve({$form:$('.contact__form')});
			}),

			/**
			 * Parse the form data to an Object
			 * @param args
			 */
			parseForm : args=>new Promise((resolve,reject)=>{
				let $fields = args.$form.find('input[type="text"],input[type="email"],textarea'),
					formObject = {};
				$fields.each(function(){
					const $element = $(this);
					formObject[$element.attr('name')] = $element.val();
				});

				resolve(_.extend(args,{formObject,$fields}));
			}),

			/**
			 * Ajax call to send data
			 * @param args
			 */
			sendForm : args=>new Promise((resolve,reject)=>{
				$.ajax({
					url : 'https://script.google.com/macros/s/AKfycbzRS_4PHTYg-_wAITmLGId9uVo-83OaKJAfkIIfuIEfzj8xvez_/exec',
					type : 'GET',
					data : args.formObject,
					dataType:'json',
					success : function(data) {
						resolve(Object.assign({},args,{data}));
					},
					error : function(request,error) {
						reject(error);
					}
				});
			}),

			/**
			 * Clear the form inputs
			 * @param args
			 */
			clearForm : args=>new Promise((resolve,reject)=>{
				args.$fields.each(function(){
					$(this).val('');
				});
				resolve(Object.assign({},args));
			})
		},

		map :{
			// Google maps
			initialize() {
				console.log(window);
				// Source: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
				var latlng = new google.maps.LatLng(26.7097, -80.0642);

				var settings = {
					zoom: 6,
					scrollwheel: false,
					center: latlng,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map(document.getElementById("map"), settings);

				var companyLogo = new google.maps.MarkerImage('images/pin-marker.png',
					new google.maps.Size(451,118),
					new google.maps.Point(0,0),
					new google.maps.Point(0,118)
				);

				var companyPos = new google.maps.LatLng(26.7097, -80.0642);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyLogo,
					title:"Right here!"
				});
			}// /initialize()
		}
	};

// Export Component
export default Ember.Component.extend({
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	didInsertElement(){
		// Important for manipulating DOM after render
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : component.afterRenderEvent,
	submitForm : component.handler.submitForm
});
