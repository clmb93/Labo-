var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,
1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight); //Ici la taille et largeur de la fenetre
document.body.appendChild(renderer.domElement); //Crée un nouvel Element dans le dom , c'est le rendu
camera.position.x = 25;  //On change la psoition de la camera sur l'axe x 
camera.position.y = 25;  //On change la psoition de la camera sur l'axe y 
camera.position.z = 15;  //On change la psoition de la camera sur l'axe z 
camera.lookAt(scene.position);  // On indique à la camera de regarder la scene à la position ou elle se trouve 

/* CREATION DES OBJETS */



    var plato = new THREE.PlaneGeometry(30,40);
    var materiel_plato = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/sol.jpg')});
    var sol = new THREE.Mesh(plato,materiel_plato); // Création de l'objet sphere avec deux param , la forme et le materiel
    sol.rotation.x = -Math.PI/2;
    sol.position.set(0,0,0); //On définit la position de la sphere (x,z,y)
    scene.add(sol);// Ajout de la sphere à la scene
    
    var mur_gauche = new THREE.PlaneGeometry(30,10);
    var mur = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('img/mur.jpg')});
    var murG = new THREE.Mesh(mur_gauche,mur)
    sol.add(murG);
    murG.rotation.x=Math.PI/2;
    murG.rotation.y=Math.PI;
    murG.position.y=-20; 
    murG.position.z=5; 
    
    
    var murD = new THREE.Mesh(mur_gauche,mur)
    sol.add(murD);
    murD.rotation.x=-Math.PI/2;
    murD.rotation.y=-Math.PI;
    murD.position.y=20; 
    murD.position.z=5; 
    
    var murFond  = new THREE.PlaneGeometry(10,40);
    var murF = new THREE.Mesh(murFond,mur)
    sol.add(murF);
    murF.rotation.y=Math.PI/2;
    murF.position.z=5; 
    murF.position.x=-15;

    
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



      

