import { TypeValues } from '@domain/models';

export namespace Character {
  export type Sprite = {
    url: string;
    columns: number;
    rows: number;
  };

  export enum TypeAttributes {
    MOPY_CAPTURE = 'mopy-capture',
    EXPERTISE = 'expertise',
    ELEMENT_TUNNING_FIRE = 'element-tunning-fire',
    ELEMENT_TUNNING_WATER = 'element-tunning-water',
    ELEMENT_TUNNING_SHADOW = 'element-tunning-shadow',
    ELEMENT_TUNNING_GRASS = 'element-tunning-grass',
  }

  export enum TypeAttributesLabel {
    MOPY_CAPTURE = 'Mopy Capture',
    EXPERTISE = 'Expertise',
    ELEMENT_TUNNING_FIRE = 'Element Tunning - Fire',
    ELEMENT_TUNNING_WATER = 'Element Tunning - Water',
    ELEMENT_TUNNING_SHADOW = 'Element Tunning - Shadow',
    ELEMENT_TUNNING_GRASS = 'Element Tunning - Grass',
  }

  export type AttributeStyle = {
    color: string;
    icon: string;
  };

  export type Attribute = {
    label: string;
    type: TypeAttributes;
    type_value: TypeValues;
    value: number;
    style: AttributeStyle;
  };

  export type Model = {
    id: string;
    alias_name: string;
    sprite: Sprite;
    attributes: Attribute[];
  };
}
