import React from 'react';
import Image from 'next/image';

interface Herb {
  name: string;
  imageSrc: string;
  properties: string;
  source: string;
  effectiveness: string;
  mechanism: string;
  traditionalUse: string;
}

interface Product {
  name: string;
  imageSrc: string;
  ingredients: string;
  description: string;
  affiliateLink: string;
}

const BlogPost: React.FC = () => {
    const herbs: Herb[] = [
        {
          name: 'Gudmar (Gymnema sylvestre)',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0734/7155/7942/files/gudmar_for_diabetes_480x480.png?v=1726465463',
          properties: 'Bitter, astringent',
          source: 'Tropical forests of India',
          effectiveness: 'Reduces sugar cravings and blood glucose levels',
          mechanism: 'Gymnemic acids block intestinal sugar absorption',
          traditionalUse: 'Chewed to suppress sweet tastes; used in decoctions'
        },
        {
          name: 'Vijaysar (Pterocarpus marsupium)',
          imageSrc: 'https://m.media-amazon.com/images/I/71DzYHrG1RL._SL1500_.jpg',
          properties: 'Astringent, cooling',
          source: 'Heartwood of Indian Kino tree',
          effectiveness: 'Lowers fasting and postprandial glucose levels',
          mechanism: 'Pterostilbene enhances insulin secretion',
          traditionalUse: 'Water stored in Vijaysar cups consumed daily'
        },
        {
          name: 'Karela (Bitter Melon)',
          imageSrc: 'https://m.media-amazon.com/images/I/71NbWOGs0vL._SL1280_.jpg',
          properties: 'Bitter, pungent',
          source: 'Widely cultivated in Asia',
          effectiveness: 'Contains insulin-like compound charantin',
          mechanism: 'Improves glucose uptake in cells',
          traditionalUse: 'Consumed as juice or in stir-fried dishes'
        },
        {
          name: 'Methi (Fenugreek)',
          imageSrc: 'https://m.media-amazon.com/images/I/61TkhH-4w-L.jpg',
          properties: 'Bitter, warming',
          source: 'Native to Mediterranean regions',
          effectiveness: 'Slows carbohydrate digestion',
          mechanism: 'Galactomannan fiber improves insulin sensitivity',
          traditionalUse: 'Soaked seeds consumed daily'
        },
        {
          name: 'Amla (Indian Gooseberry)',
          imageSrc: 'https://m.media-amazon.com/images/I/51Juq+2ufQL.jpg',
          properties: 'Sour, cooling',
          source: 'Indian subcontinent',
          effectiveness: 'Enhances immunity and metabolism',
          mechanism: 'Chromium regulates carbohydrate metabolism',
          traditionalUse: 'Consumed raw, as juice, or in chyawanprash'
        },
        {
          name: 'Shilajit',
          imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Shilajit%2C_Mohave_Lava_Tube%2C_2018.04.01_%2835%29.jpg',
          properties: 'Mineral-rich resin',
          source: 'Himalayan rock formations',
          effectiveness: 'Enhances energy production',
          mechanism: 'Fulvic acid improves nutrient absorption',
          traditionalUse: 'Dissolved in warm milk or water'
        },
        {
          name: 'Turmeric (Curcuma longa)',
          imageSrc: 'https://m.media-amazon.com/images/I/61YAa8J5YBL._SL1123_.jpg',
          properties: 'Pungent, heating',
          source: 'Southeast Asia',
          effectiveness: 'Reduces inflammation and insulin resistance',
          mechanism: 'Curcumin modulates glucose metabolism enzymes',
          traditionalUse: 'Golden milk or combined with black pepper'
        }
      ];

  const products: Product[] = [
    // {
    //   name: 'Dabur Madhumehantak Vati',
    //   imageSrc: '/products/dabur.jpg',
    //   ingredients: 'Gudmar, Vijaysar, Jamun',
    //   description: 'Supports healthy glucose levels and pancreatic function',
    //   affiliateLink: '#'
    // },
    // Add other products
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <h1 className="text-4xl font-bold mb-6 text-emerald-800 roboto-regular">
        Mastering Blood Sugar with Ayurveda: 8 Essential Herbs and Products
      </h1>

      {/* Banner Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src="/blog/banner/ayurveda.jpg"
          alt="Ayurvedic Diabetes Management"
          width={1200}
          height={400}
          className="w-full h-64 object-cover"
          priority
        />
      </div>

      {/* Introduction Section */}
      <section className="mb-12">
        {/* Diabetes Explanation */}
        <div className="prose mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Diabetes?</h2>
        <p className='roboto-regular'>Diabetes is a chronic condition characterized by elevated blood sugar levels due to insulin resistance or deficiency. There are three primary types :</p>
        <br/>
        <ol className='list-disc list-inside roboto-regular'>
            <li>Type 1 Diabetes: An autoimmune disorder where the pancreas produces little to no insulin.</li>
            <li>Type 2 Diabetes: Caused by insulin resistance, often linked to lifestyle factors.</li>
            <li>Gestational Diabetes: Occurs during pregnancy and typically resolves postpartum.</li>
        </ol>
        <br/>
        <p className='roboto-regular'>Common symptoms include frequent urination, excessive thirst, fatigue, and blurred vision. Left unmanaged, diabetes can lead to complications like neuropathy, cardiovascular disease, and kidney damage.</p>
        </div>

        {/* Ayurvedic Perspective */}
        <div className="prose">
          <h2 className="text-2xl font-semibold mb-4">Diabetes in Ayurveda</h2>
          <p className='roboto-regular'>Ayurveda refers to diabetes as Madhumeha ("honey-like urine"), a subtype of Prameha (urinary disorders). According to Ayurvedic principles, imbalances in the Kapha and Vata doshas disrupt metabolism, leading to poor insulin function. Kapha imbalance causes weight gain and insulin resistance, while progression to Madhumeha involves Vata derangement, exacerbating symptoms like weight loss and nerve damage. 
            <br/>Ayurveda emphasizes holistic management through diet, lifestyle, and herbs to restore doshic balance.</p>
        </div>
      </section>

      {/* Herbs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-emerald-800">
          Ayurvedic Herbs for Blood Sugar Control
        </h2>

        {herbs.map((herb, index) => (
          <div key={index} className="mb-12 md:flex md:gap-8 md:items-start">
            {/* Herb Image Frame */}
            <div className="md:w-1/3 mb-4 md:mb-0 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={herb.imageSrc}
                alt={herb.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Herb Description */}
            <div className="md:w-2/3 prose">
              <h3 className="text-xl font-semibold mb-2">{herb.name}</h3>
              <p className='roboto-regular'><strong>Properties:</strong> {herb.properties}</p>
              <p className='roboto-regular'><strong>Source:</strong> {herb.source}</p>
              <p className='roboto-regular'><strong>Effectiveness:</strong> {herb.effectiveness}</p>
              <p className='roboto-regular'><strong>Mechanism:</strong> {herb.mechanism}</p>
              <p className='roboto-regular'><strong>Traditional Use:</strong> {herb.traditionalUse}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Products Section */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-emerald-800">
          Top Ayurvedic Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <div className="mb-4 rounded overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className='roboto-regular'><strong>Ingredients:</strong> {product.ingredients}</p>
              <p className="mb-4">{product.description}</p>
              <a href={product.affiliateLink} className="text-emerald-600 hover:underline">
                View Product
              </a>
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default BlogPost;