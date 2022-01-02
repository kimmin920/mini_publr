import React from 'react';
import styled from 'styled-components';

export default function StyleFormEditor({ data, editFormValue }) {
  const jsons = [];

  for (let [name, value] of Object.entries(data)) {
    jsons.push({ name, ...value });
  }

  return (
    <S_StyleEdiorInputs>
      <S_Inputs>
        {jsons.map((each) => (
          <S_Group>
            <S_Label>{each.name}</S_Label>
            <input
              onChange={(e) => editFormValue(each.name, e.target.value)}
              name={each.name}
              value={each.value}
            />
          </S_Group>
        ))}
      </S_Inputs>
    </S_StyleEdiorInputs>
  );
}

const S_StyleEdiorInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

const S_Inputs = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const S_Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S_Label = styled.label`
  margin-right: 5px;
  margin-left: 5px;
`;
