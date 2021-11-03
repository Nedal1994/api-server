'use strict'

const { data } = require("npmlog");

class Collection {
    constructor(model)
    {
        this.model = model;
    }
async create(obj)
{
    try
    {
        let newData = await this.model.create(obj)
        return newData
    }
    catch(e)
    {
        console.error('error')
    }
}

async read(obj)
{
    try
    {
        if(id)
        {
            data = await this.model.findOne({where:{id:id}})
        }
        else
        {
            data = await this.model.findAll()
        }
        return data
    }
    catch(e)
    {
        console.error('error')
    }
}

async update(id,obj)
{
    try
    {
        let dataId = await this.model.findOne({where:{id:id}})
        let updateData = await dataId.update(obj)
        return updateData
    }
    catch(e)
    {
        console.error('error')
    }
}

async delete(id)
{
    try
    {
        let deletedData = await this.model.destroy({where:{id:id}})
        return deletedData
    }
    catch(e)
    {
        console.error('error')
    }
}

}

module.exports=Collection