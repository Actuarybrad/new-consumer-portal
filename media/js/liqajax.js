Ext.onReady(function() {

Ext.BLANK_IMAGE_URL = 'http://localhost/kohana/media/images/s.gif';

var coStore = new Ext.data.JsonStore({
    proxy: new Ext.data.HttpProxy({url:'http://localhost/kohana/media/php/company.php', method:'GET'}),
    root: 'results',
    fields: [
	        'co_name',
	        'co_naic'
		]
});

coStore.load();

var co = new Ext.XTemplate(
'<tpl for=".">',
'<li>',
'<a class="tplco" href="#">{co_name}</a>',
'</li>',
'</tpl>'
);

var tplStore = new Ext.data.JsonStore({
    proxy: new Ext.data.HttpProxy({url:'http://localhost/kohana/media/php/feenaic.php', method:'GET'}),
    root: 'results',
    fields: ['co_key',
	        'co_class_code',
	        'co_naic',
	        'co_name',
	        'address1',
			'citystzip',
			'contact',
			'PremA',
	        'PremB',
			'PremC',
			'PremD1',
			'PremD2',
			'PremE',
			'LicA',
	        'LicB',
			'LicC',
			'LicD1',
			'LicD2',
			'LicE',		
	        'FeeA',
	        'FeeB',
			'FeeC',
			'FeeD1',
			'FeeD2',
			'FeeE',
			'FeeTotal',
			'Acct73',
			'Acct49']
});

var tpl = new Ext.XTemplate(
'<tpl for=".">',
'<div class="span-14">',
'<hr class="space">',
'<table id ="top">',
'<tr><td class="heady"><h3>New Mexico Division of Insurance</h3></td><tr>',
'<tr><td class="heady1"><h3><span class="alt">Financial Aduit Division</span></h3></td><tr>',
'<tr><td class="small">1120 Peseo de Peralta</td><tr>',
'<tr><td class="small">P.O. Box 1269</td><tr>',
'<tr><td class="small">Santa Fe, NM 87504-1269</td><tr>',
'<tr><td class="small">(505)827-4506</td><tr>',
'<tr><td class="heady2"><h3><span class="alt">Property and Casulaty Rate and Form Annual Filing Fees</span></h3></td><tr>',
'<tr><td class="heady3">Due: August 28, 2008 (Deadline extended from July 1, 2007)</td><tr>',
'</table>',
'</div>',
'<div class="span-14">',
'<table id="feeyear">',
'<tr><td class="left">Fee Year: July 1, 2007 - June 30, 2008</td><td class="rightf">Calendar Year 2006 Premium Data</td></tr>',
'</table>',
'</div>',
'<hr>',
'<div class="span-14 smalll">',
'<table id="mid">',
'<tr><td class="left">{contact}</td><td class="right">NMCODE#:</td><td class="inright">{co_key}</td></tr>',
'<tr><td class="leftn">{co_name}</td><td>NAIC#:</td><td class="inright">{co_naic}</td></tr>',
'<tr><td class="left">{address1}</td><td></td><td></td></tr>',
'<tr><td class="left">{citystzip}</td><td></td><td></td></tr>',
'</table>',
'</div>',
'<div class="span-14">',
'<table class="mytable">',
  '<tr class="chuck">',    
    '<th scope="col" class="let"></th>',
    '<th scope="col" class="xchuck">Lines of Business</th>',
	'<th scope="col" class="small">Licensed</th>',
	'<th scope="col" class="endy">Direct Written Premium</th>',
    '<th scope="col" class="endye">Filing Fee</th>',
  '</tr>',
  '<tr>',
    '<td class="saml">A.</td>',
    '<td class="sam">Private Passenger Automobile</td>',
	'<td class="sam">{LicAyn}</td>',
	'<td class="endyt">{PremAThou}</td>',
    '<td class="endyt">{FeeAThou}</td>',
  '</tr>',
  '<tr>',
    '<td class="saml">B.</td>',
    '<td class="sam">Homeowners and Farmowners</td>',
	 '<td class="sam">{LicByn}</td>',
	'<td class="endyt">{PremBThou}</td>',
    '<td class="endyt">{FeeBThou}</td>',
  '</tr>',
  '<tr>',
	'<td class="saml">C.</td>',
    '<td class="sam">Workers Compensation</td>',
	'<td class="sam">{LicCyn}</td>',
	'<td class="endyt">{PremCThou}</td>',
    '<td class="endyt">{FeeCThou}</td>',
  '</tr>',
  '<tr>',
	'<td class="saml">D1.</td>',
    '<td class="sam">Commercial Automobile</td>',
	'<td class="sam">{LicD1yn}</td>',
	'<td class="endyt">{PremD1Thou}</td>',
    '<td class="endyt">{FeeD1Thou}</td>',
  '</tr>',
  '<tr>',
	'<td class="saml">D2.</td>',
    '<td class="sam">Other Casulaty</td>',
	'<td class="sam">{LicD2yn}</td>',
	'<td class="endyt">{PremD2Thou}</td>',
    '<td class="endyt">{FeeD2Thou}</td>',
  '</tr>',
  '<tr>',
	'<td class="saml">E.</td>',
    '<td class="sam">Other Property</td>',
	'<td class="sam">{LicEyn}</td>',
	'<td class="endyt">{PremEThou}</td>',
    '<td class="endyt">{FeeEThou}</td>',
  '</tr>',
  '<tr>',
	'<td ></td>',
	'<td ></td>',
    '<td></td>',
	'<td class="totalf">Total Fees Due:</td>',
    '<td class="totalf">{FeeTotalThou}</td>',
  '</tr>',
'</table>',
'</div>',
'<div class="span-14">',
'<table id="momo">',
'<tr>',
'<td id="law"><p class="small">Pursuant to NMSA 1978 Section 59A-6-1.2, property and casualty rate and form filing fees are due annually on July 1 and are based on the company\'\s direct written premium in New Mexico during the preceding calendar year.  The fees are calculated separately in five categories (A-E). In each category the fee is calculated as .003 times the direct written premium subject to a minimum fee of $100 and a maximum fee of $1500. Zero premium in a category results in a minimum fee for the category of $100, unless the filing company is not licensed for any of the lines in the category.</p></td>',
'</tr>',
'</table>',
'</div>',
'<div class="span-14">',
'<table id="return">',
'<tr><td class="make">Please return this notice with your payment, and make a single check payable to:</td><td class="ctrCheck"></td><td class="make">Please Enter:</td></tr>',
'<tr><td class="smCheck">NMPRC Insurance Division</td><td class="ctrCheck"></td><td class="smCheck">Check No. _______________________</td></tr>',
'<tr><td></td><td class="ctrCheck"></td><td class="smCheck">Amount Remitted $________________</td></tr>',
'</table>',
'</div>',
'</tpl>'
);

function thousand(v){
	if(v == "NA") {
	return v;
	}else{
	v = (Math.round((v-0)*100))/100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.'+ ps[1] : '.00';
	var r = /(\d+)(\d{3})/;
	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if(v.charAt(0) == '-'){
		return whole.substr(0);
	}
	return whole;
	}
}

function usmon(v){
	v = (Math.round((v-0)*100))/100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.'+ ps[1] : '.00';
	var r = /(\d+)(\d{3})/;
	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if(v.charAt(0) == '-'){
		return '-$' + v.substr(1);
	}
	return "$" +  v;
}

function usmonn(v){
	v = (Math.round((v-0)*100))/100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.'+ ps[1] : '.00';
	var r = /(\d+)(\d{3})/;
	//while (r.test(whole)) {
	//	whole = whole.replace(r, '$1' + ',' + '$2');
	//}
	v = whole + sub;
	if(v.charAt(0) == '-'){
		return '-' + v.substr(1);
	}
	return v;
}

function yesno(val){
 if(val == 1){
		return 'Yes';
	}
		return 'No';
}

var listco = new Ext.DataView({
	id:'listco',
	border:false,
	renderTo: 'sidelist',
	store: coStore,
	tpl: co,
	//autoHeight:true,
	multiSelect: false,
	singleSelect: true, 
	emptyText: 'No images to display',
	itemSelector:'a.tplco',
	autoWidth:true,
	listeners: {
		click: {
			fn: function(dv,num,node,e){
				var b = listco.getRecord(node).get('co_naic');
				tplStore.baseParams.co_naic = b;
				tplStore.load();
				//alert(b);
			}
		}
	}
});

var invoice = new Ext.DataView({
	id:'invoice',
	border:false,
	renderTo: 'tplfee',
	store: tplStore,
	tpl: tpl,
	autoHeight:true,
	multiSelect: false,
	emptyText: 'No images to display',
	itemSelector:'table#top',
	autoWidth:true,
	prepareData: function(data){
		data.LicAyn = yesno(data.LicA);
		data.PremAThou = thousand(data.PremA);
		data.FeeAThou = usmon(data.FeeA);
		data.LicByn = yesno(data.LicB);
		data.PremBThou = thousand(data.PremB);
		data.FeeBThou = usmon(data.FeeB);
		data.LicCyn = yesno(data.LicC);
		data.PremCThou = thousand(data.PremC);
		data.FeeCThou = usmon(data.FeeC);
		data.LicD1yn = yesno(data.LicD1);
		data.PremD1Thou = thousand(data.PremD1);
		data.FeeD1Thou = usmon(data.FeeD1);
		data.LicD2yn = yesno(data.LicD2);
		data.PremD2Thou = thousand(data.PremD2);
		data.FeeD2Thou = usmon(data.FeeD2);
		data.LicEyn = yesno(data.LicE);
		data.PremEThou = thousand(data.PremE);
		data.FeeEThou = usmon(data.FeeE);
		data.FeeTotalThou = usmon(data.FeeTotal);
	return data;
	}	
});

/*
Ext.get('sidelist').on({
click:{
	delegate:'a',
	scopt:this,
	preventDefault:true,
	fn:function(e, t) {
		var selCo = t.innerHTML;
		tplStore.baseParams.co_name = selCo;
		tplStore.load();
	}
}
});
*/


});