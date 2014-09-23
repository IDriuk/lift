
    (function(root) {

      var data = [
	    /* {name: '', type:  z, r, rl, rv3, rv35 , electric: [ senders ], mechanic: [[ ymin,ymax enable by cab ], [ xmin,xmax enabled by door ], 'rele', 'shunt'], left: x, top: y, tab: str} */
	
	    /* питание двигателя */
	    {name: 'kbz1', type: 'z', electric: ['kvz1', 'knz1'], mechanic: [[], [], 'kb', ''], left: 537, top: 191, tab: 220},
	    {name: 'kbz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'kb', ''], left: 559, top: 191, tab: 220},
	    {name: 'kmz1', type: 'z', electric: ['kvz1', 'knz1'], mechanic: [[], [], 'km', ''], left: 592, top: 180, tab: 220},
	    {name: 'kmz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'km', ''], left: 615, top: 180, tab: 220},
	    {name: 'kvz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'kv', ''], left: 530, top: 110, tab: 220},
	    {name: 'kvz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'kv', ''], left: 550, top: 110, tab: 220},
	    {name: 'knz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'kn', ''], left: 585, top: 110, tab: 220},
	    {name: 'knz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'kn', ''], left: 605, top: 110, tab: 220},
	    {name: 'rtoz1', type: 'z', electric: ['kvz1', 'knz1'], mechanic: [[], [], 'rto', ''], left: 508, top: 131, tab: 220},	
	    {name: 'emt', type: 'rl', electric: ['rtoz1'], mechanic: [[], [], '', ''], left: 484, top: 90, tab: 220},	
	    {name: 'kb', type: 'rl', electric: ['kmr1'], mechanic: [[], [], '', ''], left: 590, top: 240, tab: 222}, /* kb */
	    {name: 'km', type: 'rl', electric: ['kbr1'], mechanic: [[], [], '', ''], left: 590, top: 430, tab: 222},
	    {name: 'kv', type: 'rl', electric: ['kvz3', 'ruvz2', 'ritoz2', 'rbzz1'], mechanic: [[], [], '', ''], left: 590, top: 325, tab: 222}, /* kv */
	    {name: 'kn', type: 'rl', electric: ['kvr1'], mechanic: [[], [], '', ''], left: 590, top: 392, tab: 222}, /* kn */
	    {name: 'rto', type: 'rl', electric: ['kmz3', 'rbbz1'], mechanic: [[], [], '', ''], left: 591, top: 64, tab: 222}, /* rto */
	    
	    /* питание дверей */
	    {name: 'rodz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rod', ''], left: 325, top: 237, tab: 220},
	    {name: 'rodz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'rod', ''], left: 373, top: 237, tab: 220},
	    {name: 'rzdz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rzd', ''], left: 345, top: 237, tab: 220},
	    {name: 'rzdz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'rzd', ''], left: 392, top: 237, tab: 220},
	    {name: 'rod', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 605, top: 220, tab: 223},
	    {name: 'rzd', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 605, top: 285, tab: 223},
		
		/* освещение кабины */
	    {name: 'rpkr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rpk', ''], left: 10, top: 165, tab: 220},
	    {name: 'rkdr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rkd', ''], left: 55, top: 165, tab: 220},
	    {name: 'lo1', type: 'r', electric: ['rpkr1', 'rkdr1'], mechanic: [[], [], '', ''], left: 34, top: 219, tab: 220},
	    {name: 'lo2', type: 'r', electric: ['rpkr1', 'rkdr1'], mechanic: [[], [], '', ''], left: 34, top: 238, tab: 220},
	    {name: 'rkd', type: 'rl', electric: ['rodr1'], mechanic: [[], [], '', ''], left: 590, top: 35, tab: 222}, /* rkd */
	    {name: 'rpk', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 605, top: 95, tab: 223},
		
		/* сигнализация вызовов */
	    {name: 'rrv20z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rrv20', ''], left: 50, top: 276, tab: 220},
	    {name: 'rrv19z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rrv19', ''], left: 49, top: 297, tab: 220},
	    {name: 'rrv9z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rrv9', ''], left: 48, top: 322, tab: 220},
	    {name: 'rrv2z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rrv2', ''], left: 48, top: 343, tab: 220},
	    {name: 'rrv1z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rrv1', ''], left: 49, top: 363, tab: 220},
	    {name: 'ls20', type: 'r', electric: ['rrv20z1'], mechanic: [[], [], '', ''], left: 150, top: 282, tab: 220},
	    {name: 'ls19', type: 'r', electric: ['rrv19z1'], mechanic: [[], [], '', ''], left: 150, top: 300, tab: 220},
	    {name: 'ls9', type: 'r', electric: ['rrv9z1'], mechanic: [[], [], '', ''], left: 150, top: 318, tab: 220},
	    {name: 'ls2', type: 'r', electric: ['rrv2z1'], mechanic: [[], [], '', ''], left: 150, top: 344, tab: 220},
	    {name: 'ls1', type: 'r', electric: ['rrv1z1'], mechanic: [[], [], '', ''], left: 150, top: 363, tab: 220},
	    {name: 'rrv20', type: 'rl', electric: [], mechanic: [[], [], '', 'dsh20z1'], left: 590, top: 173, tab: 224},
	    {name: 'rrv19', type: 'rl', electric: [], mechanic: [[], [], '', 'dsh19z1'], left: 590, top: 287, tab: 224},
	    {name: 'rrv9', type: 'rl', electric: [], mechanic: [[], [], '', 'dsh9z1'], left: 590, top: 411, tab: 224},
	    {name: 'rrv2', type: 'rl', electric: [], mechanic: [[], [], '', 'dsh2z1'], left: 676, top: 86, tab: 225},
	    {name: 'rrv1', type: 'rl', electric: [], mechanic: [[], [], '', 'dsh1z1'], left: 676, top: 208, tab: 225},
		
		/* сигнализация и регистрация приказов */
	    {name: 'kbz3', type: 'z', electric: ['feed'], mechanic: [[], [], 'kb', ''], left: 87, top: 445, tab: 220},
	    {name: 'rtor1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rto', ''], left: 64, top: 471, tab: 220},
	    {name: 'rpkr2', type: 'r', electric: ['rtor1'], mechanic: [[], [], 'rpk', ''], left: 111, top: 471, tab: 220},
	    {name: 'rv2z1', type: 'z', electric: ['rpkr2'], mechanic: [[], [], 'rv2', ''], left: 157, top: 468, tab: 220},
	    {name: 'vr26z', type: 'z', electric: ['kbz3', 'rv2z1'], mechanic: [[], [], '', ''], left: 202, top: 467, tab: 220},
	    {name: 'rn1z1', type: 'z', electric: ['vr26z'], mechanic: [[], [], 'rn1', ''], left: 246, top: 469, tab: 220},
	    {name: 'rv2', type: 'rv35', electric: [], mechanic: [[], [], '', ''], left: 604, top: 153, tab: 223},
	    {name: 'rn1', type: 'rl', electric: ['rbgz1'], mechanic: [[], [], '', ''], left: 590, top: 456, tab: 222}, /* rn1 */
		
	    {name: 'knp20z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], '', ''], left: 80, top: 52, tab: 221},
	    {name: 'knp19z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], '', ''], left: 80, top: 99, tab: 221},
	    {name: 'knp9z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], '', ''], left: 80, top: 169, tab: 221},
	    {name: 'knp2z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], '', ''], left: 80, top: 234, tab: 221},
	    {name: 'knp1z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], '', ''], left: 80, top: 280, tab: 221},
	    {name: 'rrp20z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], 'rrp20', ''], left: 80, top: 78, tab: 221},
	    {name: 'rrp19z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], 'rrp19', ''], left: 80, top: 126, tab: 221},
	    {name: 'rrp9z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], 'rrp9', ''], left: 80, top: 192, tab: 221},
	    {name: 'rrp2z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], 'rrp2', ''], left: 80, top: 260, tab: 221},
	    {name: 'rrp1z1', type: 'z', electric: ['rn1z1'], mechanic: [[], [], 'rrp1', ''], left: 80, top: 307, tab: 221},
	    {name: 'lsp20', type: 'r', electric: ['knp20z1', 'rrp20z1'], mechanic: [[], [], '', ''], left: 221, top: 82, tab: 221},
	    {name: 'lsp19', type: 'r', electric: ['knp19z1', 'rrp19z1'], mechanic: [[], [], '', ''], left: 221, top: 130, tab: 221},
	    {name: 'lsp9', type: 'r', electric: ['knp9z1', 'rrp9z1'], mechanic: [[], [], '', ''], left: 221, top: 196, tab: 221},
	    {name: 'lsp2', type: 'r', electric: ['knp2z1', 'rrp2z1'], mechanic: [[], [], '', ''], left: 221, top: 264, tab: 221},
	    {name: 'lsp1', type: 'r', electric: ['knp1z1', 'rrp1z1'], mechanic: [[], [], '', ''], left: 221, top: 311, tab: 221},
	    {name: 'rrp20', type: 'rl', electric: ['knp20z1', 'rrp20z1'], mechanic: [[], [], '', ''], left: 285, top: 60, tab: 221},
	    {name: 'rrp19', type: 'rl', electric: ['knp19z1', 'rrp19z1'], mechanic: [[], [], '', ''], left: 285, top: 105, tab: 221},
	    {name: 'rrp9', type: 'rl', electric: ['knp9z1', 'rrp9z1'], mechanic: [[], [], '', ''], left: 285, top: 173, tab: 221},
	    {name: 'rrp2', type: 'rl', electric: ['knp2z1', 'rrp2z1'], mechanic: [[], [], '', ''], left: 285, top: 239, tab: 221},
	    {name: 'rrp1', type: 'rl', electric: ['knp1z1', 'rrp1z1'], mechanic: [[], [], '', ''], left: 285, top: 287, tab: 221},
		
		/* двери шахты */
		{name: 'dsh1r1', type: 'r', electric: ['feed'], mechanic: [[525, 535], [50, 51], '', ''], left: 156, top: 45, tab: 222},
		{name: 'dsh2r1', type: 'r', electric: ['dsh1r1'], mechanic: [[405, 415], [50, 51], '', ''], left: 216, top: 45, tab: 222},
		{name: 'dsh9r1', type: 'r', electric: ['dsh2r1'], mechanic: [[285, 295], [50, 51], '', ''], left: 245, top: 45, tab: 222},
		{name: 'dsh19r1', type: 'r', electric: ['dsh9r1'], mechanic: [[165, 175], [50, 51], '', ''], left: 273, top: 45, tab: 222},
		{name: 'dsh20r1', type: 'r', electric: ['dsh19r1'], mechanic: [[45, 55], [50, 51], '', ''], left: 342, top: 45, tab: 222},
	    {name: 'rzdr1', type: 'r', electric: ['dsh20r1'], mechanic: [[], [], 'rzd', ''], left: 433, top: 70, tab: 222},
	    {name: 'rodr1', type: 'r', electric: ['rzdr1'], mechanic: [[], [], 'rod', ''], left: 467, top: 70, tab: 222},
	    {name: 'ritoz1', type: 'z', electric: ['rodr1'], mechanic: [[], [], 'rito', ''], left: 515, top: 58, tab: 222},
	    {name: 'rnrr1', type: 'r', electric: ['rodr1'], mechanic: [[], [], 'rnr', ''], left: 516, top: 86, tab: 222},
	    {name: 'kmz3', type: 'z', electric: ['ritoz1', 'rnrr1'], mechanic: [[], [], 'km', ''], left: 551, top: 59, tab: 222},
	    {name: 'rbbz1', type: 'z', electric: ['rodr1'], mechanic: [[], [], 'rbb', ''], left: 550, top: 101, tab: 222},
	    {name: 'rito', type: 'rl', electric: ['dchtor1'], mechanic: [[], [], '', ''], left: 324, top: 102, tab: 226},
	    {name: 'rnr', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 603, top: 189, tab: 223},
	    {name: 'rbb', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 606, top: 49, tab: 223},
		
		/* цепочка безопасности */
	    {name: 'kknstop', type: 'r', electric: ['feed'], mechanic: [[], [], '', ''], left: 105, top: 157, tab: 222},
		{name: 'rpoz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rpo', ''], left: 105, top: 181, tab: 222},
		{name: 'vlr1', type: 'r', electric: ['kknstop', 'rpoz1'], mechanic: [[], [], '', ''], left: 166, top: 160, tab: 222},
		{name: 'duskr1', type: 'r', electric: ['vlr1'], mechanic: [[], [], '', ''], left: 222, top: 160, tab: 222},
		{name: 'vbrr1', type: 'r', electric: ['duskr1'], mechanic: [[], [], '', ''], left: 256, top: 160, tab: 222},
		{name: 'spkr1', type: 'r', electric: ['vbrr1'], mechanic: [[], [], '', ''], left: 291, top: 160, tab: 222},
		{name: 'vnur1', type: 'r', electric: ['spkr1'], mechanic: [[], [], '', ''], left: 349, top: 160, tab: 222},
		{name: 'v2r1', type: 'r', electric: ['vnur1'], mechanic: [[], [], '', ''], left: 391, top: 160, tab: 222},
		{name: 'vkr1', type: 'r', electric: ['v2r1'], mechanic: [[], [], '', ''], left: 454, top: 160, tab: 222},
	    {name: 'mknstop', type: 'r', electric: ['vkr1'], mechanic: [[], [], '', ''], left: 387, top: 191, tab: 222},
	    {name: 'rbgz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'rbg', ''], left: 115, top: 234, tab: 222},
	    {name: 'dk1r1', type: 'r', electric: ['rbgz1'], mechanic: [[], [50,51], '', ''], left: 259, top: 95, tab: 222},
	    {name: 'rkd1', type: 'rl', electric: ['dk1r1'], mechanic: [[], [], '', ''], left: 590, top: 125, tab: 222}, /* rkd1 */
	    {name: 'rpo', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 567, top: 119, tab: 223},
	    {name: 'rbg', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 604, top: 471, tab: 223},
	    {name: 'rkd1z1', type: 'z', electric: ['dk1r1'], mechanic: [[], [], 'rkd1', ''], left: 281, top: 124, tab: 222},
	    {name: 'rkd1z2', type: 'z', electric: ['rkd1z1'], mechanic: [[], [], 'rkd1', ''], left: 234, top: 124, tab: 222},
	    {name: 'rkdz1', type: 'z', electric: ['rkd1z2'], mechanic: [[], [], 'rkd', ''], left: 189, top: 124, tab: 222},
		
		/* цепочка РН */
	    {name: 'ruvz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'ruv', ''], left: 177, top: 202, tab: 222},
	    {name: 'runz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'run', ''], left: 177, top: 234, tab: 222},
	    {name: 'rnn', type: 'rl', electric: ['ruvz1', 'runz1'], mechanic: [[], [], '', ''], left: 592, top: 206, tab: 222},
	    {name: 'ruv', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 436, top: 321, tab: 224}, /* ? */
	    {name: 'run', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 505, top: 443, tab: 225}, /* ? */
		
		/* цепочка КБ */
	    {name: 'rzr1', type: 'r', electric: ['ruvz1', 'runz1'], mechanic: [[], [], 'rz', ''], left: 273, top: 237, tab: 222},
	    {name: 'rzr2', type: 'r', electric: ['rzr1'], mechanic: [[], [], 'rz', ''], left: 348, top: 237, tab: 222},
	    {name: 'rkd1z3', type: 'z', electric: ['rzr2'], mechanic: [[], [], 'rkd1', ''], left: 415, top: 237, tab: 222},
	    {name: 'rkdz2', type: 'z', electric: ['rkd1z3'], mechanic: [[], [], 'rkd', ''], left: 463, top: 237, tab: 222},
	    {name: 'kmr1', type: 'r', electric: ['rkdz2'], mechanic: [[], [], 'km', ''], left: 531, top: 237, tab: 222},
	    {name: 'rz', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 435, top: 198, tab: 224},
		
		/* цепочка КМ */	
	    {name: 'kknvr1', type: 'r', electric: ['rkdz1'], mechanic: [[], [], '', ''], left: 122, top: 304, tab: 222},
	    {name: 'kknnr1', type: 'r', electric: ['kknvr1'], mechanic: [[], [], '', ''], left: 166, top: 304, tab: 222},
	    {name: 'rnrz1', type: 'z', electric: ['kknnr1'], mechanic: [[], [], 'rnr', ''], left: 141, top: 320, tab: 222},
	    {name: 'rtoz2', type: 'z', electric: ['rnrz1'], mechanic: [[], [], 'rto', ''], left: 89, top: 371, tab: 222},
	    {name: 'rtoz3', type: 'z', electric: ['rtoz2'], mechanic: [[], [], 'rto', ''], left: 89, top: 407, tab: 222},
		{name: 'kbr1', type: 'r', electric: ['rtoz3'], mechanic: [[], [], 'kb', ''], left: 391, top: 434, tab: 222},
		
		/* цепочки КВ и КН */
		{name: 'vr25z', type: 'z', electric: ['rkdz1'], mechanic: [[], [], '', ''], left: 118, top: 263, tab: 222},
		{name: 'rnrr2', type: 'r', electric: ['vr25z'], mechanic: [[], [], 'rnr', ''], left: 187, top: 275, tab: 222},
		{name: 'kknvz1', type: 'z', electric: ['rnrr2'], mechanic: [[], [], '', ''], left: 256, top: 264, tab: 222},
		{name: 'kknnz1', type: 'z', electric: ['rnrr2'], mechanic: [[], [], '', ''], left: 256, top: 294, tab: 222},
		{name: 'ritoz2', type: 'z', electric: ['kknvz1'], mechanic: [[], [], 'rito', ''], left: 427, top: 300, tab: 222},
		{name: 'rbzz1', type: 'z', electric: ['kknvz1'], mechanic: [[], [], 'rbz', ''], left: 494, top: 300, tab: 222},
		{name: 'ritoz3', type: 'z', electric: ['kknnz1'], mechanic: [[], [], 'rito', ''], left: 314, top: 365, tab: 222},
		{name: 'ris1z1', type: 'z', electric: ['kknnz1'], mechanic: [[], [], 'ris1', ''], left: 370, top: 365, tab: 222},
		{name: 'ruvz2', type: 'z', electric: ['rtoz3'], mechanic: [[], [], 'ruv', ''], left: 260, top: 321, tab: 222},
		{name: 'kvz3', type: 'z', electric: ['rtoz3'], mechanic: [[], [], 'kv', ''], left: 260, top: 343, tab: 222},
		{name: 'runz2', type: 'z', electric: ['rtoz3'], mechanic: [[], [], 'run', ''], left: 260, top: 366, tab: 222},
		{name: 'knz3', type: 'z', electric: ['rtoz3'], mechanic: [[], [], 'kn', ''], left: 260, top: 389, tab: 222},
		{name: 'kvr1', type: 'r', electric: ['ritoz3', 'ris1z1', 'runz2', 'knz3'], mechanic: [[], [], 'kv', ''], left: 464, top: 398, tab: 222},
		{name: 'rbz', type: 'rv3', electric: [], mechanic: [[], [], '', ''], left: 605, top: 354, tab: 223},
		{name: 'ris1', type: 'rl', electric: [], mechanic: [[], [], '', ''], left: 323, top: 451, tab: 226},
		
	
      ];
	  
	  root.data = data;
	  
	})(window);
	