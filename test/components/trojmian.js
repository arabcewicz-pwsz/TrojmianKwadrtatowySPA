define(['components/trojmian/trojmian'], function(trojmian) {
    var TrojmianViewModel = trojmian.viewModel;

    describe('Trójmian view model', function() {

        it('powinien poprawnie rozwiązać równanie z jednym pierwiastkiem', function() {
            var instance = new TrojmianViewModel();
            //arrange
            instance.a(1);
            instance.b(-2);
            instance.c(1);
            // act
            instance.rozwiaz();
            //assert
            expect(instance.liczba_rozwiazan()).toBe(1);
            expect(instance.x1()).toBe(1);
        });

    });
});

