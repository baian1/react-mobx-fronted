import React from 'react';
import {Table, Divider, Popconfirm} from 'antd';
import {inject,observer} from 'mobx-react'
import RolesModal from './RolesModal'
import './RolesTable.scss'


const RolesTable=inject('roleStore')(observer(({roleStore})=>{

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Display_Name',
      dataIndex: 'display_name',
      key: 'display_name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <RolesModal onClick={roleStore.updateRole.bind(roleStore,record.id)} record={record} modalType='edit'/>
          <Divider type="vertical" />
          <Popconfirm title="Confirm to delete?" onConfirm={()=>{
            roleStore.deleteRoles(record.id);
          }}>
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    }];

  return(
    <div className='container'>
      <RolesModal onClick={roleStore.createRole.bind(roleStore)} modalType='create'/>
      <Table
        columns={columns}
        dataSource={roleStore.roles}
        rowKey={record => record.id}
      />
    </div>
  );
}
)
);

export default RolesTable;
