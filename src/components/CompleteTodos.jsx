import React from "react";

const completeArea = {
  backgroundColor: "#ADB445",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px auto",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={completeArea}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
