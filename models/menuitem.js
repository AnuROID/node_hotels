const mongoose=require('mongoose')

const menuItemschema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    price:
    {
        type:Number,
        required:true,
    },
    taste:
    {
        type:String,
        enum:['spicy','sweet','sour'],
        required:true,
    },
    is_drink:
    {
        type:Boolean,
        default:false,
    },
    ingredient: { type: [String], default: [] },
    num_sales:
    {
        type:Number,
        default:0,
    }

});

const menuItem=mongoose.model('MEnuItem',menuItemschema)
module.exports=menuItem;
