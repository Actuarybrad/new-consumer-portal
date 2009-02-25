<div class="span-7 prepend-1 prepend-top">
  <h3>A Company<span class="alt"> Selection</span> Sidebar</h3>
  <hr>
  <hr class="space">
  <div class="alty">Company</div>
    <div class="dotstyle">
      <ul id="sidelist">
      <?php foreach( $result as $row ):?>
      <li><a href="#"><?= $row->co_name ?></a></li>
      <?php endforeach; ?>
      </ul>
    </div>
	<hr class="space">
    <hr>    	
	<hr class="space">
	<hr class="space">
    <div class="span-8">      
      <?php echo $this->pagination->render() ?>     
    </div>
     <hr class="space">
	<hr class="space">
</div>
<div id="tplfee" class="span-14 push-1 last"></div>	