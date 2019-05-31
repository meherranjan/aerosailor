import SEO from '../../components/includes/seo/SEO'

export default PostSEO =
  ({ title, description, excerpt, path, created, modified }) =>
    <SEO
      title={title}
      description={description || excerpt || 'NA'}
      pathname={path}
      article
      node={{
        first_publication_date: created,
        last_publication_date: modified
      }}
    />