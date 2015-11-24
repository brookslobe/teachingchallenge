// starting code for learning three.js - a JavaScript 3D framework built on top of WebGL



var scene, camera, renderer;

var geometry, material, torus;

var controls;


// prepare page
init();

// render loop. this will draw the scene 60 times per second
render();



function init() {
	scene = new THREE.Scene();

	// field of view
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
	camera.position.z = 25;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	// Paramaters: Radius, Diameter, Radial Segments, Tubular Segments
	geometry = new THREE.TorusGeometry(5, 2, 12, 30);

	//material = new THREE.MeshBasicMaterial({
	material = new THREE.MeshPhongMaterial({
		color: 'green'
	});

	controls = new THREE.OrbitControls(camera, renderer.domElement)

	torus = new THREE.Mesh(geometry, material);
	scene.add(torus);

	var light = new THREE.PointLight(0xffffff)
	light.position.set(-100, 200, 100)
	scene.add(light)
}


function render() { 
	requestAnimationFrame(render);

	controls.update();

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;

	renderer.render(scene, camera);

} 
