var data = [
	{
		id: "1", type: "folder", value: "Music", data: [
			{
				id: "m_0", type: "folder", value: "Jimi Hendrix", data: [
					{ id: "m_0_1", type: "file", value: "1967 - Are You Experienced?" },
					{ id: "m_0_2", type: "file", value: "1967 - Axis: Bold As Love" },
					{ id: "m_0_3", type: "file", value: "1968 - Electric Lady Land" }
				]
			}
		]
	},
	{
		id: "2", type: "folder", value: "Images", data: [
			{
				id: "p_0", type: "folder", value: "01 - Christmas", data: [
					{ id: "p_0_0", type: "file", value: "IMG_10034" },
					{ id: "p_0_1", type: "file", value: "IMG_10035" },
					{ id: "p_0_2", type: "file", value: "IMG_10036" },
					{ id: "p_0_3", type: "file", value: "IMG_10037" },
					{ id: "p_0_4", type: "file", value: "IMG_10038" }
				]
			}
		]
	}
];

webix.ready(function () {
	webix.ui({
		view: "form", elements: [
			{ view: "text", label: "Name", name: "name", placeholder: "Type here.." },
			{ view: "combo", label: "Movie", name: "movie", options: list_data },
			{ view: "datepicker", label: "Date", name: "date", value: new Date(), stringResult: true },
			{ view: "counter", label: "Seats", name: "seats", value: 1, min: 1 },
			{
				margin: 20, cols: [
					{},
					{ view: "button", value: "Cancel", width: 200 },
					{
						view: "button", type: "form", value: "Book Now", width: 200, align: "right", click: function () {
							var values = this.getFormView().getValues();
							webix.message(JSON.stringify(values));
						}
					}
				]
			}
		]
	});
});

