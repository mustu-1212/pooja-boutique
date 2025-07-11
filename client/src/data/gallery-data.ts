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
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Floral Short Kurti', price: '₹1,999', originalPrice: '₹2,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Embroidered Short Kurti', price: '₹2,499', originalPrice: '₹3,499', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Casual Short Kurti', price: '₹1,799', originalPrice: '₹2,499', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Short Kurti', price: '₹2,799', originalPrice: '₹3,999', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Printed Short Kurti', price: '₹1,699', originalPrice: '₹2,299', sizes: ['S', 'M', 'L', 'XL'] },
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Ethnic Short Kurti', price: '₹2,199', originalPrice: '₹3,199', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
    ]
  },
  'long-kurtis': {
    title: 'Long Kurtis Collection',
    images: [
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Elegant Long Kurti' },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Traditional Long Kurti' },
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Long Kurti' },
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Formal Long Kurti' },
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Festive Long Kurti' },
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Embroidered Long Kurti' }
    ]
  },
  'suit-sets': {
    title: 'Suit Sets Collection',
    images: [
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Suit Set' },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Traditional Suit Set' },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Embroidered Suit Set' },
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Casual Suit Set' },
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Formal Suit Set' },
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Party Suit Set' }
    ]
  },
  'tops': {
    title: 'Tops Collection',
    images: [
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Stylish Top' },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Top' },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Casual Top' },
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Ethnic Top' },
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Contemporary Top' },
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Party Top' }
    ]
  },
  'coord-sets': {
    title: 'Co-ord Sets Collection',
    images: [
      { src: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Vibrant Co-ord Set' },
      { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Matching Co-ord Set' },
      { src: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Designer Co-ord Set' },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Casual Co-ord Set' },
      { src: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Formal Co-ord Set' },
      { src: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500', alt: 'Party Co-ord Set' }
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
