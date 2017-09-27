<?php

class Research_Guide {
	private $categories;
	private $tags;
	private $guidance;
	private $url;
	private $title;
	private $slug;
	private $id;
	private $recommended;
	private $partners;
	private $online;

	public function __construct($post) {
		$this->set_id($post);
		$this->set_slug($post);
		$this->set_url();
		$this->set_title();
		$this->set_categories();
		$this->set_tags();
		$this->set_guidance();
		$this->set_recommended();
		$this->set_online();
		$this->set_partners();
	}

	function set_id ($post) {
		$this->id = $post->ID;
	}

	function set_slug ($post) {
		$this->slug = $post->post_name;
	}

	function set_url () {
		$this->url = get_permalink($this->get_id());
	}

	function set_title () {
		$this->title = get_the_title($this->get_id());
	}

	function set_categories () {
		$this->categories = $this->get_terms('category');
	}

	function set_tags () {
		$this->tags = $this->get_terms('post_tag');
	}

	function set_guidance () {
		$this->guidance = $this->get_terms('guidance');
	}

	function set_recommended () {
		$this->recommended = (strpos($this->get_guidance_string(), 'recommended')) ? 'true' : 'false';
	}

	function set_online () {
		$this->online = strpos($this->get_guidance_string(), 'online') ? 'true' : 'false';
	}

	function set_partners () {
		$partners = array();
		$potential_partners = array( "find-my-past", "ancestry" );
		foreach ($potential_partners as $potential_partner) {
			foreach ($this->get_categories() as $category) {
				if ($category == $potential_partner) {
					$partners[] =  $potential_partner;
				}
			}
		}
		$this->partners = $partners;
	}

	function get_id () {
		return $this->id;
	}

	function get_categories () {
		return $this->categories;
	}

	function get_tags_string () {
		return implode(" ", $this->tags);
	}

	function get_guidance_string () {
		return implode(" ", $this->guidance);
	}

	function get_partners_string () {
		if ( count($this->partners) < 1 ){
			return $this->partners = 'false';
		}
		return implode(" ", $this->partners);
	}

	function get_terms($taxonomy) {
		$taxonomy_array = array();
		$all_taxonomies = get_the_terms($this->get_id(),$taxonomy);
		foreach ($all_taxonomies as $single_taxonomy) {
			$taxonomy_array[] = $single_taxonomy->slug;
		}
		return $taxonomy_array;
	}

	function print_html_structure () {
		$html = '<div data-name="%s"
					     data-categories="%s"
					     data-recommended-guide-for-category="%s"
					     data-keywords="%s"
					     data-all-records-available-online="%s"
					     data-guide-href="%s"
					     data-available-on-partner="%s"
					     id="%s"
					     class="research-guide">
					    <h3>
					        <a href="%s">
					            %s
					        </a>
					    </h3>
					</div>
					';

		$compiled = sprintf( $html, $this->title, $this->get_guidance_string(), $this->recommended, $this->get_tags_string(), $this->online, $this->url, $this->get_partners_string(), $this->slug, $this->url, $this->title);

		echo $compiled;
	}

}

function get_research_guide_array ($category) {
	$args = array (
		'category_name' => $category,
		'post_type' => 'page',
		'posts_per_page' => -1,
		'post_status' => 'publish'
	);
	$research_guide_query = new WP_Query($args);
	$research_guide_array = array();

	// The Loop
	if ( $research_guide_query->have_posts() ) {
		while ( $research_guide_query->have_posts() ) {
			$research_guide_query->the_post();
			global $post;
			$research_guide_array[] = new Research_Guide($post);
		}
	}
	// Reset Post Data
	wp_reset_postdata();
	return $research_guide_array;
}

echo "<div class='research-guides-from-html'>";

$research_guide_array = get_research_guide_array('records-2');

foreach ($research_guide_array as $research_guide) {
	$research_guide->print_html_structure();
}

echo "</div>";