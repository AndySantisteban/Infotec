import { Carousel, Col, Menu, Row, Space } from 'antd'
import CategoriesDropDown from '../../components/CategoriesDropDown'
import Search from 'antd/es/input/Search'
import Title from 'antd/es/typography/Title'
import { items } from '../../components/categories'

function Index() {
    return (
        <div>
            <Row
                style={{
                    alignItems: 'center',
                    // backgroundColor: '#008e92',
                    padding: 10,
                }}
            >
                <Col md={6} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                    <CategoriesDropDown />
                </Col>
                <Col md={12} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                    <img src="/logo-without-bg.png" alt="" height={'80px'} />
                </Col>
                <Col md={6} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                    <Space.Compact>
                        <Search placeholder="Buscar producto" allowClear />
                    </Space.Compact>
                </Col>
            </Row>
            <Carousel style={{ maxWidth: '98.8vw' }} autoplay arrows adaptiveHeight>
                <div>
                    <img src="https://bermorzone.com.ph/wp-content/uploads/2024/01/btz-banner-official-launch-65aca2e6cbf40.webp" alt="" width={'100%'} />
                </div>
                <div>
                    <img src="https://vrlatech.com/wp-content/uploads/2024/08/SEMI-ANNUAL-1.jpg" alt="" width={'100%'} />
                </div>
                <div>
                    <img src="https://goldentech.com.sa/media/wysiwyg/slidershow/home-2/EN_Gaming_offers.jpg" alt="" width={'100%'} />
                </div>
                <div>
                    <img src="https://bermorzone.com.ph/wp-content/uploads/2024/01/btz-banner-official-launch-65aca2e6cbf40.webp" alt="" width={'100%'} />
                </div>
            </Carousel>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                <Title> Principales Categorías</Title>
            </div>
            <div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} items={items} style={{ minWidth: '100%', borderColor: '#008e92', backgroundColor: '#008e92', justifyContent: 'center', padding: '20px 0' }} />
            </div>
        </div>
    )
}

export default Index
