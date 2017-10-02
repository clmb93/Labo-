/* global THREE * /
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var scene = new THREE.Scene(); //Creation d'une nouvelle scène 
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000); //Création de la caméra
camera.position.z = 5; //Définition de la position de la caméra sur l'axe Z
var renderer = new THREE.WebGLRenderer();   //Création du rendu
document.body.appendChild(renderer.domElement); //On met le rendu dans le body en tant que nouvel élèment du DOM
renderer.setSize(window.innerWidth,window.innerHeight); //Définition de la taille du rendu
var sphGeo = new THREE.SphereGeometry(1,32,32); //Création d'une sphère
var sphMath = new THREE.MeshBasicMaterial({ color : 0xff0000 , wireframe : true}); //Création du materiel et sa couleur
var sph = new THREE.Mesh(sphGeo,sphMath); // definition de l'objet : 1er parametre forme geometrique et 2eme param le materiel
var geometry = new THREE.BoxGeometry( 1, 1, 1 ); //definition de la forme geo du cube
var material = new THREE.MeshBasicMaterial( {color: 0x598c5a} ); //definition du materiel du cube
var cube = new THREE.Mesh( geometry, material ); //creation du cube
scene.add(cube); //ajout de l'objet a la scene
scene.add(sph); //On rajoute l'objet à la scène

function render(){
    requestAnimationFrame(render);  //On activ cette anim 60 fois par secondes
    renderer.render(scene,camera);  //  On change le rendu avec en paramètre la caméra et la scène
}
render();

