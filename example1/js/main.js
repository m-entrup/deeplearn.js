const math = new deeplearn.NDArrayMathGPU();
math.scope((keep, track) => {
    const matrix = track(deeplearn.Array2D.new(
        [2, 3], [2, 4, 6, 8, 10, 12]
    ));
    const vector = track(deeplearn.Array1D.new(
        [0, 1, 2]
    ));
    const result = track(math.matrixTimesVector(matrix, vector));
    console.log(result.getValues());
    var p = $("body p");
    p.append(
        $('<div></div>').append("Wert 1: " + result.get(0))
    );
    p.append(
        $('<div></div>').append("Wert 2: " + result.get(1))
    );
});
