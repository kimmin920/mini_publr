import React, { useReducer } from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

import templatesMap from '../templates';
import MagazineEditorForm from './MagazineEditorForm';
import reducer from './magazineReducer';
import MagazineViewer from './MagazineViewer';
import TemplateSelect from './TemplateSelect';

export default function Magazine({ template, data, handleSubmit }) {
  const [selectedTemplate, setTemplate] = useState(template);
  const [state, dispatch] = useReducer(reducer, data);

  function onSubmit(e) {
    e.preventDefault();
    console.log(`submitted value: `);
    console.log(state);
    alert('Magazine changed');
    handleSubmit(state, selectedTemplate);
  }

  function editFormValue(name, value) {
    dispatch({ type: 'VALUE_CHANGED', payload: { name, value } });
  }

  function editFromStyle(name) {
    return function (prop, value) {
      dispatch({ type: 'STYLE_CHANGED', payload: { name, prop, value } });
    };
  }

  function handleChangeTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <>
      <S_Sidebar>
        <S_SidebarHeader>
          <S_HeaderTitle>MAGAZINE EDITOR</S_HeaderTitle>
        </S_SidebarHeader>
        <TemplateSelect
          selectedTemplate={selectedTemplate}
          options={Array.from(templatesMap.keys())}
          onChange={handleChangeTemplate}
        />
        <MagazineEditorForm
          data={state}
          onSubmit={onSubmit}
          editFormValue={editFormValue}
          editFromStyle={editFromStyle}
        />
      </S_Sidebar>
      <S_Main>
        <MagazineViewer template={selectedTemplate} data={state} />
      </S_Main>
    </>
  );
}

const S_Main = styled.main`
  margin: auto;
  display: flex;
`;

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
