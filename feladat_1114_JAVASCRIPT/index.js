var i = 0;
function anyadat()
{
	var isten = document.getElementById("first");
	if(isten.style.fontSize == "20px")
		i = 1;
	if(i == 0)
	{
		isten.style.fontSize="20px";
		i = 1;
	}
	else if (i == 1)
	{
		isten.style.fontSize="60px";
		i = 0;
	}
	return isten;
}