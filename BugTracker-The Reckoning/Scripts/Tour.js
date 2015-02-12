var tourSubmitFunc = function (e, v, m, f) {
    if (v === -1) {
        $.prompt.prevState();
        return false;
    }
    else if (v === 1) {
        $.prompt.nextState();
        return false;
    }
},
tourStates = [
	{
	    title: 'Welcome',
	    html: 'Ready to take a quick tour of jQuery Impromptu?',
	    buttons: { Next: 1 },
	    focus: 0,
	    position: { container: 'h1', x: 200, y: 60, width: 200, arrow: 'tc' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Download',
	    html: 'When you get ready to use Impromptu, you can get it here.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 1,
	    position: { container: '#Download', x: 170, y: 0, width: 300, arrow: 'lt' },
	    submit: tourSubmitFunc
	},
	{
	    title: "You've Got Options",
	    html: 'A description of the options are can be found here.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 1,
	    position: { container: '#Options', x: -10, y: -145, width: 200, arrow: 'bl' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Examples..',
	    html: 'You will find plenty of examples to get you going..',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 1,
	    position: { container: '#Examples', x: 80, y: 10, width: 500, arrow: 'lt' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'The Tour Code',
	    html: 'Including this tour... See, creating a tour is easy!',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 1,
	    position: { container: '#TourCode', x: 180, y: -130, width: 400, arrow: 'br' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Learn More',
	    html: 'If you would like to learn more please consider purchasing a copy of Impromptu From I to U. If you found Impromptu helpful you can also donate to help fund development.  If not, thanks for stopping by!',
	    buttons: { Done: 2 },
	    focus: 0,
	    position: { container: '.ebook', x: 370, y: 120, width: 275, arrow: 'lt' },
	    submit: tourSubmitFunc
	}
];
$.prompt(tourStates);