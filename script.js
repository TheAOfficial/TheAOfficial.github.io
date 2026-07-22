/* ==========================================================
   AI Portfolio
   Part 3A - Loader Timeline
========================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   Elements
========================================== */

const loader = document.querySelector("#loader");
const loaderBar = document.querySelector(".loader-bar span");
const logo = document.querySelector(".loader-logo");

const profile = document.querySelector(".profile-image");

const heroContent = document.querySelector(".hero-content");

const rings = document.querySelectorAll(".ring");

/* ==========================================
   Loading Animation
========================================== */

gsap.to(loaderBar,{

    width:"100%",

    duration:3,

    ease:"power2.out"

});

/* ==========================================
   Logo Animation
========================================== */

gsap.to(logo,{

    scale:1.08,

    repeat:-1,

    yoyo:true,

    duration:1.2,

    ease:"power1.inOut"

});

/* ==========================================
   Master Timeline
========================================== */

const tl = gsap.timeline({

    delay:3

});

/* Loader Fade */

tl.to(loader,{

    opacity:0,

    duration:1,

    ease:"power2.out"

});

tl.set(loader,{

    display:"none"

});

/* ==========================================
   Hero Text
========================================== */

tl.from(heroContent,{

    opacity:0,

    y:120,

    duration:1.2,

    ease:"power4.out"

});

/* ==========================================
   Hero Photo
========================================== */

tl.to(profile,{

    opacity:1,

    y:0,

    duration:1.8,

    ease:"bounce.out",

    onComplete:()=>{

        gsap.to(profile,{

            y:-12,

            repeat:-1,

            yoyo:true,

            duration:2,

            ease:"sine.inOut"

        });

    }

},"-=0.8");

/* ==========================================
   Rings
========================================== */

tl.from(rings,{

    opacity:0,

    scale:.6,

    duration:1.2,

    stagger:.2

},"-=1");
/* ==========================================================
   THREE.JS GALAXY BACKGROUND
========================================================== */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(

    75,

    window.innerWidth / window.innerHeight,

    0.1,

    2000

);

camera.position.z = 25;

const renderer = new THREE.WebGLRenderer({

    alpha: true,
    antialias: true

});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(

    window.innerWidth,

    window.innerHeight

);

document
    .getElementById("three-container")
    .appendChild(renderer.domElement);

/* ==========================================
   Lights
========================================== */

const ambient = new THREE.AmbientLight(

    0xffffff,

    0.6

);

scene.add(ambient);

const pointLight = new THREE.PointLight(

    0x5b8cff,

    2

);

pointLight.position.set(

    10,

    10,

    15

);

scene.add(pointLight);

/* ==========================================
   Stars
========================================== */

const starGeometry = new THREE.BufferGeometry();

const starCount = 5000;

const starArray = [];

for(let i=0;i<starCount;i++){

    starArray.push(

        (Math.random()-0.5)*1000,
        (Math.random()-0.5)*1000,
        (Math.random()-0.5)*1000

    );

}

starGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(

        starArray,

        3

    )

);

const starMaterial = new THREE.PointsMaterial({

    color:0xffffff,

    size:1.2,

    transparent:true,

    opacity:.9

});

const stars = new THREE.Points(

    starGeometry,

    starMaterial

);

scene.add(stars);

/* ==========================================
   Resize
========================================== */

window.addEventListener("resize",()=>{

    camera.aspect=

    window.innerWidth/

    window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});

/* ==========================================
   Mouse Parallax
========================================== */

let mouseX=0;

let mouseY=0;

window.addEventListener("mousemove",(e)=>{

    mouseX=(e.clientX/window.innerWidth)-0.5;

    mouseY=(e.clientY/window.innerHeight)-0.5;

});

/* ==========================================
   Animation Loop
========================================== */

function animate(){

    requestAnimationFrame(animate);

    stars.rotation.y+=0.0004;

    stars.rotation.x+=0.0002;

    camera.position.x+=

    (mouseX*3-camera.position.x)

    *0.03;

    camera.position.y+=

    (-mouseY*3-camera.position.y)

    *0.03;

    camera.lookAt(scene.position);

    renderer.render(

        scene,

        camera

    );

}

animate();
/* ==========================================================
   PART 3A - SECTION 3
   Nebula • Planet • Meteors
========================================================== */

/* ---------- Nebula ---------- */

const nebulaGeometry = new THREE.SphereGeometry(180,64,64);

const nebulaMaterial = new THREE.MeshBasicMaterial({

    color:0x4b3cff,

    transparent:true,

    opacity:0.08,

    side:THREE.BackSide

});

const nebula = new THREE.Mesh(

    nebulaGeometry,
    nebulaMaterial

);

scene.add(nebula);

/* ---------- Planet ---------- */

const planetGeometry = new THREE.SphereGeometry(

    3,
    64,
    64

);

const planetMaterial = new THREE.MeshStandardMaterial({

    color:0x8b5cf6,

    metalness:.6,

    roughness:.25

});

const planet = new THREE.Mesh(

    planetGeometry,
    planetMaterial

);

planet.position.set(

    18,
    8,
    -25

);

scene.add(planet);

/* ---------- Meteors ---------- */

const meteors=[];

function createMeteor(){

    const geometry=new THREE.SphereGeometry(.08,8,8);

    const material=new THREE.MeshBasicMaterial({

        color:0xffffff

    });

    const meteor=new THREE.Mesh(

        geometry,
        material

    );

    meteor.position.set(

        Math.random()*120-60,
        Math.random()*80+20,
        Math.random()*-120

    );

    scene.add(meteor);

    meteors.push(meteor);

}

for(let i=0;i<80;i++){

    createMeteor();

}

/* ---------- Animate ---------- */

function animateSpace(){

    requestAnimationFrame(animateSpace);

    nebula.rotation.y+=0.00005;

    planet.rotation.y+=0.004;

    planet.rotation.x+=0.001;

    meteors.forEach(m=>{

        m.position.x-=0.35;
        m.position.y-=0.12;

        if(m.position.x<-70){

            m.position.x=70;
            m.position.y=Math.random()*80+20;

        }

    });

}

animateSpace();
