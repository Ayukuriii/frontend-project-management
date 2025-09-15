import network from '@/utils/network';

const auth = {
  // login
  login(payload) {
    return network.post('v1/auth/login', payload);
  },
};

export default auth;
