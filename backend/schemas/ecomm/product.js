export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'smallDetails',
      title: 'Small Details',
      type: 'string',
    },
    {
      name: 'popular',
      title: 'Popular',
      type: 'string',
    },
    {
      name: 'youtubeString',
      title: 'Youtube',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'feature',
      title: 'Feature',
      type: 'boolean',
    },
  ],
}
