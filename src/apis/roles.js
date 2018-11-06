import request from '../utils/request'

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

export async function createRole(roleObj){
  try {
    const result = await request.post('/api/roles',{
      name:roleObj.name,
      display_name:roleObj.display_name,
      description:roleObj.description,
    });
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

export async function updateRole(id,roleObj) {
  try {
    const result = await request.patch(`/api/roles/${id}`,{
      name:roleObj.name,
      display_name:roleObj.display_name,
      description:roleObj.description,
    });
    if (result.status===200){
      console.log('success');
    }
  }catch (e) {
    console.log(e);
  }
}
