var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,
1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight); //Ici la taille et largeur de la fenetre
document.body.appendChild(renderer.domElement); //Crée un nouvel Element dans le dom , c'est le rendu
camera.position.x = 5;  //On change la psoition de la camera sur l'axe x 
camera.position.y = 5;  //On change la psoition de la camera sur l'axe y 
camera.position.z = 5;  //On change la psoition de la camera sur l'axe z 
camera.lookAt(scene.position);  // On indique à la camera de regarder la scene à la position ou elle se trouve 

/* CREATION DES OBJETS */


 var triangle_form = new THREE.Geometry();
 
 triangle_form.vertices.push(
    
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(0,1,0),
    new THREE.Vector3(1,0,0)
 );
 
 triangle_form.faces.push(new THREE.Face3(0,1,2,3));
 
 var tr = new THREE.Mesh(triangle_form,new THREE.MeshBasicMaterial({color : 0xff0000, wireframe:true}));
  scene.add(tr);

    
/*CREATION DE LA LUMIERE AMBIANTE */

var Lumiere = new  THREE.SpotLight({color : 0xffffff},3,100); //Création de la lumière ambiante avec en 2eme param l'intensité de lumiere et en 3eme param la distance d'affichage de la lumière
Lumiere.position.set(5,50,5);// on definit les coordonnées du point de lumière, ici je fait en sorte que le point de lumiere soit juste au dessus de la boule
    
    /* AJOUT DE LA LUMIERE A LA SCENE */
    
    scene.add(Lumiere);

/* AJOUT AU RENDU DE LA SCENE PLUS LA CAMERA */

function render() {
requestAnimationFrame(render);

renderer.render(scene, camera); //Fonction recursive qui s'appelle elle même

}

render(); //Enfin on l'appelle manuellement une fois 



      

