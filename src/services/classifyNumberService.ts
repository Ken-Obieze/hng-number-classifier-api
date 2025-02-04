import axios from "axios";
import { isPrime, isPerfectNumber, digitSum, getNumberProperties } from "../utils/numberUtils";

// Function to classify a number
export async function classifyNumberService(num: number) {
    try {
        const factResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        const funFact = factResponse.data.text;

        return {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfectNumber(num),
            properties: getNumberProperties(num),
            digit_sum: digitSum(num),
            fun_fact: funFact
        };
    } catch (error) {
        throw new Error("Failed to fetch fun fact");
    }
}
