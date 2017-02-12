//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    input_str = document.getElementById("txtarea").value;
	
	//broken
	nChars= input_str;
	
	nWords = input_str;
	nWords = nWords.replace(/\n /," ");
	nWords = nWords.replace(/(^\s*)|(\s*$)/gi,"");
	nWords = nWords.replace(/[ ]{2,}/gi," ");
	nWords = nWords.split(' ');
	
	nLines = input_str;
	nLines = nLines.split(/\r\n|\r|\n/);
	
	//nNonEmptyLines = input_str;
	//nNonEmptyLines = nNonEmptyLines.replace(" ", "");
	//nNonEmptyLines = (nNonEmptyLines.match(/\n(?=\n/g) || []).length;
	
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
        nLines: nLines.length,
        //nNonEmptyLines: nNonEmptyLines,
		nNonEmptyLines: ??
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

