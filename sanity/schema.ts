import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "post",
      title: "News",
      fields: [
        {
          type: "string",
          name: "category",
          title: "Category"
        },
        {
          type: "string",
          name: "title",
          title: "Title"
        },
        {
          type: "string",
          name: "likes",
          title: "Likes"
        },
        {
          type: "string",
          name: "website",
          title: "Website"
        },
        {
          type: "string",
          name: "url",
          title: "Url"
        },
        {
          type: "string",
          name: "photo",
          title: "Photo"
        }
      ]
    }
  ],
}
