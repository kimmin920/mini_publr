import React from 'react';

import styled from 'styled-components';
import JsonEditor from './JsonEditor';
import test1 from '../data/test1.json';

export default function JsonViewerAndEditor() {
  return (
    <>
      <S_Sidebar>
        <S_SidebarHeader>
          <S_HeaderTitle>JSON VIEWER</S_HeaderTitle>
        </S_SidebarHeader>
        <JsonEditor json={test1} />
      </S_Sidebar>
    </>
  );
}

const S_HeaderTitle = styled.div`
  background-color: #7d4cdb;
  color: #f8f8f8;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 1rem;
`;

const S_SidebarHeader = styled.header`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
`;

const S_Sidebar = styled.aside`
  height: 100%;
  width: 30%;
  background-color: #f8f8f8;
  overflow: auto;
  /* border-right: 1px solid rgba(0, 0, 0, 0.33); */
`;

const S_App = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: grey;
`;
