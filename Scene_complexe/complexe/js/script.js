var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,
1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight); //Ici la taille et largeur de la fenetre
document.body.appendChild(renderer.domElement); //Crée un nouvel Element dans le dom , c'est le rendu
camera.position.x = 1;  //On change la psoition de la camera sur l'axe x 
camera.position.y = 1;  //On change la psoition de la camera sur l'axe y 
camera.position.z = 1;  //On change la psoition de la camera sur l'axe z 
camera.lookAt(scene.position);  // On indique à la camera de regarder la scene à la position ou elle se trouve 

/* CREATION DES OBJETS */


 var axe = new THREE.AxisHelper(10);


/* forme plato */

var plato_form = new THREE.PlaneGeometry(10,10);

/* Materiel plato */
var mur_materiel = new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/texture_mur.jpg'), shininess : 10});
var sol_materiel = new THREE.MeshPhongMaterial({map : new THREE.TextureLoader().load('img/sol.jpg'), shininess : 10});


var plato = new THREE.Mesh(plato_form,mur_materiel); //Mur droit
plato.position.set(0,0,-5);
scene.add(plato);

var plato1 = new THREE.Mesh(plato_form,mur_materiel);   //mur gauche
plato1.position.set(-5,0,0);
plato1.rotation.y=Math.PI/2;
scene.add(plato1);

var plato2 = new THREE.Mesh(plato_form,sol_materiel);   //SOL
plato2.position.set(0,-5,0);
plato2.rotation.x=-Math.PI/2;
scene.add(plato2);

var sphere_forme = new THREE.SphereGeometry(0.5,32,32);
var sphere_materiel = new THREE.MeshPhongMaterial(
        {map : new THREE.TextureLoader().load('img/metal.jpg'), 
            shininess : 4}
        );
var boule = new THREE.Mesh(sphere_forme,sphere_materiel);
plato1.add(boule);
boule.position.set(2,-4.5,2);

/*CREATION DE LA LUMIERE AMBIANTE */

var Lumiere = new  THREE.PointLight({color : 0xffffff},1.5,100); //Création de la lumière ambiante avec en 2eme param l'intensité de lumiere et en 3eme param la distance d'affichage de la lumière
Lumiere.position.set(11,11,11);

    /* AJOUT DE LA LUMIERE A LA SCENE */
    
    scene.add(Lumiere);

/* AJOUT AU RENDU DE LA SCENE PLUS LA CAMERA */

function render() {
requestAnimationFrame(render);

renderer.render(scene, camera); //Fonction recursive qui s'appelle elle même
anim();
}

render(
        ); //Enfin on l'appelle manuellement une fois 


function anim(){
    
    if(boule.position.x<4.5){
         boule.position.x+=0.01;
         boule.rotation.z-=0.02;
    }else{
       
        camera.position.x-=0.01;
        camera.position.y-=0.01;
        camera.position.z-=0.01;
    }
   
  document.body.addEventListener('click',function(){
      scene.add(axe);
  });
  
  document.body.addEventListener('dblclick',function(){
      scene.remove(axe);
  });
   
}


      

