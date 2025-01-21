import crypto from 'crypto';

/**
 * generate uinque id
 */
export function generateUniqueId(length = 5): Promise<string> {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(3, (err, buffer) => {
            if (err) return reject(err);
            const url = buffer.toString('hex').slice(0, length);
            resolve(url);
        });
    })
}