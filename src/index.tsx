import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import CollapsePanel from './components/Aa'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import {Checkbox} from 'antd'

import DataChart from './components/DataChart';

const tableConf = {
  //rowKey: 'key',
  // onChange: () => {
  //   console.log('handleChange');
  // },
  chart:{
    type: 'list',
    dataSource: [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      },
      {
        key: '3',
        name: '胡彦黑',
        age: 92,
        address: '西湖区湖底公园1号'
      },
      {
        key: '4',
        name: '胡彦哈',
        age: 22,
        address: '西湖区湖底公园1号'
      },
      {
        key: '5',
        name: '胡彦额',
        age: 45,
        address: '西湖区湖底公园1号'
      }
    ],
    theme:{}
  },
  
  // columns: [
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name'
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age'
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address'
  //   }
  // ]
};

// stories.add('去除分页', () => {
//   return <DataTable {...tableConf} dataSource={[]} pagination={false} />;
// });

// stories.add('默认排序(order同antd)', () => {
//   const defaultSort = {
//     columnKey: 'age',
//     order: 'descend'
//   };
//   return <DataTable {...tableConf} dataSource={[]} defaultSort={defaultSort} />;
// });

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
    <DataChart {...tableConf} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
