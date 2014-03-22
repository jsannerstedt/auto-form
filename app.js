(function () {
    // base view model
    var vm = (function () {
        var models = [
                getListModel(mock.getSomeData()),
                getListModel(mock.getSomeData()),
                getListModel(mock.getSomeData())
            ],
            activeModel = ko.observable(),
            form = ko.computed(function () {
                if (!activeModel()) return [];

                return autoForm.parse(activeModel());
            });

        function edit(model) {
            activeModel(model.data);
        }

        function save() {
            var json = autoForm.toJson(form());
            console.log(json);
            // post to server
        }

        function getListModel(model) {
            var parsed = JSON.parse(model);
            return {
                data: parsed,
                pairs: autoForm.toKeyValuePairs(parsed)
            }
        }

        return {
            save: save,
            edit: edit,
            models: models,
            activeModel: activeModel,
            form: form

        };
    })();

// start it up!
    ko.applyBindings(vm);
}());