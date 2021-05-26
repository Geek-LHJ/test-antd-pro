import { Card } from 'antd';
import { BasicSetup as BasicSetupSortable, DragHandle } from './stories/2 - Presets/Sortable/1-Vertical.story';
import {
  BasicSetup,
  AllFeatures,
  DropIndicator,
  Collapsible,
  RemovableItems,
} from './stories/3 - Examples/Tree/Tree.story';

export default () => {
  return (
    <>
      <Card title="sortable-vertical">
        BasicSetupSortable: <BasicSetupSortable />
        DragHandle: <DragHandle />
      </Card>

      <Card title="tree">
        BasicSetup: <BasicSetup />
        AllFeatures: <AllFeatures />
        DropIndicator: <DropIndicator />
        Collapsible: <Collapsible />
        RemovableItems: <RemovableItems />
      </Card>
    </>
  );
};
