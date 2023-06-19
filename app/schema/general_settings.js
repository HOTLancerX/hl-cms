db.general_settings.insert(
	[
		{ _id: auto, title: "site-logo", content: "1321", left: "" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "footer-logo", content: "46578", left: "" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "site-favicon", content: "123456", left: "" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/title", left: "<title />" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/content", left: "<content />" right: "", show: "yes", position: "3", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/title_sub", left: "<title_sub />" right: "", show: "yes", position: "2", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/publish", left: "" right: "<publish />", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/cat", left: "" right: "<cat />", show: "yes", position: "2", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/format", left: "" right: "<format />", show: "yes", position: "3", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "add_new_post", content: "components/admin/thumb_image", left: "" right: "<thumb_image />", show: "yes", position: "4", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "", content: "", left: "" right: "", show: "yes", position: "1", date_created: "", date_updated: "", status: "1" },
		{ _id: auto, title: "menu-dashboard", content:
			[
				{
					menu: "Dashboard", link: "",
					menu-sub: "Home", link: "",
					menu-sub: "Updates", link: "/update-core"
				}
			], left: "" right: "", show: "", position: "1", date_created: "", date_updated: "", status: "1" },
			{ _id: auto, title: "menu-dashboard", content:
			[
				{
					menu: "Post", link: "post-list",
					menu-sub: "Post list", link: "post-list",
					menu-sub: "Add new", link: "/post-add",
					menu-sub: "Category", link: "/post-category"
				}
			], left: "" right: "", show: "", position: "2", date_created: "", date_updated: "", status: "1" },
			{ _id: auto, title: "menu-dashboard", content:
			[
				{
					menu: "Page", link: "page-list",
					menu-sub: "Page list", link: "page-list",
					menu-sub: "Add new", link: "/page-add"
				}
			], left: "" right: "", show: "", position: "3", date_created: "", date_updated: "", status: "1" }
	],
	{ ordered: false }
)