
var popupMenu = document.querySelector('.popupMenu') 
   burger = document.querySelector('.burgerWrap'),
   revealSettings = {
        bgColors: ['#111111','#222222','#333333','#444444','#555555','#666666','#777777'],
        duration: 400,
        delay: 100,
        direction: 'lr',
    },
   revealerEffect = new RevealFx(popupMenu, {
        layers: 6,
        isContentHidden:true,
        revealSettings: revealSettings
    });
 burger.onclick = function() {
 if (burger.classList.contains('js-burgerWrap_close') === true) {
 revealSettings = resetTheSetting();
 revealSettings.onComplete = function(contentEl, revealerEl){
        
contentEl.classList.add('js-popupMenu_open');
contentEl.style.opacity = 1;
           burger.classList.toggle('js-burgerWrap_close');
}
revealerEffect.reveal(revealSettings);
              
} else {
popupMenu.classList.remove('js-popupMenu_open');
revealSettings = resetTheSetting();
revealSettings.onComplete = function(contentEl, revealerEl){
        
		
contentEl.classList.remove('js-popupMenu_open');
 contentEl.style.opacity = 0;
           burger.classList.toggle('js-burgerWrap_close');
}

revealerEffect.reveal(revealSettings);

}
}	  
resetTheSetting = function()
    {
return {
        bgColors: ['#111','#222','#333','#444','#555','#666','#777'],
        duration: 200,
        delay: 100,
        direction: 'lr',
        
        
    };
}



const tab = document.querySelectorAll('.popupMenu__link');
for (let i = 0; i < tab.length; i++) {   
 tab[i].addEventListener('click', function(){
     burger.click();
})
}
  popupMenu.addEventListener('submit', function(ev) {ev.preventDefault();});

 var textWrapper = document.querySelector('.myText .letters');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ 
	loop: true,
	direction: 'alternate',
 })
.add({
	targets: '.myText .letter',
	translate: ["25rem", 0],
	translateY: ["10rem", 0],
	translateZ: 0,
	opacity: [0, 1],
	duration: 2000,
	easing: "easeOutExpo",
	delay: (el, i) => 300 * i,
})

.add({
	targets: '.myText',
	opacity: 0,
	duration: 2000,
	easing: "easeOutExpo",
	delay: 1000
})


setTimeout(function(){
   const t = document.querySelector('.preloader');
	const pageX = window.innerHeight;
	t.style.translate = 'translateX(' + t.pageX + 'px)';
	t.style.display = 'none';
},16000)

anime.timeline({
    easing: 'easeInOutSine',
    autoplay: true,
    duration: 500,
    loop: true,
    // delay: 500,
    // endDelay: 500,
 //   update: function(instane) {
   //   console.log(instane.reversePlayback);
 //   }
  })
  .add({
    targets: '.pane-01',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  })
  .add({
    targets: '.pane-02',
    translateY: [0, '100vh'],
    scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-03',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-04',
	translateY: [0, '100vh'],
    scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-05',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-06',
    translateY: [0, '100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-07',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-08',
    translateY: [0, '100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-09',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-10',
    translateY: [0, '100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-11',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-12',
    translateY: [0, '100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-13',
    translateY: [0, '-100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')
  .add({
    targets: '.pane-14',
    translateY: [0, '100vh'],
	scale: [1, 2],
    background: '#3333CE',
  }, '-=500')


sal({
  threshold: 0.1,
  once: false,
});




const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span class='legion'>$&</span>");



const element = document.querySelectorAll('.legion');
for(let i = 0; i < element.length; i++){
element[i].style.transform = "rotate(-"+i*14+"deg)";
}

  anime.timeline({
		loop: true,
		direction: 'alternate'
  })
	.add({
		targets: '.text .legion',
	//	translate: ['10rem', 0],
		translateY: [0, '10rem'],
		translateZ: 15,
		opacity: [1, 0],
		duration: 5000,
		easing: "easeOutElastic",
		delay: (el, i) => 1000 * i,
		
		
  })
  


function abc(el, er, loc){
	const c = document.querySelector(el);
	const d = document.createElement(er);
	d.className = 'ez__swoosh';
    c.appendChild(d);

anime.timeline({
	autoplay: true,
	loop: false,
	duration: 5000,
	
})
.add({
	targets: '.ez__swoosh',
	rotate: '150turn',
	scale: [1, 2],
	opacity: [0,1],
	easing: 'easeOutCubic',
	complete: function(){
		window.location.assign(loc)
		
	}
	
})
}

const mClick = document.querySelectorAll('.section__intro');

for (let i = 0; i < mClick.length; i++) {   
 mClick[i].addEventListener('click', function(){
 	const locate = mClick[i].getAttribute('data-href');
	 locate
     const a = 'body';
	 const b = 'div';
	requestAnimationFrame(abc(a, b, locate));
})
}

const foot = document.querySelectorAll('.section__foot');

function entrance(el, directo){
  const me = el[i];
  const mx = el[i].querySelector('.thumbnail');

  anime.timeline({
	loop: false,
	duration: 500,
	direction: directo,
	delay: (el, i) => 5 * i
  })
	.add({
		targets: me,
		translateY: [0, '20%'],
		translateZ: 70,
		easing: 'easeOutElastic'
  })
	.add({
		targets: mx,
		translateY: ['-200%', '-50%'],
		translateX: [0, '-250%'],
		scale: [5, 3],
		easing: 'easeOutElastic',
  
	})
}


function hoverAnim(el, el2, tx, ty, tw, sc) {

  anime.timeline({
	loop: false,
	duration: 500,
	delay: (el, i) => 5 * i
  })
	.add({
		targets: el,
		translateY: ty,
		translateZ: 70,
		easing: 'easeOutElastic'
  })
	.add({
		targets: el2,
		translateY: tw,
		translateX: tx,
		scale: sc,
		easing: 'easeOutElastic',
  
	})
}

function entrance(el, el2){
   hoverAnim(el, el2, -100, 90, -50, 3)
}

function exit(el, el2){
   hoverAnim(el, el2, 0, 0, 0, 1)
}

for (let i = 0; i < foot.length; i++) {   

foot[i].addEventListener('mouseenter', (e) => {
  	entrance(e.target, e.target.querySelector('.thumbnail'));
}, false);
foot[i].addEventListener('mouseleave', (e) => {
	  exit(e.target, e.target.querySelector('.thumbnail'));
}, false);

}



