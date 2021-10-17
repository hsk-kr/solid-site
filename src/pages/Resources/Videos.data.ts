import { Resource, ResourceCategory, ResourceType } from '../Resources';

const videos: Array<Resource> = [
  {
    link: 'https://www.youtube.com/watch?v=wu6HvLoi9VQ',
    title: 'How To Convert React Application To SolidJS',
    description: 'Maksim Ivanov walks us through Solid.js and how to use it.',
    author: 'Maksim Ivanov',
    author_url: 'https://www.youtube.com/user/satansdeer1',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628532062000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Dq5EAcup044',
    title: 'UI Libraries, Improving React.js & Music, with Ryan Carniato, Solid.js Creator',
    description: '',
    author: 'Jakub Neander',
    author_url: 'https://github.com/zaiste',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1616544000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P8iGK8zYzns',
    title: 'Solid.js - A Fast, Declarative, Compiled Web UI Library - Better than React.js?',
    description:
      'Zaiste Programming discusses three things that makes Solid.js and Snowpack great.',
    author: 'Jakub Neander',
    author_url: 'https://github.com/zaiste',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1615593600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=p8e9ta269x8',
    title: 'React to Solid - Stream With Ryan Carniato',
    description:
      'Maksim Ivanov and Ryan Carniato take an existing React application and try to rewrite it using the Solid framework.',
    author: 'Maksim Ivanov',
    author_url: 'https://www.youtube.com/user/satansdeer1',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1617062400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=-CymMzGwzP8',
    title: 'Looking at solid.js',
    description: "Looking at solid.js, a new library for reactive web UI's.",
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1601164800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P-AGz3U8lFY',
    title: 'Learning SolidJS',
    description:
      'Alex takes a first look, building a color transformation tool and dad joke search app in the process.',
    keywords: [''],
    author: 'uidotdev',
    author_url: 'https://www.youtube.com/channel/UCbAn7pVK2VIyo-UysfWGdZQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1625011200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=_ne2BsvFBH0',
    title: 'Solid.js - the NEXT React? In-depth code analysis.',
    description:
      "A super in-depth code conversation about the inner-workings of Solid.js from a React developer's perspective.",
    keywords: [''],
    author: 'Sawtaytoes',
    author_url: 'https://www.youtube.com/channel/UCDezHlQN79VWarlRgvmim-w',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1625184000000,
  },
  {
    link: 'https://www.youtube.com/playlist?list=PLtLhzwNMDs1fMi43erQSzXD49Y4p0TniU',
    title: 'Solid Video Series',
    description:
      'Information for developers who are interested in using the Solid JavaScript UI framework to create a web application.',
    keywords: [''],
    author: 'Eric Schmucker',
    author_url: 'https://www.youtube.com/channel/UCDezHlQN79VWarlRgvmim-w',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: undefined,
  },
  {
    link: 'https://www.youtube.com/watch?v=iyY1lT8-ZDA',
    title: 'The Deep Drive Episode #4 Reactive Frontends',
    description:
      'The Deep Dive delves into reactive front-end frameworks with Lars Gyrup, Brink Nielsen, Kos Palchyk and Ryan Carniato.',
    keywords: ['reactive', 'kos palychyk'],
    author: 'The Deep Dive',
    author_url: 'https://www.youtube.com/channel/UCsZWzmsdKz2VA49XXBK5TQA',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1615939200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=OqcHoLWyyIw',
    title: 'React vs SolidJS, Fight!',
    description: "Let's compare React with the upstart newcomer Solid-JS in an eCommerce showdown!",
    keywords: ['reactive', 'blue', 'jack', 'harrington'],
    author: 'Jack Harrington',
    author_url: 'https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://youtu.be/cuHDQhDhvPE?t=1038',
    title: 'I built the same app 10 times // Which JS Framework is best?',
    description: 'Solid is featured amongst 10 other frameworks and compared.',
    keywords: ['fireship'],
    author: 'Fireship',
    author_url: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=cFasysKU7vk&t=5s',
    title: "React Wednesdays: Let's Learn Solid JS with Ryan Carniato",
    description:
      'On this episode of React Wednesdays we welcome in Ryan Carniato, a member of the Marko team at eBay, and the author of Solid JS.',
    keywords: ['react', 'wednesday'],
    author: 'CodeItLive',
    author_url: 'https://www.telerik.com/react-wednesdays',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=2iK9zzhSKo4&t=69s',
    title: 'React Finland 2021: SolidJS - Reactive JSX',
    description:
      'An introduction to SolidJS UI Library. Explore an example to show the similarity and differences between Hook + Virtual DOM versus Reactivity + DOM.',
    keywords: ['react', 'finland'],
    author: 'React Finland',
    author_url: 'https://react-finland.fi/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1630368000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=PW6Re59Hb-8',
    title: 'AM Coder - SolidJS Todo App for Express/Mongo API',
    description: 'Alex Merced walks us through creating a Solid app with Express and Mongo.',
    keywords: ['express', 'app', 'mongo'],
    author: 'Alex Merced',
    author_url: 'https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Data, ResourceCategory.UI],
    published_at: 1631059200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=LZc2hSghezM&t=57s',
    title: 'Solid + GraphQL = Realtime Magic',
    description:
      "Let's use the Solid-JS framework to create a todo app using queries, mutations and ",
    keywords: ['graphql', 'queries'],
    author: 'Jack Harrington',
    author_url: 'https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Data],
    published_at: 1630886400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=0zadjVUV7zM',
    title: 'Streaming SolidJS - Context, Async, & Suspense',
    description: 'Ryan talks about context, async and suspense.',
    keywords: ['context', 'transitions', 'suspense', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1631894400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=0zadjVUV7zM',
    title: 'Streaming SolidJS - Server Rendering',
    description: 'Ryan talks about Server Rendering with SolidJS Framework',
    keywords: ['ssr', 'streaming', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1632499200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=b9e7VXs_A4s',
    title: 'Fine-Grained Reactivity',
    description:
      'Ryan goes over the topic of fine-grained reactivity based on my article series and answer any questions along the way.',
    keywords: ['fine-grained', 'reactivity', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1631296862000,
  },
  {
    link: 'https://www.youtube.com/watch?v=jnZmG4hyNas',
    title: 'First look at DOM Expressions',
    description: 'Overview of the universal reactive renderer that powers SolidJS.',
    keywords: ['expressions', 'dom', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1630713600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P_attYd04-0',
    title: 'Intro to SolidJS in 20 Minutes',
    description: 'Full stack developer walks through SolidJS is 20 minutes.',
    keywords: ['introduction', 'learning'],
    author: 'Alex Merced',
    author_url: 'https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1633369644000,
  },
  {
    link: 'https://www.youtube.com/watch?v=UPhx3OxUH0w',
    title: 'Streaming SolidJS - First look at Astro',
    description: 'Ryan takes a look at what Astro is all about with Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    keywords: ['astro', 'streaming', 'ryanstream'],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.BuildUtilities],
    published_at: 1633110444000,
  },
  {
    link: 'https://www.youtube.com/watch?v=YxroH_MXuhw',
    title: 'Streaming SolidJS: Routing',
    description:
      "Looks at control flow and routing in Solid and the approach we've taken with Solid App Router.",
    keywords: ['introduction', 'control flow', 'routing', 'stream', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Routers],
    published_at: 1633752000000,
  },
];

export default videos;
