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
            <h1> To Do List </h1>
            <table>
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
