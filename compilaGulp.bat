@echo off
echo LIMPEZA + IMAGENS
cd /d %~dp0
npm run gulp sass && npm run gulp js && npm run gulp images
pause
