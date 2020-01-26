export default {
    nodes: [
        { 
            id: '0',
            title: 'JavaScript',
            annotation: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262).', 
            content: 'content content 1', 
            author: 'Me', 
            update: new Date,
            parent: null,
            childrens: [],
            links: []
        },
        { 
            id: '1',
            title: 'jQuery', 
            annotation: 'jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX. Разработка jQuery ведётся командой добровольцев на пожертвования.', 
            content: 'content content 2', 
            author: 'Me', 
            update: new Date,
            parent: 0,
            childrens: [],
            links: [],
        },
        { 
            id: '2',
            title: 'AJAX', 
            annotation: 'Ajax — подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером. В результате, при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее.', 
            content: 'content content 2', 
            author: 'Me', 
            update: new Date,
            parent: 0,
            childrens: [],
            links: []
        },
        { 
            id: '3',
            title: 'Node.js', 
            annotation: 'Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения.', 
            content: 'content content 2', 
            author: 'Me', 
            update: new Date,
            parent: 0,
            childrens: [],
            links: []
        }
    ]
}
