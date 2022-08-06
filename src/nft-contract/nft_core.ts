// @ts-nocheck
import { assert, bytes, near } from "near-sdk-js";
import { Contract, NFT_METADATA_SPEC, NFT_STANDARD_NAME } from ".";
import { assertOneYocto, internalAddTokenToOwner, internalRemoveTokenFromOwner, internalTransfer, refundDeposit, refundApprovedAccountIds } from "./internals";
import { JsonToken, Token, TokenMetadata } from "./metadata";

const GAS_FOR_RESOLVE_TRANSFER = 40_000_000_000_000;
const GAS_FOR_NFT_ON_TRANSFER = 35_000_000_000_000;

//get the information for a specific token ID
export function internalNftToken(
    contract: Contract, 
    tokenId: string, 
) {
    /*
        FILL THIS IN
    */
}

//implementation of the nft_transfer method. This transfers the NFT from the current owner to the receiver. 
export function internalNftTransfer(
    contract: Contract,
    receiverId: string, 
    tokenId: string, 
    memo: string
) {
    /*
        FILL THIS IN
    */
}

//implementation of the transfer call method. This will transfer the NFT and call a method on the receiver_id contract
export function internalNftTransferCall(
    contract: Contract,
    receiverId: string, 
    tokenId: string, 
    memo: string,
    msg: string
) {
    /*
        FILL THIS IN
    */
}

//resolves the cross contract call when calling nft_on_transfer in the nft_transfer_call method
//returns true if the token was successfully transferred to the receiver_id
export function internalResolveTransfer(
    contract: Contract,
    ownerId: string,
    receiverId: string,
    tokenId: string,
) {
    /*
        FILL THIS IN
    */
}