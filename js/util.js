var util = {};

util.addClass = function(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        element.className += ' ' + className;
    }
};

util.removeClass = function(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

module.exports = util;