'use strict';

var gNextId = 0;
var gProjects = createProjects();

function createProjects() {
    return [
        createProject('Login Page', 'Simplicity is key', '',
        'https://ronavnery.github.io/CA-SafeContent/','May 26th, 2019', 'JS, jQuery, FlexBox'),
         
        createProject('Mine Sweeper', 'The good old game got a face lift', '',
         'https://ronavnery.github.io/CA-minesweeper/','May 19th, 2019', 'Recursive JS, Matrix, CSS'),
         
        createProject('Todos', 'Get things done', '',
         'https://ronavnery.github.io/CA-todos/','May 24th, 2019', 'JS, CSS, FlexBox'),

         createProject('Unusual Cart', 'How a cart will look in 50yrs time', '',
         'https://ronavnery.github.io/CA-FutureCart/','May 21st, 2019', 'JS, CSS, FlexBox'),

         createProject('Guess Me', 'Self learning magician', '',
         'https://ronavnery.github.io/CA-GuessMe/','May 26th, 2019', 'JS, jQuery, CSS, FlexBox'),

         createProject('Book Store', 'Admin panel for book store managers', '',
         'https://ronavnery.github.io/book-shop/','May 27th, 2019', 'JS, jQuery, Bootstrap, FlexBox')

        ]
}

function createProject(name, title, desc, url, date, labels) {
    return {
        id: ++gNextId,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: date,
        labels: labels
    }
}