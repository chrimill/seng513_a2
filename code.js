//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    //input_str = document.getElementById("txtarea").value;
	input_str = txt;
	
	nChars= input_str;
	
	nWords = input_str;
	nWords = nWords.replace(/[,)(?'.+"!:-]+/g, " ");
	nWords = nWords.replace(/\r\n|\r|\n|\t/g," ");
	nWords = nWords.replace(/(^\s*)|(\s*$)/g,"");
	nWords = nWords.replace(/[ ]{2,}/g," ");
	nWords = nWords.split(' ');
	
	nLines = input_str;
	nLines = nLines.split(/\r\n|\r|\n/);
	
	nonEmptyLines = input_str;
	nonEmptyLines = nonEmptyLines.replace(" ", "");
	nonEmptyLines = nonEmptyLines.replace(/\t|\s/gm, "");
	nonEmptyLines = nonEmptyLines.split(/\r\n|\r|\n/);
	var nNonEmptyLines = [];
	var lines = nLines.length;
	var i=0;
	while (i<lines) {
		if (nonEmptyLines[i]!= ""){
			nNonEmptyLines.push("1");
		};
		i++;
	};
	
	lineLength = input_str;
	lineLength = lineLength.split(/\r\n|\r|\n/);
	var lL = lineLength.length;
	var i=0;
	while (i<lL) {
		lineLength[i]= lineLength[i].length;
		i++;
	};
	

	var i=0;
	var sum=0;
	while (i<nWords.length){
		sum = sum + nWords[i].length;
		i++;
	};
	var aveWordLength = (sum/nWords.length);
	
	
// oh so bad	
	var palin= [];
	var i=0;
	while (i<nWords.length){
		if (nWords[i].length > 2){			
			var temp = nWords[i].split("").reverse().join(""); 
			if (nWords[i].toLowerCase() === temp.toLowerCase()){
			
				palin.push(temp.toLowerCase());
			};
		};
		i++;
	};
	var uniquePalin = [ ...new Set(palin) ];
		

	longWord = nWords;
	longWord.sort(function(a, b){
		return b.length - a.length || a.localeCompare(b);
	});
	uniqueLongWord = [ ...new Set(longWord) ];
	uniqueLongWord = uniqueLongWord.slice(0,10);
	
	
//	var countWord = [];
//	var i = 0;
//	var counter = 1;
//	var j = 0;
//	while (i<longWord.length){
//		if (longWord[i] === longWord[i+1]){
//			counter++;
//		};
//		else{
//			countWord[j]= [longWord[i],counter]
//			counter = 1;
//			j++;
//		};
//		i++;
//	};
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
		//Words: nWords,
        nLines: nLines.length,
		NonEmptyLines: nNonEmptyLines.length,
        maxLineLength: Math.max(...lineLength),
        averageWordLength: aveWordLength,
        palindromes: uniquePalin,
        longestWords: uniqueLongWord,
        mostFrequentWords: []
    };
}

