/**
 * uncover.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    class Uncover {
        constructor(el, options) {
            this.DOM = {el: el};
            this.options = {
                // initially covered.
                covered: true,
                // total number of slices.
                slicesTotal: 3,
                // slices color.
                slicesColor: '#fff',
                // 'vertical' || 'horizontal'.
                orientation: 'vertical',
                // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
                // need to define for both show and hide methods.
                // e.g. animate the slices in from left and hide them to the right side (for a horizontal layout)
                slicesOrigin: {
                    show: 'bottom',
                    hide: 'bottom'
                }
            };
            Object.assign(this.options, options);
            this.isCovered = this.options.covered;
            this.layout();
            if ( !this.isCovered ) {
                this.show();
            }
        }
        layout() {
            this.DOM.el.classList.add('uncover');
            let inner = '';
            inner += `<div class="uncover__img" style='background-image: ${this.DOM.el.style.backgroundImage}'></div>
                      <div class="uncover__slices uncover__slices--${this.options.orientation}">`;
            for (let i = 0; i <= this.options.slicesTotal - 1; ++i) {
                inner += `<div class="uncover__slice" style="color:${this.options.slicesColor}"></div>`;
            }
            inner += `</div>`;
            this.DOM.el.innerHTML = inner;
            this.DOM.img = this.DOM.el.querySelector('.uncover__img');
            this.DOM.slices = Array.from(this.DOM.el.querySelectorAll('.uncover__slice'));
            this.slicesTotal = this.DOM.slices.length;
        }
        show(animation = false, animationSettings = {}) {
            if ( !this.isCovered ) return;
            return this.toggle(animation,animationSettings);
        }
        hide(animation = false, animationSettings = {}) {
            if ( this.isCovered ) return;
            return this.toggle(animation,animationSettings);
        }
        toggle(animation,animationSettings) {
            this.isCovered = !this.isCovered;
            if ( !animation ) {
                this.DOM.slices.forEach((slice) => {
                    slice.style.transform = !this.isCovered ? 
                                                this.options.orientation === 'vertical' ? 'translateY(100%)' : 'translateX(100%)' :
                                                'none';
                });
            }
            else {
                let settings = {
                    slices: {
                        targets: this.DOM.slices,
                        duration: 800,
                        delay: (_,i) => i*80,
                        easing: 'easeInOutQuart',
                        translateX: this.options.orientation === 'vertical' ? '0%' : 
                                                                            !this.isCovered ? 
                                                                                this.options.slicesOrigin.show === 'right' ? '100%' : '-100%' : 
                                                                                this.options.slicesOrigin.hide === 'right' ? ['100%','0%'] : ['-100%','0%'],
                                                                              
                        translateY: this.options.orientation === 'vertical' ? 
                                                                            !this.isCovered ? 
                                                                                this.options.slicesOrigin.show === 'bottom' ? '100%' : '-100%' :
                                                                                this.options.slicesOrigin.hide === 'bottom' ? ['100%','0%'] : ['-100%','0%']
                                                                            : '0%'
                    },
                    image: {
                        targets: this.DOM.img
                    }
                };
                Object.assign(settings.slices, animationSettings.slices);
                Object.assign(settings.image, animationSettings.image);
                
                anime.remove(this.DOM.slices);
                anime.remove(this.DOM.img);
                
                let promises = [anime(settings.slices).finished];
                if ( settings.image.duration ) {
                    promises.push(anime(settings.image).finished);
                }
                return Promise.all(promises);
            }
        }
    }
    window.Uncover = Uncover;
}



/**
 * demo3.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    // the settings for each one of the slides uncover instances.
    const uncoverOpts = [
        {
            // total number of slices.
            slicesTotal: 15,
            // slices color.
            slicesColor: '#1d1d1d',
            // 'vertical' || 'horizontal'.
            orientation: 'vertical',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 11, 
            slicesColor: '#000', 
            orientation: 'horizontal', 
            slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 11,
            slicesColor: '#000',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#000',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#000',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#000',
            orientation: 'horizontal',
            slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 10,
            slicesColor: '#000',
            orientation: 'vertical',
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#000',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#000',
            orientation: 'vertical',
            slicesOrigin: {show: 'top', hide: 'top'}
        }
    ];

    const uncoverAnimation = [
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => Math.abs(t/2-i)*40, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {delay: (_,i,t) => anime.random(0,t)*50}
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => anime.random(0,t)*50}
            }
        },
        {
            show: {
                slices: {duration: 1200, delay: (_,i) => i*150, easing: 'easeOutExpo'}
            },
            hide: {
                slices: {duration: 500, delay: (_,i) => i*150, easing: 'easeInOutExpo'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*150, easing: 'easeInOutQuad'}
            },
            hide: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*30, easing: 'easeInOutQuad'}
            }
        },
        {
            show: {
                slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'},
                image: {
                    duration: 900,
                    easing: 'easeOutCubic',
                    scale: [1.8,1]
                }
            },
            hide: {
                slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'}
            }
        },
        {
            show: {
                slices: {duration: 600, easing: 'easeInOutCirc', delay: (_,i) => i*50},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, easing: 'easeInOutCirc', delay: (_,i) => i*30}
            }
        },
        {
            show: {
                slices: {duration: 600, easing: 'easeInOutCirc', delay: (_,i) => i*100},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, easing: 'easeInOutCirc', delay: (_,i) => i*40}
            }
        }
    ];

    const items = Array.from(document.querySelectorAll('.grid > .grid__item'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if ( entry.intersectionRatio > 0.5 ) {
                uncoverArr[items.indexOf(entry.target)].show(true, uncoverAnimation[items.indexOf(entry.target)].show);
            }
            else {
                uncoverArr[items.indexOf(entry.target)].hide(true, uncoverAnimation[items.indexOf(entry.target)].hide);
            }
        });
    }, { threshold: 0.5 });
    
    let uncoverArr = [];

    imagesLoaded(document.querySelectorAll('.slide__img'), {background: true}, () => {
        // document.body.classList.remove('loading');

        items.forEach((item, pos) => {
            uncoverArr.push(new Uncover(item.querySelector('.scroll-img'), uncoverOpts[pos]));
            observer.observe(item);
        });
    });
}

/**
 * demo4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	const DOM = {};
	DOM.intro = document.querySelector('.content--intro');
	DOM.shape = DOM.intro.querySelector('svg.shape');
	DOM.path = DOM.shape.querySelector('path');
	DOM.enter = document.querySelector('.enter');
	charming(DOM.enter);
	DOM.enterLetters = Array.from(DOM.enter.querySelectorAll('span'));

	const init = () => {
		imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate);
		DOM.enter.addEventListener('touchenter', navigate);
		DOM.enter.addEventListener('mouseenter', enterHoverInFn);
		DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
	};

	let loaded;
	const navigate = () => {
		if ( loaded ) return;
		loaded = true;

		anime({
			targets: DOM.intro,
			translateY: {
				value: '-200vh', 
				delay: 100,
				duration: 2000,
				easing: 'easeInOutQuad'
			}
		});

		anime({
			targets: DOM.path,
			duration: 1200, 
			easing: 'linear',
			d: DOM.path.getAttribute('pathdata:id')
		});
	};

	let isActive;
	let enterTimeout;

	const enterHoverInFn = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i) => i*7,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#ffffff',
				duration: 1,
				delay: (t,i,l) => i*7+150
			}
		});
	}, 50);

	const enterHoverOutFn = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i,l) => (l-i-1)*7,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#4b2cf2',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*7+150
			}
		});
	};

	init();
};
