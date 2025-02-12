import { render } from "preact";
import { PageEditorComponentType } from "./page-editor-components";
import { StreamDrawerDriver } from "../stream/drawer/stream-drawer-driver";
export type PageEditorRenderFlags = {
    individualComponents?: boolean;
    noRearrange?: boolean;
    noAdd?: boolean;
    inlineOptionBar?: boolean;
};
export declare const defaultRendererFlags: Readonly<PageEditorRenderFlags>;
export default class PageEditorApp {
    protected _streamDriver: StreamDrawerDriver;
    protected _setForceRefreshVal: Function;
    protected _externalSetState: Function;
    get streamDriver(): StreamDrawerDriver;
    protected _renderFunction: typeof render;
    protected components: any;
    protected plugins: any;
    constructor();
    initializeApp(domObject: any, onSave?: (data: object, callback: () => void) => boolean | void, pageData?: {
        children: any[];
    }, pageMeta?: {
        name: string;
        slug: string;
        status: string;
    }, newComponentList?: any, plugins?: {}, renderFlags?: PageEditorRenderFlags, contextualPageData?: any): void;
    createStreamDriver(): StreamDrawerDriver;
    addComponents(components: PageEditorComponentType | PageEditorComponentType[], compSlug?: string, compDisplayName?: string): void;
    insertComponent(componentSlug: string, props?: {}): any;
    getDefaultComponents(): import("./page-editor-components").ComponentListType;
    refreshComponentListInEditor(): void;
}
export { PageEditorApp };
