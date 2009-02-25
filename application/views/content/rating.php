<div class="span-24 last">
<h3>Company <span class="alt">AM Best</span> Ratings</h3>
<div>
<table>
<thead>
<tr>
<th class="leftjust">Company</th>
<th>2009 Rating</th>
<th>2008 Rating</th>
<th>2007 Rating</th>
<th>2006 Rating</th>
</tr>
</thead>
<tbody class="body2">
<?php foreach($result as $item):?>
<tr <?= text::alternate( '', ' class="even"' ) ?>>
<td><?php echo html::image(array('src'=>'media/images/w-handle.gif','class'=>'square'));?><?=$item->Company ?></td>
<td ><?=$item->Rating1 ?></td>
<td><?=$item->Rating2 ?></td>
<td><?=$item->Rating3 ?></td>
<td><?=$item->Rating4 ?></td>
</tr>
<?php endforeach;?>
</tbody>
</table>
</div>
<div class="span-24 last">
<?php echo $this->pagination->render() ?>
</div>
</div>