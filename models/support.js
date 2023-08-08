// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters

function Support(id = 'undefined', area = 'undefined', email, name, message) {

    this.id = Number(id);
    this.supportArea_id = Number(area);
    this.email = email;
    this.name = name;
    this.message = message;
}

module.exports = Support;