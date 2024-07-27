import categories from '@/constants/categories.json'

const categoriesLinks = categories.map(({ name, slug }) => ({ name, href: `/category/${slug}` }))

export const links = [{ name: 'Home', href: '/' }, ...categoriesLinks]
