import React from 'react';

import styled from 'styled-components';

export default function TemplateSelect({
  selectedTemplate,
  options,
  onChange,
}) {
  return (
    <S_TemplateSelect>
      <label for='template'>Choose a Template:</label>

      <S_Select name='template' id='template' onChange={onChange}>
        {options.map((value) => (
          <>
            <option value={value} selected={selectedTemplate === value}>
              {value}
            </option>
          </>
        ))}
      </S_Select>
    </S_TemplateSelect>
  );
}

const S_TemplateSelect = styled.div`
  display: flex;
  flex-direction: space-between;
  padding: 20px;
`;

const S_Select = styled.select`
  max-width: 100px;
  margin-left: auto;
`;
