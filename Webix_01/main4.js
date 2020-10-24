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
		view: "treetable",
		id: "grida",
		columns: [
			{ id: "value", header: "Title", fillspace: true, template: "{common.treetable()} #value#" },
			{ id: "state", header: "State", width: 100 },
			{ id: "hours", header: "Hours", width: 100 }
		],
		drag: true,
		on: {
			onBeforeDragIn: function (context, e) {
				var targetItem = this.getItem(context.target);
				return targetItem.$count || targetItem.type == "folder";
			},
			onBeforeDrop: function (context) {
				context.parent = context.target;	//drop as child
				context.index = -1; 				//as last child
			}
		},
		type: {
			folder: function (obj, common) {
				console.log("obj.$count", obj.$count)
				console.log(" obj.opent", obj.open)
				//if open folder
				if (obj.$count && obj.open) {
					return "<div class='webix_tree_folder_open'></div>";
				}
				// if closed folder
				else if (obj.$count || obj.type == "folder") {
					return "<div class='webix_tree_folder'></div>";
				}
				return "<div class='webix_tree_file'></div>";
			}
		},
		scroll: false,
		data: data
	})
});