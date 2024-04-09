import { RouteMeta } from "vue-router";

/*
 * @Author: danielZhang
 * @Date: 2024-04-09 15:03:56
 * @Description: Description
 * @FilePath: /vite-vue3/src/common/pageMate.ts
 */
export type PageMate = RouteMeta & {
  title: string;
  menuSort: number;
  icon?: string
  permison?: string;
  keepAlive?: boolean;
  [x: string]: any
}