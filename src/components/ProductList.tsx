/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Menu, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { IconType } from 'react-icons'
import { Product } from '../models/product'
import { TbPlus } from 'react-icons/tb'

interface ProductListProps {
    title: string
    icon?: ReturnType<IconType>
    productList: Product[]
    loading?: boolean
}

export default function ProductList(props: ProductListProps) {
    return (
        <div>
            <div
                style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                }}
            >
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['']}
                    items={[
                        {
                            key: props.title,
                            label: props.title,
                            icon: props.icon,
                        },
                    ]}
                    style={{ minWidth: '100%', fontWeight: 'bold', fontSize: 20, justifyContent: 'center', padding: '20px 0' }}
                />
            </div>
            <div style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '30px' }}>
                <Row>
                    {props.productList?.length > 0 ? (
                        props?.productList?.map((x) => {
                            return (
                                <Col md={4} style={{ padding: 10 }}>
                                    <Card bordered={false} loading={props.loading} cover={<img alt="example" src={x.listImagen[0]} width={'100%'} height={200} />}>
                                        <Meta title={x.name} description={x.price ?? ''} />
                                        <div style={{ marginTop: 10 }}>
                                            <Button style={{ minWidth: '100%' }} icon={<TbPlus />}>
                                                Añadir al carrito
                                            </Button>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })
                    ) : (
                        <Card style={{ width: '100%' }} bordered={false}>
                            <Meta title={'No hay productos en esta categoría'} style={{ textAlign: 'center' }} />
                        </Card>
                    )}
                </Row>
            </div>
        </div>
    )
}
