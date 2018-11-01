import * as React from 'react';
import { observer , inject } from 'mobx-react';
import { ITask } from './stores/TodoStore';

interface InnerProps {
	todos?: ITask[];
}

@inject((stores: any) => {
	return { todos: stores.todoStore.list };
})
@observer
class Inner extends React.Component<InnerProps> {
  public render() {
		const { todos } = this.props;
    return (
			<div>
				{todos!.map((item: ITask) => '- -')}
			</div>
    );
  }
}

export default Inner;
