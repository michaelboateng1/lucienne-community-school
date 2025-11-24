import {writable} from "svelte/store";

const initial = false;

const mobileNav = writable(initial);

export default mobileNav;