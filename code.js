//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    input_str = document.getElementById("txtarea").value;
	
	//broken
	nChars= input_str;
	
	nWords = input_str;
	nWords = nWords.replace(/\r\n|\r|\n /g," ");
	nWords = nWords.replace(/(^\s*)|(\s*$)/gi,"");
	nWords = nWords.replace(/[ ]{2,}/gi," ");
	nWords = nWords.split(' ');
	
	nLines = input_str;
	nLines = nLines.split(/\r\n|\r|\n/);
	
	nonEmptyLines = nLines;
	nonEmptyLines = nonEmptyLines.replace(" "|/\t/g, "");
	var nNonEmptyLines = 0;
	var lines = nLines.length;
	var i=0;
	while (i<lines) {
		if (nonEmptyLines[i]!== ""){
			nNonEmptyLines++;
		}
		i++;
	}
	
	
	
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
        nLines: nLines.length,
		nonEmptyLines
        nNonEmptyLines: nNonEmptyLines,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

