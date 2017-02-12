//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    input_str = document.getElementById("txtarea").value;
	
	
	nChars= input_str;
	
	nWords = input_str;
	nWords = nWords.replace(/[,.!'+:-()]+/g, " ");
	nWords = nWords.replace(/\r\n|\r|\n|\t/g," ");
	nWords = nWords.replace(/(^\s*)|(\s*$)/g," ");
	nWords = nWords.replace(/[ ]{2,}/g," ");
	//nWords = nWords.replace(/\s{2,}/g," ");
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
	

	var aWL = nWords.length;
	var i=0;
	var sum=0;
	//while (i<aWL){
	//	sum = sum + nWords[i].length;
	//	i++;
	//}
	//var aveWordLength = [sum/(aWL+1)];
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
		Words: nWords,
        nLines: nLines.length,
		NonEmptyLines: nNonEmptyLines.length,
        maxLineLength: Math.max(...lineLength),
        //averageWordLength: aveWordLength,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

