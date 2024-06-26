import { ccc } from "@ckb-ccc/ccc";
import { html } from "lit";
import { RETRY_SVG } from "../assets/retry.svg";
import { WalletWithSigners } from "../types";

export function generateConnectingScene(
  wallet: WalletWithSigners,
  signer: ccc.SignerInfo,
  error: string | undefined,
  onSignerSelected: (
    wallet: WalletWithSigners,
    signer: ccc.SignerInfo,
  ) => unknown,
) {
  return [
    wallet.name,
    html`
      <img
        class="connecting-wallet-icon mb-1"
        src=${wallet.icon}
        alt=${wallet.name}
      />
      <span class="text-bold"
        >${error
          ? `Failed to open ${wallet.name}`
          : `Opening ${wallet.name}...`}</span
      >
      <span class="text-tip text-center"
        >${error ?? "Confirm connection in the wallet"}</span
      >
      <button
        class="btn-secondary mt-2 mb-2"
        @click=${() => onSignerSelected(wallet, signer)}
      >
        <img src=${RETRY_SVG} alt="retry" />
        Try again
      </button>
    `,
  ];
}
