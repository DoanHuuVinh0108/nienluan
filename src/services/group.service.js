
import db from '../models/index.js';

let getAllGroups = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Groups.findAll(
                { 
                   raw: true,
                   attributes: ['Groupid', 'Tennhom', 'Description']
                }
            );
            if (data && data.length > 0) {
                resolve(data);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
}

let getGroupById = async (id) => {
    try {
        let group = await db.Groups.findOne({
            where: { Groupid: id }
        });
        if (group) {
           return group;
        } else {
            return false
        }
    } catch (e) {
        throw new Error(e);
    }
}

let createGroup = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('>>> data', data);
            await db.Groups.create({
                Tennhom: data.Tennhom,
                Description: data.Description
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let updateGroup = (data,id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let group =await db.Groups.update({
                Tennhom: data.Tennhom,
                Description: data.Description
            }, {
                where: {
                    Groupid: id
                }
            });
            [group] =group;
            console.log('>>> group', group); 
            resolve(group);
        } catch (e) {
            reject(e);
        }
    });
}

let deleteGroupById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let group = await db.Groups.findOne({
                where: { Groupid: id }
            });
            if (group) {
                await group.destroy();
                resolve("Delete successfully");
            }else{
                resolve("group not found");
            }
            
        } catch (e) {
            reject(e);
        }
    });

}

export default{
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroupById,
    getGroupById
}