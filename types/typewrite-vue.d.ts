declare module "typewrite-vue" {
  import { DefineComponent } from "vue";
  export const Typewriter: DefineComponent<{
    typeInterval: number;
    replace?: any;
    replaceInterval?: number;
  }>;
}
