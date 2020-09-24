export const WordsValidator = (word, count) => (control) => {
    return control.value.toLowerCase().includes(word.toLowerCase()) ? null : { noWords: `Too few ${word} included!` };
};
//# sourceMappingURL=WordsValidators.js.map