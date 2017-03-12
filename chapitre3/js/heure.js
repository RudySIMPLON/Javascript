var heure= prompt("veuillez rentrer une heure");
var min= prompt("veuillez rentrer une minute");
var second=prompt("veuillez rentrer une second");
if (heure <=23 && heure >=0 && min <=59 && min >=0 && second <=59 && second >=0){
second++
if (second === 60){
	second = 0;
	min ++;

} else if( min === 60){
	min = 0;
	heure ++;
} else if (heure === 24){

	heure=0;	
} else {
	"erreur";
}
}

// if(min === 60){
// 	min === 0;
// 	heure ++;

// } else if (second === 60){
// 	second === 0;
// 	min++;
// }
// else if (heure === 24){
// 	heure === 0;

// }



console.log("dans une seconde il sera" + heure +" heure "
 + min+" minute" + " et "+ second +" seconde"
	)