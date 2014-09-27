/*(function(root) {
  
  var Rises = Backbone.Model.extend({
  
    initialize: function() {
	  this.tbNames  = ['ris20z3', 'ris1z3'];
	  this.risNames = ['ris19z2', 'ris19z3', 'ris9z2', 'ris9z3', 'ris2z2', 'ris2z3'];
	  this.sourceNames = ['rrp19z2', 'rpv3z2', 'rrp9z2', 'rpv2z1', 'rrp2z2', 'rpv1z1', 'cab' ];
	  this.tbNamesState  = new Array(this.tbNames.length);
	  this.risNamesState = new Array(this.risNames.length);
	  this.sourceNamesState = new Array(this.sourceNames.length - 1);
	  this.tbMes  = ['risesa', 'risesb'];
	  this.risMes = ['rises10', 'rises11', 'rises20', 'rises21', 'rises30', 'rises31'];
	  this.cabPosition = 50;
	  this.state = false;
	  this.prevState = false;
	  this.transceiver = root.transceiver;
	  this.subscribe();
	},
	
	subscribe: function() {
	  _.each(this.sourceNames, function(name) {
	    this.listenTo(this.transceiver, name, this.take);
	  }, this);
	  
	  this.transceiver.listenTo(this, 'all', this.transceiver.trans);
	},
	
	take: function(el) {
	  var c;
	  console.log(el.name);
	  if (el.name == 'cab') { this.cabPosition = el.top; };
	  
	  c = this.cabPosition;
	  
	  if ((c > 100 && c < 120) || (c > 220 && c < 240) || (c > 340 && c < 360) || (c > 460 && c < 480)) {
	    var s = this.sourceNamesState;
		if (s[0] || s[1] || s[2]) {
		  this.state = true;
		  if (this.state != this.prevState) {
		    this.trigger('rises10', {name: 'rises10', state: 1});
		    this.trigger('rises11', {name: 'rises11', state: 1});
		    this.trigger('rises20', {name: 'rises20', state: 1});
		    this.trigger('rises21', {name: 'rises21', state: 1});
		    this.trigger('rises30', {name: 'rises30', state: 1});
		    this.trigger('rises31', {name: 'rises31', state: 1});
			this.prevState = this.state;
		  }	
		} else {
		  this.state = false;
		  if (this.state != this.prevState) {
		    this.trigger('rises10', {name: 'rises10', state: 0});
		    this.trigger('rises11', {name: 'rises11', state: 0});
		    this.trigger('rises20', {name: 'rises20', state: 0});
		    this.trigger('rises21', {name: 'rises21', state: 0});
		    this.trigger('rises30', {name: 'rises30', state: 0});
		    this.trigger('rises31', {name: 'rises31', state: 0});
			this.prevState = this.state;
		  }
		}
	  }
	  
	  if (el.name == 'rrp19z2' || el.name == 'rpv3z2') {
	    if ( c < 100) {
		  this.trigger('risesb', {name: 'risesb', state: 1});
		  _.delay(function(el){ el.trigger('risesb', {name: 'risesb', state: 0}); }, 500, this);
		} else if ( c > 240) {
		  this.trigger('risesa', {name: 'risesa', state: 1});
		  _.delay(function(el){ el.trigger('risesa', {name: 'risesa', state: 0}); }, 500, this)
		}
	  } else if (el.name == 'rrp9z2' || el.name == 'rpv2z1') {
	    if ( c < 220) {
		  this.trigger('risesb', {name: 'risesb', state: 1});
		  _.delay(function(el){ el.trigger('risesb', {name: 'risesb', state: 0}); }, 500, this);
		} else if ( c > 360) {
		  this.trigger('risesa', {name: 'risesa', state: 1});
		  _.delay(function(el){ el.trigger('risesa', {name: 'risesa', state: 0}); }, 500, this)
		}
	  } else if (el.name == 'rrp2z2' || el.name == 'rpv1z1') {
	    if ( c < 340) {
		  this.trigger('risesb', {name: 'risesb', state: 1});
		  _.delay(function(el){ el.trigger('risesb', {name: 'risesb', state: 0}); }, 500, this);
		} else if ( c > 480) {
		  this.trigger('risesa', {name: 'risesa', state: 1});
		  _.delay(function(el){ el.trigger('risesa', {name: 'risesa', state: 0}); }, 500, this)
		}
	    
	  }
	  
	}  
	
  });
  
  root.rises = new Rises; 
	
})(window);*/