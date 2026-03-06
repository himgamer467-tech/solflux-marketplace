let wallet = null;

async function connectWallet() {

if (window.solana && window.solana.isPhantom) {

try {

const resp = await window.solana.connect();
wallet = resp.publicKey;

alert("Wallet Connected: " + wallet.toString());

} catch (err) {

alert("Connection failed");

}

} else {

alert("Install Phantom Wallet");

}

}


async function buyAsset(price){

if(!wallet){

alert("Connect wallet first");
return;

}

const connection = new solanaWeb3.Connection(
solanaWeb3.clusterApiUrl('devnet')
);

const transaction = new solanaWeb3.Transaction().add(

solanaWeb3.SystemProgram.transfer({

fromPubkey: wallet,

toPubkey: new solanaWeb3.PublicKey("6RCLM6SEqRragVLJpvaNhEiH2CEaPUkKCqFrt8q1xPpU"),

lamports: price * solanaWeb3.LAMPORTS_PER_SOL

})

);

transaction.feePayer = wallet;

const { blockhash } = await connection.getLatestBlockhash();

transaction.recentBlockhash = blockhash;

const signed = await window.solana.signTransaction(transaction);

const signature = await connection.sendRawTransaction(signed.serialize());

alert("Transaction sent: " + signature);

}
