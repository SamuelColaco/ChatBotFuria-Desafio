# 🤖 ChatBotFuria

**ChatBotFuria** é um chatbot desenvolvido para o desafio técnico na vaga de assistente de tecnologia da Furia. Desenvolvido com **Node.js**, **WebSocket**, **React (Vite)** e princípios da **Clean Architecture** e **SOLID**. A aplicação oferece comunicação em tempo real entre o usuário e um assistente virtual com respostas pre-feitas utilizando a biblioteca **Natural**.

---

## 📁 Estrutura do Projeto

```
.
├── client/              # Frontend em React + Vite + TypeScript
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── Bot/
│       │   ├── Button/
│       │   ├── Chat/
│       │   ├── Header/
│       │   ├── Input/
│       │   └── User/
│       ├── hooks/
│       │   └── useWebSocket.ts
│       ├── App.css
│       ├── App.tsx
│       ├── global.css
│       └── main.tsx
├── server/              # Backend em Node.js + WebSocket
│   └── src/
│       ├── database/
│       ├── domain/
│       │   ├── entities/
│       │   ├── interfaces/
│       │   └── repositories/
│       ├── gateway/
│       │   └── ChatGateway.ts
│       ├── infra/
│       │   └── providers/
│       │       ├── CreateBcryptHash.ts
│       │       └── CreateClassifierQuestion.ts
│       ├── middleware/
│       ├── useCase/
│       ├── utils/
│       ├── app.ts
│       ├── server.ts
│       └── webSocket.ts
│
```

---

## 🚀 Tecnologias

### Backend

- **Node.js + TypeScript + ExpressJs**
- **WebSocket**
- **Prisma**
- **Zod**
- **Natural**
- **Clean Architecture / SOLID**
- **Entidade principal: `Message`**
  - Campos: `question`, `message`
- **Classificação natural de perguntas**
- **Serviços desacoplados por interfaces**

### Frontend

- **React + Vite**
- **WebSocket client**
- **Estilização responsiva com CSS**
- **Troca de mensagens em tempo real**

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Backend

```bash
npm install
npm run dev

```
o backend será iniciado em `http://localhost:3333`

O servidor será iniciado e escutará conexões WebSocket.

### Frontend

```bash
cd client
npm install
npm run dev
```

O frontend será iniciado em `http://localhost:5173`.

---

## 🔌 Comunicação via WebSocket

- O frontend se conecta ao backend via WebSocket.
- Envio e recebimento de mensagens seguem o modelo:

```ts
type Message = {
  question: string;
  message: string;
};
```

---

## 📚 Arquitetura (Backend)

- `domain/entities` → Entidades de negócio (ex: `Message`)
- `domain/interfaces` → Contratos para serviços e repositórios
- `domain/repositories` → Interfaces para acesso a dados
- `useCase` → Casos de uso (ex: envio, resposta)
- `gateway` → Entrada por WebSocket (`ChatGateway.ts`)
- `infra/providers` → Serviços como hash e classificador

---

## 🛠 Funcionalidades

- ✅ Comunicação em tempo real com WebSocket
- ✅ IA simples com respostas naturais 
- ✅ Estrutura modular seguindo Clean Architecture
- ✅ Estilização responsiva no frontend

---

## 👨‍💻 Autor

Projeto desenvolvido por **Samuel**, estudante de Ciência de Dados para Negócios na UFPB.

---