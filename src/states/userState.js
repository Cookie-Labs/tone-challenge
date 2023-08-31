import { atom, selector } from 'recoil';

export const userAccount = atom({
  key: 'userState/userAccount',
  default: sessionStorage.getItem('_user'),
});

export const userNetworkType = atom({
  key: 'userState/userNetworkType',
  default: sessionStorage.getItem('_networkType'),
});

export const userWeb3State = selector({
  key: 'userState/currentWeb3User',
  get: ({ get }) => {
    const account = get(userAccount);
    const networkType = get(userNetworkType);

    return { account, networkType };
  },
});
