var ok=1;
/* CREATION DE LA SCENE */

var scene = new THREE.Scene(); 

/* CREATION DE LA CAMERA */

/*@function PerspectiveCamera()
 *1rst  @param : Champs de vision vertical de type @Int
 *2nd   @param : Ratio de la caméra largeurFenetre/hauteurFenetre
 *3rd   @param : Distance la plus proche d'affichage de la camera de type @int ou @float
 *4th   @param : Distance la plus loin d'affichage de la camera de type @int ou @float
 */
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,
1000);

/* CREATION DU RENDU */

var renderer = new THREE.WebGLRenderer();

    /*@function setSize()
     * 1rst @param largeur du rendu de type @int
     * 2snd @param hauteur du rendu de type @int
     */
    
    renderer.setSize(window.innerWidth,window.innerHeight); //Ici la taille et largeur de la fenetre
    document.body.appendChild(renderer.domElement); //Crée un nouvel Element dans le dom , c'est le rendu
    
/* ON CHANGE LA CAMERA DE POSITION  */

camera.position.x = 10;  //On change la psoition de la camera sur l'axe x 
camera.position.y = 10;  //On change la psoition de la camera sur l'axe y 
camera.position.z = 10;  //On change la psoition de la camera sur l'axe z 
camera.lookAt(scene.position);  // On indique à la camera de regarder la scene à la position ou elle se trouve 

/* CREATION DE LA SPHERE */

    /* CREATION DE LA FORME DE LA SPHERE */

    /*@function SphereGeometry
     * 1rst @param prend en premier param le rayon de la sphere
     * 2nd  @param prend en second param le nombre de segment en largeur 
     * 3rd  @param prend en troisième param le nombre de segment en hauteur
     */

    var forme = new THREE.SphereGeometry(4,32,32); //Création de la forme de la sphere
    var sphere_lune = new THREE.SphereGeometry(0.7,32,32); //Création de la forme de la sphere
        /* CREATION DE LA TEXTURE DE LA PSHERE */
    
     var texture_terre = new THREE.TextureLoader().load('img/texture_terre.jpg'); //on load l'image
     var texture_lune = new THREE.TextureLoader().load('img/texture_lune.jpg'); //on load l'image
     
    /* CREATION DU MATERIEL DE LA SPHERE */


        var materiel_terre = new THREE.MeshPhongMaterial({map : texture_terre}); 
        var materiel_lune = new THREE.MeshPhongMaterial({map : texture_lune}); 
        
        var sphere_default = new THREE.Mesh(forme,materiel_terre); // Création de l'objet sphere avec deux param , la forme et le materiel
        var lune = new THREE.Mesh(sphere_lune,materiel_lune); // Création de l'objet sphere avec deux param , la forme et le materiel
        
        

     
/* AJOUT DES SPHERES A LA SCENE */

sphere_default.position.set(0,0,0); //On définit la position de la sphere (x,z,y)
sphere_default.add(lune);
lune.position.set(9.3,9.3,9.3);

scene.add(sphere_default);// Ajout de la sphere à la scene
sphere_default.rotation.y-=0.5;

    
/*CREATION DE LA LUMIERE AMBIANTE */

var Lumiere = new  THREE.SpotLight({color : 0xffffff},3,100); //Création de la lumière ambiante avec en 2eme param l'intensité de lumiere et en 3eme param la distance d'affichage de la lumière
Lumiere.position.set(20,10,10);// on definit les coordonnées du point de lumière, ici je fait en sorte que le point de lumiere soit juste au dessus de la boule
    
    /* AJOUT DE LA LUMIERE A LA SCENE */
    
    scene.add(Lumiere);

/* AJOUT AU RENDU DE LA SCENE PLUS LA CAMERA */

function render() {
requestAnimationFrame(render); //On demander a travers cette fonction d'appeler la fonction render 60 fois par secondes
renderer.render(scene, camera); //Fonction recursive qui s'appelle elle même
anim();
}

render(); //Enfin on l'appelle manuellement une fois 

/*On peut donc voir maintenant un fond noir sur notre écran avec le repère avec l'axe x en bleu 
l'axe y en rouge et enfin l'axe z en vert*/

/* ANIMATION */

function anim(){
      
    lune.rotation.x+=0.009;  
    sphere_default.rotation.y+=0.002;
}


      

