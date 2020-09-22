module.exports = function (Handlebars) {
    Handlebars.registerHelper('sort', function (field, sort) {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fas fa-sort',
            asc: 'fas fa-sort-amount-down-alt',
            desc: 'fas fa-sort-amount-down',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const type = types[sortType];
        const icon = icons[sortType];
        const protected = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );
        const textProtect = `<a href="${protected}">
                                <i class="${icon}"></i>
                            </a>`;
        return new Handlebars.SafeString(textProtect);
    });
};
