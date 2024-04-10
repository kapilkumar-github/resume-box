// import { COMPONENT_NAME } from "@/packages/TemplateBuilder/components/const";

import { ReactNode } from "react";
import { ResumeDataType } from "./resume.data";

// export type TemplateColumnType = {
//   component?: string;
//   props?: any;
//   styles?: React.CSSProperties;
//   rows?: TemplateRowType[];
//   dataTemplate?: string;
//   data?: {
//     label: string;
//   };
// };

// export type TemplateRowType = {
//   styles?: React.CSSProperties;
//   columns: TemplateColumnType[];
// };

export type TemplateJSONType = {
  name: string;
  id: 1;
  template: () => ReactNode;
};

// const leftColumnRowA = {
//   styles: { padding: "20px" },
//   columns: [
//     {
//       props: { xs: 12 },
//       styles: {
//         color: "#66778F",
//       },
//       rows: [
//         {
//           columns: [
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.AVATAR,
//               styles: {},
//             },
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               dataKey: "name",
//               styles: {
//                 fontSize: 36,
//                 fontWeight: 700,
//                 lineHeight: 1,
//               },
//             },
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               dataKey: "designation",
//               styles: {
//                 fontSize: 18,
//                 marginTop: "5px",
//               },
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const leftColumnSectionHeading = {
//   color: "#fff",
//   background: "#00315C",
//   fontSize: 24,
//   fontWeight: 700,
//   paddingLeft: "10px",
// };

// const leftColumnRowB = {
//   columns: [
//     {
//       props: { xs: 12 },
//       styles: {},
//       rows: [
//         {
//           columns: [
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               data: {
//                 label: "Contact",
//               },
//               styles: leftColumnSectionHeading,
//             },
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               data: {
//                 label: "Address",
//               },
//               styles: {
//                 paddingLeft: "10px",
//                 marginTop: "10px",
//                 fontWeight: 700,
//               },
//             },
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               dataKey: "address.line1",
//               styles: {
//                 paddingLeft: "10px",
//                 marginTop: "3px",
//               },
//             },
//             {
//               props: { xs: 2 },
//               component: COMPONENT_NAME.TEXT,
//               dataKey: "address.city",
//               styles: {
//                 paddingLeft: "10px",
//                 marginTop: "3px",
//               },
//             },
//             {
//               props: { xs: 6 },
//               component: COMPONENT_NAME.TEXT,
//               dataKey: "address.country",
//               styles: {
//                 paddingLeft: "10px",
//                 marginTop: "3px",
//               },
//             },
//             {
//               props: { xs: 12 },
//               component: COMPONENT_NAME.TEXT,
//               data: {
//                 label: "Skills",
//               },
//               styles: leftColumnSectionHeading,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const leftColumn = {
//   props: { xs: 4 },
//   styles: { backgroundColor: "#003D73", color: "#66778F" },
//   rows: [leftColumnRowA, leftColumnRowB],
// };

// const rightColumn = {
//   props: { xs: 8 },
//   styles: {},
//   rows: [
//     {
//       columns: [],
//     },
//   ],
// };

// const singleColumn = {
//   props: { xs: 12 },
//   styles: {},
//   rows: [
//     {
//       columns: [
//         {
//           props: { xs: 12 },
//           component: COMPONENT_NAME.TEXT,
//           dataTemplate: "{{{name}}}, {{{designation}}}",
//           styles: {
//             textAlign: "center",
//             fontSize: 18,
//             fontWeight: 700,
//             lineHeight: 1,
//           },
//         },
//         {
//           props: { xs: 12 },
//           component: COMPONENT_NAME.TEXT,
//           dataTemplate: "{{{city}}}, {{{phoneNumber}}}, {{{email}}}",
//           styles: {
//             marginTop: "10px",
//             textAlign: "center",
//             fontSize: 14,
//             lineHeight: 1,
//           },
//         },
//       ],
//     },
//   ],
// };

// export const TORONTO: TemplateJSONType = {
//   name: "Toronto",
//   id: 1,
//   rows: [
//     {
//       columns: [singleColumn],
//     },
//   ],
// };
