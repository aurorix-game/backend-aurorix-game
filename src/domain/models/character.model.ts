import { TypeValues } from '@domain/models';

export namespace Character {
  export type Sprite = {
    url: string;
    columns: string;
    rows: string;
  };

  export enum TypeAttributes {
    MOPY_CAPTURE = 'mopy-capture',
    EXPERTISE = 'expertise',
    ELEMENT_TUNNING = 'element-tunning',
  }

  export type Attribute = {
    label: string;
    type: number;
    type_value: TypeValues;
    value: number;
    style: {
      color: string;
      icon: string;
    };
  };

  export type Model = {
    sprite: Sprite;
    attributes: Attribute[];
  };
}
