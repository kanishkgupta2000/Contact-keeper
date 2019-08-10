const express=require('express');
const router=express.Router();


//@route Get api/contacts
//@desc Get all users
//@access Private
router.get('/',(req,res)=>{
	res.send('get all contacts');
});

//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post('/',(req,res)=>{
	res.send('Add contacts');
});


//@route PUT api/contacts/:id
//@desc Update
//@access Private
router.put('/:id',(req,res)=>{
	res.send('Update contact');
});


//@route PUT api/contacts/:id
//@desc Update
//@access Private
router.delete('/:id',(req,res)=>{
	res.send('Delete contact');
});
module.exports=router;