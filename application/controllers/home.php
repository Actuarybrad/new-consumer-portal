<?php defined('SYSPATH') OR die('No direct access allowed.');

class Home_Controller extends Website_Controller {

	public function index()	
	{	
		css::add(array('media/css/home.css'));
		$this->template->content = new View('content/home');
	}
}