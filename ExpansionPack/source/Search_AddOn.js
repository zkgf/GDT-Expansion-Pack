var ExpPack = {};
(function () {
	var pTC = UI.pickTopicClick;
	UI.pickTopicClick = function (element) {
		pTC(element);
		var modal = $(".simplemodal-data");
		var container = modal.find(".listContainer");
		var titel = modal.find(".overlayTitle").text("Pick Topic".localize("heading"));
		var search = $('<span style="font-size:18px; margin-left: 40px;">Search Topic: </span><input id="filterbox" type="text" value="" maxlength="35" style="font-size: 22pt; width: 200px;" />')
		titel.append(search);
		
		jQuery.expr[':'].epmcontains = function(a, i, m) {
			return jQuery(a).text().toUpperCase()
				.indexOf(m[3].toUpperCase()) >= 0;
		};
		
		$('#filterbox').on('input', function(e){
			var searchstr = $(this).val();
			
			$('#myoutput').text(searchstr);
			
			$('.listContainer > *').show();
	    	
			if(searchstr === "" || searchstr === "*"){
				$('.listContainer > *');
				return;
			}
			if(searchstr.length > 0){
				$('.listContainer > :not(:epmcontains('+searchstr+'))').hide();
				$('.listContainer > :epmcontains('+searchstr+')');
			}
		});
	}
})();
