import { useState } from "react";

// svg components
import Save from "./svg/Save";

function TodoEdit(props) {
  // 解構
  const { item, handleEditSave } = props;
  const [editText, setEditText] = useState(item.text);

  return (
    <>
      <li>
        <div className="editInput">
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <div
            className="save"
            onClick={() => {
              handleEditSave(item.id, editText);
            }}
          >
            <Save />
          </div>
        </div>
      </li>
    </>
  );
}

export default TodoEdit;
