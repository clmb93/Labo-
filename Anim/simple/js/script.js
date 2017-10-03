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

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0xffffff, 0);// pour changer le backrgound de l'image par défaut en noir

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
    
    /* CREATION DU MATERIEL DE LA SPHERE */


        var materiel = new THREE.MeshBasicMaterial({color : 0x5AA85E, wireframe : true}); 
        var sphere_default = new THREE.Mesh(forme,materiel); // Création de l'objet sphere avec deux param , la forme et le materiel

/* AJOUT DES SPHERES A LA SCENE */

sphere_default.position.set(0,0,0); //On définit la position de la sphere (x,z,y)
scene.add(sphere_default);// Ajout de la sphere à la scene

/* CREATION TORUS */

    var torus = new THREE.TorusGeometry(8,2,32,100);
    var tor = new THREE.Mesh(torus,materiel);
    scene.add(tor);
    
/*CREATION DE LA LUMIERE AMBIANTE */

var Lumiere = new  THREE.SpotLight({color : 0xffffff},1,100); //Création de la lumière ambiante avec en 2eme param l'intensité de lumiere et en 3eme param la distance d'affichage de la lumière
Lumiere.position.set(4,10,4);// on definit les coordonnées du point de lumière, ici je fait en sorte que le point de lumiere soit juste au dessus de la boule
    
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
      
   tor.rotation.y+=0.02; //on  fait tournée x de 0.01 a chaque appel de la fonction
  
}
