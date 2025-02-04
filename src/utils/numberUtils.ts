// Function to test if a number is prime
export function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to test if a number is perfect
export function isPerfectNumber(n: number): boolean {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n && n !== 1;
}

// Function to test if a number is Armstrong
export function isArmstrong(n: number): boolean {
    const digits = n.toString().split("").map(Number);
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
    return sum === n;
}

// Function to get the sum of digits of a number
export function digitSum(n: number): number {
    return n.toString().split("").reduce((acc, digit) => acc + Number(digit), 0);
}

// Function toreturn the properties of a number
export function getNumberProperties(n: number): string[] {
    const properties: string[] = [];
    if (isPrime(n)) properties.push("prime");
    if (isPerfectNumber(n)) properties.push("perfect");
    if (isArmstrong(n)) properties.push("armstrong");
    properties.push(n % 2 === 0 ? "even" : "odd");
    return properties;
}
