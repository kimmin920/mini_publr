import React, { useState } from "react";

import { Card } from "reactstrap";
import "./drag.css";
import styled from "styled-components";
import EditorDropZone, { SwapResult } from "./EditorDropZone";
import ImageCard from "./ImageCard";
import Sidebar from "./Sidebar";
import { ReactSortable } from "react-sortablejs";
import EditTools from "./EditTools";

function DragDrop() {
  const [sideList, setSideList] = useState([
    { id: 1, name: "AAAAA", color: "red" },
    { id: 2, name: "BBBBB", color: "orange" },
    { id: 3, name: "CCCCC", color: "yellow" },
    { id: 4, name: "DDDDD", color: "green" },
    { id: 5, name: "EEEEE", color: "blue" },
    { id: 6, name: "FFFFF", color: "purple" },
    { id: 7, name: "GGGGG", color: "skyblue" },
    { id: 8, name: "HHHHH", color: "lightgreen" },
  ]);

  const [editorList, setEditorList] = useState<
    { id: number; name: string; color: string }[]
  >([{ id: 9, name: "phone", color: "red" }]);

  return (
    <S_FulSize>
      <S_Main>
        <ReactSortable
          animation={150}
          style={{ height: "100%" }}
          group={{ name: "shared" }}
          list={editorList}
          setList={setEditorList}
          ghostClass="sortable-ghost"
          handle=".side-handle"
        >
          {editorList.map((item) => (
            <S_SideCard key={item.id}>
              <EditTools className="side-handle" />
              <ImageCard
                index={item.id}
                id={item.id}
                text={item.name}
                color={item.color}
              />
            </S_SideCard>
          ))}
        </ReactSortable>
      </S_Main>

      <Sidebar>
        <ReactSortable
          group={{ name: "shared", pull: "clone" }}
          list={sideList}
          setList={setSideList}
          ghostClass="sortable-ghost"
          animation={150}
        >
          {sideList.map((item) => (
            <ImageCard
              index={item.id}
              id={item.id}
              key={item.id}
              text={item.name}
              color={item.color}
            />
          ))}
        </ReactSortable>
      </Sidebar>
    </S_FulSize>
  );
}

const S_SideCard = styled.div`
  position: relative;
  background-color: grey;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const S_Main = styled.div`
  width: 700px;
  height: 100%;
  margin: auto;
  background-color: black;
`;

const S_FulSize = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export default DragDrop;
