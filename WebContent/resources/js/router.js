var routes = [ {
	path : "/SPAWebProject/index.html",
	name: "Main",
	component : Main
}, {
	path : "/SPAWebProject/member",
	name: "Member",
	component : Member
}, {
	path : "/",
	name: "Member",
	component : Member
}
]
		
var router = new VueRouter({
	mode: "history",
	routes
})