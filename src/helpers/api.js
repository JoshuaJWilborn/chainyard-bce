import axios from "axios"
const base = "https://blockchain.info/"
const postfix = "?cors=true"

export function getTransaction(id) {
  return axios
    .get(base + "rawtx/" + id + postfix)
    .then(response => response.data)
}

export function getRecentBlocks() {
  return axios
    .get(base + "latestblocks" + postfix)
    .then(response => response.data.blocks)
}

export function getBlockTransactions(hash) {
  return axios
    .get(base + "rawblock/" + hash + postfix)
    .then(response => response.data.tx)
}
