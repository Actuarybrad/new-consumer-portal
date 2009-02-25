<div class="span-8 colborder">
<hr class="space">
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
    <div class="span-8 append-bottom prepend-top">      
      <?php echo $this->pagination->render() ?>     
    </div>
 </div>
<div id="tplfee" class="span-14 prepend-1 last"></div>	