# Ethers5


https://docs.ethers.io/v5


## wallet替换传统login


钱包的链接，需要用metamask等插件


connect时候，会唤起metamask


```js
const provider = new ethers.providers.Web3Provider(window.ethereum); // 使用metamask
const signer = provider.getSigner();
let address = null;
signer.getAddress().then(res => { // 获取链接地址
  if(res) {
    address = res;
  } else {
    provider.send("eth_requestAccounts", []).then(res2 => { // 第一次链接需要请求
      address = res2;
    });    
  }
});
console.log(address); / 0xffffffff
```