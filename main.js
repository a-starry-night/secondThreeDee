import './style.css'
import * as THREE from 'three';
/*import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 2, 30, 30);
const geometry1 = new THREE.TorusGeometry(10, 2, 30, 30);
const mat = new THREE.MeshBasicMaterial({color:0xFF00FF, wireframe: true});
const obj = new THREE.Mesh(geometry, mat);
const obj1 = new THREE.Mesh(geometry1, mat);

scene.add(obj);
scene.add(obj1);

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  obj.rotation.z += 0.01;
  obj.rotation.y += 0.005;
  obj.rotation.x += 0.0025;
  obj1.rotation.z += 0.01;
  obj1.rotation.y += 0.008;
  obj1.rotation.x -= 0.0025;
}

animate();