// starting code for learning three.js - a JavaScript 3D framework built on top of WebGL



var scene, camera, renderer;

var geometry, material, torus;


var controls;

// prepare page
init();

render();



function init() {

	// first of all, we need three things: a scene, camera and renderer. 
	// with all these items, we can render the scene with the camera

	scene = new THREE.Scene(); 

	// parameters: field of view, aspect ratio, near plane, far plane)
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 ); 

	renderer = new THREE.WebGLRenderer(); 

	renderer.setSize( window.innerWidth, window.innerHeight ); 

	// set background color of scene
	renderer.setClearColor(0x333F47, 1);

	// domElement is the canvas where the renderer draws its output
	document.body.appendChild( renderer.domElement );



	// adding the cube
	// will type this through screencast later 

	// parameters for sphere: radius, diameter of tube, radial segments, tubular segments
	geometry = new THREE.TorusGeometry( 5, 2, 10, 30); 

	// MeshBasicMaterial makes it look flat
	// also MeshLambertMaterial, MeshPhongMaterial, 
	material = new THREE.MeshLambertMaterial({
		color: 'skyblue',
	}); 



	// adding a mesh (object that applies a material to it)
	torus = new THREE.Mesh( geometry, material );

	scene.add( torus ); 
	camera.position.z = 15;






	// AFTER BASIC TUTORIAL

	// add camera control ( add script file, update controls in render function )
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enablePan = false;



	// adding light, set its position
	var light = new THREE.PointLight( 0xffffff );
	light.position.set(-100, 200, 100);
	scene.add(light);

	// must change MeshBasicMatieral to MeshLambertMaterial or MeshPhongMaterial to see the effects


}




// render loop. this will draw the scene 60 times per second

function render() { 
	requestAnimationFrame( render ); 

	// add this for controlling the camera;
	controls.update();

	// animating the cube

	torus.rotation.x += 0.01;

	torus.rotation.y += 0.01;



	renderer.render( scene, camera ); 
} 

render();
