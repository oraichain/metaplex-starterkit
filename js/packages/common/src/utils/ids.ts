import { PublicKey, AccountInfo } from '@solana/web3.js';

export type StringPublicKey = string;

export class LazyAccountInfoProxy<T> {
  executable: boolean = false;
  owner: StringPublicKey = '';
  lamports: number = 0;

  get data() {
    //
    return undefined as unknown as T;
  }
}

export interface LazyAccountInfo {
  executable: boolean;
  owner: StringPublicKey;
  lamports: number;
  data: [string, string];
}

const PubKeysInternedMap = new Map<string, PublicKey>();

export const toPublicKey = (key: string | PublicKey) => {
  if (typeof key !== 'string') {
    return key;
  }

  let result = PubKeysInternedMap.get(key);
  if (!result) {
    result = new PublicKey(key);
    PubKeysInternedMap.set(key, result);
  }

  return result;
};

export interface PublicKeyStringAndAccount<T> {
  pubkey: string;
  account: AccountInfo<T>;
}

export const WRAPPED_SOL_MINT = new PublicKey(
  'So11111111111111111111111111111111111111112',
);

export const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);

export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);

export const BPF_UPGRADE_LOADER_ID = new PublicKey(
  'BPFLoaderUpgradeab1e11111111111111111111111',
);

export const MEMO_ID = new PublicKey(
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
);

// from deployment
export const METADATA_PROGRAM_ID =
  '8agSb3y2mjyr2HA8A4HnHBgVd5kW1r3EtJKU1XFV2Cvc' as StringPublicKey;

export const VAULT_ID =
  '73T4PJEEKgpnjfXKoQJ2bYXpYogfyoWRTmpGvTWtVDHJ' as StringPublicKey;

export const AUCTION_ID =
  'EKGBv6oUfVmyTPKRPP6ZshPB6HqUkKWvFTKkPEHWhFjb' as StringPublicKey;

export const METAPLEX_ID =
  '3n66vCrDf3R7pieGewJ82ryQbSvgF7rtEve8ZyV6G5c3' as StringPublicKey;

export const SYSTEM = new PublicKey('11111111111111111111111111111111');
