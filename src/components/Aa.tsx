import React, {Component} from 'react';
import {Collapse} from 'antd';
//@ts-ignore
import { FormItem } from 'mcf-components'
//import './index.less';

//const FormItem = Form.Item;
const Panel = Collapse.Panel;

interface CollapsePanelState {
  active: boolean;
}

interface CollapsePanelProps {
  title: string;
  renderable: boolean | Function;
  control: React.ReactElement;
  children: React.ReactNode;
  closeValues?: any[];
}

interface ICollapsePanel {
  setActiveStatus(): void;
  render(): React.ReactNode;
}
class ModalForm extends React.Component {
  render(){
    return(<FormItem name='sddd'><span>1</span></FormItem>)
  }
}

export default class CollapsePanel
  extends Component<CollapsePanelProps, CollapsePanelState>
  implements ICollapsePanel {
  state={
    active:false
  }
  componentDidMount() {
    this.setActiveStatus();
  }
  setActiveStatus(): void {
    const {control} = this.props;
    this.setState({
      active: this.isExtraIsReactDom(control) ? this.fieldValueChange() : true
    });
  }
  fieldValueChange(): boolean {
    const {formRef} = this.context;
    console.log(1,formRef)
    const {control, closeValues} = this.props;
    /**
     * closeValues 关闭值数组【默认为空数组】
     * 若closeValues 传入则判断值是否在该数组中 存在则返回false
     * 若未传入则值转boolean
     */
    return closeValues && closeValues.length
      ? closeValues.filter(
          it => it === formRef.getFieldValue(control.props.name)
        ).length === 0
      : Boolean(formRef.getFieldValue(control.props.name));
  }
  isExtraIsReactDom(extra: any): boolean {
    return typeof extra === 'object' && typeof extra.$$typeof === 'symbol';
  }
  renderHeader(): React.ReactElement {
    let {title} = this.props;
    return (
      <div className='CollapsePanel-header'>
        <h5 className='CollapsePanel-title'>
          {title}
          <div className='CollapsePanel-extra'>{this.renderExtra()}</div>
        </h5>
      </div>
    );
  }
  renderExtra() {
    let {control} = this.props;
    return this.isExtraIsReactDom(control)
    //@ts-ignore
      ? React.createElement(FormItem, {}, control)
      : control;
  }
  render() {
    const {children, renderable, ...otherProps} = this.props;
    console.log(8822,this.props)
    const {formRef} = this.context;
    let {active} = this.state;
    let renderProps = true;
    if (
      (typeof renderable === 'boolean' && renderable === false) ||
      (typeof renderable === 'function' &&
        renderable.apply(this, [formRef]) === false)
    ) {
      renderProps = false;
    }
    return renderProps ? (
      //@ts-ignore
      <Panel
        header={this.renderHeader()}
        {...otherProps}
        // @ts-ignore
        isActive={children ? active : false}>
        {children}
      </Panel>
    ) : null;
  }
}