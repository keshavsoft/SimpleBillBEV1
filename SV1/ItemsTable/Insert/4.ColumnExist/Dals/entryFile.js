import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemName,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};