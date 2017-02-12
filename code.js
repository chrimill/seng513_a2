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
	
	//emptyLines = input_str;
	//emptyLines = emptyLines.replace(/\n /g, "\n ");
	//emptyLines = emptyLines.replace(" "|/\t/g, "");
	//var nEmptyLines = emptyLines.split(/\r\n\r\n | \r\n\r | \r\n\n | \r\r\n /);
	
	
	
	return {
        nChars: nChars.length,
        nWords: nWords.length,
        nLines: nLines.length,
        nNonEmptyLines: nLines,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

