import React, { FC } from 'react';
import { User } from '../../models/UserModel';
import { StyledUserList, StyledSpan } from './styled';
import { UserListItem } from '../UserListItem/UserListItem';

interface UserListProps {
  data: User[];
}
export const UserList: FC<UserListProps> = ({ data }) => {
  return (
    <StyledUserList>
      {data.length > 0 ? data.map((user, index) => (
        <UserListItem key={user.id} user={user} index={index}/>
      )) : <StyledSpan>Brak userów</StyledSpan>}
    </StyledUserList>
  );
};