
angular.module('primeiraApp').component('field', {
    bindings: {
        id: '@',
        label: '@',
        grid: '@',
        placeholder: '@',
        type: '@',
        model: '=',
        readonly: '<',
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            this.$onInit = () => this.gridClass = gridSystem.toCssClasses(this.grid)
        },
    ],
    template: `
        <div class="{{ $ctrl.gridClass }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}"
                ng-readonly="$ctrl.readonly" type="{{ $ctrl.type }}" ng-model="$ctrl.model">
            </div>
        </div>
        `


})
