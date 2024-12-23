# Undefined ethereum.selectedAddress in MetaMask

This repository demonstrates a common issue encountered when working with MetaMask in decentralized applications (dApps).  The problem arises when attempting to access `ethereum.selectedAddress` even after confirming the wallet is connected; it sometimes returns `undefined`, leading to unexpected errors.

The `bug.js` file contains the problematic code snippet, while `bugSolution.js` offers a robust solution.

## Problem

The provided `checkIfWalletIsConnected` function aims to verify the connection and log the user's selected address. However, in certain scenarios, `ethereum.selectedAddress` remains undefined, although the user has successfully connected their MetaMask wallet.

## Solution

The solution addresses the issue by handling the asynchronous nature of MetaMask's connection events. It uses an event listener to wait for the `accountsChanged` event, ensuring that `ethereum.selectedAddress` is reliably populated before proceeding.