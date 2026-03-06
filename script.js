let wallet = null;

async function connectWallet() {

if (window.solana && window.solana.isPhantom) {

try {

const resp = await window.solana.connect();
wallet = resp.publicKey.toString();

alert("Wallet Connected: " + wallet);

} catch (err) {

alert("Wallet connection failed");

}

} else {

alert("Phantom Wallet not found. Install it.");

}

}



async function buyAsset(price){

if(!wallet){

alert("Connect wallet first");

return;

}

alert("Buying asset for " + price + " SOL");

}
