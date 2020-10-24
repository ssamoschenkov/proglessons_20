webix.ready(() => {
	const filmset = [{
		id: 1,
		title: "The shawshank Redemption",
		year: 1994
	},
	{
		id: 2,
		title: "The Godfather",
		year: 1972
	}
	];

	webix.ui({
		// container:"box",
		view:"tree",
		data: [
				{id:"root", value:"Cars", open:true, data:[
					{ id:"1", open:true, value:"Toyota", data:[
						{ id:"1.1", value:"Avalon" },
						{ id:"1.2", value:"Corolla" },
						{ id:"1.3", value:"Camry" }
					]},
					{ id:"2", open:true, value:"Skoda", data:[
						{ id:"2.1", value:"Octavia" },
						{ id:"2.2", value:"Superb" }
					]}
				]}
		]
	});
});