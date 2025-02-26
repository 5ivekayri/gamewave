import React, { useState } from 'react';
import Emulator from './Emulator';  // Используем default import

function GameDetailsPage() {
  const [romFile, setRomFile] = useState(null);  // Состояние для выбранного ROM файла

  // Обработчик изменения файла
  const handleFileChange = (event) => {
    setRomFile(event.target.files[0]);  // Обновляем состояние с выбранным файлом
  };

  return (
    <div className="game-details-page">
      <h2>Super Mario Bros</h2>
      <img
        src="https://i.etsystatic.com/6824854/r/il/53debe/585887395/il_794xN.585887395_gpan.jpg"
        alt="Super Mario Bros"
      />
      <p>Год выпуска: 1985</p>
      <p>Жанр: Платформер</p>
      <p>Описание: Классическая платформенная игра с участием Марио и Луиджи.</p>

      <div>
        <label htmlFor="rom-upload">Загрузите файл ROM: </label>
        <input
          type="file"
          id="rom-upload"
          accept=".nes"
          onChange={handleFileChange}  // Обрабатываем изменение файла
        />
      </div>

      {/* Передаем romFile в компонент Emulator */}
      {romFile && <Emulator romFile={romFile} />}
    </div>
  );
}

export default GameDetailsPage;
