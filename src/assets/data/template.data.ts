import { COMPONENT_NAME } from "@/packages/TemplateBuilder/components/const";

export type TemplateColumnType = {
  component?: string;
  props?: any;
  styles?: React.CSSProperties;
  rows?: TemplateRowType[];
  dataKey?: string;
};

export type TemplateRowType = {
  styles?: React.CSSProperties;
  columns: TemplateColumnType[];
};

export type TemplateJSONType = {
  name: string;
  id: 1;
  rows: TemplateRowType[];
};

export const TORONTO: TemplateJSONType = {
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
                          component: COMPONENT_NAME.TEXT,
                          dataKey: "name",
                          styles: {
                            fontSize: 32,
                          },
                        },
                        {
                          props: { xs: 12 },
                          component: COMPONENT_NAME.TEXT,
                          dataKey: "designation",
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
