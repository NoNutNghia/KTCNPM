$('#submit').on('click', function () {
    let efValue = (Number($('#efw').val()) * (-0.03)) + 1.4;
    let tcfValue = (Number($('#tfw').val()) * 0.01) + 0.6;
    let uucpValue = Number($('#taw').val()) + Number($('#tbf').val());
    let aucpValue = uucpValue * tcfValue * efValue;

    let eValue = (10/6) * aucpValue;

    let gValue = 1.4 * eValue * Number($('#p').val()) * Number($('#h').val());
    $('#result').html('Value of G is ' + gValue)
});

