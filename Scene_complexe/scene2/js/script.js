var chrono=new THREE.Clock();
var avatar;
chrono.start() ;
var vAng=1;
var scene = new THREE.Scene();
var camera = new
THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(1.3,1.3,1.3);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
var axisHelper = new THREE.AxisHelper(70);
scene.add(axisHelper);
var loader = new THREE.ColladaLoader();
				loader.options.convertUpAxis = true;
				loader.load( 'montagne.dae', function ( collada ) {
					 avatar = collada.scene;
					scene.add( avatar );
                                        console.log(avatar);
                                       
				} );
console.log(avatar);
var pointLight = new THREE.PointLight( 0xffffff);
pointLight.position.set( 60, 60, 60 );
scene.add(pointLight);
var spotLight = new THREE.SpotLight( 0xffffff);
spotLight.position.set(-300,0,0);
scene.add(spotLight);
function render() {
 temps1=chrono.getElapsedTime()
requestAnimationFrame(render);
renderer.render(scene, camera);

}
render();