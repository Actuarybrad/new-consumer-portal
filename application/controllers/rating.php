<?php defined('SYSPATH') OR die('No direct access allowed.');

class Rating_Controller extends Website_Controller {
	
	public function index()
	{					
   		
	url::redirect('rating/page/1');		
	}
	
	public function page($pagenum)
	{
		css::add(array('media/css/rating.css'));
		$this->template->content = new View('content/rating');		
		$db = new Database();
		$query = $db->query("SELECT Company FROM ambestf");
		$this->pagination = new Pagination(array(
			'directory'      => 'pagination',
			'style'          => 'trinhall',
			'uri_segment'    => 3,			
			'query_string'   => '',
			'items_per_page' => 23,
			'auto_hide'      => FALSE,
			'total_items' => $query->count(),
     	));	
		$this->pagination->extras = array('hide_count' => TRUE);
		$b = $this->pagination->items_per_page;
		$offset = ($pagenum - 1) * $b;
		$result = $db->query("SELECT Company, Rating1, Rating2, Rating3, Rating4 FROM ambestf ORDER BY Company ASC LIMIT $b OFFSET $offset");
		$this->template->content->result = $result;	
	}	
}