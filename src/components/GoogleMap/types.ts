import { Route } from "../../data/maps";

export enum ScrollToTypeEnum {
    ROUTE, POINT
}

export type ScrollToType = ScrollToTypeEnum;

export type GoogleMapProps = {
  routes: Route[] | Route;
  scrollToType?: ScrollToType;
};