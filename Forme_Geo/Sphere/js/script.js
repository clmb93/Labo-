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
    
    

/* CREATION DE L'AXIS */

var axis = new THREE.AxisHelper(15); // On passe en paramètre la taille d'laxis voulu , ici 5
scene.add(axis);    // on ajoute l'axis à la scene

/* ON CHANGE LA CAMERA DE POSITION  */

camera.position.x = 7;  //On change la psoition de la camera sur l'axe x 
camera.position.y = 7;  //On change la psoition de la camera sur l'axe y 
camera.position.z = 7;  //On change la psoition de la camera sur l'axe z 
camera.lookAt(scene.position);  // On indique à la camera de regarder la scene à la position ou elle se trouve 

/* CREATION DE LA SPHERE */

    /* CREATION DE LA FORME DE LA SPHERE */

    /*@function SphereGeometry
     * 1rst @param prend en premier param le rayon de la sphere
     * 2nd  @param prend en second param le nombre de segment en largeur 
     * 3rd  @param prend en troisième param le nombre de segment en hauteur
     */

    var forme = new THREE.SphereGeometry(2,32,32); //Création de la forme de la sphere
    
    /* CREATION DU MATERIEL DE LA SPHERE */
        
        /* BASIC MATERIEL */

        /*@function MeshBasicMaterial()
         * 1rst @param prend en param la couleur sous forme hexadecimal
         * 2snd @param prend en second param "wireframe : true ou false" pour afficher l'objet plein ou seulement les lignes
         */

        var materiel = new THREE.MeshBasicMaterial({color : 0xdb1adb, wireframe : true}); //On crée le materiel de notre sphere ici un basic material , il en existe plein d'autre
        var sphere_default = new THREE.Mesh(forme,materiel); // Création de l'objet sphere avec deux param , la forme et le materiel
        
        /* PHONG MATERIEL */
        
        /* A completer plus tard */

/* AJOUT DES SPHERES A LA SCENE */

sphere_default.position.set(4,4,4); //On définit la position de la sphere (x,z,y)
scene.add(sphere_default);// Ajout de la sphere à la scene

/* AJOUT AU RENDU DE LA SCENE PLUS LA CAMERA */

function render() {
requestAnimationFrame(render); //On demander a travers cette fonction d'appeler la fonction render 60 fois par secondes
renderer.render(scene, camera); //Fonction recursive qui s'appelle elle même
}

render(); //Enfin on l'appelle manuellement une fois 

/*On peut donc voir maintenant un fond noir sur notre écran avec le repère avec l'axe x en bleu 
l'axe y en rouge et enfin l'axe z en vert*/