'use strict';

describe('Controller Tests', function() {

    describe('Report Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockReport, MockDb;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockReport = jasmine.createSpy('MockReport');
            MockDb = jasmine.createSpy('MockDb');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Report': MockReport,
                'Db': MockDb
            };
            createController = function() {
                $injector.get('$controller')("ReportDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'reportsApp:reportUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
