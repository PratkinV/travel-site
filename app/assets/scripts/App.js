import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item, .testimonial"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
