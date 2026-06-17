var studentName="Bhaadu", marksObtained=80, totalMarks=100;

var percentage=(marksObtained/totalMarks)*100;

if(percentage>=90){
    console.log("Excellent");
} else if(percentage>=80 && percentage<90){
    console.log("Very Good");
} else if(percentage>=70 && percentage<80){
    console.log("Good");
} else if(percentage>=60 && percentage<70){
    console.log("Average");
} else {
    console.log("Needs Improvement");
}