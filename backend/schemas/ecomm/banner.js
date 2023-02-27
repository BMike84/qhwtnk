export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText1',
      title: 'ButtonText1',
      type: 'string',
    },
    {
      name: 'buttonText2',
      title: 'ButtonText2',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
  ],
}
