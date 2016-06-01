module.exports = function() {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var prefix = '';
        var number = '';

        switch (value.length) {
            case 10: // ########## -> C ####-###-###
                prefix = value.slice(0, 4);
                number = value.slice(4);
                break;

            default:
                return tel;
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (prefix + '-' + number).trim();
    };
};