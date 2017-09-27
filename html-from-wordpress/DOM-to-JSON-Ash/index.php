<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>JSON to DOM</title>
</head>
<body>
<div class="body">
<!-- Basic navigation to guides within a category -->
<ul class="research-guide-links">
    <li><a href="#second-world-war">Second World War</a>
        <ul>
            <li><a href="#army">Army</a></li>
            <li><a href="#births-marriages-and-deaths">Births, Marriages and Deaths</a></li>
            <li><a href="#foreign-and-colonial-affairs">Foreign and colonial affairs</a></li>
        </ul>
    </li>
    <li><a href="#social-and-cultural-history">Social and cultural history</a>
        <ul>
            <li><a href="#cultural">Cultural</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#health">Health</a></li>
            <li><a href="#land">Land</a></li>
        </ul>
    </li>
    <li><a href="#records-for-current-legal-purposes">Records for current legal purposes</a></li>
</ul>

<!-- JSON representation of these relationships -->
<pre>
    let categories = [
        {
            name: 'Second world war',
            key: 'second-world-war',
            parent: false
        },
        {
            name: 'Army',
            key: 'army',
            parent: 'second-world-war'
        },
        {
            name: 'Births, marriages and deaths',
            key: 'births-marriages-and-deaths', // Notice that the comma is omitted
            parent: 'second-world-war'
        },
        {
            name: 'Social and cultural history',
            key: 'social-and-cultural-history',
            parent: false
        },
        {
            name: 'Cultural',
            key: 'cultural',
            parent: 'social-and-cultural-history'
        },
        {
            name: 'Education',
            key: 'education',
            parent: 'social-and-cultural-history'
        },
        {
            name: 'Health',
            key: 'health',
            parent: 'social-and-cultural-history'
        },
        {
            name: 'land',
            key: 'land',
            parent: 'social-and-cultural-history'
        },
        {
            name: 'Records for current legal purposes',
            key: 'records-for-current-legal-purposes',
            parent: false
        }
    ]
</pre>

<!-- Research guides within a section -->
<h2 id="second-world-war">Second World War</h2>

<div data-name="Recommendations for military honours and awards 1935-1990"
     data-categories="second-world-war medals-and-awards"
     data-recommended-guide-for-category="second-world-war"
     data-keywords="army awards gallantry-medals honours medals second-world-war world-war-two"
     data-all-records-available-online="true"
     data-guide-href="http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/recommendations-military-honours-awards-1935-1990/"
     data-available-on-partner="false"
     id="recommendations-military-honours-awards-1935-1990"
     class="research-guide">
    <h3>
        <a href="http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/recommendations-military-honours-awards-1935-1990/">
            Recommendations for military honours and awards 1935-1990
        </a>
    </h3>
</div>

<div data-name="1939 register"
     data-categories="second-world-war"
     data-recommended-guide-for-category="false"
     data-keywords="1939-register census population statistics"
     data-all-records-available-online="true"
     data-guide-href="http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/1939-register/"
     data-available-on-partner="find-my-past"
     id="1939-register"
     class="research-guide">
    <h3>
        <a href="http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/1939-register/">1939
            register</a>
    </h3>
</div>

<!-- JSON representation of guides within a section -->

<pre>
    let guides = [
        {
            name: 'Recommendations for military honours and awards 1935-1990',
            categories: ['second-world-war', 'medals-and-awards'],
            recommended_for_category: 'second-world-war',
            keywords: ['army', 'awards', 'gallantry-medals', 'honours', 'medals', 'second-world-war', 'world-war-two'],
            all_records_available_online: true,
            guide_href: 'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/recommendations-military-honours-awards-1935-1990/',
            data_available_on_partner: false,
            id: 'recommendations-military-honours-awards-1935-1990'
        },
        {
            name: '1939 register',
            categories: ['second-world-war'],
            recommended_for_category: false,
            keywords: ['1939-register', 'census', 'population', 'statistics'],
            all_records_available_online: true,
            guide_href: 'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/1939-register/',
            data_available_on_partner: 'find-my-past',
            id: '1939-register'
        }
    ]
</pre>
</div>
<script src="./json.js"></script>
<script src="./tests.js"></script>

</body>
</html>

  




