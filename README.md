# Number Classifier API

## Description
The Number Classifier API takes a number as input and returns interesting mathematical properties about it, along with a fun fact. It determines whether the number is prime, perfect, or an Armstrong number, provides the sum of its digits, and fetches a fun fact from an external API.

## Features
- Accepts GET requests with a `number` parameter.
- Returns JSON responses containing:
  - Number properties (prime, perfect, Armstrong, odd/even).
  - The sum of its digits.
  - A fun fact from the Numbers API.
- Handles CORS (Cross-Origin Resource Sharing).
- Proper error handling and validation for invalid inputs.

## Technology Stack
- **Language**: TypeScript
- **Framework**: Express.js
- **Hosting**: Render.com
- **External API**: Numbers API
- **Version Control**: GitHub

## API Endpoint
### Classify a Number
**Endpoint:** `GET /api/classify-number?number={value}`

#### Example Request
```
GET https://your-deployed-url.com/api/classify-number?number=1634
```

#### Example Response (200 OK)
```json
{
    "number": 1634,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "even"
    ],
    "digit_sum": 14,
    "fun_fact": "1634 is a narcissistic number."
}
```

#### Example Response (400 Bad Request)
```json
{
  "number": "cow",
  "error": true
}
```

## Project Structure
```
hng-number-classifier-api/
│── src/
│   ├── controllers/
│   │   ├── classifyNumberController.ts
│   ├── routes/
│   │   ├── classifyNumberRoutes.ts
│   ├── services/
│   │   ├── classifyNumberService.ts
│   ├── utils/
│   │   ├── numberUtils.ts
│   ├── index.ts
│── .env
│── .gitignore
│── package.json
│── tsconfig.json
│── README.md
```

## Installation & Running Locally

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn

### Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/Ken-Obieze/hng-number-classifier-api.git
   cd hng-number-classifier-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Create `.env` file**
   ```
   PORT=3000
   ```

4. **Start the server**
   ```sh
   npm run dev
   ```
   The API will run on `http://localhost:3000`.
