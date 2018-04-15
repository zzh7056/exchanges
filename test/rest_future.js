const { testRest } = require('./utils');

const exchanges = ['okex'];// , 'okex'. 'hitbtc', 'bittrex'
const tasks = [
  // {
  //   fn: 'order',
  //   params: {
  //     pair: 'BTC-USDT',
  //     amount: 0.0012,
  //     price: 7155,
  //     side: 'BUY',
  //     type: 'MARKET'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'fastOrder',
  //   params: {
  //     pair: 'ETH-BTC',
  //     amount: 0.02,
  //     price: 0.05,
  //     side: 'BUY',
  //     type: 'LIMIT'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'cancelAllOrders',
  //   params: {},
  //   name: '取消正在执行中的订单'
  // },
  // {
  //   fn: 'activeOrders',
  //   params: {},
  //   name: '正在执行中的订单'
  // },
  // {
  //   fn: 'orderInfo',
  //   params: {
  //     pair: 'ETH-BTC',
  //     order_id: '5ab781719dda152895660f43',
  //     side: 'BUY'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'cancelOrder',
  //   params: {
  //     pair: 'ETH-BTC',
  //     side: 'BUY',
  //     order_id: '5ab781719dda152895660f43'
  //   },
  //   name: '取消交易'
  // },
  // {
  //   fn: 'pairs',
  //   params: {},
  //   name: '交易对信息'
  // },
  // {
  //   fn: 'coins',
  //   params: {},
  //   name: '币信息'
  // },
  // {
  //   fn: 'futureKline',
  //   params: { pair: 'ETH-USD' },
  //   name: '期货k线图'
  // },
  // {
  //   fn: 'ticks',
  //   params: { pair: 'ETH-BTC' },
  //   name: 'ticks数据'
  // },
  // {
  //   fn: 'balances',
  //   params: {},
  //   name: '账户余额'
  // },
// {
//   fn: 'depth',
//   params: { pair: 'ETH-BTC' },
//   name: '深度'
// }, {
//   fn: 'orderBook',
//   params: { pair: 'ETH-BTC' },
//   name: 'orderBook数据'
// },
// {
//   fn: 'moveBalance',
//   params: { source: 'future', target: 'spot', coin: 'BTC', amount: 0.0019 },
//   name: '移动资金'
// },
  // {
  //   fn: 'futureOrder',
  //   params: {
  //     pair: 'BTC-USDT',
  //     contract_type: 'quarter',
  //     lever_rate: 10,
  //     side: 'SELL',
  //     direction: 'up',
  //     amount: 1,
  //     type: 'LIMIT',
  //     price: 8333,
  //   },
  //   name: '购买期货'
  // },
  {
    fn: 'futureOrderInfo',
    params: {
      order_id: '594942061259776',
      contract_type: 'quarter',
      pair: 'BTC-USDT',
    }
  },
  // {
  //   fn: 'cancelFutureOrder',
  //   params: {
  //     order_id: '594942061259776',
  //     contract_type: 'quarter',
  //     pair: 'BTC-USDT',
  //   },
  //   name: '清空期货'
  // }
];

testRest(exchanges, tasks);
