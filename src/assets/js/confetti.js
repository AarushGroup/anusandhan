function gimmick(el) {
    var exists = document.getElementById('gimmick')
    if (exists) {
        exists.parentNode.removeChild(exists);
        return false;
    }

    var element = document.querySelector(el);
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        focused = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'gimmick'

   

    var coin = new Image();
    coin.src = './ap-info/assets/images/output-onlinegiftools.gif';
  
    // 440 wide, 40 high, 10 states
    coin.onload = function () {
        element.appendChild(canvas)
        focused = true;
        drawloop();
    }
    var coins = []

    function drawloop() {
        if (focused) {
            requestAnimationFrame(drawloop);
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (Math.random() < .3) {
            coins.push({
                x: Math.random() * canvas.width | 0,
                y: -50,
                dy: 3,
                // size
                s: .25,
                state: Math.random() * 10 | 0
            })
        }
        var i = coins.length
        while (i--) {
            var x = coins[i].x
            var y = coins[i].y
            var s = coins[i].s
            var state = coins[i].state
            coins[i].state = (state > 9) ? 0 : state + 0.005
            // speed
            coins[i].dy += 0.02
            coins[i].y += coins[i].dy

            ctx.drawImage(coin, 1 * Math.floor(state), 0, 200, 150, x, y, 200 * s, 150 * s)

            if (y > canvas.height) {
                coins.splice(i, 1);
            }
        }
    }

}