export const TORONTO = {
  name: "Toronto",
  id: 1,
  rows: [
    {
      columns: [
        {
          styles: { width: "30%" },
          rows: [
            {
              columns: [
                {
                  styles: { width: "100%" },
                  rows: [
                    {
                      columns: [
                        {
                          component: "Avatar",
                          styles: {},
                        },
                        {
                          component: "Text",
                          dataKey: "NAME",
                          styles: {
                            fontSize: 32,
                          },
                        },
                        {
                          component: "Text",
                          dataKey: "DESIGNATION",
                          styles: {
                            fontSize: 16,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          styles: { width: "70%" },
          rows: [
            {
              columns: [],
            },
          ],
        },
      ],
    },
  ],
};
