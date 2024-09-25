export interface CommentType {
  username: string;
  comment: string;
}

export interface PostType {
  username: string;
  profileThumbnail: string;
  image: string;
  likes: string[];
  shares: number;
  comments: CommentType[];
  caption: string;
}

export const posts: PostType[] = [
  {
    username: 'skywalker2024',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg',
    image: 'https://example.com/posts/skywalker2024_image1.jpg',
    likes: ['artlover99', 'wanderer_bob', 'mountain_queen'],
    shares: 20,
    comments: [
      {
        username: 'artlover99',
        comment: 'Great post!',
      },
      {
        username: 'wanderer_bob',
        comment: 'Awesome picture!',
      },
    ],
    caption: 'Enjoying the sunny day!',
  },
  {
    username: 'sunset_gazer',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
    image: 'https://example.com/posts/sunset_gazer_image1.jpg',
    likes: ['fitness_fanatic'],
    shares: 18,
    comments: [
      {
        username: 'skywalker2024',
        comment: 'Looks amazing!',
      },
    ],
    caption: 'Beautiful sunset at the beach!',
  },
  {
    username: 'photogenius88',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
    image: 'https://example.com/posts/photogenius88_image1.jpg',
    likes: [
      'sunset_gazer',
      'globetrotter_dan',
      'mountain_queen',
      'cat_lover_amy',
      'travel_buddy_sam',
      'nature_freak',
    ],
    shares: 56,
    comments: [],
    caption: 'Loving the new camera!',
  },
  {
    username: 'mountain_queen',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/11.jpg',
    image: 'https://example.com/posts/mountain_queen_image1.jpg',
    likes: [
      'skywalker2024',
      'wanderer_bob',
      'globetrotter_dan',
      'cat_lover_amy',
      'fitness_fanatic',
      'foodie_jen',
      'artist_em',
    ],
    shares: 40,
    comments: [
      {
        username: 'skywalker2024',
        comment: 'Incredible shot!',
      },
      {
        username: 'wanderer_bob',
        comment: 'Wow! So beautiful!',
      },
    ],
    caption: 'Exploring the mountains!',
  },
  {
    username: 'park_enthusiast',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/86.jpg',
    image: 'https://example.com/posts/park_enthusiast_image1.jpg',
    likes: ['photogenius88', 'skywalker2024', 'adventure_mike'],
    shares: 12,
    comments: [
      {
        username: 'photogenius88',
        comment: 'Nice composition!',
      },
    ],
    caption: 'Just a casual day in the park!',
  },
  {
    username: 'globetrotter_dan',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
    image: 'https://example.com/posts/globetrotter_dan_image1.jpg',
    likes: [
      'mountain_queen',
      'sunset_gazer',
      'travel_buddy_sam',
      'fitness_fanatic',
      'adventure_mike',
    ],
    shares: 72,
    comments: [
      {
        username: 'mountain_queen',
        comment: 'Take me with you next time!',
      },
      {
        username: 'sunset_gazer',
        comment: 'Where is this? Looks amazing!',
      },
    ],
    caption: 'Discovering new places every day!',
  },
  {
    username: 'artist_em',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
    image: 'https://example.com/posts/artist_em_image1.jpg',
    likes: ['globetrotter_dan', 'adventure_mike', 'foodie_jen', 'sunset_gazer'],
    shares: 25,
    comments: [
      {
        username: 'globetrotter_dan',
        comment: 'Your art is stunning!',
      },
    ],
    caption: 'Finished my latest painting today!',
  },
  {
    username: 'adventure_mike',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    image: 'https://example.com/posts/adventure_mike_image1.jpg',
    likes: [
      'travel_guru',
      'beach_babe123',
      'skywalker2024',
      'globetrotter_dan',
      'mountain_queen',
      'sunset_gazer',
      'foodie_jen',
      'artist_em',
      'photogenius88',
    ],
    shares: 47,
    comments: [
      {
        username: 'travel_guru',
        comment: 'This looks so cool!',
      },
      {
        username: 'beach_babe123',
        comment: 'I wish I was there!',
      },
    ],
    caption: 'Hiking through the wild!',
  },
  {
    username: 'foodie_jen',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/women/73.jpg',
    image: 'https://example.com/posts/foodie_jen_image1.jpg',
    likes: [
      'chef_master',
      'vegan_king',
      'globetrotter_dan',
      'sunset_gazer',
      'skywalker2024',
      'mountain_queen',
      'adventure_mike',
    ],
    shares: 90,
    comments: [
      {
        username: 'chef_master',
        comment: 'This dish looks delicious!',
      },
      {
        username: 'vegan_king',
        comment: 'Can’t wait to try this!',
      },
    ],
    caption: 'My homemade lasagna! 🍝',
  },
  {
    username: 'citywalker_jim',
    profileThumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
    image: 'https://example.com/posts/citywalker_jim_image1.jpg',
    likes: [
      'urban_explorer',
      'globetrotter_dan',
      'skywalker2024',
      'artist_em',
      'fitness_fanatic',
    ],
    shares: 33,
    comments: [
      {
        username: 'urban_explorer',
        comment: 'Love the city lights!',
      },
    ],
    caption: 'A stroll through the city at night.',
  },
];
