/* eslint no-underscore-dangle: 0 */
/* eslint no-bitwise: 0 */
/* eslint no-plusplus: 0 */
import { PublicKey } from '@solana/web3.js';
import Buffer from 'buffer';

const getMultipleAccountsCore = async (connection, keys, commitment, encoding) => {
  const args = connection._buildArgs([keys], commitment, encoding);

  const unsafeRes = await connection._rpcRequest('getMultipleAccounts', args);
  if (unsafeRes.error) {
    throw new Error('failed to get info about account ${unsafeRes.error.message}');
  }

  if (unsafeRes.result.value) {
    const array = unsafeRes.result.value;
    return { keys, array };
  }

  throw new Error();
};

export async function getMultipleAccounts(connection, keys, commitment) {
  const result = await getMultipleAccountsCore(connection, keys, commitment, 'base64');
  const array = result.array
    .map((acc) => {
      if (!acc) {
        return undefined;
      }

      const { data, ...rest } = acc;
      const obj = {
        ...rest,
        data: Buffer.Buffer.from(data[0], 'base64'),
      };
      return obj;
    })
    .filter((_) => _);
  return { keys, array };
}

function readBigUInt64LE(buffer, initialOffset = 0) {
  let offset = initialOffset;
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === undefined || last === undefined) {
    throw new RangeError();
  }
  const lo = first + buffer[++offset] * 2 ** 8 + buffer[++offset] * 2 ** 16 + buffer[++offset] * 2 ** 24;
  const hi = buffer[++offset] + buffer[++offset] * 2 ** 8 + buffer[++offset] * 2 ** 16 + last * 2 ** 24;
  return BigInt(lo) + (BigInt(hi) << BigInt(32));
}

export function parseDipState(buf) {
  const strike = Number(readBigUInt64LE(buf, 8));
  const expiration = Number(readBigUInt64LE(buf, 16));
  const splMint = new PublicKey(buf.slice(24, 56));
  const vaultMint = new PublicKey(buf.slice(56, 88));
  const vaultMintBump = Number(buf.readUInt8(88));
  const vaultSpl = new PublicKey(buf.slice(89, 121));
  const vaultSplBump = Number(buf.readUInt8(121));
  const optionMint = new PublicKey(buf.slice(122, 154));
  const optionBump = Number(buf.readUInt8(154));
  const vaultUsdc = new PublicKey(buf.slice(155, 187));
  const vaultUsdcBump = Number(buf.readUInt8(187));
  const usdcMint = new PublicKey(buf.slice(188, 220));
  return {
    strike,
    expiration,
    splMint,
    vaultMint,
    vaultMintBump,
    vaultSpl,
    vaultSplBump,
    optionMint,
    optionBump,
    vaultUsdc,
    vaultUsdcBump,
    usdcMint,
  };
}
