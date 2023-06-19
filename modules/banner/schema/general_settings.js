db.general_settings.insert(
	[
		{ _id: auto, title: "add_new_banner", content: "components/admin/title", left: "<title />" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_banner", content: "components/admin/publish", left: "" right: "<publish />", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_banner", content: "components/admin/thumb_image", left: "" right: "<thumb_image />", show: "yes", position: "3", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_banner", content: "modules/banner/components/admin/banner1", left: "<banner1 />" right: "", show: "yes", position: "2", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_banner", content: "modules/banner/components/admin/banner2", left: "" right: "<banner2 />", show: "yes", position: "2", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "menu-dashboard", content:
			[
				{
					menu: "Banner", link: "/banner-list",
					menu-sub: "Banner list", link: "/banner-list",
					menu-sub: "Add new", link: "/banner-add"
				}
			]
		, left: "" right: "", show: "", position: "", date_created: "", date_updated: "", status: "1" }
	],
	{ ordered: false }
)