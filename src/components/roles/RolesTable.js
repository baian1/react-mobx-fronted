import React from 'react';
import { Table, Divider } from 'antd';
import {inject,observer} from 'mobx-react'

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
      <a>Invite {record.name}</a>
      <Divider type="vertical" />
      <a>Delete</a>
    </span>
  ),
}];

const RolesTable=inject('rolestore')(observer(({rolestore})=>{
  const dataSource=rolestore.roles.map(value => {
    console.log({...value,'key':value.id});
    return {...value,'key':value.id};
  });

  return(
    <Table columns={columns} dataSource={dataSource} />
  );
}
)
)
export default RolesTable;
