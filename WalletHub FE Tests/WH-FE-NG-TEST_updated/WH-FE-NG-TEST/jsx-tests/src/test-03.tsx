/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
} as const;

function PhoneBookForm({ addEntryToPhoneBook }) {
    return (
        <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable(props) {
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
        </table>
    );
}

function Application(props) {
    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook="" />
            <InformationTable />
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('test-03')
);