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

	webix.ui(
		{
			"type": "wide",
			"rows": [
				{
					"view": "toolbar", "css": "webix_dark", "padding": { "right": 10, "left": 10 },
					"elements": [
						{ "view": "menu", "url": "demo->5f7d30e9cfe82b001a1cf1ec", "height": 0 },
						{
							"height": 0,
							"cols": [
								{ "view": "label", "label": "New app ", "align": "right", "height": 0 },
								{ "icon": "wxi-user", "view": "icon", "height": 30, "width": 30 }
							]
						}
					]
				},
				{
					"cols": [
						{
							"url": "demo->5f7d30e9cfe82b001a1cf1ee",
							"scrollX": false,
							"columns": [
								{
									"id": "value",
									"header": "Проекты",
									"fillspace": true,
									"template": "{common.treetable()} #value#"
								}
							],
							"view": "treetable",
							"width": 150
						},
						{
							"width": 0,
							"rows": [
								{
									"options": [
										"Гантт",
										"Задачи",
										"Канбан",
										"Контакты",
										"Бюджеты",
										"Таймшиты",
										"Отчеты",
										"Описание"
									],
									"view": "tabbar",
									"height": 50
								},
								{
									"cols": [
										{
											"width": 0,
											"rows": [
												{
													"cols": [
														{ "label": "Search", "view": "search", "width": 0 },
														{ "label": "Ок", "view": "button", "height": 30, "width": 61 }
													]
												},
												{
													"url": "demo->5f7d30e9cfe82b001a1cf1ee",
													"scrollX": false,
													"columns": [
														{
															"id": "value",
															"header": "Film title",
															"fillspace": true,
															"template": "{common.treetable()} #value#"
														},
														{ "id": "dur", "header": "Duration", "fillspace": true },
														{ "id": "id", "header": "ID", "width": 55 }
													],
													"view": "treetable",
													"fixedRowHeight": true
												}
											]
										},
										{
											"autoheight": false,
											"view": "form",
											"rows": [
												{ "view": "text", "label": "User name", "name": "name" },
												{ "view": "text", "label": "Email", "name": "email" },
												{ "view": "button", "css": "webix_primary", "label": "Save" }
											],
											"width": 382
										}
									]
								}
							]
						}
					]
				}
			]
		}
	)
});