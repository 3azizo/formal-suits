import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'formal suits فورمال سوتس',
  description: 'متجر فورمال سوتس للبدل الرجالي',
  keywords: 'ملابس رجالي suits, clothing',
};

export default Meta;
