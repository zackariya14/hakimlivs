import { connectToDatabase } from './db.js';
import Product from './models.js';
import Category from '../models/categorymodel.js';

const main = async () => {
    await connectToDatabase();
    // const categoriesToInsert = [
    //     { name: 'Mejeri' },
    //     { name: 'Bakverk' },
    //     { name: 'Frukt & Grönt' },
    //     { name: 'Dryck' }
    //   ];
    //   try {
    //     const insertedCategories = await Category.insertMany(categoriesToInsert);
    //     console.log('Categories inserted successfully:', insertedCategories);
  
    // const productsToInsert = [
    //   { name: 'Smör', price: 30, category: '6613e87812954260eac59aaf', description: 'Smör från fri gående kor', Image: 'https://d1ax460061ulao.cloudfront.net/1000x1000/7/f/7f9d8c2c49b46902b411da4aee8c79fa.jpg'},
    //   { name: 'Mjölk', price: 20, category: '6613e87812954260eac59aaf', description: 'Mjölk från fri gående kor', Image: 'https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1704711429/cloud/316526/Standardmj%C3%B6lk%20F%C3%A4rsk.jpg'},
    //   { name: 'Ost', price: 78, category: '6613e87812954260eac59aaf', description: 'krämigaste osten du någonsin smakat', Image: 'https://d1ax460061ulao.cloudfront.net/1000x1000/d/b/dbfa6532909f457f84fb69b5beeb47af.jpg'},
    //   { name: 'Ägg (15 pack)', price: 38, category: '6613e87812954260eac59aaf', description: 'ägg från frigående höns', Image: 'https://www.garantskafferiet.se/filer/garant/02-vara-produkter/mejeri/agg/7340083445088_c1l1.jpg'},
    //   { name: 'Yoghurt (vanilj)', price: 25, category: '6613e87812954260eac59aaf', description: 'vanilj youghurt av den bästa kvalite', Image: 'https://outofhome.se/media/catalog/product/cache/30/image/17f82f742ffe127f42dca9de82fb58b1/5/1/51232_vaniljyoghurt_large.jpg'},
    //   { name: 'Donut (alla smaker)', price: 10, category: '6613e87812954260eac59ab0', description: 'läckra donuts med strössel', Image:'https://frozen.fun-food.se/wp-content/uploads/2022/04/5001502-1.jpeg'},
    //   { name: 'Digestivekex', price: 25, category: '6613e87812954260eac59ab0', description: 'Ganska torra kakor som funkar bra till kaffet', Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYo41pNzgcZxQ8zdRmkNUUuP_12UccZi5I0X4f12DYWA&s'},
    //   { name: 'Knäckebröd', price: 20, category: '6613e87812954260eac59ab0', description: 'Gott knäckigt bröd som funkar bra till morgonkaffet', Image: 'https://www.wasa.com/media/se-sv/filer_public/94/44/944467d0-9a1c-434f-acc0-9a440ef8acd9/pack1_0000_kanel-nc_1.png'},
    //   { name: 'Skogaholmslimpa', price: 27, category: '6613e87812954260eac59ab0', description: 'mjukt och luftigt bröd som går hand i hand med de flesta pålägg', Image: 'https://d1ax460061ulao.cloudfront.net/1000x1000/0/3/03cb334f8f8e5a70f16576f95ddd1b1f.jpg'},
    //   { name: 'Italienskt lantbröd', price: 35, category: '6613e87812954260eac59ab0', description: 'hög kvalitativt bröd från italien', Image: 'https://dabas.blob.core.windows.net/media/pagen/07311070001983_d1l1.png_large.jpg'},
    //   { name: 'Broccoli', price: 15, category:'6613e87812954260eac59ab1', description: 'ganska tråkig grönsak som inte många gillar', Image:'https://assets.icanet.se/image/upload/cs_srgb/t_product_large_2x_v1/v1684762663/tdg6huv8f8v754aygnqb.webp'},
    //   { name: 'Tomat', price: 5, category: '6613e87812954260eac59ab1', description: 'En helt vanlig tomat', Image: 'https://assets.icanet.se/image/upload/cs_srgb/t_product_large_2x_v1/v1669489468/d0bcyswfkeuolveihmzx.webp'},
    //   { name: 'Lök', price: 3, category: '6613e87812954260eac59ab1', description: 'Den godaste löken du kan hitta', Image: 'https://imageproxy.wolt.com/menu/menu-images/shared/e7036a6e-ee5e-11ed-b563-b6e33ff87a63_onion.001.png'},
    //   { name: 'Banan', price: 5, category: '6613e87812954260eac59ab1', description: 'En frukt som passar att äta dygnet runt', Image: 'https://outofhome.se/media/catalog/product/cache/30/image/17f82f742ffe127f42dca9de82fb58b1/b/a/banan.jpg'},
    //   { name: 'Äpple', price: 6, category: '6613e87812954260eac59ab1', description: 'Krispiga äpplen från spanien', Image: 'https://d1ax460061ulao.cloudfront.net/1000x1000/2/9/29fd3d7db9045f512d3e4c5340f8ea49.jpg'},
    //   { name: 'Pepsi max', price: 25, category: '6613e87812954260eac59ab2', description: 'B-version av cola', Image: 'https://outofhome.se/media/catalog/product/cache/30/image/17f82f742ffe127f42dca9de82fb58b1/2/1/21558_pepsi_regular_50cl_pet.jpg'},
    //   { name: 'Monster', price: 20, category: '6613e87812954260eac59ab2', description: 'Energidryck med goda smaker', Image: 'https://www.sportkost.se/pub_images/original/monster_original.png'},
    //   { name: 'Redbull', price: 20, category: '6613e87812954260eac59ab2', description: 'Energidryck med goda smaker', Image: 'https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1620136239/428428/Energidryck%20Red%20Bull.png'},
    //   { name: 'Starbuckskaffe', price: 35, category: '6613e87812954260eac59ab2', description: 'iskaffe med karamel smak som ger dig en lite godare start på morgonen', Image: 'https://assets.icanet.se/image/upload/cs_srgb/t_product_large_2x_v1/v1668894959/ws4k6gjfkhjviwvukgl7.webp'},
    //   { name: 'GLOCKENGOLD Multivitamin', price: 23, category: '6613e87812954260eac59ab2', description:'Godaste drickan genom tiderna', Image: 'https://outofhome.se/media/catalog/product/cache/30/image/17f82f742ffe127f42dca9de82fb58b1/9/1/91053-multivitamin-drink-2-l-new.jpg'}
    // ];
  
    // const insertedProducts = await Product.insertMany(productsToInsert);
    //   console.log('Products inserted successfully:', insertedProducts);
//     } catch (error) {
//       console.error('Error inserting data:', error);
//     }
};

main();