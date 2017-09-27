<?php

class Research_Guide {
	private $taxonomies;
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
		$this->set_url();
		$this->set_title();
		$this->set_slug($post);
		$this->set_taxonomies();
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

	function set_url () {
		$this->url = get_permalink($this->get_id());
	}

	function set_title () {
		$this->title = get_the_title($this->get_id());
	}

	function set_slug ($post) {
		$this->slug = $post->post_name;
	}

	function set_taxonomies () {
		$this->taxonomies = get_the_taxonomies($this->get_id());
	}

	function set_categories () {
		if ($this->get_taxonomies() == null) {
			$this->set_taxonomies();
		}
		$this->categories = strip_tags($this->taxonomies['category']);
	}

	function set_tags () {
		if ($this->get_taxonomies() == null) {
			$this->set_taxonomies();
		}
		$this->tags = strip_tags( $this->taxonomies['post_tag'] );
	}

	function set_guidance () {
		if ($this->get_taxonomies() == null) {
			$this->set_taxonomies();
		}
		$this->guidance = strip_tags($this->taxonomies['guidance']);
	}

	function set_recommended () {
		$this->recommended = (strpos($this->guidance, 'Recommended')) ? 'true' : 'false';
	}

	function set_online () {
		$this->online = strpos($this->guidance, 'All online') ? 'true' : 'false';
	}

	function set_partners () {
		$partners = array(
			"Findmypast.co.uk" => "find-my-past",
			"Ancestry.co.uk" => "ancestry"
		);
		foreach ($partners as $key => $partner) {
			if ( strpos( $this->get_categories(), $key ) ) {
				$this->partners .=  $partner . " ";
			}
		}
		if ( $this->get_partners() == null){
			$this->partners = 'false';
		}
	}

	function get_id () {return $this->id;}

	function get_taxonomies () {return $this->taxonomies;}

	function get_categories () {return $this->categories;}

	function get_partners () {return $this->partners;}

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

		$compiled = sprintf( $html, $this->title, $this->guidance, $this->recommended, $this->tags, $this->online, $this->url, $this->partners, $this->slug, $this->url, $this->title);

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