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
						alert('Form sent');
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
		}
	};

// Export Component
export default Ember.Component.extend({
	didReceiveAttrs(){
		this._super(...arguments);

		component.rendered(this);
	},
	submitForm : component.handler.submitForm
});
