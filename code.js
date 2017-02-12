//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    input_str = document.getElementById("txtarea").value;
	
	
	nChars= input_str;
	
	nWords = input_str;
	nWords = nWords.replace(/[,.!']+/g, "");
	nWords = nWords.replace(/\r\n|\r|\n/g," ");
	nWords = nWords.replace(/\t/g," ");
	nWords = nWords.replace(/\s+/g,' ');
	nWords = nWords.split(' ');
	
	nLines = input_str;
	nLines = nLines.split(/\r\n|\r|\n/);
	
	nonEmptyLines = input_str;
	nonEmptyLines = nonEmptyLines.replace(" ", "");
	nonEmptyLines = nonEmptyLines.replace(/\t/gm, "");
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
		i++
	};
	
	
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
        nLines: nLines.length,
		NonEmptyLines: nNonEmptyLines.length,
        maxLineLength: Math.max(...lineLength),
        averageWordLength: 4.3,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

