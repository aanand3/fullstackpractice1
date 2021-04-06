import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item.js'

const Items = props =>
{
    const itemList = props.items.map(newItem => 
    {
        return <Item key={newItem.id} item={newItem} fetchAllItems={props.fetchAllItems} />
    })

    return (
        <div>
            
            <table>
                <thead> <td colSpan = "3"><h1>To Do List</h1></td></thead>
                <tbody>
                    {itemList}
                </tbody>
            </table>

        </div>
    )
}

Items.propTypes = {
    items: PropTypes.array,
    fetchAllItems: PropTypes.func,
}

export default Items
