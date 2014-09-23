(function(root) {
  
  var Element = Backbone.Model.extend({

	initialize: function() {
	
	  this.transceiver = root.transceiver;
      this.name = this.get('name');
	  this.type = this.get('type');
	  this.electric = this.get('electric');
	  this.mechanic = this.get('mechanic'); // [[y1 < y < y2 /*enable interval*/], [x1 < x < x2], 'rele', 'shunt'] 
	  this.left = this.get('left');
	  this.top = this.get('top');
	  this.tab = this.get('tab');
	  this.gray = 'rgb(120, 120, 120)';
	  this.green = 'rgb(0, 200, 0)';
	  
	  this.electricComb = new Array(this.electric.length); // any one
	  this.mechanicComb = this.createMechComb(); // every one
	  
	  this.state = 0;
	  this.prevState = 0;
	  this.electricState = 0;
	  this.mechanicState = _.isEqual(this.type, 'z') ? 0 : 1;
	  this.isManual = 0;
	  this.manualState = 0;
	  
	  this.mechanicDelay = _.isEqual(this.type, 'rl') ? 50 :
	                       _.isEqual(this.type, 'rv3') ? 300 :
						   _.isEqual(this.type, 'rv35') ? 3500 : false;
	  
	  if (!_.isEmpty(this.mechanic[0])) {
	    this.beginY = this.mechanic[0][0];
		this.endY = this.mechanic[0][1];
		this.cab = true;
	  }
	  if (!_.isEmpty(this.mechanic[1])) {
	    this.beginX = this.mechanic[1][0];
		this.endX = this.mechanic[1][1];
		this.door = true;
	  }
	  if (!_.isEmpty(this.mechanic[2])) this.rele = this.mechanic[2];
	  if (!_.isEmpty(this.mechanic[3])) this.shunt = this.mechanic[3]; 	  
      if (this.left && this.top && this.tab) {
        Backbone.$('#' + this.tab).append("<button id='" + this.name + "' style='position: absolute;\
          left:" + this.left + "px; top:" + this.top + "px; width: 15px; height: 15px'></button>");
		this.$el = Backbone.$('#' + this.name);
		this.$el.css('background-color', this.gray);
	  }
	  
	  this.subscribe();
	  
	},
  
	createMechComb: function() {
	
	  var mc = [0, 0, 0, 1]; 
	  if (_.isEmpty(this.mechanic[0])) mc[0] = 1;
	  if (_.isEmpty(this.mechanic[1])) mc[1] = 1;
	  if (!_.isEqual(this.type, 'z')) mc[2] = 1;
	  
	  if (/dsh/.test(this.name)) {
	    this.dsh = true;
		mc[0] = _.isEqual(this.type, 'r') ? 1 : 0; 
	  }
	  
	  if (/dchs/.test(this.name)) {
	    this.dchs = true;
		mc[0] = _.isEqual(this.type, 'r') ? 1 : 0;
	  }
	  
	  if (/dchto/.test(this.name)) {
	    this.dchto = true;
		this.cab = true;
		mc[0] = _.isEqual(this.type, 'r') ? 1 : 0;
	  }
	  
	  return mc;
	  
	},
	
	subscribe: function() {
	  
	  _.each(this.electric, function(sender) {
		  this.listenTo(this.transceiver, sender, this.take);
	  }, this);
	  
	  if (this.cab) this.listenTo(this.transceiver, 'cab', this.take);
      if (this.door) this.listenTo(this.transceiver, 'door', this.take);
      if (!_.isEmpty(this.rele)) this.listenTo(this.transceiver, this.rele, this.take);
      if (!_.isEmpty(this.shunt)) this.listenTo(this.transceiver, this.shunt, this.take);	  
	  
	  this.transceiver.listenTo(this, 'all', this.transceiver.trans);
	  
	},
	
	checkState: function() {
	
	  this.electricState = _.any(this.electricComb, _.identity);
	  this.mechanicState = _.all(this.mechanicComb, _.identity);
	  
	  if (this.isManual) {
	    this.state = (_.isEqual(this.type, 'z') || _.isEqual(this.type, 'r')) ? this.electricState && this.manualState : this.manualState;
	  } else {
	    this.state = this.electricState && this.mechanicState;
	  }
	  
	  this.state = this.state ? 1 : 0;
	  
	  if (!_.isEqual(this.state, this.prevState)) { 
	    this.send();
		this.prevState = this.state;
		
		if (!_.isEqual(this.type, 'z') && !_.isEqual(this.type, 'r')) {
		  Backbone.$('#log').prepend("<p>" + this.name + " ( " + (this.state ? "вкл.)</p>" : "выкл.)</p>"));
		}
	  }
	  
	  if (!this.isManual) {
	    this.$el.css('background-color', (this.state ? this.green : this.gray));
		if (!_.isEqual(this.type, 'z') && !_.isEqual(this.type, 'r')) {
		  Backbone.$('#mp_' + this.name).css('background-color', (this.state ? this.green : this.gray));
		}
	  }
	  
	},
	
	take: function(el) {
	
	  if (_.isEqual(el.name, 'cab') && this.cab){ this.takeCab(el.top); return; }
	  if (_.isEqual(el.name, 'door') && this.door){ this.takeDoor(el.left, el.right); return; }
	  if (_.isEqual(el.name, this.rele)){ this.takeRele(el.state); return; }
	  if (_.isEqual(el.name, this.shunt)){ this.takeShunt(el.state); return; }
	  
	  this.electricComb[_.indexOf(this.electric, el.name)] = el.state;
	  
	  this.checkState();
	  
	},
	
	takeCab: function(top) {
	  
	  if (this.dsh && (this.beginY <= top && top <= this.endY)) { 
		this.hasCab = true;
	  } else if (this.dsh) {
		this.hasCab = false;
		if (_.isEqual(this.type, 'r')) {
		  this.mechanicComb[0] = 1;
		  this.mechanicComb[1] = 1;
		} else {
		  this.mechanicComb[0] = 0;
		  this.mechanicComb[1] = 0;
		}
	  } else if (this.dchs && (this.beginY <= top && top <= this.endY)) { //disable intervals
	    this.mechanicComb[0] = 0;
	  } else if (this.dchs) {
	    this.mechanicComb[0] = 1;
	  } else if (this.get('intervals')) {
	    this.mechanicComb[0] = !_.some(this.get('intervals'), function(interval) {
		  return interval[0] <= top && top <= interval[1]; 
		});
	  }
	  
	  this.checkState();
	  
	},
	
	takeDoor: function(x1, x2) {
	  
      if (!this.dsh || (this.dsh && this.hasCab)) {	  
	    if ((this.beginX <= x1 && x1 <= this.endX) || (this.beginX <= x2 && x2 <= this.endX)) {
	      this.mechanicComb[1] = 1; // enable intervals
		  if (this.dsh) {
		    this.mechanicComb[0] = 1;
		  }
	    } else {
	      this.mechanicComb[1] = 0;
		  if (this.dsh) {
		    this.mechanicComb[0] = 0;
		  }
	    }
	  }
	  
	  this.checkState();
	  
	},
	
	takeRele: function(state) {
	
	  if ((state && _.isEqual(this.type, 'z')) || (!state && _.isEqual(this.type, 'r'))) {
	    this.mechanicComb[2] = 1;
	  } else {
	    this.mechanicComb[2] = 0;
	  }
	  
	  this.checkState();
	  
	},
	
	takeShunt: function(state) {
	  
	  this.mechanicComb[3] = state ? 0 : 1;
	  
	  this.checkState();
	
	},
	
	send: function() {
	
	  if (_.isEqual(this.type, 'z') || _.isEqual(this.type, 'r')) {
	    this.trigger(this.name, {name: this.name, state: this.state});
	  } else if (this.state || _.isEqual(this.type, 'rl')) {
		_.delay(function(el){ el.trigger(el.name, {name: el.name, state: el.state}); }, 50, this);
	  } else if (_.isEqual(this.type, 'rv3')) {
	    _.delay(function(el){ el.trigger(el.name, {name: el.name, state: el.state}); }, 300, this);
	  } else if (_.isEqual(this.type, 'rv35')) {
	    _.delay(function(el){ el.trigger(el.name, {name: el.name, state: el.state}); }, 3500, this);
	  }
	  
	}
	
  });
  
  var data = root.data;
  root.elements = _.map(data, function(el) {
    return new Element(el);
  });
  
})(window);
