import React from 'react'
import { Layout, Menu, Typography } from 'antd';
import { LoginOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigation } from '../shared/hooks';
import { routeKeys } from '../shared/utils/constants';

const TheSidebar = () => {
  const { push } = useNavigation();

  return (
    <Layout.Sider>
      <Typography.Title size={5} style={{color: 'white', padding: '30px'}}><span role="img" aria-label="react-emoji">⚛️</span> x <span role="img" aria-label="firebase-emoji">🔥</span></Typography.Title>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item onClick={() => push(routeKeys.LOGIN)} key={routeKeys.LOGIN} icon={<LoginOutlined />}>
          Login
        </Menu.Item>
        <Menu.Item onClick={() => push(routeKeys.MOVIES)} key={routeKeys.MOVIES} icon={<AppstoreOutlined />}>
          Movies
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default React.memo(TheSidebar);
