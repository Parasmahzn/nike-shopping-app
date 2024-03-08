import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, rabindraCustomerImg, ranjitAdCustomerImg, rabinRautCustomerImg, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: rabindraCustomerImg,
        customerName: 'Rabindra J. Thapa',
        rating: 4.5,
        feedback: "The craftsmanship and comfort of the shoes are exceptional. I'm truly impressed with the attention to detail. Highly recommended!"
    },
    {
        imgURL: ranjitAdCustomerImg,
        customerName: 'Ranjit Adhikari',
        rating: 4.2,
        feedback: "The design and durability of these shoes are outstanding. I'm delighted with my purchase and will surely return for more!"
    }
    ,
    {
        imgURL: rabinRautCustomerImg,
        customerName: 'Rabin Raut',
        rating: 4.8,
        feedback: "I'm thoroughly impressed with the product quality and service. Definitely exceeded my expectations. Will be recommending to friends and family!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Jordan 1 Retro High SP", link: "/" },
            { name: "Nike Air Max 1 SE", link: "/" },
            { name: "Jordan Stadium 90", link: "/" },
            { name: "NOCTA Zoom Drive", link: "/" },
            { name: "Nike Air Max Dn", link: "/" },
            { name: "Jumpman MVP", link: "/" },
            { name: "JA 1 EP", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+9779800000000", link: "tel:+9779800000000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];