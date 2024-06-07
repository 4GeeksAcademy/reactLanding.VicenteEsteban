import React from "react";

//include images into your bundle
import machupichu from "../../img/Machu-Pichu.jpg";
import kilimanjaro from "../../img/kilimanjaro.jpg";
import everest from "../../img/Everest.jpg";
import aconcagua from "../../img/Aconcagua.jpg";


//create your first component
import NavBar from "./NavBar";
import JumboTron from "./JumboTron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {

	return (
		<div className="fondo text-center">
			
			<NavBar/>
			<div >
				<JumboTron/>
				<div className="row justify-content-center mt-4">
					<div className="col-10">
						<div className="row justify-content-center">
							<div className="col-md-3">
								<Card
								title="Machu Pichu"
								description="Es el sitio arqueológico inca más sobresaliente debido a su creativo diseño urbano, la belleza de su arquitectura y el fino trabajo en piedra de sus construcciones."
								button="Saber mas"
								img={machupichu}
								/>
							</div>
							<div className="col-md-3">
								<Card
								title="Kilimanjaro"
								description="Es un volcán de triple cumbre situado en el noreste de la República de Tanzania, muy cerca de la frontera con Kenia, a unos 300 km al sur del ecuador."
								button="Saber mas"
								img={kilimanjaro}
								/>
							</div>
							<div className="col-md-3">
								<Card
								title="Everest"
								description="Es una de las montañas más importantes del mundo por su ubicación, ya que está situada en una región que alberga muchos de los mayores ríos del mundo."
								button="Saber mas"
								img={everest}
								/>
							</div>
							<div className="col-md-3">
								<Card
								title="Aconcagua"
								description="Es una montaña de la Cordillera de los Andes, ubicada en la provincia de Mendoza, a 185 km. de su capital y a 15 kilómetros de la frontera con Chile."
								button="Saber mas"
								img={aconcagua}
								/>
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			
			<Footer/>
		</div>
	);
};

export default Home;
