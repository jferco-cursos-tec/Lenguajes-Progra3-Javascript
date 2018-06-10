class Router {
	//Resolver
	//var hash= window.location.hash;


	constructor(){
		this.hash="#/home";
		this.currentView=null;
		this.routes={
			"#/home":{"view":"homeView","controller":function(){
				
					console.log("HOLA");
				

			}},
			"#/trip":{"view":"tripView","controller":function(){

			}},
			"#/viewer":{"view":"viewerView","controller":function(){

			}},
			"#/newMap":{"view":"newMapView","controller":function(){

			}}
		};

	}

	init(){
		window.location.hash=this.hash;
		window.onhashchange = () => {
			this.onHashChange(window.location.hash);
        }
        var  views = document.getElementsByClassName('view');
        //apaga todos los divs y asigna los elements html en las rutas
        for (var i = views.length - 1; i >= 0; i--) {
        	this.routes["#/"+views[i].id].element=views[i];
        	views[i].style.display="none";
        }
        //Toma en cuenta cuando entra por primera vez con "home"
		if (this.hash==="#/home") {
			this.onHashChange(this.hash);
		}
	}

	onHashChange(hash){
		if (this.routes[hash]) {
			if (this.currentView) {
				this.currentView.element.style.display="none";
			}
			this.currentView=this.routes[hash];
			this.currentView.element.style.display="block";

		}
		else{
			window.location.hash="#/home";
		}
	}

}
(function () {
	var router = new Router();
	router.init();

})();



	
