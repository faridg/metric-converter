window.onload = function () {
	document.querySelector("#convert").addEventListener("click", 
	function () {
		var metric = 
			document.querySelector("#metric");
		var imperial =
			document.querySelector("#imperial");
			imperial.value = metric.value * 3.28;		
	}
	);
};