import React from 'react';
import {Table, Divider, Popconfirm} from 'antd';
import {inject,observer} from 'mobx-react'
import RolesModal from './RolesModal'


const RolesTable=inject('rolestore')(observer(({rolestore})=>{

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
          <RolesModal onClick={rolestore.updateRoles.bind(rolestore,record.id)} record={record} text='Edit' modaltype='edit'/>
          <Divider type="vertical" />
          <Popconfirm title="Confirm to delete?" onConfirm={()=>{
            rolestore.deleteRoles(record.id);
          }}>
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    }];

  return(
    <div>
      <RolesModal onClick={rolestore.creatRoles.bind(rolestore)} record={{}} text='Creat Role' modaltype='creat'/>
      <Table
        columns={columns}
        dataSource={rolestore.roles}
        rowKey={record => record.id}
      />
    </div>
  );
}
)
);

export default RolesTable;
