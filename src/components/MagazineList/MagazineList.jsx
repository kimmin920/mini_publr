import React from 'react';
import { useState } from 'react/cjs/react.development';
import MagazineViewer from '../MagazineViewer';
import styled from 'styled-components';
import TemplateSelect from '../TemplateSelect';
import templatesMap from '../../templates';
import defaultMagazine1 from '../../data/magazine1.json';
import Magazine from '../Magazine';

const defaultData1 = defaultMagazine1.data;

export default function MagazineList() {
  const [list, setList] = useState([]);
  const templates = Array.from(templatesMap.keys());
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  // ListView vs DetailView
  const [view, setView] = useState('LIST');

  // Detail - Editing data
  const [editingData, setEditingData] = useState({
    data: null,
    template: null,
    index: null,
  });

  // functions

  function onClickAddButton(data) {
    setList((prev) =>
      prev.concat({ data, template: selectedTemplate, index: prev.length })
    );
  }

  function viewToList() {
    setView('LIST');
  }

  function handleClickEachMagazine(data) {
    setEditingData(data);
    setView('DETAIL');
  }

  function handleSubmit(index) {
    return function (data, template) {
      setList((prev) => {
        prev[index] = { data, template, index };
        return prev;
      });
    };
  }

  return (
    <>
      {view === 'LIST' && (
        <>
          <S_SelectWrapper>
            <TemplateSelect
              selectedTemplate={selectedTemplate}
              options={templates}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            />
            <S_Button onClick={() => onClickAddButton(defaultData1)}>
              ADD A MAGAZINE
            </S_Button>
          </S_SelectWrapper>
          <S_ListViewer>
            {list.map((each) => (
              <S_MagazineWrapper
                onClick={() =>
                  handleClickEachMagazine({
                    data: each.data,
                    template: each.template,
                    index: each.index,
                  })
                }
              >
                <MagazineViewer template={each.template} data={each.data} />
              </S_MagazineWrapper>
            ))}
          </S_ListViewer>
        </>
      )}
      {view === 'DETAIL' && (
        <>
          {console.log(editingData)}
          <S_ButtonWrapper>
            <S_Button onClick={viewToList}>BACK</S_Button>
          </S_ButtonWrapper>
          <Magazine
            template={editingData.template}
            data={editingData.data}
            handleSubmit={handleSubmit(editingData.index)}
          />
        </>
      )}
    </>
  );
}

const S_ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const S_MagazineWrapper = styled.div`
  cursor: pointer;
`;

const S_ListViewer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const S_SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
`;

const S_Button = styled.button`
  margin: auto;
  border: 2px solid #ffffff;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 800;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  border-radius: 50px;
  background: #cb3837;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  max-width: 200px;
`;
