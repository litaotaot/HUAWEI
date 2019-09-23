(function(){
    let scale = 1/devicePixelRatio;
    document.write(`<meta name="viewport" content="width=device-width, initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no">`)
    let unit = innerWidth/750;
    document.write(`
    <style>
        *{
            margin: 0;
            padding: 0;
            font-size: ${100*unit}px;
        }
    </style>`)
})()
