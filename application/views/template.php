<?php defined('SYSPATH') OR die('No direct access allowed.'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>	
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Sample</title> 
<?php css::render(TRUE); ?>
</head>
<body>
	<div class="container">  
      <div id="header" class="span-24 last">
        <div id="Navigation">
          <div id="HeadWrapper">
          <ul id="HeadMenu">
          <?php foreach ($menu as $li): ?>
            <li><?php echo html::anchor($li['link'],$li['text'],array('class'=>$li['class'])) ?></li>
           <?php endforeach ?>
          </ul>
          </div>
        </div>	
      </div>
		<hr>		
			<?php echo $content ?>
		<hr class="space">
<hr>	
		<div id="footer" class="span-24 last">
		<span><?php echo $footer ?></span>
		</div>	
</div> 
<?php javascript::render(TRUE); ?>
</body>
</html>