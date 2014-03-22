var autoForm = {

    parse: function (myObj) {
        var obj = typeof (myObj) === "string" ? JSON.parse(myObj) : myObj,
            valuePairs = [],
            prop;

        for (prop in obj) {
            var val = obj[prop],
                valueObj = {
                    name: prop,
                    type: typeof(val)
                };

            valueObj.value = Array.isArray(val) ? ko.observableArray(val) : ko.observable(val);

            valuePairs.push(valueObj);
        }

        return valuePairs;
    },
    toJson: function (valuePairs) {
        var obj = {};
        valuePairs.forEach(function (pair) {
            obj[pair.name] = pair.value();
        });

        return JSON.stringify(obj);
    },
    toKeyValuePairs: function (obj) {
        var prop,
            pairs = [];
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {

                pairs.push({
                    name: prop,
                    value: obj[prop]
                })
            }
        }
        return pairs;
    }
};
