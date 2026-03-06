let wallet = null;

async function connectWallet(){

if(window.solana && window.solana.isPhantom){

const resp = await window.solana.connect();
wallet = resp.publicKey.toString();

alert("Wallet Connected: " + wallet);

}else{

alert("Install Phantom Wallet");

}

}

async function buyAsset(price){

if(!wallet){
alert("Connect Wallet First");
return;
}

alert("Buying asset for " + price + " SOL");

}
