type FliterData = {
  title: string
  options: any[]
}

export const filterData: FliterData[] = [
  {
    title: 'Category',
    options: ['Clothes', 'Underwear', 'Shoes', 'Bags', 'Accessories'],
  },
  {
    title: 'Type',
    options: [],
  },

  {
    title: 'Gender',
    options: ['Women', 'Men', 'Unisex'],
  },
  {
    title: 'Size',
    options: ['sm', 'md', 'lg', 'xl', 'xxl'],
  },
  {
    title: 'Color',
    options: ['Blue', 'Black', 'Green'],
  },
]
