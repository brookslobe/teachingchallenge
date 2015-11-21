// starting code for learning three.js - a JavaScript 3D library












// first of all, we need three things: a scene, camera and renderer. 
// with all these items, we can render the scene with the camera

var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );




// adding the cube
// will type this through screencast later 

var geometry = new THREE.BoxGeometry( 1, 1, 1 ); 


var material = new THREE.MeshBasicMaterial({
	color: 'purple',
	wireframe: true
}); 



// adding a mesh (object that applies a material to it)
var cube = new THREE.Mesh( geometry, material );



scene.add( cube ); camera.position.z = 5;




// render loop. this will draw the scene 60 times per second

function render() { 
	requestAnimationFrame( render ); 



	// animating the cube

	cube.rotation.x += 0.01;

	cube.rotation.y += 0.01;

	//


	renderer.render( scene, camera ); 
} 

render();
