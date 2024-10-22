"use strict";

function parsePartCode(partCode) {
  let partCodeObject= {
    supplierCode: "someValue",
    productNumber: "someValue",
    size: "someValue",
  };
  
  const colonIndex = partCode.indexOf(':');
  const hyphenIndex = partCode.indexOf('-', colonIndex + 1);

  partCodeObject.supplierCode = partCode.substring(0, colonIndex);

}


