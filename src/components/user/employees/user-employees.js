import React from 'react'
import Employees from '../../layouts/user/employees'
import UserHeader from '../user-header'
import { useSelector } from 'react-redux'
import { Typography, Table, Tag, Space } from 'antd'

const { Title } = Typography

const UserEmployees = () => {
  const { sidebarUser: { active } } = useSelector((state) => state)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <Employees>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="employees--wrapper">
          <div className="employees--wrapper__top">
            <Title level={1} className="wrapper--top__title">
              Работники организации TabUp
            </Title>
            <div className="wrapper--top__statistic">
              <div className="top--statistic__box">
                <div className="statistic--box__title">Кол-во основателей:</div>
                <div className="statistic--box__text">1 чел.</div>
              </div>
              <div className="top--statistic__box">
                <div className="statistic--box__title">Кол-во управляющих:</div>
                <div className="statistic--box__text">3 чел.</div>
              </div>
              <div className="top--statistic__box">
                <div className="statistic--box__title">Кол-во работников:</div>
                <div className="statistic--box__text">14 чел.</div>
              </div>
            </div>
          </div>
          <div className="employees--wrapper__content">
            <Table columns={columns} bordered />
          </div>
        </div>
      </div>
    </Employees>
  )
}

export default UserEmployees
