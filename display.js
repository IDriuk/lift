(function(root) {

  var elements = root.elements;
  var transceiver = root.transceiver;
  
  var SchemaView = Backbone.View.extend({
    
	el: '#schema',
	
	events: {
	  "click :button": "toogle"
	},
	
	toogle: function(ev) {
	  var id = ev.currentTarget.id;
	  var elem = _.where(elements, {name: id})[0];
	  var $el = elem.$el;
	  var color = $el.css('background-color');
	  if (/120/.test(color) || /200/.test(color)) {
	    $el.css('background-color', 'red');
		elem.isManual = elem.manualState = 1;
		elem.checkState();
		this.checkRele(elem.name, 'red');
	  } else if (/255/.test(color) || /red/.test(color)) {
	    $el.css('background-color', 'black');
		elem.manualState = 0;
		elem.checkState();
		this.checkRele(elem.name, 'black');
	  } else {
	    elem.isManual = 0;
		elem.checkState();
	  }
	},
	
	checkRele: function(name, color) { 
      var $rele = Backbone.$('#mp_' + name);
	  if ($rele.length) {
	    $rele.css('background-color', color);
		if (color == 'black') $rele.css('color', 'white');
	  }
	}
	
  });
  
  var MpRlsView = Backbone.View.extend({
    
	el: '#mpRls',
	
	events: {
	  "mousedown :button": "press",
	  "mouseup :button": "release"
	},
	
	press: function(ev) { 
	  var elId = ev.currentTarget.id.match(/mp_(.+)/)[1];
	  var elem = _.where(elements, {name: elId})[0];
	  var $rele = $('#' + ev.currentTarget.id);
	  if (elem) {
	    var $el = elem.$el;
		$el.css('background-color', 'red');
		$rele.css('background-color', 'red');
	    elem.isManual = elem.manualState = 1;
		elem.checkState();
	  }
	},
	
	release: function(ev) {  
	  var elId = ev.currentTarget.id.match(/mp_(.+)/)[1];
	  var elem = _.where(elements, {name: elId})[0];
	  if (elem) {
	    elem.isManual = elem.manualState = 0;
		elem.checkState();
	  }
	}
	
  });
  
  var MpButtonsView = Backbone.View.extend({
  
    el: '#mpButtons',
	
	events: {
	  "click #mpVU": "vU",
	  "click #mpW": "toogleWork",
	  "click #ck": "toogleRevizion",
	  "click #mpUp": "mUp",
	  "click #mpDown": "mDown",
	  "mouseDown #cUp": "begRevUp",
	  "mouseUp #cUp": "endRevUp",
      "mouseDown #cDown": "begRevDown",
	  "mouseDown #cDown": "endRevDown",
	  "click #mpS": "stop"
	},
	
	vU: function() {
	  if (!this.$vu) this.$vu = Backbone.$('#mpVU');
	  if (!this.feed) {
	    this.feed = 1;
	  } else {
	    this.feed = 0;
	  }
	  transceiver.trigger('feed', {name: 'feed', state: this.feed});
	  this.$vu.css({
	    'color': (this.feed ? 'red' : 'black')
	  });
	},
	
	toogleWork: function() {
	  if (!this.$work) this.$work = Backbone.$('#mpW');
	  this.$work.text(this.$work.text() == 'Норм.р' ? 'Маш.пом' : 'Норм.р');
	},
	
	toogleRevizion: function() {
	  if (!this.$ck) this.$ck = Backbone.$('#ck');
	  this.$ck.text(this.$ck.text() == 'кбр_вкл' ? 'кбр_выкл' : 'кбр_вкл');
	},
	
	mUp: function() {
	  var elem = _.where(elements, {name: 'mknvz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }
	},
	
	mDown: function() {
	  var elem = _.where(elements, {name: 'mknnz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }	  
	},
	
	begRevUp: function() {
	  var elem = _.where(elements, {name: 'kknvz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
		elem.checkState();
	  }
	},
	
	endRevUp: function() {
	  var elem = _.where(elements, {name: 'kknvz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 0;
		elem.checkState();
	  }
	},
	
	begRevDown: function() {
	  var elem = _.where(elements, {name: 'kknnz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
		elem.checkState();
	  }
	},
	
	endRevDown: function() {
	  var elem = _.where(elements, {name: 'kknnz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 0;
		elem.checkState();
	  }
	},
	
	stop: function() {
	  var elem = _.where(elements, {name: 'mknsz'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 500);
	  }
	},
	
  });
  
  var CabButtonsView = Backbone.View.extend({
  
    el: '#cabButtons',
	
	events: {
	  "click :button": 'press'
	},
	
	press: function(ev) {
	  var id = this.getId(ev);
	  switch (id) {
	    case 'cr':
		  this.reverse(); break;
		case 'cs':
		  this.stop(); break;
		case 'cp':
		  this.floor(); break;
		case 'cb20': 
		case 'cb19':
		case 'cb9':
		case 'cb2':
		case 'cb1':
		  this.signaling(id); break;
	  }
	},
	
	getId: function(ev) {
	  return ev.currentTarget.id;
	},
	
	reverse: function() {
	  var elem = _.where(elements, {name: 'reversz'})[0]; // watch name
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }
	},
	
	stop: function() {
	  var elem = _.where(elements, {name: 'kknstop'})[0]; // watch name
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }
	},
	
	floor: function() {
	  if (!this.$cp) this.$cp = Backbone.$('#cp');
	  this.$cp.text(this.$cp.text() == 'подп.выкл' ? 'подп.вкл' : 'подп.выкл');
	},
	
	signaling: function(id) {
	  var elem = _.where(elements, {name: 'kknprikaz' + Array.prototype.slice.call(id, 2).join('') + 'z'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }	  
	}
  
  });
  
  var ShaftButtonsView = Backbone.View.extend({
    el: '#shaftButtons',
	
	events: {
	  "click :button": 'press'
	},
	
	press: function(ev) {
	  var id = ev.currentTarget.id;
	  var elem = _.where(elements, {name: 'kknvizov' + Array.prototype.slice.call(id, 2).join('') + 'z'})[0];
	  if (elem) {
	    elem.mechanicComb[2] = 1;
	    elem.checkState();
	    _.delay(function() {
          elem.mechanicComb[2] = 0;
		  elem.checkState();
	    }, 300);
	  }
	}
  });
  
  var sView = root.sView = new SchemaView();
  
  var mprView = root.mprView = new MpRlsView();
  
  var mpbView = root.mpbView = new MpButtonsView();
  
  var cbView = root.cbView = new CabButtonsView();
  
  var sbView = root.sbView = new ShaftButtonsView();
  
})(window);
