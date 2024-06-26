import { ccc } from "@ckb-ccc/core";
import { isStandaloneBrowser } from "@joyid/common";
import { BitcoinSigner } from "../btc";
import { CkbSigner } from "../ckb";
import { EvmSigner } from "../evm";

export function getJoyIdSigners(
  client: ccc.Client,
  name: string,
  icon: string,
): ccc.SignerInfo[] {
  if (isStandaloneBrowser() || ccc.isWebview(window.navigator.userAgent)) {
    return [ccc.SignerType.CKB, ccc.SignerType.EVM, ccc.SignerType.BTC].map(
      (type) => ({
        name: type,
        signer: new ccc.SignerAlwaysError(
          client,
          type,
          "JoyID can only be used with standard browsers",
        ),
      }),
    );
  }

  return [
    {
      name: "CKB",
      signer: new CkbSigner(client, name, icon),
    },
    {
      name: "BTC",
      signer: new BitcoinSigner(client, name, icon),
    },
    {
      name: "EVM",
      signer: new EvmSigner(client, name, icon),
    },
    {
      name: "BTC (P2WPKH)",
      signer: new BitcoinSigner(client, name, icon, "p2wpkh"),
    },
    {
      name: "BTC (P2TR)",
      signer: new BitcoinSigner(client, name, icon, "p2tr"),
    },
  ];
}
