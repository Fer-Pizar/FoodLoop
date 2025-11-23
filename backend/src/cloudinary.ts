import { v2 as cloudinary } from 'cloudinary';

const BASE_FOLDER = process.env.CLOUDINARY_BASE_FOLDER ?? 'foodloop';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function resolveFolder(folder: string): string {
  if (folder.startsWith(BASE_FOLDER)) return folder;

  return `${BASE_FOLDER}/${folder}`.replace(/\/+/g, '/');
}

export const uploadToCloudinary = (
  buffer: Buffer,
  folder: string,
  publicId: string,
): Promise<{ url: string }> => {
  const finalFolder = resolveFolder(folder);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: finalFolder,
        public_id: publicId,
        resource_type: 'image',
        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET || undefined,
      },
      (error, result) => {
        if (error || !result) {
          console.error('Cloudinary upload error:', error);
          return reject(error);
        }
        resolve({ url: result.secure_url });
      },
    );

    stream.end(buffer);
  });
};

export default cloudinary;
