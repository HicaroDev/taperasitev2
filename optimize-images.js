import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

// Imagens do hero que precisam ser otimizadas
const heroImages = ['hero01.png', 'hero02.jpg', 'hero03.jpg'];

async function optimizeImages() {
    console.log('🔧 Otimizando imagens do hero...\n');

    for (const imageName of heroImages) {
        const inputPath = path.join(assetsDir, imageName);
        const outputName = imageName.replace(/\.(png|jpg|jpeg)$/, '-optimized.jpg');
        const outputPath = path.join(assetsDir, outputName);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  ${imageName} não encontrada, pulando...`);
            continue;
        }

        try {
            await sharp(inputPath)
                .resize(1920, null, { // Redimensiona para largura máxima de 1920px
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({
                    quality: 80, // Qualidade de 80% (boa qualidade com compressão)
                    progressive: true // JPEG progressivo carrega mais rápido
                })
                .toFile(outputPath);

            const originalSize = fs.statSync(inputPath).size;
            const optimizedSize = fs.statSync(outputPath).size;
            const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

            console.log(`✅ ${imageName} -> ${outputName}`);
            console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`   Otimizada: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`   Redução: ${reduction}%\n`);
        } catch (error) {
            console.error(`❌ Erro ao otimizar ${imageName}:`, error.message);
        }
    }

    console.log('🎉 Otimização concluída!');
}

optimizeImages();
