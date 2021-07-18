import { object, string, mixed } from 'yup';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

export default object({
  image_url: mixed().required('Foto is a required field'),
  name: string().required('Nama is a required field'),
  price: string().required('Harga is a required field'),
  stock: string().required('Stok is a required field'),
});
