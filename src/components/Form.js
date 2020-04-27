import React, { useState } from 'react';

const Form = props => {
    const { members, setMembers } = props;
    const [memberInfo, setMemberInfo] = useState({name: '', email: '', role: ''});

    const onType = event => {
        setMemberInfo({...memberInfo, [event.target.name]: event.target.value});
    };

    const addNewMember = event => {
        event.preventDefault();
        
        const newMember = {
            name: memberInfo.name,
            email: memberInfo.email,
            role: memberInfo.role
        };

        setMembers([...members, newMember]);
        setMemberInfo({name: '', email: '', role: ''})
    };


    return (
        <form onSubmit={addNewMember}>
            <label htmlFor='name'>Full Name</label>
            <input
            type='text'
            placeholder='Enter Full Name Here'
            id='name'
            name='name'
            value={memberInfo.name}
            onChange={onType}
            />
            <label htmlFor='role'>Job Title</label>
            <input
            type='text'
            placeholder='Enter Job Title Here'
            id='role'
            name='role'
            value={memberInfo.role}
            onChange={onType}
            />
            <label htmlFor='email'>Email Address</label>
            <input
            type='text'
            placeholder='Enter Email Address Here'
            id='email'
            name='email'
            value={memberInfo.email}
            onChange={onType}
            />
            <button type='submit'>Enter</button>
        </form>
    );

};

export default Form;