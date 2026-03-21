import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'Call to action';
    icon: 'arrowRight';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'sections.picture', false>;
    link: Schema.Attribute.Component<'sections.link', false> &
      Schema.Attribute.Required;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsEmbeddedVideo extends Struct.ComponentSchema {
  collectionName: 'components_sections_embedded_videos';
  info: {
    displayName: 'Embedded Video';
    icon: 'play';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'sections.link', false> &
      Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      ['YouTube', 'Instagram', 'Pinterest', 'Vimeo', 'Twitch']
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Component<'sections.picture', true>;
    layout: Schema.Attribute.Enumeration<['grid', 'masonry', 'carousel']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'carousel'>;
  };
}

export interface SectionsInternalVideo extends Struct.ComponentSchema {
  collectionName: 'components_sections_internal_videos';
  info: {
    displayName: 'Internal Video';
    icon: 'television';
  };
  attributes: {
    file: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    platform: Schema.Attribute.Enumeration<
      [
        'LinkedIn',
        'Facebook',
        'Telegram',
        'YouTube',
        'WhatsApp',
        'Instagram',
        'TikTok',
        'Reddit',
        'Pinterest',
        'X/Twitter',
        'Medium',
        'Discord',
        'GitHub',
      ]
    >;
    referrerpolicy: Schema.Attribute.Enumeration<
      [
        'no-referrer',
        'no-referrer-when-downgrade',
        'origin',
        'origin-when-cross-origin',
        'same-origin',
        'strict-origin',
        'strict-origin-when-cross-origin',
        'unsafe-url',
      ]
    > &
      Schema.Attribute.DefaultTo<'strict-origin-when-cross-origin'>;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    > &
      Schema.Attribute.DefaultTo<'_blank'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_sections_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'bulletList';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsPicture extends Struct.ComponentSchema {
  collectionName: 'components_sections_pictures';
  info: {
    displayName: 'Picture';
    icon: 'picture';
  };
  attributes: {
    altText: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SectionsReferenceList extends Struct.ComponentSchema {
  collectionName: 'components_sections_reference_lists';
  info: {
    displayName: 'Reference list';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'sections.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'OpenGraph';
    icon: 'thumbUp';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.Enumeration<['article', 'website']>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    robots: Schema.Attribute.Enumeration<
      ['index', 'follow', 'noindex', 'nofollow']
    >;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.call-to-action': SectionsCallToAction;
      'sections.embedded-video': SectionsEmbeddedVideo;
      'sections.gallery': SectionsGallery;
      'sections.internal-video': SectionsInternalVideo;
      'sections.link': SectionsLink;
      'sections.paragraph': SectionsParagraph;
      'sections.picture': SectionsPicture;
      'sections.reference-list': SectionsReferenceList;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
