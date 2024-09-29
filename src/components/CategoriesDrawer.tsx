/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Drawer, List } from 'antd'
import { useState } from 'react'
import { items } from './categories'

function CategoriesDrawer() {
    const [open, setOpen] = useState<boolean>(false)

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Button onClick={showDrawer}>Todas las categorìas</Button>
            <Drawer onClose={onClose} open={open} placement="left">
                <List dataSource={items} size="large" renderItem={(item) => <List.Item>{(items as any)?.find((x: any) => x?.key === item?.key)?.label as any}</List.Item>} />
            </Drawer>
        </>
    )
}

export default CategoriesDrawer
