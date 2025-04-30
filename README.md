# ReactJS ECommerce

Este projeto é uma aplicação front-end desenvolvida em **ReactJS com TypeScript**, consumindo uma API de autenticação baseada no projeto [BaseModelDotnet](https://github.com/yannsmdl/BaseModelDotnet).

## 🔧 Tecnologias Utilizadas

- **ReactJS**
- **TypeScript**
- **Vite**
- **Hooks** (como `useState`, `useEffect`, `useContext`)
- **Context API** para gerenciamento de autenticação e tenant
- **JWT Decode** para interpretação do token
- **React Router** para navegação e redirecionamento

## 🔐 Funcionalidades

- Autenticação via API (login/logout)
- Armazenamento do token JWT e informações do usuário no `localStorage`
- Redirecionamento automático com base na **Role** do usuário
- Roteamento protegido com controle de acesso
- Separação de dashboards conforme permissões
- Separação dos tenants por dominio

## 🧭 Páginas Disponíveis

| Página             | Acesso                                |
|--------------------|----------------------------------------|
| `/login`           | Login                                  |
| `/dashboard`       | Dashboard de **usuário comum**         |
| `/dashboard-manager` | Dashboard de **usuário gerencial**    |
| `/dashboard-admin` | Dashboard de **usuário administrador** |

## 🧭 Páginas em desenvolvimento

| Página             | Acesso                                |
|--------------------|---------------------------------------|
| `/cadastrar-usuario`| Cadastrar usuário                    | -> Deslogado


## 🔁 Redirecionamento por Role

Após o login, o usuário é redirecionado automaticamente para a rota correspondente com base na sua role, recebida no token JWT:

- `Admin` → `/dashboard-admin`
- `Manager` → `/dashboard-manager`
- `User` ou qualquer outro → `/dashboard`

## 🚀 Como rodar o projeto

```bash
# Instale as dependências
npm install

# Rode o projeto
npm run dev


# Acessar a pagina
http://{nome do tenant}.localhost:5173/
- Por exemplo: http://client-a.localhost:5173/