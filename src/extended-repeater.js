const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

};


/*
    str это строка, которая будет повторена
options это объект опций, который содержит следующие свойства:
    repeatTimes устанавливает число повторений str
separator это строка, разделяющая повторения str
addition это дополнительная строка, которая будет добавлена после каждого повторения str
additionRepeatTimes устанавливает число повторений addition
additionSeparator это строка, разделяющая повторения addition
Параметры str и addition по умолчанию являются строками. В случае, если они другого типа, он должны быть преобразованы
к строке.

    Параметры separator и additionSeparator являются строками.

    repeatTimes и additionRepeatTimes являются целыми числами (в случае отсутствия любого из них соответствующая строка
    не повторяется).

Единственный обязательный параметр — это str, остальные могут не быть переданы. Значение separator по умолчанию это '+'.
Значение additionSeparator по умолчанию это '|'.

    Например: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) =>
    'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */