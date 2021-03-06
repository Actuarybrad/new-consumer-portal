<?php defined('SYSPATH') OR die('No direct access allowed.');

class Fees_Controller extends Website_Controller {

	public function index()
	{  
	 url::redirect('fees/page/1');  
	} 

public function page($pagenum)
	{	
	css::add(array('media/css/fee.css'));
	javascript::add(array('media/js/ext-base.js','media/js/ext-all.js','media/js/app.js'));     
	$this->template->content = new View('content/fees');
	$db = new Database('fees'); 	  
	$query = $db->query("SELECT co_name FROM feesNew");
	$this->pagination = new Pagination(array(
		'uri_segment' => 'page', 	
		'total_items' => $query->count(),	
		'items_per_page' => 28, 	
		'style' => 'punbb' 
	));
	$b = $this->pagination->items_per_page;
	$offset = ($pagenum - 1) * $b;
	$result = $db->query("SELECT co_name FROM feesNew ORDER BY co_name ASC LIMIT $b OFFSET $offset");
	$this->template->content->result = $result;		
	}
}