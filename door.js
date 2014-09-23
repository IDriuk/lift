(function(root) {

    // двери кабины лифта
	var Door = Backbone.Model.extend({
	
	  initialize: function() {
	    this.transceiver = this.get('transceiver');
		this.senders = this.get('senders');
		this.comb = this.get('comb');
		this.prevComb = _.clone(this.comb);
		this.openComb = this.get('openComb');
		this.closeComb = this.get('closeComb');
		this.$left = this.get('$left');
		this.$right = this.get('$right');
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
	    this.trigger('door', {name: 'door', left: parseInt(this.$left.css('left')), right: parseInt(this.$right.css('left'))});
	  },
	  
	  start: function(comb) {
	    this.stop = true;
		if (!_.isEqual(comb, 'stop')) {
		  _.delay(function(door){ door.stop = false; }, 60, this);
		  _.delay(this.move, 70, comb, this);
		}
	  },
	  
	  move: function(comb, door) {
	    if (door.stop) return;
		var l, r, s = 1;
		switch (comb) {
		  case 'open':
		    s = 1;
		    break;
		  case 'close':
		    s = -1;
		    break;
		  default:
		    return;
		}
		l = parseInt(door.$left.css('left'));
		r = parseInt(door.$right.css('left'));
		l -= s; r += s;
		door.$left.css('left', l);
		door.$right.css('left', r);
		door.send();
	    _.delay(door.move, 50, comb, door);
	  },
	  
	  getComb: function() {
	    return  _.isEqual(this.comb, this.openComb) ? 'open':
		       (_.isEqual(this.comb, this.closeComb) ? 'close' : 'stop');
	  }
	  
	});
	
	var door = new Door({
	  transceiver: transceiver,
	  senders: ['rodz1', 'rodz2', 'rzdz1', 'rzdz2'],
	  comb:         [0, 0, 0, 0],
	  openComb:     [1, 1, 0, 0],
	  closeComb:    [0, 0, 1, 1],
	  $left: Backbone.$('#leftDoor'),
	  $right: Backbone.$('#rightDoor')
	});
	
	root.door = door;
	
})(window);
