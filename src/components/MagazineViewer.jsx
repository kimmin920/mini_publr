import React from 'react';
import templatesMap from '../templates';

export default function MagazineViewer({ template, data }) {
  const MatchedTemplateComponent = templatesMap.get(template);
  console.log(template);
  return <MatchedTemplateComponent data={data} />;
}
