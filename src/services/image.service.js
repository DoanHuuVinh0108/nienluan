import cloudinary from "../config/cloudinary";
import db from "../models/index";
let addImage = async (files, id) => {
  try {
    // let data=cloudinary.uploader.upload(files.path);
    // let image = await db.Image.create({ url: data.url });
    let result = await Promise.all(
      files.map(async (file) => {
        let public_id = `${id}_${new Date().getTime()}`;
        let uploadResult = await cloudinary.uploader.upload(file.path, {
          public_id: public_id,
        });

        let image = {
          Url: uploadResult.url,
          Productid: id,
          Public_id: uploadResult.public_id,
        };

        await db.Images.create(image);
      })
    );

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

let removeImage = async (id, public_id) => {
  try {
    await cloudinary.uploader.destroy(public_id);
    let result = await db.Images.destroy({ where: { Imageid: id } });

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

let removeImageByProductId = async (id) => {
  try {
    let images = await db.Images.findAll({ where: { Productid: id } });
    let result = await Promise.all(
      images.map(async (image) => {
        await cloudinary.uploader.destroy(image.Public_id);
        await db.Images.destroy({ where: { Imageid: image.Imageid } });
      })
    );

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

let getImageByProductId = async (id) => {
  try {
    let images = await db.Images.findAll(
      { 
        where: { Productid: id },
        attributes: ['Imageid', 'Url', 'Public_id'],
        raw: true
      }
    );
    return images;
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  addImage,
  removeImage,
  removeImageByProductId,
  getImageByProductId,
};
