import groupService from "../services/group.service";

let getAllGroups = async (req, res) => {
    try {
        let groups = await groupService.getAllGroups();
        console.log('>>> groups', groups);
        if (groups && groups.length > 0) {
            res.status(200).json({
                data: groups,
                errcode: 0,
                message: 'Get all group successful',
            });
        } else {
            res.status(200).json({
                data: [],
                errcode: 0,
                message: 'No group found',
            });
        }
    } catch (e) {
        res.status(500).json({
            errcode: 1, 
            message: 'Internal server error',
            error: e,
    });
    }
};

let getGroupById = async (req, res) => {
    try {
        let id = req.params.id;
        let group = await groupService.getGroupById(id);
        if (group) {
            res.status(200).json({
                data: group,
                errcode: 0,
                message: 'Get group successful',
            });
        } else {
            res.status(404).json({
                errcode: 1,
                message: 'Group not found',
            });
        }
    } catch (e) {
        res.status(500).json({
            errcode: 1,
            message: 'Internal server error',
            error: e,
        });
    }

}

let postCreateGroup = async (req, res) => {
    try {
        let data = req.body;
        let group = await groupService.createGroup(data);
        res.status(201).json({
            data: group,
            errcode: 0,
            message: 'Create group successful',
        });
    } catch (e) {
        res.status(500).json({
            errcode: 1,
            message: 'Create group fail',
            error: e.message,
        });
    }
};

let putUpdateGroup = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;
        let group = await groupService.updateGroup(data, id);
        // console.log('>>> group', group);
        if (group === 0) {
            return res.status(404).json({
                message: 'Group not found',
                errcode:1
            });
        }
        res.status(200).json({
            errcode: 0,
            message: 'Update group successful',
        });
    } catch (e) {
        res.status(500).json({
            errcode: 1,
            message: 'Update group fail',
            error: e.message,
        });
    }
};

let deleteGroupById = async (req, res) => {
    try {
        let id = req.params.id;
        let group = await groupService.deleteGroupById(id);
        res.status(200).json({
            data: group,
            errcode: 0,
            message: 'Delete group successful',
        });
    } catch (e) {
        res.status(500).json({
            errcode: 1,
            message: 'Delete group fail',
            error: e.message,
        });
    }
};

export default {
    getAllGroups,
    postCreateGroup,
    putUpdateGroup,
    deleteGroupById,
    getGroupById
}