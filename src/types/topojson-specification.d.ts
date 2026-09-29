declare module "topojson-specification" {
  export interface GeometryObject {
    type: string;
    coordinates?: number[] | number[][] | number[][][];
    geometries?: GeometryObject[];
    arcs?: number[] | number[][];
    id?: string | number;
    properties?: Record<string, unknown>;
  }

  export interface GeometryCollection {
    type: "GeometryCollection";
    geometries: GeometryObject[];
  }

  export interface Topology {
    type: "Topology";
    objects: Record<string, GeometryObject | GeometryCollection>;
    arcs?: number[][][];
    transform?: { scale: [number, number]; translate: [number, number] };
    bbox?: [number, number, number, number];
  }
}
