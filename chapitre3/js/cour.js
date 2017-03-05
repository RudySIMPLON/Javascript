// var nombre = Number(prompt("Entrez un nombre :"));

// if(nombre > 0) {
// 	console.log(nombre + " est positif");
	
// }else {
// 	if(nombre < 0){
// 		console.log(nombre + "est négatif");
// 	}else {
// 		console.log(nombre + " est nul");

// 	}

// }

// var meteo = prompt("Quel temps fait-il dehors ?");
// if(meteo === "soleil"){
// 	console.log("sortez en t-shirt.");
// } else if (meteo === "vent") {
// 	console.log("sortez en pull");
// } else if (meteo === "pluie"){
// 	console.log("sortez en blouson");
// } else if (meteo === "neige"){
// 	console.log("Restez au chaud à la maison");
// } else{
// 	console.log("je n'ai pas compris");
// }

 var meteo= prompt("Quel temps fait-il dehors ?");
 switch(meteo){
 case "soleil":	
 	console.log("sortez en t-shirt")    
 	break;
 case "vent":
 	console.log("sortez avec un pull");
 	break
 case "pluie":
 	console.log("sortez avec un blouson");
 	break;
 case "neige":
 	console.log("Restez au chaud à la maison");
 	break;
 default:
 	console.log("Je n'ai pas compris !");

 }