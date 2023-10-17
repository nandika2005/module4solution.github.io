var names=new Array();
 names[0]="Yaakov";
 names[1]="kate";
 names[2]="dom";
 names[3]="Jihd";
 names[4]="deeij";
 names[5]="geri";
 names[6]="jeit";
 names[7]="pire";
 names[8]="ajum";
 names[9]="efcm";
 for(var i=0;i<names.length;i++){
 	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
 console.log("Goodbye " +names[i]);
 }
 else{
 	console.log("Hello "+names[i]);
 }
}