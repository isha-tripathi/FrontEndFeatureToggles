const FEATURE_TOGGLES = {
    feature1: false,
    feature2: false
};

module.exports = {
    toggleValues: (body) => {
        console.log("Before: ", FEATURE_TOGGLES);
        Object.keys(FEATURE_TOGGLES)
            .forEach( feature => {
                FEATURE_TOGGLES[feature] = body[feature] === 'on'
            });
        console.log("After: ", FEATURE_TOGGLES);
    },
    getValue: (toggle) => {
        return FEATURE_TOGGLES[toggle]
    },
    getAll: () => {
        console.log(FEATURE_TOGGLES);
        return Object.keys(FEATURE_TOGGLES);
    }
};