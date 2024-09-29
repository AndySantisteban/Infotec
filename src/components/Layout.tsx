import { Outlet, useNavigate } from 'react-router-dom'
import { Flex, Layout as AntdLayout, Menu } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
// import Sider from 'antd/es/layout/Sider'
import type { MenuProps } from 'antd'
import { TbCoin, TbFolder, TbHome, TbInfoCircle, TbMail, TbNote, TbShoppingBag } from 'react-icons/tb'
// import { useMediaQuery } from '../hooks/useMediaQuery'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {
        key: '',
        label: 'INICIO',
        icon: <TbHome />,
    },
    {
        key: 'products',
        label: 'PRODUCTOS',
        icon: <TbShoppingBag />,
    },

    {
        key: 'proyects',
        label: 'PORTAFOLIO',
        icon: <TbFolder />,
    },
    {
        key: 'contact',
        label: 'CONTACTO DE SOPORTE',
        icon: <TbMail />,
    },
    {
        key: 'methods',
        label: 'TODOS LOS METODOS DE PAGO',
        icon: <TbCoin />,
    },
    {
        key: 'blog',
        label: 'BLOGS',
        icon: <TbNote />,
    },
    {
        key: 'aboutUs',
        label: 'SOBRE NOSOTROS',
        icon: <TbInfoCircle />,
    },
    {
        key: 'carrito',
        label: 'CARRITO',
        icon: <TbShoppingBag color="#008e92" />,
    },
]
function Layout() {
    const navigate = useNavigate()
    const onNavigate: MenuProps['onClick'] = (e) => {
        const route = e.keyPath.reverse().join('/')
        navigate(route)
    }
    // const matches = useMediaQuery('(min-width: 768px)')

    return (
        <Flex
            gap="middle"
            wrap
            style={{
                minHeight: '100vh',
            }}
        >
            <AntdLayout>
                {<Menu theme="light" mode="horizontal" defaultSelectedKeys={['index']} items={items} style={{ minWidth: '100%', borderColor: '#008e92' }} onClick={onNavigate} />}
                <AntdLayout>
                    <Content
                        style={{
                            minHeight: '100%',
                            backgroundColor: 'white',
                        }}
                    >
                        <Outlet />
                    </Content>
                </AntdLayout>
                <Footer
                    style={{
                        backgroundColor: '#f9fafb',
                    }}
                >
                    © 2024 Multiservicios Infotec
                    <div>
                        <a href="https://www.facebook.com/AndySantisteban1607/" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/color/25/000000/facebook.png" alt={'...'} />
                        </a>
                        <a href="https://wa.link/5ayf76" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/office/25/000000/whatsapp--v1.png" alt={'...'} />
                        </a>
                        <a href="https://www.linkedin.com/in/andy-santisteban/" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/fluency/25/000000/linkedin.png" alt={'...'} />
                        </a>
                    </div>
                </Footer>
            </AntdLayout>
        </Flex>
    )
}

export default Layout
