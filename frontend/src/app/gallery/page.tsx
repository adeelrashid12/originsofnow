import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function Gallery() {
  const extractedDir = path.join(process.cwd(), 'public', 'assets', 'extracted');
  let files: string[] = [];
  
  try {
    // PDF images
    if (fs.existsSync(extractedDir)) {
        const rootFiles = fs.readdirSync(extractedDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
        files = [...rootFiles];
    }
    
    // PPTX images
    const pptDir = path.join(extractedDir, 'ppt', 'media');
    if (fs.existsSync(pptDir)) {
      const pptFiles = fs.readdirSync(pptDir).filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'));
      // Prefix with the folder path for the src tag
      files = [...files, ...pptFiles.map(f => `ppt/media/${f}`)];
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-2">Extracted Client Assets</h1>
      <p className="mb-8 text-gray-500">Check which image looks best for Kangen and emGuarde.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {files.map((file, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <p className="text-xs font-mono font-bold text-blue-600 mb-2 truncate" title={file}>
              {file.split('/').pop()}
            </p>
            <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex-1">
              {/* Using standard img tag to avoid Next.js domain/config issues just in case */}
              <img src={`/assets/extracted/${file}`} alt={file} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
