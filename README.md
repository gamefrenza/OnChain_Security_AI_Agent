# OnChain Security AI Agent

A sophisticated blockchain security monitoring system that uses artificial intelligence to detect and prevent potential security threats in real-time.

## 🚀 Features

- **Threat Detection**: Real-time monitoring of suspicious onchain activities
- **Smart Contract Analysis**: Automated vulnerability scanning
- **Risk Scoring**: Dynamic risk assessment for addresses and transactions
- **Real-Time Alerts**: Instant notifications via multiple channels
- **Onchain Forensics**: Transaction tracing and fund flow analysis
- **DAO Governance**: Community-driven security parameter adjustments

## 🏗 Architecture

### Frontend
- React-based dashboard
- Wallet integration via ethers.js
- Real-time transaction monitoring
- Risk visualization

### Backend
- Node.js + TypeScript
- GraphQL integration
- AI model integration
- MongoDB database

### Smart Contracts
- Security alert logging
- DAO governance
- Multi-chain support

## 📁 Project Structure

## 🛠 Prerequisites

- Node.js (v16+)
- MongoDB
- Python 3.8+ (for AI models)
- MetaMask or compatible Web3 wallet

## 📦 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/onchain-security-ai-agent.git
    cd onchain-security-ai-agent
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

4. Set up environment variables as per the `.env.example` files in both `backend` and `frontend` directories.

5. Start the development servers:

    - Backend:

        ```bash
        cd backend
        npm run dev
        ```

    - Frontend:

        ```bash
        cd ../frontend
        npm start
        ```

## 📈 Usage

- Access the React dashboard at `http://localhost:3000`.
- Connect your Web3 wallet using MetaMask.
- Monitor real-time transactions and receive security alerts.

## 🧪 Testing

- Backend tests can be run using:

    ```bash
    cd backend
    npm test
    ```

- Frontend tests can be run using:

    ```bash
    cd frontend
    npm test
    ```

## 🔒 Security

This project takes security seriously. Ensure all dependencies are regularly updated and follow best practices for smart contract development and deployment.

## 🤝 Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bugs.

## 📄 License

This project is licensed under the MIT License.
