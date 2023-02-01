import { LoremIpsum } from "lorem-ipsum";
import ClipboardJS  from "clipboard";

const getLoremIpsumTypeInputValue = () => {
  const loremIpsumTypesInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[name=lorem-ipsum-type]");
  let loremIpsumType = "word";

  loremIpsumTypesInputs.forEach(({checked, value}) => {
    if(checked){
      loremIpsumType = value;
    } 
  })

  return loremIpsumType;
};

const getLoremIpsumQuantityInputValue = () => {
  const loremIpsumQuantityInput = <HTMLInputElement>document.querySelector("input[name=lorem-ipsum-quantity]");
  const loremIpsumQuantityInputValue = loremIpsumQuantityInput.value;

  return parseFloat(loremIpsumQuantityInputValue);
};

const getLoremIpsum = (type: string, quantity: number) => {
  const lorem = new LoremIpsum();
  lorem.generateWords(1);

  if(type === "word"){
    return lorem.generateWords(quantity);
  } else if(type === "sentence"){
    return lorem.generateSentences(quantity);
  } else if(type === "paragraph"){
    return lorem.generateParagraphs(quantity);
  } return lorem.generateWords(quantity);
};

const putLoremIpsumInTextArea = (loremIpsum: string) => {
  const loremIpsumTextArea = <HTMLInputElement>document.getElementById("lorem-ipsum-text");

  loremIpsumTextArea.value = loremIpsum;
};

const copyLoremIpsum = () =>{
  new ClipboardJS('#btn-copy-lorem-ipsum');
};

const generateLoremIpsumEvent = () => {
  const generateLoremIpsumBtn = document.getElementById("btn-generate-lorem-ipsum");

  generateLoremIpsumBtn?.addEventListener("click", () => {
    const loremIpsumType = getLoremIpsumTypeInputValue();
    const loremIpsumQuantity = getLoremIpsumQuantityInputValue();
    const loremIpsum = getLoremIpsum(loremIpsumType, loremIpsumQuantity);
  
    putLoremIpsumInTextArea(loremIpsum);
  });
}

generateLoremIpsumEvent();
copyLoremIpsum();