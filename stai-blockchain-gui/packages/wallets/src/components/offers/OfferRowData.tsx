import { type WalletType } from '@stai/api';

type OfferRowData = {
  amount: number | string;
  assetWalletId: number; // 0 if no selection made
  walletType: WalletType;
};

export default OfferRowData;
