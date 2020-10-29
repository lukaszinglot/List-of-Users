import React, { FC } from 'react';
import { UserName, UserSpan, StyledWrapper } from './styled';
import { User } from '../../models/UserModel'

export const UserListItem: FC<{ user: User, index:number }> = ({ user, index }) => {
    
  return (
    <StyledWrapper>
      <UserSpan>{`${index + 1}.`}</UserSpan>
      <UserName>{user.name}</UserName>
      <UserSpan>@{user.username}</UserSpan>
    </StyledWrapper>
  );
};