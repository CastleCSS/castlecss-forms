var Util = {};

Util.addClass = function(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        element.className += ' ' + className;
    }
};

Util.removeClass = function(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

module.exports = Util;
