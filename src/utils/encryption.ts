// /src/utils/encryption.ts
import CryptoJS from 'crypto-js';

export const encryptPassword = (password: string) => {
  const encrypted = CryptoJS.AES.encrypt(password, 'secret-key').toString();
  return encrypted;
};

export const decryptPassword = (encryptedPassword: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secret-key');
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
