import { Button, Dropdown } from 'antd'
import { items } from './categories'

const CategoriesDropDown = () => (
    <Dropdown menu={{ items: items }} placement="bottom" arrow>
        <Button>TODAS LAS CATEGORÍAS</Button>
    </Dropdown>
)

export default CategoriesDropDown
