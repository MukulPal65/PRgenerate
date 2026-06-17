var a="programming";

var b=0;
for(var i=0;i<a.length;i++){
    if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
        console.log(a[i]);
        console.log("Vowel found at index: "+i);
        b++;
    }
}

console.log("Total number of vowels in the string: "+ b);    