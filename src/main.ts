import { LoremIpsum } from "lorem-ipsum";

const generateLoremIpsumBtn = document.getElementById("btn-generate-lorem-ipsum");

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

generateLoremIpsumBtn?.addEventListener("click", () => {
  const loremIpsumType = getLoremIpsumTypeInputValue();
  const loremIpsumQuantity = getLoremIpsumQuantityInputValue();
})


const lorem = new LoremIpsum({


})