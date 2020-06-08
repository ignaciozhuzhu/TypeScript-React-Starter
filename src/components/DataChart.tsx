import * as React from 'react';
import Table, {ColumnProps, TableProps} from 'antd/es/table';
import {List} from 'antd';

interface Ichart{
    type?: string;
    dataSource: any;
    theme?: any;
    option?: any;
}

interface DataChartProps<T> {
  chart: Ichart;
}

export default class DataChart<T> extends React.Component<DataChartProps<T>> {
  render() {
    let {chart:{dataSource}} = this.props;
    console.log(44,this.props)
    //@ts-ignore
    return (<List
       // className={style.switchLogMod}
        itemLayout='horizontal'
        dataSource={dataSource}
        renderItem={(item, index) => {
          return (
            <List.Item
              //className={index % 2 !== 0 ? style['zebra-highlight'] : ''}
              >
              <List.Item.Meta
              //@ts-ignore
                avatar={item.name}
                //@ts-ignore
                name={item.name}
                //@ts-ignore
                description={item.address}
              />
            </List.Item>
          );
        }}
      />);
  }
}