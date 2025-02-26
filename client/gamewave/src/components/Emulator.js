import React, { useEffect, useRef, useState } from 'react';

const Emulator = ({ romFile }) => {
  const [isLibretroLoaded, setIsLibretroLoaded] = useState(false);
  const emulatorRef = useRef(null);  // Ссылка на канвас для рендеринга

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/libretro/retroarch.js/dist/retroarch.js'; 
    script.onload = () => setIsLibretroLoaded(true);  // Устанавливаем состояние после загрузки
    script.onerror = () => console.error("Ошибка загрузки скрипта RetroArch!");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);  // Загружаем скрипт только один раз

  useEffect(() => {
    if (isLibretroLoaded && window.RetroArch && romFile) {
      console.log("Инициализация RetroArch с ROM:", romFile.name);

      const retroarch = new window.RetroArch();

      // Преобразуем ROM-файл в URL
      const romUrl = URL.createObjectURL(romFile);

      console.log("ROM URL:", romUrl);

      retroarch.init({
        canvas: emulatorRef.current,  // Указываем канвас для рендеринга
        core: 'nestopia_libretro',    // Ядро для NES
        rom: romUrl,                  // Путь к ROM файлу через URL.createObjectURL
      });

      retroarch.loadROM();

      return () => {
        URL.revokeObjectURL(romUrl);  // Освобождаем URL при размонтировании компонента
      };
    }
  }, [isLibretroLoaded, romFile]);  // Перезапуск при изменении файла ROM

  return (
    <div>
      <h1>Эмулятор NES</h1>
      <canvas ref={emulatorRef} width="800" height="600"></canvas>
    </div>
  );
};

export default Emulator;
