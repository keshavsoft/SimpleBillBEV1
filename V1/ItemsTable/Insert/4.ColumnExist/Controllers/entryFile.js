import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnGstPercentage = LocalRequestBody.GstPercentage;
	let LocalCoumnRate = LocalRequestBody.Rate;
	let LocalCoumnItemCode = LocalRequestBody.ItemCode;
	let LocalCoumnItemName = LocalRequestBody.ItemName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemName,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};