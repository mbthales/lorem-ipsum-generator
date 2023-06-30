import { LoremIpsum } from 'lorem-ipsum'
import ClipboardJS from 'clipboard'

function loremIpsumGenerator() {
	const generateLoremEl = <HTMLElement>(
		document.querySelector('[data-js="btn-generate-lorem"]')
	)

	function loremType() {
		const loremTypesEl: NodeListOf<HTMLInputElement> =
			document.querySelectorAll('[data-js="lorem-input-type"]')
		let loremType = 'word'

		loremTypesEl.forEach(({ checked, value }) => {
			if (checked) {
				loremType = value
			}
		})

		return loremType
	}

	function loremQuantity() {
		const loremQuantityEl = <HTMLInputElement>(
			document.querySelector('[data-js="lorem-input-quantity"]')
		)
		const loremQuantity = loremQuantityEl.value

		return Number(loremQuantity)
	}

	function getLorem(type: string, quantity: number) {
		const lorem = new LoremIpsum()

		const loremTypes: { [type: string]: string } = {
			word: lorem.generateWords(quantity),
			sentence: lorem.generateSentences(quantity),
			paragraph: lorem.generateParagraphs(quantity),
		}

		return loremTypes[type]
	}

	function displayLorem() {
		const loremBoxEl = <HTMLInputElement>(
			document.querySelector('[data-js="lorem-text"]')
		)

		loremBoxEl.value = getLorem(loremType(), loremQuantity())
	}

	const copyLorem = () => {
		new ClipboardJS('[data-js="btn-copy-lorem"]')
	}

	generateLoremEl.addEventListener('click', () => {
		displayLorem()
	})

	copyLorem()
}

loremIpsumGenerator()
