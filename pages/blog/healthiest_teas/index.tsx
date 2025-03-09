// pages/blog/healthiest-teas.tsx

import React from 'react';
import Image from 'next/image';

const HealthiestTeas = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="roboto-regular text-4xl font-bold mb-6">
        Healthiest Teas and Their Benefits: Boost Wellness One Sip at a Time
      </h1>

      <div className="w-full"> {/* Container for the Image to take full width of parent */}
          <Image
            src="/blog/banner/tea_banner.jpg" // Ensure correct path and file extension
            alt="Pistachios vs Almonds Banner"
            width={1000} // Set an initial width (will be responsive)
            height={500} // Set an initial height (adjust aspect ratio as needed)
            layout="responsive" // Make the image responsive
            objectFit="cover" // Cover the container area
            className='w-full rounded-lg shadow-lg'
          />
        </div>

      {/* Introduction */}
      <section className="my-12">
        <p className=" roboto-regular text-lg text-gray-700 leading-relaxed">
          For centuries, tea has been cherished globally not just for its soothing flavors but also for its remarkable health benefits. 
          From ancient herbal remedies to modern wellness trends, teas are packed with antioxidants, anti-inflammatory compounds, 
          and nutrients that support physical and mental health. Whether you're seeking an energy boost, better digestion, 
          or stress relief, there's a tea for every need.
        </p>
      </section>

      {/* Green Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">1. Green Tea: The Antioxidant Powerhouse</h2>
        <Image
          src="/blog/teas/green_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong>  This delicate beverage is rich in polyphenols
        , particularly catechins like EGCG (epigallocatechin gallate), which have been linked to numerous health advantages.
         With its refreshing, slightly grassy flavor, green tea offers a gentle energy boost and a sense of well-being, 
         making it a popular choice for those seeking a healthy and invigorating drink.</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Boosts metabolism and aids weight management</li>
            <li>Supports heart health by lowering LDL cholesterol</li>
            <li>Enhances brain function</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> Fitness enthusiasts, those seeking cellular health</p>
          <a 
            href="https://amzn.to/3XAWW0Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy Makaibari Darjeeling Green Tea
          </a>
        </div>
      </section>

      {/* Ginger Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">2. Ginger Tea: The Digestive Healer</h2>
        <Image
          src="/blog/teas/ginger_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Ginger tea, a warming and invigorating beverage
        , has been cherished for centuries for its potent medicinal properties. Brewed from the rhizome of the ginger plant, 
        this tea boasts a distinctive spicy and slightly sweet flavor. It's a natural remedy often used to soothe digestive discomfort
        , alleviate nausea, and reduce inflammation. Ginger's active compounds, such as gingerol, possess antioxidant and anti-inflammatory effects
        , making it a comforting and healthful choice, particularly during cold seasons or when seeking relief from minor ailments.
         Whether enjoyed hot or cold, ginger tea offers a soothing and revitalizing experience.</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Relieves nausea, morning sickness, and motion sickness.</li>
            <li>Reduces muscle pain and menstrual cramps.</li>
            <li>Strengthens immunity with gingerol, a potent antioxidant.</li>
          </ul>
          <p className=" roboto-regular  mb-2"><strong>Who Should Drink It?</strong> Those with digestive issues or pregnancy-related nausea. Individuals managing chronic inflammation.</p>
          <a 
            href="https://amzn.to/3Xy9tCg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy VAHDAM, Ginger Mint Green Tea
          </a>
        </div>
      </section>

      {/* Black Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">3. Black Tea: The Heart-Healthy Energizer</h2>
        <Image
          src="/blog/teas/black_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Black tea, a globally beloved beverage, is known for its robust
         flavor and invigorating properties. Derived from the leaves of the Camellia sinensis plant, it undergoes a full oxidation process, 
         which gives it its characteristic dark color and rich, malty taste. This oxidation also contributes to its higher caffeine content
          compared to other tea varieties. Black tea is a staple in many cultures, often enjoyed with milk and sugar, or as a refreshing iced drink.
          Beyond its stimulating effects, black tea is also a source of antioxidants, offering potential benefits for heart health and overall well-being.</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Lowers blood pressure and improves blood vessel function.</li>
            <li>Enhances focus and energy (moderate caffeine content).</li>
            <li>Supports gut health by promoting good bacteria.</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> Those prioritizing heart and gut health. Coffee lovers needing a gentler caffeine alternative.</p>
          <a 
            href="https://amzn.to/41AQ44J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy AHDAM, Assam Black Tea Leaves
          </a>
        </div>
      </section>

      {/* Blue Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">4. Blue Tea: The Stress Reliever</h2>
        <Image
          src="/blog/teas/blue_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Vibrant blue-hued and caffeine-free, this herbal tea is made 
        from butterfly pea flowers, loaded with anthocyanins. Blue tea has a mild, earthy, and slightly floral flavor. It's naturally caffeine-free
        , making it a soothing beverage for any time of day. The anthocyanins in blue tea are believed to offer various health benefits, including
         antioxidant and anti-inflammatory effects. </p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Reduces stress and anxiety.</li>
            <li>Promotes skin health and collagen production.</li>
            <li>May stabilize blood sugar levels.</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> Beauty enthusiasts focused on anti-aging. Nighttime drinkers seeking relaxation.</p>
          <a 
            href="https://amzn.to/4iAMrme" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy BLUE TEA - Butterfly Pea Flower Tea
          </a>
        </div>
      </section>

      {/* Chamomile Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">5. Chamomile Tea: The Calming Elixir</h2>
        <Image
          src="/blog/teas/chamomile_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Chamomile tea, a soothing and gentle herbal infusion, has been a beloved bedtime ritual and natural remedy for centuries.
         Derived from the dried flowers of the chamomile plant, this tea is renowned for its calming and relaxing properties. Its delicate, slightly sweet, and floral aroma creates a sense of tranquility, 
         making it a popular choice for unwinding after a long day or promoting restful sleep. Beyond its relaxing effects, chamomile tea is also known for its potential digestive benefits and anti-inflammatory properties.
         Often enjoyed on its own or with a touch of honey, chamomile tea offers a comforting and healthful experience</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Reduces anxiety and promotes relaxation.</li>
            <li>Improves sleep quality and combats insomnia.</li>
            <li>Soothes digestive issues like indigestion and bloating.</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> Individuals struggling with stress or sleep disorders. Those with mild stomach discomfort.</p>
          <a 
            href="https://amzn.to/3DDrfND" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy BLUE TEA - Chamomile Tea - 100 gm
          </a>
        </div>
      </section>

      {/* Peppermint Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">6. Peppermint Tea: The Digestive Refresher</h2>
        <Image
          src="/blog/teas/peppermint_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Peppermint tea, a refreshing and invigorating herbal infusion, 
          is widely enjoyed for its distinctively cool and minty flavor. Derived from the leaves of the peppermint plant, this tea offers a soothing 
          and revitalizing experience. Its natural menthol content provides a cooling sensation, making it a popular choice for relieving digestive 
          discomfort, easing headaches, and freshening breath. Beyond its refreshing taste, peppermint tea is known for its potential to relax muscles
           and reduce stress. Whether served hot or cold, peppermint tea offers a delightful and healthful way to invigorate your senses and soothe your body.</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Alleviates IBS symptoms and reduces bloating.</li>
            <li>Relieves tension headaches and improves focus.</li>
            <li>Freshens breath naturally.</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> People with digestive disorders or occasional indigestion. Anyone needing a mental pick-me-up without caffeine.</p>
          <a 
            href="https://amzn.to/41yhfNG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy LUXMI Estates Purely Peppermint 25Gm
          </a>
        </div>
      </section>

      {/* Hibiscus Tea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold  mb-4">7. Hibiscus Tea: The Heart-Protective Brew</h2>
        <Image
          src="/blog/teas/hibiscus_tea.jpg"
          alt="Pistachios vs Almonds Banner"
          width={400} // Set your desired fixed width
          height={250} // Set your desired fixed height
          layout="fixed" // Use fixed layout
          objectFit="fill" // Cover the container area
          className="rounded-lg shadow-lg my-4"
        />
        <p className=" roboto-regular text-gray-600 mb-3"><strong>Description:</strong> Hibiscus tea, a vibrant and tangy herbal infusion,
         is celebrated for its striking crimson color and refreshing, tart flavor. Made from the dried petals of the hibiscus flower, 
         this tea offers a unique sensory experience. Its naturally tart and slightly sweet taste makes it a popular choice for both 
         hot and iced beverages. Beyond its delightful flavor, hibiscus tea is known for its potential health benefits, including its
          ability to support healthy blood pressure levels and its rich antioxidant content. It's often enjoyed on its own or blended
          with other herbs and fruits, offering a delightful and healthful way to quench your thirst and invigorate your senses.</p>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h3 className="roboto-regular roboto-regularfont-semibold mb-2">Health Benefits:</h3>
          <ul className="roboto-regular list-disc pl-6 mb-4">
            <li>Lowers blood pressure and supports cardiovascular health.</li>
            <li>Boosts immune function with antimicrobial properties.</li>
            <li>Promotes liver health and detoxification.</li>
          </ul>
          <p className=" roboto-regular mb-2"><strong>Who Should Drink It?</strong> Individuals managing hypertension or high cholesterol. Those seeking a caffeine-free immune boost.</p>
          <a 
            href="https://amzn.to/3QTwxaQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors"
          >
            Buy The Tea Trove Organic Hibiscus Tea Leaves
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-amber-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold  mb-4">Summary</h2>
        <p className=" roboto-regular text-gray-700 mb-4">
          Teas are nature's remedy in a cup, offering targeted benefits for every lifestyle. 
          Green tea fuels metabolism, ginger tea soothes digestion, black tea energizes the mind, 
          and blue tea melts stress. Herbal varieties like chamomile and peppermint add specialized support.
        </p>
        <div className="bg-white p-4 rounded">
          <p className=" roboto-regular font-semibold  mb-2">Pro Tip:</p>
          <p className="roboto-regular">Rotate teas seasonally - iced hibiscus in summer, spiced ginger in winter!</p>
        </div>
      </section>

      {/* Disclosure */}
      <div className=" roboto-regular text-sm text-gray-500 border-t pt-4">
        <p className="roboto-regular">
          Disclosure: This post contains affiliate links. If you purchase through these links, 
          we may earn a small commission at no extra cost to you. Thank you for supporting our blog!
        </p>
      </div>
    </div>
  );
};

export default HealthiestTeas;