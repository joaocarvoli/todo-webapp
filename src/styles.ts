import styled from "styled-components";


export const TaskText = styled.p`
  flex: 1;
  margin-right: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #bcc7c7;
  border: 1px solid #bcc7c7;
  border-radius: 3px;
  padding: 2px;
  height: 20px;
`;

export const TaskAdd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TodoBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
`;