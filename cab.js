(function(root) {

	// кабина лифта
	var Cab = Backbone.Model.extend({
	
	  initialize: function() {
	    this.transceiver = this.get('transceiver');
		this.senders = this.get('senders');
		this.comb = this.get('comb');
		this.prevComb = _.clone(this.comb);
		this.lowUpComb = this.get('lowUpComb');
		this.lowDownComb = this.get('lowDownComb');
		this.fastUpComb = this.get('fastUpComb');
		this.fastDownComb = this.get('fastDownComb');
		this.$top = this.get('$top');
		this.$buttons = this.get('$buttons');
		this.subscribe();
	  },
	  
	  subscribe: function() {
	    _.each(this.senders, function(sender) {
		  this.listenTo(this.transceiver, sender, this.take);
		}, this);
		this.transceiver.listenTo(this, 'all', this.transceiver.trans);
	  },
	  
	  take: function(el) {
	    this.comb[_.indexOf(this.senders, el.name)] = el.state;
		if (!_.isEqual(this.comb, this.prevComb)) {
		  this.start(this.getComb());
		  this.prevComb = _.clone(this.comb);
		}
	  },
	  
	  send: function() {
	    this.trigger('cab', {name: 'cab', top: parseInt(this.$top.css('top'))});
	  },
	  
	  start: function(comb) {
	    this.stop = true;
		if (!_.isEqual(comb, 'stop')) {
		  _.delay(function(cab){ cab.stop = false; }, 60, this);
		  _.delay(this.move, 70, comb, this);
		}
	  },
	  
	  move: function(comb, cab) {
	    if (cab.stop) return;
		var t, s = 1, d = 1;
		switch (comb) {
		  case 'lowUp':
		    s = 1; d = -1;
		    break;
		  case 'lowDown':
		    s = 1; d = 1;
		    break;
		  case 'fastUp':
		    s = 4; d = -1;
		    break;
		  case 'fastDown':
		    s = 4; d = 1;
			break;
		  default:
		    return;
		}
		t = parseInt(cab.$top.css('top'));
		t += s*d;
		cab.$top.css('top', t);
		cab.$buttons.css('top', t - 40);
		cab.send();
		////////////////
		if ( t <= 30 || t >= 550) {
		  this.transceiver.trigger('overpath', {name: 'overpath', state: 1});
		}
		///////////////
	    _.delay(cab.move, 50, comb, cab);
	  },
	  
	  getComb: function() {
	    return  _.isEqual(this.comb, this.lowUpComb) ? 'lowUp':
		       (_.isEqual(this.comb, this.lowDownComb) ? 'lowDown':
			   (_.isEqual(this.comb, this.fastUpComb) ? 'fastUp':
			   (_.isEqual(this.comb, this.fastDownComb) ? 'fastDown' : 'stop')));
	  }
	  
	});
	
	var cab = new Cab({
	  transceiver: transceiver,
	  senders: ['kbz1', 'kvz2', 'kbz2', 'kmz1', 'knz2', 'kmz2', 'emt'],
	  comb:         [0, 0, 0, 0, 0, 0, 0],
	  lowUpComb:    [0, 1, 0, 1, 0, 1, 1],
	  lowDownComb:  [0, 0, 0, 1, 1, 1, 1],
	  fastUpComb:   [1, 1, 1, 0, 0, 0, 1],
	  fastDownComb: [1, 0, 1, 0, 1, 0, 1],
	  $top: Backbone.$('#cab'),
	  $buttons: Backbone.$('#cabButtons')
	});
	
	root.cab = cab;
	
})(window);
