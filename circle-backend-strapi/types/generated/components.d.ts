import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'ButtonLink';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Button'>;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Section TItle'>;
    desc: Attribute.Text &
      Attribute.DefaultTo<'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'>;
    image: Attribute.Media;
    button: Attribute.Component<'components.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'sections.hero': SectionsHero;
    }
  }
}
