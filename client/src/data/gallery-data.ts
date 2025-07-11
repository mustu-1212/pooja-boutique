export interface GalleryImage {
  src: string;
  alt: string;
  price?: string;
  originalPrice?: string;
  sizes?: string[];
}

export interface GalleryCategory {
  title: string;
  images: GalleryImage[];
}

export const galleryData: Record<string, GalleryCategory> = {
  'short-kurtis': {
    title: 'Short Kurtis Collection',
    images: [
      { src: '/kurti1.webp', alt: 'Blue Floral Print Kurti', price: '₹1,999', originalPrice: '₹2,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti2.png', alt: 'Black Embroidered Kurti', price: '₹2,499', originalPrice: '₹3,499', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: '/kurti3.png', alt: 'Green White Work Kurti', price: '₹1,799', originalPrice: '₹2,499', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti4.png', alt: 'Pink Paisley Print Kurti', price: '₹2,199', originalPrice: '₹3,199', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti5.png', alt: 'Cream Embroidered Kurti', price: '₹2,299', originalPrice: '₹3,299', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti6.png', alt: 'Pink Designer Kurti', price: '₹2,799', originalPrice: '₹3,999', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  },
  'long-kurtis': {
    title: 'Long Kurtis Collection',
    images: [
      { src: '/kurti1.webp', alt: 'Blue Floral Print Long Kurti', price: '₹2,499', originalPrice: '₹3,499', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti2.png', alt: 'Black Embroidered Long Kurti', price: '₹2,999', originalPrice: '₹4,199', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: '/kurti3.png', alt: 'Green White Work Long Kurti', price: '₹2,299', originalPrice: '₹3,299', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti4.png', alt: 'Pink Paisley Print Long Kurti', price: '₹2,699', originalPrice: '₹3,899', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti5.png', alt: 'Cream Embroidered Long Kurti', price: '₹2,799', originalPrice: '₹3,999', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  },
  'suit-sets': {
    title: 'Suit Sets Collection',
    images: [
      { src: '/kurti2.png', alt: 'Black Embroidered Suit Set', price: '₹3,499', originalPrice: '₹4,999', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: '/kurti1.webp', alt: 'Blue Floral Print Suit Set', price: '₹3,299', originalPrice: '₹4,699', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti3.png', alt: 'Green White Work Suit Set', price: '₹2,999', originalPrice: '₹4,299', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti4.png', alt: 'Pink Paisley Print Suit Set', price: '₹3,599', originalPrice: '₹5,199', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti5.png', alt: 'Cream Embroidered Suit Set', price: '₹3,799', originalPrice: '₹5,399', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  },
  'tops': {
    title: 'Tops Collection',
    images: [
      { src: '/kurti3.png', alt: 'Green White Work Top', price: '₹1,299', originalPrice: '₹1,899', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti2.png', alt: 'Black Embroidered Top', price: '₹1,599', originalPrice: '₹2,299', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: '/kurti1.webp', alt: 'Blue Floral Print Top', price: '₹1,199', originalPrice: '₹1,799', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti4.png', alt: 'Pink Paisley Print Top', price: '₹1,399', originalPrice: '₹1,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti5.png', alt: 'Cream Embroidered Top', price: '₹1,499', originalPrice: '₹2,199', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  },
  'coord-sets': {
    title: 'Co-ord Sets Collection',
    images: [
      { src: '/kurti4.png', alt: 'Pink Paisley Co-ord Set', price: '₹2,799', originalPrice: '₹3,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti3.png', alt: 'Green White Work Co-ord Set', price: '₹2,499', originalPrice: '₹3,699', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti2.png', alt: 'Black Embroidered Co-ord Set', price: '₹2,999', originalPrice: '₹4,299', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: '/kurti1.webp', alt: 'Blue Floral Co-ord Set', price: '₹2,599', originalPrice: '₹3,799', sizes: ['S', 'M', 'L', 'XL'] },
      { src: '/kurti5.png', alt: 'Cream Embroidered Co-ord Set', price: '₹2,899', originalPrice: '₹4,199', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  },
  'gowns': {
    title: 'Gowns Collection',
    images: [
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Elegant Evening Gown', price: '₹4,999', originalPrice: '₹7,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Gown', price: '₹6,499', originalPrice: '₹9,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Party Gown', price: '₹3,999', originalPrice: '₹5,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Formal Gown', price: '₹5,499', originalPrice: '₹8,499', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Cocktail Gown', price: '₹3,499', originalPrice: '₹4,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Wedding Gown', price: '₹8,999', originalPrice: '₹12,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Maxi Gown', price: '₹2,999', originalPrice: '₹4,499', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Luxury Gown', price: '₹7,999', originalPrice: '₹11,999', sizes: ['S', 'M', 'L', 'XL'] }
    ]
  }
};
