var blocks = []
var paused = false
var loadLevel = function(n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p)
        blocks.push(b)
    }
    return blocks
}

var __mian = function () {
    var enableDebugMode = function(enable) {
        if (!enable) {
            return
        }
        window.addEventListener('keydown', function(event) {
            let k = event.key
            if (k === 'p') {
                paused = !paused 
            } else if ('123456'.includes(k)) {
                console.log(k)
                blocks = loadLevel(Number(k))
            }
        })
        // 控制speed
        document.querySelector('#id-input-speed').addEventListener('input', function(event) {
            var fps = event.target.value
            window.fps = fps
        })
    }


    enableDebugMode(true)
    // 封装 game
    var game = Guagame(20)

    var scene = Scene(game)

    game.update = function () {
        if (paused) {
            return
        }
        // s.update
        scene.update()
    }
    game.draw = function () {
       // s.draw
       scene.draw()
                   
    }

}

__mian()