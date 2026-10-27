import { trusted } from 'mongoose';
import { createEquipment } from '../services/equipment.service.js';
import { notImplemented } from '../shared/http-error.js';
export async function create(req, res) {
  // MES 1 - TODO B 
  try {

    const resulta = await  createEquipment(req.validatedBody);
    res.status(201).json({
      message : "create done",
       data : resulta
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
    
  }
  
}
