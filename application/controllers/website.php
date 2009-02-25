<?php defined('SYSPATH') or die('No direct script access.');
class Website_Controller extends Template_Controller 
{
	public function __construct()
	{
		parent::__construct();	
    
	     $menu = array
		 (
		   array('link'=>'home','text'=>'<span>Home</span>','class'=>''),
		   array('link'=>'rating','text'=>'<span>Ratings</span>','class'=>''),
		   array('link'=>'fees','text'=>'<span>Filing Fees</span>','class'=>''),
		   array('link'=>'liqfees','text'=>'<span>Liquid Fees</span>','class'=>''),
		   array('link'=>'liqajax','text'=>'<span>Liquid Ajax</span>','class'=>''),
		   array('link'=>'contact','text'=>'<span>Contact</span>','class'=>'')		  
		 );    
    
		css::add(array('media/css/screen.css','media/css/fancy-type/screen.css'));
	
		$tvalue = $this->uri->segment(1); 
		
		if (empty($tvalue)) 
		{	
		  $menu[0]['class'] = 'current';
		} else {
			for ($i = 0, $cnt = count($menu); $i < $cnt; $i++)
			{
				if ($menu[$i]['link'] == $tvalue)
				{
					$menu[$i]['class'] = 'current';
				} else {
					$menu[$i]['class'] = '';
				}
			}		
		}
		
		$this->template->menu = $menu;
		$this->template->footer = '&#169; Public Regulation Commission';
	}
}