import Raytracer from './raytracer';

const raytracer = new Raytracer();

if (raytracer.hasWebGL()) {
  console.log('working');
} else {
  console.log('not working');
}
