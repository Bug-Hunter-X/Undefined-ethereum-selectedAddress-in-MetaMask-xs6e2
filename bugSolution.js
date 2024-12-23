function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }

  // Event listener for accountsChanged event
  ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      console.log('Wallet is connected', accounts[0]);
    } else {
      console.log('Wallet is disconnected');
    }
  });
  // Check for already connected accounts
  ethereum.request({ method: 'eth_accounts' })
  .then(accounts => {
    if (accounts.length > 0) {
      console.log('Wallet is connected', accounts[0]);
    }
  })
  .catch(error => {
      console.error('Error checking for connected accounts:', error)
  });
} 