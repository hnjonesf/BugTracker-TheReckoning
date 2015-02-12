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
	    title: 'Welcome to BugTracker',
	    html: 'Ready to take a quick tour of BugTracker?',
	    buttons: { Next: 1 },
	    focus: 0,
	    position: { container: $('#Start'), x: 370, y: 120, width: 275, arrow: 'lt' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Users',
	    html: 'BugTracker (BT) software begins with the registration of users and roles:  Administrator, Project Manager, Developer, or Submitter.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 0,
	    position: { container: $('#Users'), x: 180, y: 130, width: 400, arrow: 'br' },
	    submit: tourSubmitFunc
	},
	{
	    title: "Projects",
        html: 'Administrators or Project Managers may add projects.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 0,
	    position: { container: $('#Projects'), x: 0, y: 0, width: 200, arrow: 'bl' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Tickets',
	    html: 'Submitters create Tickets under Projects.  These Tickets may contain Attachments and/or Comments.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 0,
	    position: { container: $('#Tickets'), x: -10, y: -5, width: 200, arrow: 'bl' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'About BugTracker',
        html: 'BugTracker, is a collaborative effort for Coder Foundry.',
	    buttons: { Prev: -1, Next: 1 },
	    focus: 0,
	    position: { container: $('#About'), x: -10, y: -5, width: 200, arrow: 'bl' },
	    submit: tourSubmitFunc
	},
	{
	    title: 'Contact BugTracker',
	    html: 'Contact us to purchase BT, or for additional information.',
	    buttons: { Done: 2 },
	    focus: 0,
	    position: { container: $('#Contact'), x: 370, y: 120, width: 275, arrow: 'lt' },
	    submit: tourSubmitFunc
	}
];
$.prompt(tourStates);