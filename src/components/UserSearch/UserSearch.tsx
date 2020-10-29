import React, { FC, useState, useEffect } from 'react';
import { apiCall } from '../../api/UserApi';
import { StyledWrapper, StyledTitle } from './styled';
import { Input } from '../Input/Input'
import { UserList }  from '../UserList/UserList'
import { User } from '../../models/UserModel'
import { getFilteredUsers } from './filterUsers'
import { useDebounce } from '../../utils/useDebounce'

export const UserSearch: FC = () => {
  

  const [userInput, setUserInput] = useState('');
  const [payload, setPayload] = useState<{ data: User[]}>({
    data: []
  });
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [ error, setError ] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(userInput, 1000);

  

  const getUserData = async () => {
    try {
      const data = await apiCall<User[]>();
      setPayload(prev => ({ ...prev, data}));
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setIsSearching(true);
    if(debouncedSearchTerm) {
      setFilteredUsers(getFilteredUsers(payload.data, debouncedSearchTerm));
      setIsSearching(false);
    }else {
      setFilteredUsers(payload.data);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm, payload.data])

  return (
    <StyledWrapper>
      <StyledTitle>Users list</StyledTitle>
      <Input value={userInput} handleValueChange={setUserInput} />
      { isSearching && <div>Searching...</div> }
      <UserList data={filteredUsers} />
      { error && <div> Błąd 404.</div> }
    </StyledWrapper>
  );
};