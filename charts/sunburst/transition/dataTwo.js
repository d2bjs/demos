export default {
  root: {
    label: 'root',
    children: [
      {
        label: 'child 1',
        children: [
          {
            label: 'child 1-1',
            size: 20
          },
          {
            label: 'child 1-2',
            children: [
              {
                label: 'child 1-2-1',
                size: 15
              },
              {
                label: 'child 1-3-1',
                size: 10
              }
            ]
          },
          {
            label: 'child 1-3',
            // selected: true,
            children: [
              {
              label: 'child 1-3-1',
              children: [
                {
                  label: 'child 1-3-1-1',
                  size: 20
                },
                {
                  label: 'child 1-3-1-2',
                  size: 6
                }
              ]
            },
            {
              label: 'child 1-3-2',
              size: 15
            }
          ]
          }
        ]
      },
      {
        label: 'child 2',
        size: 75
      },
      {
        label: 'child 3',
        size: 35
      },
      {
        label: 'child 4',
        size: 15
      }
    ]
  }
};