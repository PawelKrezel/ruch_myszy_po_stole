function oblicz()
{
	var wyso = document.getElementById('wyso').value;
	var szer = document.getElementById('szer').value;
	var dpi = document.getElementById('dpi').value;

	var wyso_cal = Math.round(wyso/dpi);
	var szer_cal = Math.round(szer/dpi);

	var wyso_cm = Math.round(wyso_cal*2.54);
	var szer_cm = Math.round(szer_cal*2.54);

	var przek = Math.round(Math.sqrt((wyso*wyso)+(szer*szer)));
	var przek_cal = Math.round(przek/dpi);
	var przek_cm = Math.round(przek_cal*2.54);

	document.getElementById('p').innerHTML = "<b>przekątna</b>:<br>z twierdzenia pitagorasa obliczamy, że przekątna ma "+przek+"px<br>"+przek+"px/"+dpi+"dpi = "+przek_cal+"cali<br>zakładamy że 1 cal = 2.54cm, więc mysz pokona "+przek_cm*2.54+"cm<br><b>szerokość</b>:<br>"+szer+"px/"+dpi+"dpi = "+szer_cal+"cali, więc mysz pokona "+szer_cm+"cm<br><b>wysokość</b>:<br>"+wyso+"px/"+dpi+"dpi = "+wyso_cal+"cali, więc mysz pokona "+wyso_cm+"cm<br>";

}