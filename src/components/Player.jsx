import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [editPlayerName, isEditPlayerName] = useState(initialName);
  const [editName, setEditName] = useState(false);
  function handleClick() {
    setEditName((editing) => !editing);
    if (editName) {
      onChangeName(symbol, editPlayerName);
    }
  }

  function handleChange(e) {
    isEditPlayerName(e.target.value);
  }

  let playerName = <span className="player-name">{editPlayerName}</span>;

  if (editName) {
    playerName = (
      <input
        type="text"
        required
        value={editPlayerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editName ? "Save" : "Edit"}</button>
    </li>
  );
}
