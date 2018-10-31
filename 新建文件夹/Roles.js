import React from 'react';
import { Table, Popconfirm } from 'antd';
import styles from './Roles.css';
import {inject,observer} from 'mobx-react'
import RoleModal from './RoleModal'

const Roles=inject('rolestore')(observer(({rolestore})=>{

    function deleteHandler(id) {

    }

    function editHandler(id, values) {

    }

    function createHandler(values) {

    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="">{text}</a>,
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
            title: 'Operation',
            key: 'operation',
            render: (text, record) => (
                <span className={styles.operation}>
                    <RoleModal record={record} onOk={editHandler.bind(null, record.id)} title={'Edit Roles'} modaltype={'edit'} action={'Edit'} />
                    <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div className={styles.normal}>
            <div>
                <div className={styles.createButtonMargin}>
                </div>
                <Table
                    columns={columns}
                    dataSource={rolestore.roles}
                    rowKey={record => record.id}
                />
            </div>
        </div>
    );
}
)
)

export default Roles;
