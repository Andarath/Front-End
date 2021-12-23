var names=new Array();
names[0]="Mario";
names[1]="Alex";
names[2]="George";
names[3]="Angela";
names[4]="Sophie";
names[5]="Nikolas";
names[6]="Konstantine";
names[7]="Fofo";
names[8]="Dimitra";
names[9]="Jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}