/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,
1000);

camera.position.z = 5;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

var axisHelper = new THREE.AxisHelper(5);
scene.add(axisHelper);

var geo = new THREE.PlaneGeometry(10,10);
var mat = new THREE.MeshBasicMaterial({color : 0xffffff});
var plan = new THREE.Mesh(geo,mat);

plan.rotation.x = -Math.PI/2;
plan.position.set(0,0,0);

var geo1 = new THREE.SphereGeometry(1,32,32);
var mat1 = new THREE.MeshPhongMaterial({color : 0xffffff, shininess : 100});
var sph = new THREE.Mesh(geo1,mat1);
sph.position.set(1,3,1);

var lightAmb = new THREE.AmbientLight (0xffffff) ; //lumiere ambiante 
var lightpoint = new THREE.PointLight(0xffffff,1,100);
lightpoint.position.set (30,40,50) ;
var spotlight = new THREE.SpotLight(0xbc3232,1,100,Math.PI);
lightpoint.position.set (1,10,1) ;
spotlight.position.set (1,0,1) ;
scene.add(spotlight);
scene.add(lightpoint);
//scene.add(lightAmb);
scene.add(sph);
scene.add(plan);

function render() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}
render();