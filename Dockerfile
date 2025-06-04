# Imagen base oficial de Node.js
FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de tu proyecto al contenedor
COPY package*.json ./
RUN npm install

# Luego copiamos el resto del código
COPY . .

# Exponer el puerto que usa tu app
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]
