var routes = [ {
	path : "/SPAWebProject/WebContent/index.html",
	name: "Main",
	component : Main
}, {
	path : "/SPAWebProject/WebContent/member",
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