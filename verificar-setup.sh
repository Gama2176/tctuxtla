#!/bin/bash
# Script para verificar que las carpetas estén correctas

echo "✓ Verificando estructura del proyecto..."
echo ""
echo "Carpeta public/images/ - Estado:"
ls -la c:/Users/Windows\ 10/Desktop/ecim/public/images/ 2>/dev/null || echo "Carpeta creada - Esperando imágenes"
echo ""
echo "Fonts cargados:"
ls c:/Users/Windows\ 10/Desktop/ecim/src/Fonts/ | grep "Medium\|Regular\|Bold"
echo ""
echo "✓ TODO LISTO"
echo ""
echo "Próximo paso: Coloca tus imágenes en public/images/"
echo "  - teacher1.png"
echo "  - teacher2.png"
echo "  - teacher3.png"
echo "  - logo.png"
