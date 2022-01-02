import React from 'react';
import styled from 'styled-components';
import StyleFormEditor from './StyleEditorInputs';

export default function MagazineEditorForm({
  data,
  onSubmit,
  editFormValue,
  editFromStyle,
}) {
  const jsons = [];

  for (let [name, value] of Object.entries(data)) {
    jsons.push({ name, ...value });
  }

  return (
    <S_Form onSubmit={onSubmit}>
      <S_Inputs>
        {jsons.map((each) => (
          <>
            <S_Group>
              <S_Label>{each.name}</S_Label>
              <input
                onChange={(e) => editFormValue(each.name, e.target.value)}
                name={each.name}
                value={each.value}
              />
            </S_Group>
            <S_StyleFormWrapper>
              {each.style && (
                <StyleFormEditor
                  data={each.style}
                  editFormValue={editFromStyle(each.name)}
                />
              )}
            </S_StyleFormWrapper>
          </>
        ))}
      </S_Inputs>
      <S_Button type='submit'>EDIT</S_Button>
    </S_Form>
  );
}

const S_Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

const S_Inputs = styled.div`
  padding-left: 10px;
  padding-right: 10px;
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

const S_Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S_Label = styled.label`
  margin-right: 5px;
  margin-left: 5px;
`;

const S_StyleFormWrapper = styled.div``;
