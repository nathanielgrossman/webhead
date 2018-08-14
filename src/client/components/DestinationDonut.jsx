import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const DestinationDonut = ({internal, external}) => (
  <div id="destination-donut">
    <svg viewBox="0 0 400 400" width="160" height="160">
      <VictoryPie
        standalone={false}
        animate={{duration: 500}}
        renderInPortal={false}
        width={400} height={400}
        data={[
          { x: 'External', y: external}, { x: 'Internal', y: internal }
        ]}
        innerRadius={130} labelRadius={150} radius={200}
        style={{ labels: { fontSize: 0, fill: "white" } }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 30 }}
        x={200} y={200}
        text={internal + ' / ' + external}
      />
    </svg>
    <p>Internal/External Destination</p>
  </div>
)

export default DestinationDonut
