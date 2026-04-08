# 🚀 Entrega Final Backend

Proyecto backend desarrollado con Node.js, Express y MongoDB, que incluye generación de datos mock, adopción de mascotas, documentación con Swagger, tests funcionales y dockerización completa.

---

## 📌 Tecnologías utilizadas

* Node.js
* Express
* MongoDB + Mongoose
* Swagger (Documentación API)
* Mocha + Chai + Supertest (Testing)
* Docker

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/GaboGonza78/ENTREGA-N1.git
cd ENTREGA-N1
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` en la raíz:

```env
MONGO_URL=tu_string_de_conexion_mongo
```

4. Ejecutar el servidor:

```bash
npm run dev
```

---

## 🌐 Endpoints principales

### 🧪 Mocking

* GET `/api/mocks/mockingusers`
* GET `/api/mocks/mockingpets`
* POST `/api/mocks/generateData`

### 👤 Users

* GET `/api/users`
* GET `/api/users/:uid`
* POST `/api/users`
* PUT `/api/users/:uid`
* DELETE `/api/users/:uid`

### 🐾 Adoptions

* GET `/api/adoptions`
* POST `/api/adoptions/:uid/:pid`

---

## 📄 Documentación Swagger

Disponible en:

```
http://localhost:3000/api/docs
```

---

## 🧪 Tests

Ejecutar tests funcionales:

```bash
npm test
```

Incluyen:

* Casos de éxito
* Casos de error
* Validación de endpoints de adopción

---

## 🐳 Docker

### 🔧 Construir imagen

```bash
docker build -t entrega-backend .
```

### ▶️ Ejecutar contenedor

```bash
docker run -p 3000:3000 entrega-backend
```

O si el puerto está ocupado:

```bash
docker run -p 3001:3000 entrega-backend
```

---

## ☁️ Imagen en DockerHub

👉 https://hub.docker.com/r/gabo78/entrega-backend

---

## 👨‍💻 Autor

Gabriel González
Proyecto académico - Backend

---
