            let theWheel = new Winwheel({
                'numSegments': 8, // Specify number of segments.
                'drawMode': 'image', // drawMode must be set to image.
                //'pins': true,
                //'responsive': true,
                'animation': // Specify the animation to use.
                {
                    'type': 'spinToStop',
                    'duration': 4, // Duration in seconds.
                    'spins': 8, // Number of complete spins.
                    'easing': 'Power4.easeOut',
                    //'repeat': 1,
                    'stopAngle': 90,
                    'callbackFinished': luckyDraw
                }
            });

            function startSpin() {
                let theWheel2 = new Winwheel({
                    'numSegments': 8, // Specify number of segments.
                    'drawMode': 'image', // drawMode must be set to image.
                    //'pins': true,
                    'animation': // Specify the animation to use.
                    {
                        'type': 'spinToStop',
                        'duration': 4, // Duration in seconds.
                        'spins': 8, // Number of complete spins.
                        'easing': 'Power4.easeOut',
                        //'repeat': 1,
                        'stopAngle': 45,
                        'callbackFinished': tryAgain
                    }
                });

                let loadedImg = new Image();

                // Create callback to execute once the image has finished loading.
                loadedImg.onload = function() {
                    theWheel2.wheelImage = loadedImg; // Make wheelImage equal the loaded image object.
                    theWheel2.draw(); // Also call draw function to render the wheel.
                }

                // Set the image source, once complete this will trigger the onLoad callback (above).
                loadedImg.src = "./img/wheel.png";
                // Stop any current animation.
                theWheel2.stopAnimation(false);

                // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
                // Setting to modulus (%) 360 keeps the current position.
                theWheel2.rotationAngle = theWheel2.rotationAngle % 360;

                // Start animation.
                theWheel2.startAnimation();
            }

            // Create new image object in memory.
            let loadedImg = new Image();

            // Create callback to execute once the image has finished loading.
            loadedImg.onload = function() {
                theWheel.wheelImage = loadedImg; // Make wheelImage equal the loaded image object.
                theWheel.draw(); // Also call draw function to render the wheel.
            }

            // Set the image source, once complete this will trigger the onLoad callback (above).
            loadedImg.src = "./img/wheel.png";

            // Called when the animation has finished.
            function luckyDraw(indicatedSegment) {
                // Do basic alert of the segment text.
                $(".custom-model-main").addClass('model-open model-open-2');
            }

            function tryAgain(indicatedSegment) {
                // Do basic alert of the segment text.
                fire(0.25, {
                    spread: 26,
                    startVelocity: 55,
                });
                fire(0.2, {
                    spread: 60,
                });
                fire(0.35, {
                    spread: 100,
                    decay: 0.91,
                    scalar: 0.8
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 25,
                    decay: 0.92,
                    scalar: 1.2
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 45,
                });
                setTimeout(() => {
                    $(".custom-model-main").addClass('model-open model-open-3');
                }, 500);
            }