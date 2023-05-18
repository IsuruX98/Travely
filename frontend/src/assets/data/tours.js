const tours = [
  {
    id: 1,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "chill",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    featured: false,
    number: "T10500",
    route:
      "https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/route1.png?alt=media&token=99974a15-ffab-4900-b805-5da493d16d73",
    dayDetails: [
      {
        day: "1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta itaque delectus iusto maiores nihil nobis? Quasi officiis quo provident ab in laborum nobis ullam porro, a qui vero dolores aut? Sunt deserunt sit expedita sapiente iusto repellendus voluptatem ipsam, recusandae magni culpa provident porro a odio facilis aut praesentium libero dolorem? Magni perferendis quaerat necessitatibus, recusandae repellat modi quidem cupiditate tempore sit eum iure sint nulla qui possimus odit dignissimos illo adipisci explicabo quia harum vero dolore deleniti eveniet molestiae? Voluptatem quam quae laborum at tenetur officiis id adipisci ad aspernatur a sequi soluta quia eos nihil voluptatum iusto, quod vero, fuga placeat totam asperiores, quasi dolores aliquam? Ex quos, et iste praesentium eum aut ut quibusdam sit doloremque nam exercitationem veritatis enim inventore, odit sed hic aliquam ea. Quibusdam iure necessitatibus quos corrupti dignissimos. Quis eveniet nam facilis. Neque ea ipsam a quia ullam repudiandae, distinctio molestiae voluptate doloribus quod consequatur vel ducimus sit nam iusto nemo? Qui quaerat cupiditate sapiente cumque corporis expedita placeat. Tenetur eligendi possimus error dolor illo sit repudiandae minus consequatur laboriosam natus velit, id earum animi ipsa aperiam quis consequuntur quas odio asperiores? Vel excepturi cumque amet quae dignissimos ducimus sint laboriosam! Explicabo.",
      },
      {
        day: "2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta itaque delectus iusto maiores nihil nobis? Quasi officiis quo provident ab in laborum nobis ullam porro, a qui vero dolores aut? Sunt deserunt sit expedita sapiente iusto repellendus voluptatem ipsam, recusandae magni culpa provident porro a odio facilis aut praesentium libero dolorem? Magni perferendis quaerat necessitatibus, recusandae repellat modi quidem cupiditate tempore sit eum iure sint nulla qui possimus odit dignissimos illo adipisci explicabo quia harum vero dolore deleniti eveniet molestiae? Voluptatem quam quae laborum at tenetur officiis id adipisci ad aspernatur a sequi soluta quia eos nihil voluptatum iusto, quod vero, fuga placeat totam asperiores, quasi dolores aliquam? Ex quos, et iste praesentium eum aut ut quibusdam sit doloremque nam exercitationem veritatis enim inventore, odit sed hic aliquam ea. Quibusdam iure necessitatibus quos corrupti dignissimos. Quis eveniet nam facilis. Neque ea ipsam a quia ullam repudiandae, distinctio molestiae voluptate doloribus quod consequatur vel ducimus sit nam iusto nemo? Qui quaerat cupiditate sapiente cumque corporis expedita placeat. Tenetur eligendi possimus error dolor illo sit repudiandae minus consequatur laboriosam natus velit, id earum animi ipsa aperiam quis consequuntur quas odio asperiores? Vel excepturi cumque amet quae dignissimos ducimus sint laboriosam! Explicabo.",
      },
      {
        day: "3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta itaque delectus iusto maiores nihil nobis? Quasi officiis quo provident ab in laborum nobis ullam porro, a qui vero dolores aut? Sunt deserunt sit expedita sapiente iusto repellendus voluptatem ipsam, recusandae magni culpa provident porro a odio facilis aut praesentium libero dolorem? Magni perferendis quaerat necessitatibus, recusandae repellat modi quidem cupiditate tempore sit eum iure sint nulla qui possimus odit dignissimos illo adipisci explicabo quia harum vero dolore deleniti eveniet molestiae? Voluptatem quam quae laborum at tenetur officiis id adipisci ad aspernatur a sequi soluta quia eos nihil voluptatum iusto, quod vero, fuga placeat totam asperiores, quasi dolores aliquam? Ex quos, et iste praesentium eum aut ut quibusdam sit doloremque nam exercitationem veritatis enim inventore, odit sed hic aliquam ea. Quibusdam iure necessitatibus quos corrupti dignissimos. Quis eveniet nam facilis. Neque ea ipsam a quia ullam repudiandae, distinctio molestiae voluptate doloribus quod consequatur vel ducimus sit nam iusto nemo? Qui quaerat cupiditate sapiente cumque corporis expedita placeat. Tenetur eligendi possimus error dolor illo sit repudiandae minus consequatur laboriosam natus velit, id earum animi ipsa aperiam quis consequuntur quas odio asperiores? Vel excepturi cumque amet quae dignissimos ducimus sint laboriosam! Explicabo.",
      },
      {
        day: "4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta itaque delectus iusto maiores nihil nobis? Quasi officiis quo provident ab in laborum nobis ullam porro, a qui vero dolores aut? Sunt deserunt sit expedita sapiente iusto repellendus voluptatem ipsam, recusandae magni culpa provident porro a odio facilis aut praesentium libero dolorem? Magni perferendis quaerat necessitatibus, recusandae repellat modi quidem cupiditate tempore sit eum iure sint nulla qui possimus odit dignissimos illo adipisci explicabo quia harum vero dolore deleniti eveniet molestiae? Voluptatem quam quae laborum at tenetur officiis id adipisci ad aspernatur a sequi soluta quia eos nihil voluptatum iusto, quod vero, fuga placeat totam asperiores, quasi dolores aliquam? Ex quos, et iste praesentium eum aut ut quibusdam sit doloremque nam exercitationem veritatis enim inventore, odit sed hic aliquam ea. Quibusdam iure necessitatibus quos corrupti dignissimos. Quis eveniet nam facilis. Neque ea ipsam a quia ullam repudiandae, distinctio molestiae voluptate doloribus quod consequatur vel ducimus sit nam iusto nemo? Qui quaerat cupiditate sapiente cumque corporis expedita placeat. Tenetur eligendi possimus error dolor illo sit repudiandae minus consequatur laboriosam natus velit, id earum animi ipsa aperiam quis consequuntur quas odio asperiores? Vel excepturi cumque amet quae dignissimos ducimus sint laboriosam! Explicabo.",
      },
      {
        day: "5",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta itaque delectus iusto maiores nihil nobis? Quasi officiis quo provident ab in laborum nobis ullam porro, a qui vero dolores aut? Sunt deserunt sit expedita sapiente iusto repellendus voluptatem ipsam, recusandae magni culpa provident porro a odio facilis aut praesentium libero dolorem? Magni perferendis quaerat necessitatibus, recusandae repellat modi quidem cupiditate tempore sit eum iure sint nulla qui possimus odit dignissimos illo adipisci explicabo quia harum vero dolore deleniti eveniet molestiae? Voluptatem quam quae laborum at tenetur officiis id adipisci ad aspernatur a sequi soluta quia eos nihil voluptatum iusto, quod vero, fuga placeat totam asperiores, quasi dolores aliquam? Ex quos, et iste praesentium eum aut ut quibusdam sit doloremque nam exercitationem veritatis enim inventore, odit sed hic aliquam ea. Quibusdam iure necessitatibus quos corrupti dignissimos. Quis eveniet nam facilis. Neque ea ipsam a quia ullam repudiandae, distinctio molestiae voluptate doloribus quod consequatur vel ducimus sit nam iusto nemo? Qui quaerat cupiditate sapiente cumque corporis expedita placeat. Tenetur eligendi possimus error dolor illo sit repudiandae minus consequatur laboriosam natus velit, id earum animi ipsa aperiam quis consequuntur quas odio asperiores? Vel excepturi cumque amet quae dignissimos ducimus sint laboriosam! Explicabo.",
      },
    ],
    inclusions: [
      "Lorem ipsum dolor sit amet consectetur adipisicing",
      "Lorem ipsum dolor sit amet consectetur ",
      "Lorem ipsum dolor sit amet consectetur adipisicing",
    ],
    exclusions: [
      "Lorem ipsum dolor sit amet consectetur adipisicing",
      "Lorem ipsum dolor sit amet consectetur ",
      "Lorem ipsum dolor sit amet consectetur adipisicing",
    ],
  },
];

export default tours;
