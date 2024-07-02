# Usar la imagen oficial de Node.js como imagen base para la construcción
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build --configuration=production

# Usar una imagen base ligera para el servidor web
FROM nginx:alpine

# Copiar los archivos construidos desde la fase de construcción
COPY --from=build /app/dist/app-map /usr/share/nginx/html

# Exponer el puerto en el que se ejecutará el servidor
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]

