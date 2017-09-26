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
		$this->set_url($post);
		$this->set_title($post);
		$this->set_slug($post);
		$this->set_id($post);
		$this->set_taxonomies($post);
		$this->set_categories($post);
		$this->set_tags($post);
		$this->set_guidance($post);
		$this->set_recommended();
		$this->set_online();
		$this->set_partners();
	}

	function set_url ($post) {
		$this->url = get_permalink($post);
	}
	function set_title ($post) {
		$this->title = get_the_title($post);
	}
	function set_slug ($post) {
		$this->slug = $post->post_name;
	}
	function set_id ($post) {
		$this->id = $post->ID;
	}
	function set_taxonomies ($post) {
		$this->taxonomies = get_the_taxonomies($post);
	}
	//only run after set_taxonomies()
	function set_categories ($post) {
		if ($this->taxonomies == null) {
			$this->set_taxonomies($post);
		}  else {
			$this->categories = strip_tags($this->taxonomies['category']);
		}
	}
	function set_tags ($post) {
		if ($this->taxonomies == null) {
			$this->set_taxonomies($post);
		} else {
			$this->tags = strip_tags( $this->taxonomies['post_tag'] );
		}
	}
	function set_guidance ($post) {
		if ($this->taxonomies == null) {
			$this->set_taxonomies($post);
		} else {
			$this->guidance = strip_tags($this->taxonomies['guidance']);
		}
	}
	//can only run after set_guidance()
	function set_recommended () {
		if (!strpos($this->guidance, 'Recommended')) {
			$this->recommended = 'false';
		} else {
			$this->recommended = 'true';
		}
	}
	function set_online () {
			if (!strpos($this->guidance, 'All online')) {
			$this->online = 'false';
		} else {
			$this->online = 'true';
		}
	}
	//can only run after set_categories()
	function set_partners () {
		if (strpos($this->categories, 'Findmypast.co.uk') !== false || strpos($this->categories, 'Ancestry.co.uk') !== false ) {
			$this->partners = 'true';
		} else {
			$this->partners = 'false';
		}
	}

	function get_url () {return $this->url;}
	function get_title () {return $this->title;}
	function get_slug () {return $this->slug;}
	function get_id () {return $this->id;}
	function get_taxonomies () {return $this->taxonomies;}
	function get_categories () {return $this->categories;}
	function get_tags () {return $this->tags;}
	function get_guidance () {return $this->guidance;}
	function get_recommended () {return $this->recommended;}
	function get_online () {return $this->online;}
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
	if ( $research_guide_query->have_posts() ) :
		while ( $research_guide_query->have_posts() ) : $research_guide_query->the_post();
			global $post;
			$research_guide_array[] = new Research_Guide($post);
		endwhile;
	endif;
	// Reset Post Data
	wp_reset_postdata();
	return $research_guide_array;
}



foreach ($categories as $category){
	echo '<h2>' . $category['text'] . '</h2>';
	$research_guide_array = get_research_guide_array('records-2');
	foreach ($research_guide_array as $research_guide) {
		$research_guide->print_html_structure();
	}
}



//			$taxonomies = get_the_taxonomies();
//			$categories = strip_tags($taxonomies['category']);
//			$tags = strip_tags($taxonomies['post_tag']);
//			$guidance = strip_tags($taxonomies['guidance']);
//			$url = get_permalink();
//			$title = get_the_title();
//			$slug = $post->post_name;
//			$id = $post->ID;
//			if (!strpos($guidance, 'Recommended')) {
//				$recommended = 'false';
//			} else {
//				$recommended = 'true';
//			}
//			if (!strpos($guidance, 'All online')) {
//				$online = 'false';
//			} else {
//				$online = 'true';
//			}
//			if (strpos($categories, 'Findmypast.co.uk') !== false || strpos($categories, 'Ancestry.co.uk') !== false ) {
//				$partners = 'true';
//			} else {
//				$partners = 'false';
//			}