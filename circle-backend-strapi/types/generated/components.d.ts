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

export interface ComponentsStatCard extends Schema.Component {
  collectionName: 'components_components_stat_cards';
  info: {
    displayName: 'StatCard';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    statText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'100'>;
    desc: Attribute.Text;
  };
}

export interface ComponentsStepCard extends Schema.Component {
  collectionName: 'components_components_step_cards';
  info: {
    displayName: 'StepCard';
    icon: 'bell';
  };
  attributes: {
    number: Attribute.Integer;
    title: Attribute.String;
    desc: Attribute.Text;
    imgArrow: Attribute.Media;
    altCard: Attribute.Boolean;
  };
}

export interface SectionsHeroStats extends Schema.Component {
  collectionName: 'components_sections_hero_stats';
  info: {
    displayName: 'HeroStats';
    icon: 'brush';
    description: '';
  };
  attributes: {
    StatCard: Attribute.Component<'components.stat-card', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
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

export interface SectionsSocialProof extends Schema.Component {
  collectionName: 'components_sections_social_proofs';
  info: {
    displayName: 'SocialProof';
    icon: 'alien';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsSyllabus extends Schema.Component {
  collectionName: 'components_sections_syllabi';
  info: {
    displayName: 'Syllabus';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    StepCard: Attribute.Component<'components.step-card', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.stat-card': ComponentsStatCard;
      'components.step-card': ComponentsStepCard;
      'sections.hero-stats': SectionsHeroStats;
      'sections.hero': SectionsHero;
      'sections.social-proof': SectionsSocialProof;
      'sections.syllabus': SectionsSyllabus;
    }
  }
}
