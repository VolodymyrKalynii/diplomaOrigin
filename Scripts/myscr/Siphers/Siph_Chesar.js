$(document).ready(function () {
    //Український алфавіт
    var alfavUkrU = new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я');
    var alfavUkrL = new Array('а', 'б', 'в', 'г', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я');

    //Російський алфавіт
    var alfavRusU = new Array();
    for (var i = 1040; i < 1072; i++) {
        if (i == 1046)
            alfavRusU.push(String.fromCharCode(1025));

        alfavRusU.push(String.fromCharCode(i))
    }
    var alfavRusL = new Array();
    for (var i = 1072; i < 1104; i++) {
        if (i == 1078)
            alfavRusL.push(String.fromCharCode(1105));

        alfavRusL.push(String.fromCharCode(i))
    }

    //Англійський алфавіт
    var alfavEngU = new Array();
    for (var i = 65; i < 91; i++)
        alfavEngU.push(String.fromCharCode(i));

    var alfavEngL = new Array();
    for (var i = 97; i < 123; i++)
        alfavEngL.push(String.fromCharCode(i));

    //Символи
    var symbols = new Array();
    for (var i = 32; i < 65; i++)
        symbols.push(String.fromCharCode(i));
    
    //Визначення алфавіту для шифрування
    var alfav;
    $('.rb').click(function () {
        alfav = $('input:checked').val();
    })
    
    //Обробка кліку кнопки 'Зашифрувати'
    $('#zashiphryvaty').click(function () {

        //Якщо не обрарно алфавіт
        if (!alfav)
            $('#obalph').css('visibility', 'visible');

        else {
            $('#obalph').css('visibility', 'hidden');
            var $stroka = $('#string_for_shiper').val();
            $stroka = $stroka.split('');
            var $pzs = $('#kilk_zsyvy').val();
            $pzs = parseInt($pzs);
            var $stroka_rez = '';
            var $utfstroka;
            var $indexZsyvy = '';

            //Пробігаємся по кожному символі в рядку
            for (var i = 0; i < $stroka.length; i++) {
                $utfstroka = $stroka[i].charCodeAt();

                //Якщо знак а не літера, шифруємо знаки
                if ($utfstroka > 31 && $utfstroka < 65) {
                    $indexZsyvy = symbols.indexOf($stroka[i]) + $pzs;
                    if ($indexZsyvy < 0) 
                        $indexZsyvy = symbols.length + $indexZsyvy;

                    $stroka_rez += symbols[$indexZsyvy];
                    continue;
                }

                //Якщо літера нижнього регістру
                if ($stroka[i].toLowerCase() == $stroka[i]) {

                    //Якщо обраний англійський алфавіт
                    if (alfav == 'En') {
                        $indexZsyvy = alfavEngL.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0) 
                            $indexZsyvy = alfavEngL.length + $indexZsyvy;

                        if ($indexZsyvy > alfavEngL.length - 1) 
                            $indexZsyvy = $indexZsyvy - alfavEngL.length;

                        $stroka_rez += alfavEngL[$indexZsyvy];
                    }

                    //Якщо обраний український алфавіт
                    if (alfav == 'Ukr') {
                        $indexZsyvy = alfavUkrL.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0)
                            $indexZsyvy = alfavUkrL.length + $indexZsyvy;

                        if ($indexZsyvy > alfavUkrL.length - 1) 
                            $indexZsyvy = $indexZsyvy - alfavUkrL.length;

                        $stroka_rez += alfavUkrL[$indexZsyvy];
                    }

                    //Якщо обраний російський алфавіт
                    if (alfav == 'Rus') {
                        $indexZsyvy = alfavRusL.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0) 
                            $indexZsyvy = alfavRusL.length + $indexZsyvy;

                        if ($indexZsyvy > alfavRusL.length - 1)
                            $indexZsyvy = $indexZsyvy - alfavRusL.length;

                        $stroka_rez += alfavRusL[$indexZsyvy];
                    }

                }

                //Якщо літера верхнього регістру
                if ($stroka[i].toUpperCase() == $stroka[i]) {

                    //Якщо обраний англійський алфавіт
                    if (alfav == 'En') {
                        $indexZsyvy = alfavEngU.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0) 
                            $indexZsyvy = alfavEngU.length + $indexZsyvy;

                        if ($indexZsyvy > alfavEngU.length - 1)
                            $indexZsyvy = $indexZsyvy - alfavEngU.length;

                        $stroka_rez += alfavEngU[$indexZsyvy];
                    }

                    //Якщо обраний український алфавіт
                    if (alfav == 'Ukr') {
                        $indexZsyvy = alfavUkrU.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0)
                            $indexZsyvy = alfavUkrU.length + $indexZsyvy;

                        if ($indexZsyvy > alfavUkrU.length - 1) 
                            $indexZsyvy = $indexZsyvy - alfavUkrU.length;

                        $stroka_rez += alfavUkrU[$indexZsyvy];
                    }

                    //Якщо обраний російський алфавіт
                    if (alfav == 'Rus') {
                        $indexZsyvy = alfavRusU.indexOf($stroka[i]) + $pzs;
                        if ($indexZsyvy < 0)
                            $indexZsyvy = alfavRusU.length + $indexZsyvy;

                        if ($indexZsyvy > alfavRusU.length - 1)
                            $indexZsyvy = $indexZsyvy - alfavRusU.length;

                        $stroka_rez += alfavRusU[$indexZsyvy];
                    }
                }
            }
            //Вивести строку в поле
            $('#rez').text($stroka_rez);
        }                
    })
})
