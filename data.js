
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
	    {name: 'rod', type: 'rl', electric: ['rzdr2'], mechanic: [[], [], '', ''], left: 605, top: 220, tab: 223},
	    {name: 'rzd', type: 'rl', electric: ['ritoz5', 'rkdr2', 'rzdz4'], mechanic: [[], [], '', ''], left: 605, top: 285, tab: 223}, /* rzd */
		
		/* освещение кабины */
	    {name: 'rpkr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rpk', ''], left: 10, top: 165, tab: 220},
	    {name: 'rkdr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rkd', ''], left: 55, top: 165, tab: 220},
	    {name: 'lo1', type: 'r', electric: ['rpkr1', 'rkdr1'], mechanic: [[], [], '', ''], left: 34, top: 219, tab: 220},
	    {name: 'lo2', type: 'r', electric: ['rpkr1', 'rkdr1'], mechanic: [[], [], '', ''], left: 34, top: 238, tab: 220},
	    {name: 'rkd', type: 'rl', electric: ['rodr1'], mechanic: [[], [], '', ''], left: 590, top: 35, tab: 222}, /* rkd */
	    {name: 'rpk', type: 'rl', electric: ['vbpr1'], mechanic: [[], [], '', ''], left: 605, top: 95, tab: 223},
		
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
	    {name: 'rrv20', type: 'rl', electric: ['kncb20z', 'rrv20z2'], mechanic: [[], [], '', 'dsh20z1'], left: 590, top: 173, tab: 224},
	    {name: 'rrv19', type: 'rl', electric: ['kncb19z', 'rrv19z2'], mechanic: [[], [], '', 'dsh19z1'], left: 590, top: 287, tab: 224},
	    {name: 'rrv9', type: 'rl', electric: ['kncb9z', 'rrv9z2'], mechanic: [[], [], '', 'dsh9z1'], left: 590, top: 411, tab: 224},
	    {name: 'rrv2', type: 'rl', electric: ['kncb2z', 'rrv2z2'], mechanic: [[], [], '', 'dsh2z1'], left: 676, top: 86, tab: 225},
	    {name: 'rrv1', type: 'rl', electric: ['kncb1z', 'rrv1z2'], mechanic: [[], [], '', 'dsh1z1'], left: 676, top: 208, tab: 225},
		
		/* сигнализация и регистрация приказов */
	    {name: 'kbz3', type: 'z', electric: ['feed'], mechanic: [[], [], 'kb', ''], left: 87, top: 445, tab: 220},
	    {name: 'rtor1', type: 'r', electric: ['feed'], mechanic: [[], [], 'rto', ''], left: 64, top: 471, tab: 220},
	    {name: 'rpkr2', type: 'r', electric: ['rtor1'], mechanic: [[], [], 'rpk', ''], left: 111, top: 471, tab: 220},
	    {name: 'rv2z1', type: 'z', electric: ['rpkr2'], mechanic: [[], [], 'rv2', ''], left: 157, top: 468, tab: 220},
	    {name: 'vr26r', type: 'r', electric: ['kbz3', 'rv2z1'], mechanic: [[], [], 'mpW', ''], left: 202, top: 467, tab: 220},
	    {name: 'rn1z1', type: 'z', electric: ['vr26r'], mechanic: [[], [], 'rn1', ''], left: 246, top: 469, tab: 220},
	    {name: 'rv2', type: 'rv35', electric: ['rzdz3', 'rnnr1', 'rodz3', 'rtoz4'], mechanic: [[], [], '', ''], left: 604, top: 153, tab: 223}, /* rv2 */
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
	    {name: 'rnr', type: 'rl', electric: ['kbrr1'], mechanic: [[], [], '', ''], left: 603, top: 189, tab: 223},
	    {name: 'rbb', type: 'rl', electric: ['kbz4'], mechanic: [[], [], '', ''], left: 606, top: 49, tab: 223}, /* rb */
		
		/* цепочка безопасности */
	    {name: 'kknstop', type: 'r', electric: ['feed'], mechanic: [[], [], '', ''], left: 105, top: 157, tab: 222},
		{name: 'rpoz1', type: 'z', electric: ['feed'], mechanic: [[], [], 'rpo', ''], left: 105, top: 181, tab: 222},
		{name: 'vlr1', type: 'r', electric: ['kknstop', 'rpoz1'], mechanic: [[], [], '', ''], left: 166, top: 160, tab: 222},
		{name: 'duskr1', type: 'r', electric: ['vlr1'], mechanic: [[], [], '', ''], left: 222, top: 160, tab: 222},
		{name: 'vbrr1', type: 'r', electric: ['duskr1'], mechanic: [[], [], 'vbrz1', ''], left: 256, top: 160, tab: 222},
		{name: 'spkr1', type: 'r', electric: ['vbrr1'], mechanic: [[], [], '', ''], left: 291, top: 160, tab: 222},
		{name: 'vnur1', type: 'r', electric: ['spkr1'], mechanic: [[], [], '', ''], left: 349, top: 160, tab: 222},
		{name: 'v2r1', type: 'r', electric: ['vnur1'], mechanic: [[], [], '', ''], left: 391, top: 160, tab: 222},
		{name: 'vkr1', type: 'r', electric: ['v2r1'], mechanic: [[], [], 'overpath', ''], left: 454, top: 160, tab: 222},
	    {name: 'mknstop', type: 'r', electric: ['vkr1'], mechanic: [[], [], '', ''], left: 387, top: 191, tab: 222},
	    {name: 'rbgz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'rbg', ''], left: 115, top: 234, tab: 222},
	    {name: 'dk1r1', type: 'r', electric: ['rbgz1'], mechanic: [[], [50,51], '', ''], left: 259, top: 95, tab: 222},
	    {name: 'rkd1', type: 'rl', electric: ['dk1r1'], mechanic: [[], [], '', ''], left: 590, top: 125, tab: 222}, /* rkd1 */
	    {name: 'rpo', type: 'rl', electric: ['pojarka', 'rpoz2'], mechanic: [[], [], '', ''], left: 567, top: 119, tab: 223}, /* rpo */
	    {name: 'rbg', type: 'rl', electric: ['rbbz2', 'vbgr1'], mechanic: [[], [], '', ''], left: 604, top: 471, tab: 223}, /* rbg */
	    {name: 'rkd1z1', type: 'z', electric: ['dk1r1'], mechanic: [[], [], 'rkd1', ''], left: 281, top: 124, tab: 222},
	    {name: 'rkd1z2', type: 'z', electric: ['rkd1z1'], mechanic: [[], [], 'rkd1', ''], left: 234, top: 124, tab: 222},
	    {name: 'rkdz1', type: 'z', electric: ['rkd1z2'], mechanic: [[], [], 'rkd', ''], left: 189, top: 124, tab: 222},
		
		/* цепочка РН */
	    {name: 'ruvz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'ruv', ''], left: 177, top: 202, tab: 222},
	    {name: 'runz1', type: 'z', electric: ['mknstop'], mechanic: [[], [], 'run', ''], left: 177, top: 234, tab: 222},
	    {name: 'rnn', type: 'rl', electric: ['ruvz1', 'runz1'], mechanic: [[], [], '', ''], left: 592, top: 206, tab: 222},
	    {name: 'ruv', type: 'rl', electric: ['runr1'], mechanic: [[], [], '', ''], left: 436, top: 321, tab: 224}, /* ? */
	    {name: 'run', type: 'rl', electric: ['ruvr2'], mechanic: [[], [], '', ''], left: 505, top: 443, tab: 225}, /* ? */
		
		/* цепочка КБ */
	    {name: 'rzr1', type: 'r', electric: ['ruvz1', 'runz1'], mechanic: [[], [], 'rz', ''], left: 273, top: 237, tab: 222},
	    {name: 'rzr2', type: 'r', electric: ['rzr1'], mechanic: [[], [], 'rz', ''], left: 348, top: 237, tab: 222},
	    {name: 'rkd1z3', type: 'z', electric: ['rzr2'], mechanic: [[], [], 'rkd1', ''], left: 415, top: 237, tab: 222},
	    {name: 'rkdz2', type: 'z', electric: ['rkd1z3'], mechanic: [[], [], 'rkd', ''], left: 463, top: 237, tab: 222},
	    {name: 'kmr1', type: 'r', electric: ['rkdz2'], mechanic: [[], [], 'km', ''], left: 531, top: 237, tab: 222},
	    {name: 'rz', type: 'rl', electric: ['kbr2', 'rbzz2', 'rnnr3'], mechanic: [[], [], '', ''], left: 435, top: 198, tab: 224}, /* rz */
		
		/* цепочка КМ */	
	    {name: 'kknvr1', type: 'r', electric: ['rkdz1'], mechanic: [[], [], 'kknvz1', ''], left: 122, top: 304, tab: 222},
	    {name: 'kknnr1', type: 'r', electric: ['kknvr1'], mechanic: [[], [], 'kknnz1', ''], left: 166, top: 304, tab: 222},
	    {name: 'rnrz1', type: 'z', electric: ['kknnr1'], mechanic: [[], [], 'rnr', ''], left: 141, top: 320, tab: 222},
	    {name: 'rtoz2', type: 'z', electric: ['rnrz1'], mechanic: [[], [], 'rto', ''], left: 89, top: 371, tab: 222},
	    {name: 'rtoz3', type: 'z', electric: ['rtoz2'], mechanic: [[], [], 'rto', ''], left: 89, top: 407, tab: 222},
		{name: 'kbr1', type: 'r', electric: ['rtoz3', 'knz3', 'kvz3', 'ruvz2', 'runz2'], mechanic: [[], [], 'kb', ''], left: 391, top: 434, tab: 222},
		
		/* цепочки КВ и КН */
		{name: 'vr25z', type: 'z', electric: ['rkdz1'], mechanic: [[], [], 'mpW', ''], left: 118, top: 263, tab: 222},
		{name: 'rnrr2', type: 'r', electric: ['vr25z'], mechanic: [[], [], 'rnr', ''], left: 187, top: 275, tab: 222},
		{name: 'kknvz1', type: 'z', electric: ['rnrr2'], mechanic: [[], [], '', ''], left: 256, top: 264, tab: 222},
		{name: 'kknnz1', type: 'z', electric: ['rnrr2'], mechanic: [[], [], '', ''], left: 256, top: 294, tab: 222},
		{name: 'ritoz2', type: 'z', electric: ['kknvz1'], mechanic: [[], [], 'rito', ''], left: 427, top: 300, tab: 222},
		{name: 'rbzz1', type: 'z', electric: ['kknvz1'], mechanic: [[], [], 'rbz', ''], left: 494, top: 300, tab: 222},
		{name: 'ritoz3', type: 'z', electric: ['kknnz1'], mechanic: [[], [], 'rito', ''], left: 314, top: 365, tab: 222},
		{name: 'ris1z1', type: 'z', electric: ['kknnz1'], mechanic: [[], [], 'ris1', ''], left: 370, top: 365, tab: 222},
		{name: 'ruvz2', type: 'z', electric: ['rtoz3', 'ritoz2', 'rbzz1'], mechanic: [[], [], 'ruv', ''], left: 260, top: 321, tab: 222},
		{name: 'kvz3', type: 'z', electric: ['rtoz3', 'ritoz2', 'rbzz1'], mechanic: [[], [], 'kv', ''], left: 260, top: 343, tab: 222},
		{name: 'runz2', type: 'z', electric: ['rtoz3', 'ritoz3', 'ris1z1'], mechanic: [[], [], 'run', ''], left: 260, top: 366, tab: 222},
		{name: 'knz3', type: 'z', electric: ['rtoz3', 'ritoz3', 'ris1z1'], mechanic: [[], [], 'kn', ''], left: 260, top: 389, tab: 222},
		{name: 'kvr1', type: 'r', electric: ['ritoz3', 'ris1z1', 'runz2', 'knz3'], mechanic: [[], [], 'kv', ''], left: 464, top: 398, tab: 222},
		{name: 'rbz', type: 'rv3', electric: ['rbz1z1', 'rpoz4'], mechanic: [[], [], '', ''], left: 605, top: 354, tab: 223},
		{name: 'ris1', type: 'rl', electric: ['dchs1r1'], mechanic: [[], [], '', ''], left: 323, top: 451, tab: 226},
		
		/* цепочка РБ */
		{name: 'kbz4', type: 'z', electric: ['feed'], mechanic: [[], [], 'kb', ''], left: 275, top: 48, tab: 223},
		
		/* цепочка РПК */
		{name: 'vbpr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'vbpW', ''], left: 178, top: 101, tab: 223}, /* ? */
		{name: 'pojarka', type: 'z', electric: ['feed'], mechanic: [[], [], '', ''], left: 478, top: 68, tab: 223},
		{name: 'rpoz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'rpo', ''], left: 482, top: 120, tab: 223},
		
		/* цепочка РВ2 */
		{name: 'rtoz4', type: 'z', electric: ['feed'], mechanic: [[], [], 'rto', ''], left: 343, top: 107, tab: 223},
		{name: 'rodz3', type: 'z', electric: ['feed'], mechanic: [[], [], 'rod', ''], left: 325, top: 129, tab: 223},
		{name: 'rpkr3', type: 'r', electric: ['feed'], mechanic: [[], [], 'rpk', ''], left: 294, top: 154, tab: 223},
		{name: 'rzdz3', type: 'z', electric: ['rpkr3', 'rpoz3'], mechanic: [[], [], 'rzd', ''], left: 369, top: 143, tab: 223},
		{name: 'rpoz3', type: 'z', electric: ['feed'], mechanic: [[], [], 'rpo', ''], left: 311, top: 168, tab: 223},
		{name: 'rnnr1', type: 'r', electric: ['rpkr3', 'rpoz3'], mechanic: [[], [], 'rnn', ''], left: 384, top: 174, tab: 223},  
		
		/* цепочка РНР */
		{name: 'kbrr1', type: 'r', electric: ['feed'], mechanic: [[], [], 'kbrW', ''], left: 130, top: 193, tab: 223},
		
		/* цепочка РОД */
		{name: 'rnrz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'rnr', ''], left: 110, top: 220, tab: 223},
		{name: 'vr21r', type: 'r', electric: ['rnrz2'], mechanic: [[], [], 'mpW', ''], left: 229, top: 220, tab: 223},
		{name: 'vkor1', type: 'r', electric: ['vr21r'], mechanic: [[], [50, 95], '', ''], left: 312, top: 228, tab: 223},
		{name: 'rbzr1', type: 'r', electric: ['vkor1'], mechanic: [[], [], 'rbz', ''], left: 390, top: 228, tab: 223},
		{name: 'ris1r1', type: 'r', electric: ['vkor1'], mechanic: [[], [], 'ris1', ''], left: 392, top: 252, tab: 223},
		{name: 'vr24r', type: 'r', electric: ['rbzr1', 'ris1r1'], mechanic: [[], [], 'mpW', ''], left: 444, top: 220, tab: 223},
		{name: 'rzz1', type: 'z', electric: ['vr24r'], mechanic: [[], [], 'rz', ''], left: 480, top: 220, tab: 223},
		{name: 'ritor1', type: 'r', electric: ['rzz1'], mechanic: [[], [], 'rito', ''], left: 523, top: 228, tab: 223},
		{name: 'rzdr2', type: 'r', electric: ['ritor1'], mechanic: [[], [], 'rzd', ''], left: 561, top: 228, tab: 223},
		
		{name: 'vr22z', type: 'z', electric: ['rnrz2'], mechanic: [[], [], 'mpW', ''], left: 183, top: 244, tab: 223},
		
		/* цепочка РЗД */
		{name: 'vkzz1', type: 'r'/* because 'z' need rele to enable */, electric: ['rbgz1'], mechanic: [[], [51, 100], '', ''], left: 180, top: 283, tab: 223},
		{name: 'ritoz4', type: 'z', electric: ['vkzz1'], mechanic: [[], [], 'rito', ''], left: 287, top: 267, tab: 223},
		{name: 'rzr3', type: 'r', electric: ['vkzz1'], mechanic: [[], [], 'rz', ''], left: 300, top: 286, tab: 223},
		{name: 'rnnz1', type: 'z', electric: ['vkzz1'], mechanic: [[], [], 'rnn', ''], left: 289, top: 304, tab: 223},
		{name: 'rodr2', type: 'r', electric: ['ritoz4', 'rzr3', 'rnnz1'], mechanic: [[], [], 'rod', ''], left: 385, top: 291, tab: 223},
		{name: 'ritoz5', type: 'z', electric: ['rodr2'], mechanic: [[], [], 'rito', ''], left: 481, top: 265, tab: 223},
		{name: 'rkd1r1', type: 'r', electric: ['rodr2'], mechanic: [[], [], 'rkd1', ''], left: 454, top: 292, tab: 223},
		{name: 'rkdr2', type: 'r', electric: ['rkd1r1'], mechanic: [[], [], 'rkd', ''], left: 503, top: 292, tab: 223},
		{name: 'rzdz4', type: 'z', electric: ['rodr2'], mechanic: [[], [], 'rzd', ''], left: 476, top: 309, tab: 223}, 
		
		/* цепочка РБЗ */
		{name: 'rnrz3', type: 'z', electric: ['ris1z2'], mechanic: [[], [], 'rnr', ''], left: 229, top: 322, tab: 223},
		{name: 'vr23r', type: 'r', electric: ['rnrz3'], mechanic: [[], [], 'mpW', ''], left: 383, top: 323, tab: 223},
		{name: 'ris1z2', type: 'z', electric: ['feed'], mechanic: [[], [], 'ris1', ''], left: 92, top: 350, tab: 223},
		{name: 'ris2z1', type: 'z', electric: ['ris1z2'], mechanic: [[], [], 'ris2', ''], left: 155, top: 349, tab: 223},
		{name: 'ris9z1', type: 'z', electric: ['ris2z1'], mechanic: [[], [], 'ris9', ''], left: 373, top: 349, tab: 223},
		{name: 'rbz1z1', type: 'z', electric: ['ris9z1', 'rnrr3'], mechanic: [[], [], 'rbz1', ''], left: 476, top: 353, tab: 223},
		{name: 'rpoz4', type: 'z', electric: ['ris1z2'], mechanic: [[], [], 'rpo', ''], left: 287, top: 370, tab: 223},
		{name: 'rnrr3', type: 'r', electric: ['feed'], mechanic: [[], [], 'rnr', ''], left: 115, top: 389, tab: 223},
		
		{name: 'ris19z1', type: 'z', electric: ['feed'], mechanic: [[], [], 'ris19', ''], left: 348, top: 406, tab: 223},
		{name: 'ris20z1', type: 'z', electric: ['ris19z1', 'rnrr4'], mechanic: [[], [], 'ris20', ''], left: 442, top: 409, tab: 223},
		{name: 'rnrr4', type: 'r', electric: ['feed'], mechanic: [[], [], 'rnr', ''], left: 231, top: 432, tab: 223},
		{name: 'rbz1', type: 'rl', electric: ['ris20z1'], mechanic: [[], [], '', ''], left: 604, top: 428, tab: 223},
		{name: 'ris2', type: 'rl', electric: ['dchs2r1'], mechanic: [[], [], '', ''], left: 323, top: 380, tab: 226},
		{name: 'ris9', type: 'rl', electric: ['dchs9r1'], mechanic: [[], [], '', ''], left: 324, top: 307, tab: 226},
		{name: 'ris19', type: 'rl', electric: ['dchs19r1'], mechanic: [[], [], '', ''], left: 324, top: 239, tab: 226},
		{name: 'ris20', type: 'rl', electric: ['dchs20r1'], mechanic: [[], [], '', ''], left: 324, top: 165, tab: 226},
		
		/* цепочка РБГ-110 */	
		{name: 'rbbz2', type: 'z', electric: ['feed'], mechanic: [[], [], 'rbb', ''], left: 282, top: 439, tab: 223},
		{name: 'vbgr1', type: 'r', electric: ['feed'], mechanic: [[], [], '', ''], left: 166, top: 471, tab: 223},
		
		/* блок регистрации вызовов */	
		{name: 'kncb20z', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 493, top: 171, tab: 224},
		{name: 'kncb19z', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 494, top: 283, tab: 224},
		{name: 'kncb9z', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 493, top: 407, tab: 224},
		{name: 'kncb2z', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 575, top: 82, tab: 225},
		{name: 'kncb1z', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 572, top: 205, tab: 225},
		{name: 'rrv20z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv20', ''], left: 494, top: 209, tab: 224},
		{name: 'rrv19z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv19', ''], left: 495, top: 323, tab: 224},
		{name: 'rrv9z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv9', ''], left: 495, top: 446, tab: 224},
		{name: 'rrv2z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv2', ''], left: 575, top: 126, tab: 225},
		{name: 'rrv1z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv1', ''], left: 573, top: 247, tab: 225},
		{name: 'dsh1z1', type: 'z', electric: ['kncb1z', 'rrv1z2'], mechanic: [[525, 535], [52, 100], '', ''], left: 666, top: 257, tab: 225},
		{name: 'dsh2z1', type: 'z', electric: ['kncb2z', 'rrv2z2'], mechanic: [[405, 415], [52, 100], '', ''], left: 667, top: 134, tab: 225},
		{name: 'dsh9z1', type: 'z', electric: ['kncb9z', 'rrv9z2'], mechanic: [[285, 295], [52, 100], '', ''], left: 579, top: 454, tab: 224},
		{name: 'dsh19z1', type: 'z', electric: ['kncb19z', 'rrv19z2'], mechanic: [[165, 175], [52, 100], '', ''], left: 578, top: 330, tab: 224},
		{name: 'dsh20z1', type: 'z', electric: ['kncb20z', 'rrv20z2'], mechanic: [[45, 55], [52, 100], '', ''], left: 579, top: 216, tab: 224},
		
		/* цепочка РПВ */
		{name: 'rbbz3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rbb', ''], left: 83, top: 91, tab: 224},
		{name: 'rv2r1', type: 'r', electric: ['vr21r'], mechanic: [[], [], 'rv2', ''], left: 223, top: 128, tab: 224},
		{name: 'rbbz4', type: 'z', electric: ['rbbz3', 'rv2r1'], mechanic: [[], [], 'rbb', ''], left: 258, top: 106, tab: 224}, 
		{name: 'runz3', type: 'z', electric: ['rbbz3', 'rbbz4'], mechanic: [[], [], 'run', ''], left: 298, top: 92, tab: 224},
		{name: 'rpkz1', type: 'z', electric: ['rbbz4', 'rv2r1'], mechanic: [[], [], 'rpk', ''], left: 299, top: 125, tab: 224},
		{name: 'rbzr2', type: 'r', electric: ['runz3', 'rpkz1'], mechanic: [[], [], 'rbz', ''], left: 362, top: 97, tab: 224},
		{name: 'vbg90r1', type: 'r', electric: ['runz3', 'rpkz1'], mechanic: [[], [], '', ''], left: 361, top: 134, tab: 224},
		{name: 'rpv1', type: 'rl', electric: ['rbzr2', 'vbg90r1'], mechanic: [[], [], '', ''], left: 434, top: 93, tab: 224},
		{name: 'rpv2', type: 'rl', electric: ['rbzr2', 'vbg90r1'], mechanic: [[], [], '', ''], left: 435, top: 123, tab: 224},
		{name: 'rpv3', type: 'rl', electric: ['rbzr2', 'vbg90r1'], mechanic: [[], [], '', ''], left: 434, top: 154, tab: 224},
		
		/* цепочка РЗ */
		{name: 'vbrz1', type: 'z', electric: ['vr21r'], mechanic: [[], [], '', ''], left: 123, top: 195, tab: 224},
		{name: 'kbr2', type: 'r', electric: ['vbrz1', 'rodz4', 'rnnr2', 'kmz4'], mechanic: [[], [], 'kb', ''], left: 233, top: 204, tab: 224},
		{name: 'rodz4', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rod', ''], left: 84, top: 216, tab: 224},
		{name: 'rv2z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rv2', ''], left: 85, top: 243, tab: 224},
		{name: 'rkdr3', type: 'r', electric: ['rv2z2'], mechanic: [[], [], 'rkd', ''], left: 130, top: 248, tab: 224},
		{name: 'rnnr2', type: 'r', electric: ['rkdr3'], mechanic: [[], [], 'rnn', ''], left: 176, top: 248, tab: 224},
		{name: 'kmz4', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'km', ''], left: 151, top: 285, tab: 224},
		{name: 'rbzz2', type: 'z', electric: ['rpkr4', 'ruvr1'], mechanic: [[], [], 'rbz', ''], left: 307, top: 215, tab: 224},
		{name: 'rnnr3', type: 'r', electric: ['rpor1'], mechanic: [[], [], 'rnn', ''], left: 347, top: 241, tab: 224}, 
		{name: 'rpkr4', type: 'r', electric: ['rpor1'], mechanic: [[], [], 'rpk', ''], left: 308, top: 265, tab: 224},  
		{name: 'ruvr1', type: 'r', electric: ['rpor1'], mechanic: [[], [], 'ruv', ''], left: 311, top: 293, tab: 224}, 
		{name: 'rpor1', type: 'r', electric: ['ris20r1', 'ris19r1', 'ris9r1', 'ris2r1', 'ris1r2'], mechanic: [[], [], 'rpo', ''], left: 348, top: 303, tab: 224},
		
		/* цепочка РУВ */
		{name: 'rrv20z3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv20', ''], left: 85, top: 319, tab: 224},
		{name: 'rrp20z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrp20', ''], left: 113, top: 335, tab: 224},
		{name: 'rpv3z1', type: 'z', electric: ['rrv20z3'], mechanic: [[], [], 'rpv3', ''], left: 131, top: 315, tab: 224},
		{name: 'ris20z2', type: 'z', electric: ['rrp20z2', 'rpv3z1', 'mknvz1', 'ris20z3', 'rnnz2'], mechanic: [[], [], 'ris20', ''], left: 188, top: 318, tab: 224},
		{name: 'rpor2', type: 'r', electric: ['ris20z2'], mechanic: [[], [], 'rpo', ''], left: 269, top: 326, tab: 224},
		{name: 'knr1', type: 'r', electric: ['rpor2'], mechanic: [[], [], 'kn', ''], left: 304, top: 326, tab: 224},
		{name: 'runr1', type: 'r', electric: ['knr1'], mechanic: [[], [], 'run', ''], left: 364, top: 326, tab: 224},
		
		/* --------------------------------------------------------------------------------------------------------- */
		{name: 'mknvz1', type: 'z', electric: ['vr22z'], mechanic: [[], [], 'mkvW', ''], left: 84, top: 369, tab: 224},
		{name: 'rnnz2', type: 'z', electric: ['rtoz5'], mechanic: [[], [], 'rnn', ''], left: 75, top: 391, tab: 224},
		{name: 'ris20z3', type: 'z', electric: ['risesa', 'ris19z2'], mechanic: [[], [], 'ris20', ''], left: 278, top: 389, tab: 224},
		{name: 'ris20r1', type: 'r', electric: ['mknvz1', 'rnnz2', 'rrp20z2', 'rpv3z1'], mechanic: [[], [], 'ris20', ''], left: 311, top: 379, tab: 224},
		{name: 'rrv19z3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv19', ''], left: 76, top: 426, tab: 224},
		{name: 'rpv3z2', type: 'z', electric: ['rrv19z3'], mechanic: [[], [], 'rpv3', ''], left: 133, top: 427, tab: 224},
		{name: 'rrp19z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrp19', ''], left: 104, top: 450, tab: 224},
		{name: 'ris19z2', type: 'z', electric: ['rrp19z2', 'rpv3z2', 'ris9z2', 'rises10'/*'ris19z3', 'ris20z3'*/], mechanic: [[], [], 'ris19', ''], left: 278, top: 435, tab: 224},
		{name: 'ris19r1', type: 'r', electric: ['rrp19z2', 'rpv3z2'], mechanic: [[], [], 'ris19', ''], left: 310, top: 458, tab: 224},
		
		/* --------------------------------------------------------------------------------------------------------- */	
		{name: 'rtoz5', type: 'z', electric: ['vr22z'], mechanic: [[], [], 'rto', ''], left: 54, top: 132, tab: 225},
		{name: 'ris19z3', type: 'z', electric: [/*'ris19z2',*/ 'rrp19z2', 'rpv3z2', 'rises11' ], mechanic: [[], [], 'ris19', ''], left: 326, top: 58, tab: 225},
		{name: 'rrv9z3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv9', ''], left: 108, top: 107, tab: 225},
		{name: 'rpv2z1', type: 'z', electric: ['rrv9z3'], mechanic: [[], [], 'rpv2', ''], left: 174, top: 108, tab: 225},
		{name: 'rrp9z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrp9', ''], left: 141, top: 135, tab: 225},
		{name: 'ris9z2', type: 'z', electric: ['rrp9z2', 'rpv2z1', 'ris2z2', 'rises20'/*'ris9z3'*/], mechanic: [[], [], 'ris9', ''], left: 331, top: 120, tab: 225},
		{name: 'ris9r1', type: 'r', electric: ['rrp9z2', 'rpv2z1'], mechanic: [[], [], 'ris9', ''], left: 367, top: 145, tab: 225},
		{name: 'ris9z3', type: 'z', electric: ['rrp9z2', 'rpv2z1', 'ris19z3','rises21' /*'ris9z2'*/], mechanic: [[], [], 'ris9', ''], left: 329, top: 155, tab: 225},
		
		{name: 'rrv2z3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv2', ''], left: 107, top: 217, tab: 225},
		{name: 'rpv1z1', type: 'z', electric: ['rrv2z3'], mechanic: [[], [], 'rpv1', ''], left: 173, top: 217, tab: 225},
		{name: 'rrp2z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrp2', ''], left: 141, top: 240, tab: 225},
		{name: 'ris2z2', type: 'z', electric: ['rrp2z2', 'rpv1z1', 'rises30'/*'ris2z3', 'ris9z3'*/], mechanic: [[], [], 'ris2', ''], left: 330, top: 229, tab: 225},
		{name: 'ris2r1', type: 'r', electric: ['rrp2z2', 'rpv1z1'], mechanic: [[], [], 'ris2', ''], left: 368, top: 255, tab: 225},
		{name: 'ris2z3', type: 'z', electric: ['rrp2z2', 'rpv1z1', 'ris9z3', 'rises31' /*'ris2z2'*/], mechanic: [[], [], 'ris2', ''], left: 328, top: 263, tab: 225},
		
		{name: 'runz4', type: 'z', electric: ['vr23r'], mechanic: [[], [], 'run', ''], left: 131, top: 269, tab: 225},
		{name: 'rnnz3', type: 'z', electric: ['runz4'], mechanic: [[], [], 'rnn', ''], left: 182, top: 268, tab: 225},
		{name: 'rkd1z4', type: 'z', electric: ['rnnz3'], mechanic: [[], [], 'rkd1', ''], left: 234, top: 269, tab: 225},
		{name: 'rrv1z3', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrv1', ''], left: 108, top: 331, tab: 225},
		{name: 'rv2r2', type: 'r', electric: ['rrv1z3'], mechanic: [[], [], 'rv2', ''], left: 276, top: 321, tab: 225},
		{name: 'ris1z3', type: 'z', electric: ['risesb', 'ris2z3'], mechanic: [[], [], 'ris1', ''], left: 330, top: 315, tab: 225},
		{name: 'rbzr3', type: 'r', electric: ['ris1z3'], mechanic: [[], [], 'rbz', ''], left: 328, top: 347, tab: 225},
		{name: 'ris1r2', type: 'r', electric: ['rnnz4', 'mknnz1', 'rrp1z2', 'rpoz5', 'rbzr3', 'rv2r2', 'rkd1z4'], mechanic: [[], [], 'ris1', ''], left: 368, top: 398, tab: 225},
		
		{name: 'rnnz4', type: 'z', electric: ['rtoz5'], mechanic: [[], [], 'rnn', ''], left: 106, top: 384, tab: 225},
		{name: 'mknnz1', type: 'z', electric: ['vr22z'], mechanic: [[], [], 'mknW', ''], left: 118, top: 412, tab: 225},
		{name: 'rrp1z2', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rrp1', ''], left: 108, top: 436, tab: 225},
		{name: 'rpoz5', type: 'z', electric: ['vr21r'], mechanic: [[], [], 'rpo', ''], left: 135, top: 458, tab: 225},
		{name: 'ris1z4', type: 'z', electric: ['rnnz4', 'mknnz1', 'rrp1z2', 'rpoz5', 'rbzr3', 'rv2r2', 'rkd1z4'], mechanic: [[], [], 'ris1', ''], left: 354, top: 439, tab: 225},
		{name: 'kvr2', type: 'r', electric: ['ris1z4'], mechanic: [[], [], 'kv', ''], left: 394, top: 450, tab: 225},
		{name: 'ruvr2', type: 'r', electric: ['kvr2'], mechanic: [[], [], 'ruv', ''], left: 432, top: 451, tab: 225}, 
		
		/* датчики */
		{name: 'dchtor1', type: 'r', electric: ['feed'], mechanic: [[], [], '', ''], intervals:[[48, 52], [168, 172], [288, 292], [408, 412], [528, 532]], left: 200, top: 109, tab: 226},
		{name: 'dchs20r1', type: 'r', electric: ['feed'], mechanic: [[0, 100], [], '', ''], left: 200, top: 181, tab: 226},
		{name: 'dchs19r1', type: 'r', electric: ['feed'], mechanic: [[120, 220], [], '', ''], left: 200, top: 252, tab: 226},
		{name: 'dchs9r1', type: 'r', electric: ['feed'], mechanic: [[240, 340], [], '', ''], left: 200, top: 322, tab: 226},
		{name: 'dchs2r1', type: 'r', electric: ['feed'], mechanic: [[360, 460], [], '', ''], left: 200, top: 395, tab: 226},
		{name: 'dchs1r1', type: 'r', electric: ['feed'], mechanic: [[480, 580], [], '', ''], left: 200, top: 464, tab: 226}
		
      ];
	  
	  root.data = data;
	  
	})(window);
	