export function genMdTableFromArray(contentArr, totalColumns, title) {

	const contentOffset = 2;   // This offset is to account for the two initial rows which will have header information
	const totalRows = Math.ceil(contentArr.length / totalColumns) + contentOffset;   // content rows + 2 header rows

	const tableColumnsWidth = Array(totalColumns).fill(title.length + 1);   // Width of each column which will be at least as wide as title + 1 space
	const tableRowsContent = Array(totalRows).fill().map(() => []);   // Bidimensional Array for rows and columns in format tableRowsContent[row][column]

	// This loop will sort the word into rows and columns and right after check if it fits the current column width
	for (let index = 0; index < contentArr.length; index++) {

		const word = contentArr[index];     // takes a word from the initial one dimensional array
		const col = index % totalColumns;   // calculates the column it'll look at

		if (word.length + 1 > tableColumnsWidth[col]) {  // if the word is bigger than the current column width
			tableColumnsWidth[col] = word.length + 1;      // updates the column width to fit the word
		}
	}

	// This loop will take care of the content of the table header
	for (let col = 0; col < totalColumns; col++) {
		const spacingAfterWord = tableColumnsWidth[col] - title.length; // calculates the spacing after the title in each column

		tableRowsContent[0][col] = title + ' '.repeat(spacingAfterWord)
		tableRowsContent[1][col] = '-'.repeat(tableColumnsWidth[col])  // separation between title and content
	}

	// This loop will update the content of each row and column now taking into account each columns width
	for (let index = 0; index < contentArr.length; index++) {

		const row = Math.floor(index / totalColumns) + contentOffset; // calculates the row it'll look at considering the offset of 2 rows of header
		const col = index % totalColumns;                             // calculates the column it'll look at

		const word = contentArr[index];     // takes a word from the initial one dimensional array
		const spacingAfterWord = tableColumnsWidth[col] - word.length; // calculates the spacing after the word in its column

		tableRowsContent[row][col] = word + ' '.repeat(spacingAfterWord); // places the word + spacing needed in its right row and column
	}

  // prints the table header on screen
	console.log(tableRowsContent[0].join('| ')) // titles
	console.log(tableRowsContent[1].join('|-')) // separator between header and content

  // prints the rest of table content with separators
	for (let row = contentOffset; row < totalRows; row++) {
		const rowContent = tableRowsContent[row];
		console.log(rowContent.join('| '))
	}
}

// test it if you want:
// genMdTableFromArray(["1", "2", "3456789", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], 2, 'title')
// console.log('\n')
// genMdTableFromArray(["1", "2", "3", "4", "5", "6", "7777", "8", "9", "10", "11", "12", "13"], 3, 'title')
// console.log('\n')
// genMdTableFromArray(["1", "2", "3", "4", "5", "6", "7", "8", "9", "123450", "11", "12", "13"], 4, 'title')
// console.log('\n')
// genMdTableFromArray(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "120000", "13"], 5, 'title')
