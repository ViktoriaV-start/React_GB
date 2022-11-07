import React from 'react';

export const ThemeContext = React.createContext(
    {
        theme: 'dark',
        toggleTheme: () => {
        console.log('default')
        }
    }); 

// Создается контекст и передается дефолтное значение, причем,
// если в value передается объект - то и здесь следует соблюдать это правила и 
// передавать объект.

// Возвращает специальный объект, у него есть несколько свойств, в том числе свойство Provider
// <ThemeContext.Provider> *** </ThemeContext.Provider>
// Внутрь этого провайдера заворачиваем все данные, которые будут иметь доступ к данным внутри контекста