-- Get all tags (id, name, and slug)
select wp_terms.term_id, name, slug from wp_terms inner join wp_term_taxonomy on wp_terms.term_id = wp_term_taxonomy.term_id where taxonomy = 'post_tag' 