const renderer = new THREE.WebGLRenderer({
	alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 1);
document.body.appendChild( renderer.domElement )

const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	1,
	1000
);

camera.position.z = 10;

const scene = new THREE.Scene();
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const clock = new THREE.Clock();
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


function init() {
	
	directionalLight.position.set(0.5, 5, 5);
	
	scene.add(directionalLight)
	scene.add( new THREE.HemisphereLight( 0xffffff, 0x000000, 0.9 ) );
	
	animate();
}



function animate() {
	requestAnimationFrame(animate.bind(this));
	cube.rotation.z += 0.007;
	cube.rotation.x += 0.01;
	render();
}

function render() {
	// controls.update();
	renderer.render(scene, camera);
}

function addEvents() {
	window.addEventListener("resize", resize.bind(this));
}

function resize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
}




init();


