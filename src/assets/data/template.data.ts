import { COMPONENT_NAME } from "@/packages/TemplateBuilder/components/const";

export const TORONTO = {
  name: "Toronto",
  id: 1,
  rows: [
    {
      columns: [
        {
          props: { xs: 4 },
          styles: { backgroundColor: "#003D73" },
          rows: [
            {
              styles: { padding: "20px" },
              columns: [
                {
                  props: { xs: 12 },
                  styles: {},
                  rows: [
                    {
                      columns: [
                        {
                          props: { xs: 12 },
                          component: COMPONENT_NAME.AVATAR,
                          styles: {},
                        },
                        {
                          props: { xs: 12 },
                          component: COMPONENT_NAME.TYPOGRAPHY,
                          dataKey: "NAME",
                          styles: {
                            fontSize: 32,
                          },
                        },
                        {
                          props: { xs: 12 },
                          component: COMPONENT_NAME.TYPOGRAPHY,
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
          props: { xs: 8 },
          styles: {},
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
