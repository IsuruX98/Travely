import React from "react";

const HiddenPlaces = () => {
  return (
    // <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
    //   <p className="uppercase text-5xl">
    //     get a brief about Hidden beauties in srilanka
    //   </p>
    //   {/* first */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   {/* second */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //   </div>
    // </div>
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
      <p class="uppercase text-5xl">
        get a brief about Hidden beauties in srilanka
      </p>
      {/* <!-- first --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
          alt=""
        ></img>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Sembuwaththa Lake</p>
          <p>
            Sembuwatta Lake is a stunning man-made lake located in the hill
            country of Sri Lanka, near the town of Elkaduwa in the Matale
            District. The lake is situated around 1,150 meters above sea level
            and is surrounded by lush green hills covered with tea plantations,
            eucalyptus trees, and dense forest. The Sembuwatta Lake was created
            by building a dam across the Sembuwatta River, which flows through a
            {/* deep gorge. The lake covers an area of approximately 9.2 hectares
            and has a maximum depth of around 18 meters. The water in the lake
            is crystal clear and has a bluish-green tint, which makes it a
            popular destination for swimming and boating. In addition to its
            natural beauty, Sembuwatta Lake is also a popular picnic spot and
            tourist attraction in Sri Lanka. Visitors can enjoy a variety of
            activities at the lake, including boating, fishing, swimming, and
            hiking in the surrounding hills. There are also several small
            waterfalls and streams that flow into the lake, creating a
            picturesque landscape. One of the main attractions at Sembuwatta
            Lake is the wooden bridge that spans the lake, offering stunning
            views of the surrounding hills and tea plantations. The bridge is
            also a popular spot for taking photographs, especially during
            sunrise and sunset. Overall, Sembuwatta Lake is a beautiful and
            peaceful destination in Sri Lanka that offers a perfect getaway from
            the hustle and bustle of city life. It is a must-visit location for
            nature lovers and those seeking a serene and tranquil atmosphere. */}
          </p>
        </div>
      </div>
      {/* <!-- second --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div class="md:order-last">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/IMG_9666.JPG?alt=media&token=8be80c0f-0646-4f38-b468-43eb95c3b54b"
            alt=""
          ></img>
        </div>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Hulangala</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            fugiat cupiditate quas vitae, ducimus saepe quos voluptatibus,
            accusantium qui voluptates earum voluptatum. Consequuntur alias
            beatae laborum neque quisquam, quae sit, inventore maxime sed
            eligendi aliquid a cum voluptatum nostrum deleniti cumque minima ab
            ullam impedit eveniet nulla sequi quis odit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;
