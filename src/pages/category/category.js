//品类管理路由

import React from 'react';
import { Card, Button, Icon, Table } from 'antd';
import LinkButton from '../../components/linkButton/linkButton';
export default class Category extends React.Component {
  render() {
    const title = '一级分类列表';
    const exat = (
      < Button type='primary'>
        <Icon type='plus'></Icon>
        添加
      </Button>
    )
    const dataSource = [
      {
        "parentId": "0",
        "_id": "5ca9d695b49ef916541160ba",
        "name": "家用电器",
        "-v": 0
      },
      {
        "parentId": "0",
        "_id": "5ca9d695b49ef916541160bb",
        "name": "电脑",
        "-v": 0
      }
    
    ]

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '操作',
        width:300,
        render: () => (
          <span>
            <LinkButton >修改分类</LinkButton>
            <LinkButton >查看子分类</LinkButton>
          </span>
        )
      }
      
    ];
     
    return (
      <Card title={title} extra={exat} >
        <Table dataSource={dataSource} columns={columns} bordered rowKey='_id'/>;
        </Card>
    )
  }
}