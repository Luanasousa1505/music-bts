class Enum {
    constructor(...values) {
        this.values = {};
        values.forEach((value, index) => {
            this.values[value] = index;
        });
    }

    getNome(value) {
        for (const key in this.values) {
            if (this.values[key] === value) {
                return key;
            }
        }
        return null;
    }
}

module.exports = Enum; 