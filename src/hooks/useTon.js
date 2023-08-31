import { Address } from 'ton';

export default function useTon() {
  async function getWallet(_walletAddress) {
    const wallet = Address.parse(_walletAddress);
    return wallet;
  }

  async function getCollection(_collectionAddress) {
    const collection = Address.parse(_collectionAddress);
    return collection;
  }

  return { getWallet, getCollection };
}
