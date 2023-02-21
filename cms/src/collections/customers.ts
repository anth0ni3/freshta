import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'customername',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'customername',
      type: 'text',
    },
  ],
}

export default Customers
