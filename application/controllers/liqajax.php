<?php defined('SYSPATH') OR die('No direct access allowed.');

class Liqajax_Controller extends Website_Controller {

	public function index()
	{
		css::add(array('media/css/liqajax.css'));
		$this->template->content = new View('content/liqajax');
		javascript::add(array('media/js/ext-base.js','media/js/ext-all.js','media/js/liqajax.js'));		
	}
}