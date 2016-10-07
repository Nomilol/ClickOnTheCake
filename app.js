$(document).ready(function(){ 
	var cookie = 0;
	
	$('.cake').click(function(){
		cookie ++;
		$('.counter').text(cookie);

		
			

		var tab = ["ta vie est nulle","va chercher une petite amie","ton zizi est tout petit","Va jouer à pokemon GO"]
		
		if(cookie%20 === 0){
			alert(tab[Math.floor(Math.random() * tab.length)]);
		};
		


	});


});

		







