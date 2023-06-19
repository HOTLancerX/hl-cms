db.users.insert(
   [
     { _id: auto, type: "admin", slug: "admin", title: "Admin", password: "admin", email: "admin@domain.com", mobile: "", otp: "", gender: "", birthday: "", thumb_image: "", email_verified: "", country: "", language: "", address:
		[
				{
						id: "01",
						type: "default",
						state: "",
						city: "",
						area: "",
						postcode: "",
						address: "",
						address2: ""
				},{
						id: "02",
						type: "default",
						state: "",
						city: "",
						area: "",
						postcode: "",
						address: "",
						address2: ""
				}
		], social:
		[
			{
				id: "01",
				facebook: "",
				twitter: "",
				instagram: "",
				linkedIn: "",
				pinterest: "",
				Soundcloud: "",
				Wikipedia: "",
				Tumblr: "",
				whatsapp"": "",
				YouTube: ""
			}
		], content: "", date_created: "", date_updated: "", status: "1" }
   ],
   { ordered: false }
)