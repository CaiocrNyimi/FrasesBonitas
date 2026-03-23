# 📖 FrasesBonitas

Um aplicativo simples em React Native + TypeScript que exibe frases bonitas, com integração ao Firebase para armazenamento e gerenciamento dos dados.

# 🚀 Funcionalidades

- Exibição de frases inspiradoras em formato de cards.
- Botão de reload para gerar uma nova frase.
- Estrutura modular com components e assets.
- Configuração de Firebase para persistência de dados.
- Tipagem forte com TypeScript para maior segurança no código.

# 📂 Estrutura do Projeto

```
FrasesBonitas/
├── assets/                # Arquivos estáticos (imagens, ícones, etc.)
├── components/            # Componentes reutilizáveis da aplicação
├── types/                 # Definições de tipos (ex: frase, firebase)
├── App.tsx                # Arquivo principal da aplicação
├── app.json               # Configurações do projeto
├── firebaseConfig.ts      # Configuração do Firebase
├── index.ts               # Ponto de entrada
├── package.json           # Dependências e scripts
├── package-lock.json      # Lock das dependências
└── .gitignore             # Arquivos ignorados pelo Git
```

# 🛠️ Tecnologias Utilizadas

- React Native
- TypeScript
- Firebase

# 📦 Instalação e Uso

1. Clone o repositório:
```bash
  git clone https://github.com/CaiocrNyimi/FrasesBonitas.git
```

2. Instale as dependências:
```bash
  npm install
```

3. Configure o Firebase:
   - Crie um projeto no Firebase Console;

   - Crie um .env declarando os valores com base no seu Firestore:
      - FIREBASE_API_KEY
      - FIREBASE_AUTH_DOMAIN
      - FIREBASE_PROJECT_ID
      - FIREBASE_STORAGE_BUCKET
      - FIREBASE_MESSAGING_SENDER_ID
      - FIREBASE_APP_ID
      - FIREBASE_MEASUREMENT_ID
   

4. Execute o app:
```bash
npm start
```
