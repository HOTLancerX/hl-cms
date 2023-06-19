db.media.insert(
   [
     { _id: auto, parent: "", type: "url", slug: "https://domain/images.jpg", title: "", content: "", keywords: "", icon: "", cover_img: "", date_created: "", date_updated: "", status: "1" },
     { _id: auto, parent: "", type: "s3", slug: "https://amazon/images.jpg", title: "", content: "", keywords: "", icon: "", cover_img: "", date_created: "", date_updated: "", status: "1" },
     { _id: auto, parent: "", type: "base64", slug: "code", title: "", content: "", keywords: "", icon: "", cover_img: "", date_created: "", date_updated: "", status: "1" },
     { _id: auto, parent: "", type: "svg", slug: "code", title: "", content: "", keywords: "", icon: "", cover_img: "", date_created: "", date_updated: "", status: "1" }
   ],
   { ordered: false }
)