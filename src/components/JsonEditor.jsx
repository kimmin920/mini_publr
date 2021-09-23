import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import styled from 'styled-components';

export default function JsonEditor({ json }) {
  const jsons = [];

  for (let [name, value] of Object.entries(json)) {
    jsons.push({ name, value });
  }

  return jsons.map(({ name, value }) => <Item name={name} value={value} />);
}

function Item({ name, value }) {
  const [valueList, setValueList] = useState([]);

  const hasNetesValues = checkHasNestedValues(value);

  function handleClickOpen(jsonValues) {
    const jsons = [];

    for (let [name, value] of Object.entries(jsonValues)) {
      jsons.push({ name, value });
    }

    setValueList(jsons);
  }

  function onClickClose() {
    setValueList([]);
  }

  return (
    <JsonItem>
      {hasNetesValues ? (
        <KeyWrapper>
          {valueList.length ? (
            <ChevronUp color='grey' onClick={onClickClose} />
          ) : (
            <ChevronDown color='grey' onClick={() => handleClickOpen(value)} />
          )}
          <S_KeyName>{name}</S_KeyName>
        </KeyWrapper>
      ) : (
        <ValueWrapper>
          {name}
          <input type='text' value={value}></input>
        </ValueWrapper>
      )}

      <ul>
        {valueList.length > 0 &&
          valueList.map(({ name, value }) => (
            <Item name={name} value={value} />
          ))}
      </ul>
    </JsonItem>
  );
}

function checkHasNestedValues(values) {
  if (typeof values === 'object') {
    return true;
  }

  return false;
}

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
`;

const ValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S_KeyName = styled.div``;

const JsonItem = styled.li``;
