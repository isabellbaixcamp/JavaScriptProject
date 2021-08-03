/* <!-- CODIFICACION BASE DE JAVASCRIPT-->*/
// VARIABLES DE AMBITO GLOBAL.

var items;
var value;
var suma = 0;
var cont = 0;
var opc;
var choice;
var car;
var help;

items = ['bowie', 'clash', 'beatles', 'zappa', 'smiths', 'doors', 'joy', 'velvet','pink','drake'];
value = [19.70, 15.66, 17.90, 15.40, 16.80, 18.50, 15.66, 25.99, 20.80, 23.70];

function item(a) {
	var aux = a.id;
	alert("hola");
	
	for(i = 0; i < items.length; i++) {
		if(aux == items[i]) {
			choice = items[i]; // REFIERO AL ELEMENTO DEL ARRAY DE DISCOS
			opc = value[i];		// REFIERO AL ELEMENTO PRECIO ANALOGO AL ARRAY ITEMS
		}
	}
		
	switch (choice) {
		case "bowie":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			

			var creaBio = document.getElementById('crea');

			var creaInfo = document.createTextNode("<h2>Aladdin Sane by David Bowie</h2>'Aladdin Sane', el disco que continuó a su exitoso 'Ziggy Stardust', es otra gran obra de un David Bowie en plena explosión glam que, aunque no incidió en el diseño conceptual de su pretérito trabajo, sí volvió a ambientar sus cortes en un mundo decadente, de ambigua caracterización, teatralidad en su esencia artística y, sobre todo, hedonismo y evasión sexual.El LP acomoda piezas rock de espíritu stoniano con ritmos efervescentes, sensualidad en su voz y estribillos pegadizos, ensanchando sus posturas glam con trazos blues, jazz, avant-gardé y doo wop.");

			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
	
		break;
		case "clash":
			
			var creaBio = document.getElementById('crea');
			
			var creaInfo = document.createTextNode("<h2>London Calling by The Clash</h2>Doble álbum clave en la historia de los británicos The Clash, componentes junto a otras importantes formaciones como Sex Pistols, Damned o Buzzcocks de la explosión punk inglesa de finales de los años 70 que con este trabajo trascienden su primera etiqueta punk para grabar uno de los discos fundamentales del período.En 'London Calling' se dan cita diferentes géneros musicales como el punk, el rock 50’s, el pop nuevaolero, el hard-rock, el reggae, el rockabilly, el blues, el ska e incluso algunas pinceladas de jazz, estilos que conforman un ecléctico mural sónico con cáusticos, agudos textos de incidencia social y política, factor esencial en la música de estos londinenses.La clásica pieza homónima, el homenaje a Federico García Lorca en 'Spanish Bombs' (un corte básicamente power-pop) o la reggae 'The Guns Of Brixton' (compuesta por el bajista Paul Simonon) epitomizan bien sus ideologías.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);
			
			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "beatles":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Abbey Road by The Beatles 'el extraordinario 'Abbey Road' fue la última grabación de los Beatles concluyendo de manera magistral la trayectoria de este fundamental grupo.El enfoque musical para el álbum de los componentes era muy distinto. John, continuando las pautas de los cortes grabados para 'Let It Be', deseaba un disco cuya base fuese la vuelta a las raíces más básicas del rock’n’roll y el blues, mientras que Paul quería grabar un disco más complejo que rememorara los logros del 'Sgt. Peppers'. Por su parte, George, cansado de permanecer a la sombra de los dos genios, y después de haber grabado los discos experimentales 'Wonderwall Music' y 'Electronic Sound', deseaba volar en solitario no sin antes dejar su brillante impronta compositiva en este LP. Esa constancia en las pautas básicas del rock llevaron a Lennon a componer temas como 'Come Together', canción dominada por una base de blues que John compuso para la campaña del político Timothy Leary, aspirante a Gobernador del estado de California. El tema fue acusado de plagio por Maurice Levy, propietario de Big Seven Music que inculpaba a Lennon del empleo de varias frases aparecidas en el tema de Chuck Berry 'You Can Catch Me', canción que finalmente, y en beneficio económico de Berry y Levy, fue incluido en el posterior LP 'Rock’n’Roll' del Beatle en solitario.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "zappa":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Todo un gurú de la experimentación, la vanguardia sónica, del humor ácido, la parodia, la sátira… Frank Zappa y sus Mothers of Invention presentaron este primer disco en plena efervescencia hippie y psicodélica un trabajo conceptual editado en su tiempo como doble LP y estructurado en una dualidad sonora muy distinguible.El primer disco está compuesto por canciones cortas, muy cercanas al pop procedente de las Islas Británicas, melódicamente muy conseguidas como 'Anyway The Wind Blows', 'Motherly Love' (amor a los Mothers of Invention, por supuesto), 'You Didn’t Try to Call Me', 'I’m Not Satisfied' (todo un canto al suicidio), 'How Can I Be Such a Fool' o 'Wowie Zowie' (esta pieza con un teclado a lo Del Shannon).");

			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "smiths":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("uno de los discos clave de los años 80 y uno de los más celebrados de los Smiths, quienes utilizaron una fotografía del actor francés Alain Delon para la portada, concretamente un fotograma de “La Muerte No Deserta” de Alain Cavalier.Co-producido en Rough Trade por sus líderes, Morrissey y Johnny Marr, fue el tercer álbum en estudio de este grupo británico con influencias jangle pop y post-punk.Uno de sus mejores cortes es “There Is A Light That Never Goes Out”.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "doors":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Con recursos de sobra para jugar un papel destacado en la recta final de los agitados años 60, la formación californiana The Doors grabó este esencial álbum debut de pop-rock psicodélico con textos poéticos en oscura expresión barítona y sonoridad con deudas del jazz y el blues.En su primer trabajo se encuentran algunos clásicos ineludibles para entender la importancia de esta banda en la historia del rock.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "joy":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Este primer álbum de Joy Division es uno de los trabajos clave de la historia del rock.Publicado en plena era post-punk, se trata de un disco fascinante, con atmósferas opresivas y malsanas que dejaron amplia huella en bandas como The Cure o Interpol por citar dos de los nombres más reconocibles que se han visto cautivados por su sonido.La profunda voz del malogrado Ian Curtis, junto a sus textos apocalípticos y depresivos, son parte fundamental de “Unknown Pleasures” y del estilo de Joy Division, pero no debe ser obviada la perfecta sinergia instrumental de la banda de Manchester con mención especial para el bajista Peter Hook y el guitarrista Brian Albrecht (posteriormente Sumner).Tras el suicidio un año después de Curtis el grupo se disolvió y se transformó en New Order, adoptando el techno-pop como expresión sonora pero alejados del nivel de esta contundente obra maestra.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "velvet":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Uno de los grandes grupos de todos los tiempos, poco valorado en su época, su roturación vanguardista, aridez, crudeza lírica y exploración sonora en territorios del pop y el rock influyó decisivamente en el desarrollo posterior de la música moderna, ya que sin su presencia artística, movimientos como el punk o grupos de diferentes sonidos alternativos jamás hubiesen surgido.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "pink":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Uno de los mejores trabajos de esta gran banda, para muchos el mejor de toda su carrera.Despues de haber tenido que abandonar a su antiguo líder, Syd Barrett, por sus problemas con las drogas, el resto del grupo (con David Gilmour sustituyendo a Barrett en la guitarra) prosiguió con su carrera con gran éxito, sacando discos tan interesantes como “Atom heart mother” o “Meddle”. Puede ser que no fueran tan buenos como el genial “The piper at the gates of dawn” (de su época psicodélica con Barrett al frente del grupo), pero demostraron que Pink Floyd podía seguir sobreviviendo sin Barrett.");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
			case "drake":  // CASE BOWIE: MEDIANTE EL DOM, CONSTRUYO LA BIOGRAFIA E INTENTO DE CART
			var creaBio = document.createElement('p');
			
			var creaInfo = document.createTextNode("Podría argumentarse que el Nick Drake corpóreo fue un músico para músicos. Como en su día lo fue, por ejemplo, Fred Neil. Pues es de sobra conocido que Drake era admirado por los compañeros de profesión. En sus discos colaboró gente tan potente como Richard Thompson o John Cale y su talento fue reconocido, de forma inmediata, por todos los que tuvieron la suerte de cruzarse en su camino. Pero no solo de talento vive el hombre. A Drake se le resistió el éxito y eso, en opinión de muchos, se lo comió por dentro. ¿Si soy un genio, por qué no soy famoso?, se preguntaba una y otra vez; y hasta en sus letras dejó entrever esta frustración: «Why leave me hanging on a star / When you deem me so high?».");
			
			creaBio.appendChild(creaInfo);

			var ubica = document.getElementById('container');

			ubica.appendChild(creaBio);

			document.getElementById('init').innerHTML = "<button id = 'boton' onclick='carro();'> Me interesa </button></br><p> Price</p> " + opc + " EUROS";
		break;
		default:
			document.getElementById('init').innerHTML = "NO HA SELECCIONADO NINGUN DISCO DEL STOCK";

	} 

}
	
function carro() {  // LA FUNCION REFIERE QUE EN CASO DE "ME INTERESA" ADJUNTAR AL CARRO
		//var borra = document.getElementById('boton').onclick;
		if(onclick != 0) {
			alert("hola");
			cont++;
			suma = (cont * opc).toFixed(2);
			car = suma;
		} else {
			document.getElementById('init').innerHTML += "<p>NO selected item</p>";
		}
	document.getElementById('init').innerHTML += "<h3>La cantidad de discos que desea son: </h3>" + cont + "<p>Total = </p>" + suma + "</br><button id= 'buy' onclick='compra();'>Buy Me</button>";	
}



function compra() {
		alert("hello nasty");
		document.getElementById('init').innerHTML += "<p>el importe a cancelar es : </p>" + car;
}

	
function remove() {
	alert(hello);
	help = document.getElementById('container');
	help.remove();
}