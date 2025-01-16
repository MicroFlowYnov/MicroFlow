/**
 * Getting a random integer between the two given values (included).
 * @param min The min value (0 by default).
 * @param max The max value (10 by default).
 * @returns A random integer.
 */
export function getRandomInt(min = 0, max = 10) {
    return Math.round(Math.random() * (max - min) + min);
}