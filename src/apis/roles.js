import request from '../utils/request'
import axios from "axios";

export async function loadRoles() {
  try {
    const result = await request.get('/api/roles');
    if (result.status===200){
      console.log('success');
      return result.data;
    }
  }catch (e) {
    console.log(e);
  }
}

export async function creatRoles(value){
  try {
    const result = await request.post('/api/roles',{
      name:value.name,
      display_name:value.display_name,
      description:value.description,
    })
    if (result.status===200){
      console.log('success');
    }
  }catch (e) {
    console.log(e);
  }
}

export async function deleteRoles(id) {
  try {
    const result = await request.delete(`/api/roles/${id}`);
    if (result.status===200){
      console.log('success');
    }
  }catch (e) {
    console.log(e);
  }
}

export async function updateRoles(id,value) {
  try {
    const result = await request.patch(`/api/roles/${id}`,{
      name:value.name,
      display_name:value.display_name,
      description:value.description,
    });
    if (result.status===200){
      console.log('success');
    }
  }catch (e) {
    console.log(e);
  }
}
