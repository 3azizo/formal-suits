import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // ✅ تحميل القيم من `.env`

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('🔍 Cloudinary API Key:', process.env.CLOUDINARY_API_KEY ? 'تم تحميله ✅' : '❌ لم يتم تحميله');
export default cloudinary;
