'use strict';

function getTime() {
    return new Date().toString().split(' ').slice(0, 5).join(' ');
}