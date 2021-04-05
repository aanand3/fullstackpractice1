import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

export class Item extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {

        }
    }

    async toggleComplete()
    {
        await this.patchComplete();
        await this.props.fetchAllItems();
    }

    async patchComplete()
    {
        try
        {
            console.log('patching... ')
            const newItem = { completed: !this.props.item.completed }
            console.log(newItem)

            const url = "http://localhost:8080/api/itempractice/" + this.props.item.id;
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem)
            }

            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json)
        }
        catch (e)
        {
            console.error(e);
        }
    }

    async deleteItem()
    {
        await this.sendDeleteRequest();
        await this.props.fetchAllItems();
    }

    async sendDeleteRequest()
    {
        try
        {
            console.log('deleting... ')
            const url = "http://localhost:8080/api/itempractice/" + this.props.item.id;
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }

            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json)
        }
        catch (e)
        {
            console.error(e);
        }
    }

    buildCompleteButton()
    {
        return this.props.item.completed ? 
            <Button variant="contained" color="primary" onClick={ () => {this.toggleComplete();} }>Complete</Button> :
            <Button variant="contained" color="secondary" onClick={ () => {this.toggleComplete();} }>Incomplete</Button>
    }

    buildDeleteButton()
    {
        return <Button variant="contained" color="primary" onClick={ () => {this.deleteItem();} }>Delete</Button> ;
    }

    render() 
    {
        var completeButton = this.buildCompleteButton();
        var deleteButton = this.buildDeleteButton(); 
        
        return (
            <tr>
                <td>{completeButton}</td>
                <td align="left">{this.props.item.content}</td>
                <td>{deleteButton}</td>
            </tr>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object,
    fetchAllItems: PropTypes.func,
}

export default Item


