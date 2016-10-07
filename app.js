$(document).ready(function(){ 
	var nbClick = 0;
	
	$('.cake').click(function(){
		nbClick++;
		$('.counter').text(nbClick);
		var tab = ["ta vie est nulle","va chercher une petite amie","ton zizi est tout petit","Va jouer à pokemon GO"]
		var msg = tab[Math.floor(Math.random() * tab.length)]
		if(nbClick%20 === 0){
			alert(msg);
		};
	});
});
		






		






		
			


