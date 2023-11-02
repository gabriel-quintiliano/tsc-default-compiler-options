function getAllCompilerOptionsInfo() {

	const compilerOptionsSectionsHTML = Array.from(document.querySelectorAll('section[class="compiler-option"]'))
	const compilerOptionsParsedInfos = compilerOptionsSectionsHTML.map(HTMLElement => {
		const name = HTMLElement.querySelector('h3[id$="-config"] code').innerText;
		const defaultValue = getDefaultValue(HTMLElement);
		const hasDefaultValue = defaultValue ? true : false;

		return { name, hasDefaultValue, defaultValue }
	})

	return compilerOptionsParsedInfos
}

function getDefaultValue(HTMLElement) {

	const spanElem = HTMLElement.querySelector('ul li span')
	if (!spanElem || spanElem.innerText !== "Default:") return ''
	const defaultValue = spanElem.nextElementSibling.innerText

	return defaultValue;
}

console.table(getAllCompilerOptionsInfo().filter(optionInfo => optionInfo.hasDefaultValue))
