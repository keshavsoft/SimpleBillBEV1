import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage});

    return LocalFromDal;
};

export {
    postDefaultFunc
};