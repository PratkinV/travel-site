import $ from 'jquery';
import Modal from './modules/Modal';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
var modal = new Modal();
new RevealOnScroll($(".feature-item, .testimonial"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();  
