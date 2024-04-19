
import imageService from '../services/image.service';

let uploadImage = async (req, res) => {
    console.log('>>> req.files', req.files);
    if(!req.files || req.files.length === 0){
        return res.status(400).json({
            message: 'No file uploaded',
            errcode:1,
        });
    }
    if(!req.params.id){
        return res.status(400).json({
            message: 'No product id',
            errcode:1,
        });
    }
    try {
        let data = await imageService.addImage(req.files,req.params.id);
        return res.status(200).json({
            message: 'Upload image success',
            data: data,
            errcode:0,
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Upload image fail',
            errcode:1,
            error: e.message,
        });
    }
}

let deleteImage = async (req, res) => {
    let id = req.params.id;
    let public_id = req.body.public_id;
    if(!id){
        return res.status(400).json({
            message: 'No image id',
            errcode:1,
        });
    }
    if(!public_id){
        return res.status(400).json({
            message: 'No public id',
            errcode:1,
        });
    }
    try {
        let data=await imageService.removeImage(id,public_id);
        return res.status(200).json({
            message: 'Delete image success',
            errcode:0,
            data: data,
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Delete image fail',
            errcode:1,
            error: e.message,
        });
    }
}

let getImageByProductId = async (req, res) => {
    let id = req.params.id;
    if(!id){
        return res.status(400).json({
            message: 'No product id',
            errcode:1,
        });
    }
    try {
        let data = await imageService.getImageByProductId(id);
        return res.status(200).json({
            message: 'Get image success',
            errcode:0,
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Get image fail',
            errcode:1,
            error: error.message,
        });
    }
}

export default{uploadImage,deleteImage,getImageByProductId}