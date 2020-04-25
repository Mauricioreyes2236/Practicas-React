import React, { Component } from "react";
import 'antd/dist/antd.css';
import axios from 'axios';
import { Layout, Typography, Space, Card, List } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

class HomeContainer extends Component {

  constructor() {
    super();


    this.state = {
      users: []
    };

    axios.get('http://localhost:3005/users')
      .then(res => {
        this.setState({
          users: res.data
        })
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const { users } = this.state;
    return (
      < div >
        <Layout>
          <Sider style={{ background: '#8CFFCD' }}><Title level={2}>Lista de usuarios</Title></Sider>
          <Layout>
            <Header style={{ background: '#FFA59B' }}><Title>Reyes Rojas Mauricio</Title></Header>
            <Content><List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={users}
              renderItem={item => (
                <List.Item>
                  <Card title={item.name}>
                    {item.id}
                  </Card>
                </List.Item>
              )}
            /></Content>
            <Footer style={{ background: '#FFA59B' }}><Title level={3}>Derechos Reservados©</Title></Footer>
          </Layout>
        </Layout>
      </div >

    );
  }
}


export default HomeContainer;
