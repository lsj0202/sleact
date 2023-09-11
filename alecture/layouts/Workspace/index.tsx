import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import gravatar from 'gravatar';
import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './style';

const Workspace: FC = ({ children }) => {
  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg
              src={gravatar.url('lsj', {
                s: '28px',
                d: 'retro',
              })}
              alt={'nickname'}
            />
          </span>
        </RightMenu>
      </Header>
      <WorkspaceWrapper>
        <Workspace>test</Workspace>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
        </Channels>
        <Chats>Chats</Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
