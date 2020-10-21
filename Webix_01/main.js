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
		cols: [
			{
				view: "list",
				id: "mylist",
				template: "#title# - #year#",
				select: true,
				height: 400,
				data: filmset
			}
		]
	})
});