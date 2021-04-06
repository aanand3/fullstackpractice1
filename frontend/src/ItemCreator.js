import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles';

export class ItemCreator extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            inputText: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event)
    {
        event.preventDefault();

        await this.postNewItem();
        await this.props.fetchAllItems();
    }

    async postNewItem()
    {
        try
        {
            console.log('posting... ')
            const newItem = { "content": this.state.inputText }
            console.log(newItem)

            const url = "http://localhost:8080/api/itempractice/";
            const requestOptions = {
                method: 'POST',
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

    handleChange(event)
    {
        console.log('firing')
        this.setState({ inputText: event.target.value })
    }

    render()
    {
        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <MyField id="outlined"
                    label="Add an item"
                    variant="filled"
                    size = "medium"
                    onChange={this.handleChange} />
            </form>
        )
    }
}

ItemCreator.propTypes = {
    fetchAllItems: PropTypes.func,
}

export default ItemCreator

const MyField = styled(TextField)({
    textDecorationColor: "white",
    background: "white",
    borderRadius: 4,
  });