import Button from './components/Button.svelte';
import Photo from './components/Photo.svelte';
import PhotoContainer from './components/PhotoContainer.svelte';
import Text from './components/Text.svelte';
import { createPortal } from './helper.js';
import t from './stores/t.js';

export { Button, Photo, PhotoContainer, Text, t };

const Portal = {
	createPortal
};

export default Portal;
