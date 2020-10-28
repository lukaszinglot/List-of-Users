import React, { FC } from 'react';
import { User } from '../../interface/User';
import { StyledUserList } from './styled';
import UserListItem from '../UserListItem/UserlistItem';

interface UserListProps {
  data: User[];
}
const UserList: FC<UserListProps> = ({ data }) => {
  return (
    <StyledUserList>
      {data.map((user, index:number) => (
        <UserListItem key={user.id} user={user} index={index}/>
      ))}
    </StyledUserList>
  );
};

export default UserList;