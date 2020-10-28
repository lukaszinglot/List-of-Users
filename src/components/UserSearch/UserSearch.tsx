import React, { FC, useState, useEffect } from 'react';
import { apiCall } from '../../api/AuthApi';
import { StyledWrapper, StyledTitle } from './styled';
import { Input } from '../Input/Input'
import  UserList  from '../UserList/UserList'
import { User } from '../../interface/User'

const UserSearch: FC = () => {
  const API_URL =  'https://jsonplaceholder.typicode.com';

  const [userInput, setUserInput] = useState('');
  const [payload, setPayload] = useState<{ data: User[]}>({
    data: []
  });
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  

  const getUserData = async () => {
    try {
      const data = await apiCall<User[]>(API_URL);
      setPayload(prev => ({ ...prev, data}));
      
    } catch (error) {
      setPayload(prev => ({ ...prev}));
    }
  };

  const filterUsers: (arr: User[]) => (name: string) => User[] = arr => name =>
  arr.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setFilteredUsers(filterUsers(payload.data)(userInput))
  }, [userInput, payload.data])

  return (
    <StyledWrapper>
      <StyledTitle>Users list</StyledTitle>
      <Input value={userInput} handleValueChange={setUserInput} />
        <UserList data={filteredUsers} />
    </StyledWrapper>
  );
};

export default UserSearch;