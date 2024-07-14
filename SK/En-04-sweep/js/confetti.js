/* window.Promise = MyPromise; */
var count = 200;
var defaults = {
    origin: {
        y: 0.7
    }
};

function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}