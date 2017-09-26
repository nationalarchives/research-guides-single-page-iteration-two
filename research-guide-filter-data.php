<?php 

/**
  * This is the data for the research guides filter page.
  *
  * The section after the description contains the tags; which provide
  * structured meta-data concerning the given element.
  *
  * @author  Annabel Baynes and Ashley Burnett
  *
  * @since 1.0
  *
  * @var array 	$letters 			Key is a letter. Value is whether the letter is available
  * @var array 	*SubCategories 		Key is a category as expressed in GET[], value is category as shown to user
  * @var array 	$categories 		Key is a category as expressed in GET[], value is the corresponding array from *SubCategories
  * @var array 	$categoryBanners	Key is category name, value is an array
  *
  *
 */

ini_set('display_errors', 1);
error_reporting(E_ALL|E_STRICT);

$unavailableLetters = array('k', 'q', 'x', 'y', 'z');

$familyHistorySubCategories = array(
	"trade-commerce-and-occupations" => " Occupations, commerce and trade",
	"buildings-and-institutions" => " Houses, schools and other institutions", 
	"army-and-militia" => " Army and militia",
	// "tracing-living-people-and-electoral-registration" => " Tracing living people and electoral registration",
	"land-inheritance-wills" => " Wills, inheritance and land ownership",
	"royal-air-force-and-other-air-services" => " Royal Air Force and other air services",
	"prisoners-of-war-and-internees" => " Prisoners of war and internees",
	"royal-navy-royal-marines" => " Royal Navy and Royal Marines",
	"births-marriages-and-deaths" => " Births, marriages and deaths",
	"courts-criminals-prisoners-and-litigants" => " Courts, criminals, prisoners and litigants",
	"immigrants-emigrants-refugees" => " Immigrants, emigrants and refugees",
	"health-and-welfare" => " Health and welfare",
	"tracing-living-people-electoral" => " Tracing living people and electoral registration",
	"divorce-adoption-and-change-of-name" => " Divorce, adoption and change of name",
	"census-and-other-national-surveys" => " Census and other national surveys",
	"religious-groups" => " Religious groups",
	"foreign-and-colonial-history" => " Foreign and colonial",
	"medals-and-awards" => " Medals and awards",
	"merchant-navy" => " Merchant Navy"

	);

asort($familyHistorySubCategories);


$firstWorldWarSubCategories = array(
		"army" => " Army",
	"medals-and-awards" => " Medals and awards", 
	"nursing" => " Nursing",
	"merchant-navy" => " Merchant Navy",
	"maps-plans-land" => " Maps, plans and land",
	"royal-air-force-and-other-air-services" => " Royal Air Force and other air services",
	"prisoners-of-war-and-internees" => " Prisoners of war and internees",
	"royal-navy-royal-marines" => " Royal Navy and Royal Marines",
	"births-marriages-and-deaths" => " Births, marriages and deaths",
	"intelligence-services" => " Intelligence services",
	"foreign-and-colonial-affairs" => " Foreign and colonial affairs",
	"military-courts-and-conscription" => " Military courts and conscription",
	"home-front" => " Home front"
	);

asort($firstWorldWarSubCategories);

$secondWorldWarSubCategories = array(
	"army" => " Army",
	"births-marriages-and-deaths" => " Births, marriages and deaths",
	"foreign-and-colonial-affairs" => " Foreign and colonial affairs",
	"home-front" => " Home front",
	"intelligence-services" => " Intelligence services",
	"maps-plans-land" => " Maps, plans and land",
	"medals-and-awards" => " Medals and awards",
	"merchant-navy" => " Merchant Navy",
	"military-courts-and-conscription" => " Military courts and conscription",
	"nursing" => " Nursing",
	"prisoners-of-war-and-internees" => " Prisoners of war and internees",
	"royal-air-force-and-other-air-services" => " Royal Air Force and other air services",
	"royal-navy-royal-marines" => " Royal Navy and Royal Marines",
	"war-crimes" => " War crimes"
	);

asort($secondWorldWarSubCategories);

$militaryAndMaritimeSubCategories = array(
	"army-and-militia" => " Army and militia",
	"births-marriages-and-deaths" => " Births, marriages and deaths",
	"home-front" => " Home Front",
	"intelligence-services" => " Intelligence services",
	"maps-plans-land" => " Maps, plans and land",
	"medals-and-awards" => " Medals and awards",
	"merchant-navy" => " Merchant Navy",
	"military-courts-and-conscription" => " Military courts and conscription",
	"nursing" => " Nursing",
	"prisoners-of-war-and-internees" => " Prisoners of war and internees",
	"royal-air-force-and-other-air-services" => " Royal Air Force and other air services",
	"royal-navy-royal-marines" => " Royal Navy and Royal Marines",
	"war-crimes" => " War crimes",
	"wars" => " Wars"
	);

asort($militaryAndMaritimeSubCategories);

$socialAndCulturalHistorySubCategories = array(
	"cultural" => " Cultural",
	"education" => " Education",
	"health" => " Health",
	"land" => " Land",
	"migration" => " Migration",
	"occupations" => " Occupations",
	"religious-groups" => " Religious groups",
	"social" => " Social",
	"transport-passengers" => " Transportation and passengers"
	);

asort($socialAndCulturalHistorySubCategories);

$criminalsCourtsAndPrisonsSubCategories = array(
	"civil-court-cases-and-litigation" => " Civil court cases and litigation",
	"criminal-court-cases" => " Criminals and criminal court cases",
	"divorce" => " Divorce",
	"military-courts" => " Military courts",
	"prisons-and-prisoners" => " Prisons and prisoners",
	"wills-death-duties" => " Wills and death duties"
	);

asort($criminalsCourtsAndPrisonsSubCategories);

$politicalAndEconomicHistorySubCategories = array(
	"colonial-affairs-and-colonies" => " Colonial affairs and colonies",
	"domestic-politics" => " Domestic politics",
	/**"domestic-politics-institutions" => " Domestic politics: institutions",
	"domestic-politics-policy" => " Domestic politics: policy",**/
	"economic" => " Economic history",
	"foreign-affairs-and-countries" => " Foreign affairs and countries",
	"maps-and-images" => " Maps and images",
	"migration" => " Migration",
	"medieval-early-modern-history" => " Medieval and Early Modern"
	);

asort($politicalAndEconomicHistorySubCategories);

$foreignAndColonialHistorySubCategories = array(
	"colonial-affairs-and-colonies" => " Colonial affairs and colonies",
	"family-history" => " Family history",
	"foreign-affairs-and-countries" => " Foreign affairs and countries",
	"maps-and-images" => " Maps and images"	
	);

asort($foreignAndColonialHistorySubCategories);

$landAndMapsSubCategories = array(
	"church-and-crown-lands" => " Church and crown lands",
	"environment-agriculture" => " Environment and agriculture",
	"government-use-of-land" => " Government use of land",
	"land-abroad" => " Land abroad",
	"maps" => " Maps",
	"ownership-inheritance" => " Ownership and inheritance",
	"taxes-on-land" => " Taxes on land",
	"local-history" => " Local history"	
	);

asort($landAndMapsSubCategories);

$medievalAndModernHistorySubCategories = array(
	"church-and-religion" => " Church and religion",
	"family-history" => " Family history",
	"foreign-affairs-and-diplomacy" => " Foreign affairs and diplomacy",
	"household-ceremonial-and-culture" => " Household ceremonial and culture",
	"landholding-and-inheritance" => " Landholding and inheritance",
	"law-and-justice" => " Law and justice",
	"military" => " Military history",
	"politics-and-government" => " Politics and government",
	/** "reading-medieval-and-early-modern-documents" => " Reading medieval and early modern documents",**/
	"trade-and-economy" => " Trade and economy"
	);

asort($medievalAndModernHistorySubCategories);

$onlineSubCategories = array(
	"military-courts-and-conscription" => " Military courts and conscription",
	"army-and-militia" => " Army and militia",
	"royal-air-force-and-other-air-services" => " Royal Air Force and other air services",
	"courts-criminals-prisoners" => " Courts, criminals and prisoners",
	"domestic-politics" => " Domestic politics",
	"second-world-war-research" => " Second World War",
	"first-world-war" => " First World War",
	"maps" => " Maps",
	"royal-navy-royal-marines" => " Royal Navy and Royal Marines",
	"medals-and-awards" => " Medals and awards",
	"merchant-navy" => " Merchant Navy",
	"migration" => " Migration ",
	"wills-death-duties" => " Wills and death duties",
	"census-and-other-national-surveys" => " Census and other national surveys",
    "prisoners-of-war" => " Prisoners of war",
	"births-marriages-and-deaths" => " Births, marriages and deaths",
	"civilian-occupations" => " Civilian occupations"
	);

asort($onlineSubCategories);

$categories = array(
	"family-history" => array(
		"text" => "Family history", 
		"subcategories" => $familyHistorySubCategories
	),
	"first-world-war" => array("text" => "First World War", "subcategories" => $firstWorldWarSubCategories),
	"second-world-war-research" => array("text" => "Second World War", "subcategories" => $secondWorldWarSubCategories),
	"military-and-maritime" => array("text" => "Military and maritime", "subcategories" => $militaryAndMaritimeSubCategories),
	"social-and-cultural-history" => array("text" => "Social and cultural history", "subcategories" => $socialAndCulturalHistorySubCategories),
	"criminals-courts-and-prisons" => array("text" => "Criminals, courts and prisons", "subcategories" => $criminalsCourtsAndPrisonsSubCategories),
	"political-and-economic-history" => array("text" => "Political and economic history", "subcategories" => $politicalAndEconomicHistorySubCategories),
	"foreign-and-colonial-history" => array("text" => "Foreign and colonial history", "subcategories" => $foreignAndColonialHistorySubCategories),
	"land-and-maps" => array("text" => "Land and maps", "subcategories" => $landAndMapsSubCategories),
	"medieval-early-modern-history" => array("text" => "Medieval and early modern history", "subcategories" => $medievalAndModernHistorySubCategories),
	"records-for-current-legal-purposes" => array("text" => "Records for current legal purposes"),
	"online" => array("text" => "Online collections", "subcategories" => $onlineSubCategories)
	);

$categoryBanners = array(
	"family-history" => array(
		"htmlClass" => "banner-category-family", 
		"message" => "Learn how to find and use military records, wills, the census and a wide range of other records to trace your ancestors."),
	"first-world-war" => array(
		"htmlClass" => "banner-category-firstworldwar", 
		"message" => "Learn how to find and understand records of soldiers and sailors, battles and battalions and almost every other aspect of the British perspective on the Great War."),
	"second-world-war-research" => array(
		"htmlClass" => "banner-category-secondworldwar", 
		"message" => "Learn how to find and understand records of soldiers and sailors, battles and battalions and almost every other aspect of the British perspective on the war."),
	"military-and-maritime" => array(
		"htmlClass" => "banner-category-militarymaritime", 
		"message" => "Learn how to trace the voyages made by a merchant seaman, find a Royal Marine’s medal record or track the wartime history of an Army regiment."),
	"political-and-economic-history" => array(
		"htmlClass" => "banner-category-politicaleconomic", 
		"message" => "Learn how to find and use state papers to study the history of successive monarchs and governments, Cabinet papers to find out what Prime Ministers said behind the scenes at key moments of British history and Home Office correspondence covering domestic issues far and wide."),
	"social-and-cultural-history" => array(
		"htmlClass" => "banner-category-socialcultural", 
		"message" => "Learn how to find passenger lists for people migrating to and from the UK, documents charting the history of the NHS, photographs of the coal mining industry and countless other records covering the development of British life."),
	"criminals-courts-and-prisons" => array(
		"htmlClass" => "banner-category-criminalscourtsprisons", 
		"message" => "Learn how to find court records and all sorts of related documents containing details of everything from wills and divorces to criminals and crime. Discover, for example, how to find army courts martial records, prison registers or trace convicts sent to Australia."),
	"foreign-and-colonial-history" => array(
		"htmlClass" => "banner-category-foreigncolonial", 
		"message" => "Learn how to find and use Foreign Office and Colonial Office records in particular, to chart the colonial history of countries from Asia to America and the place of Britain in the world."),
	"land-and-maps" => array(
		"htmlClass" => "banner-category-landmaps", 
		"message" => "Find out how to search for and interpret military maps from both world wars, national surveys of land from Domesday onwards or changes in the drawing of the landscape of your local area."),
	"medieval-early-modern-history" => array(
		"htmlClass" => "banner-category-medievalearlymodern", 
		"message" => "Learn why court records, along with records of central government, are so important for studying medieval and early modern society and politics and how to find these records at The National Archives."),
	"records-for-current-legal-purposes" => array(
		"htmlClass" => "banner-category-currentlegal", 
		"message" => "Though The National Archives cannot provide legal advice, we do hold some documents that you may find useful for legal purposes. Amongst them are certificates of British citizenship and deed poll records for changes of name but you will need to search elsewhere for recent records of wills and divorces or birth, marriage and death certificates. Select the guides below for advice on how to find these records."),
	"online" => array(
		"htmlClass" => "banner-category-onlinecollections", 
		"message" => "Over 5% of The National Archives' records have so far been digitised and we are continuing to put records online. Browse this section to find out how to search some of our most popular online collections."
		));



//Begin research guides <ul>
echo '<ul class="research-guide-links">';

foreach ($categories as $key=>$category){
		//Begin parent category <li>
		echo '<li><a href="#' . $key . '">' .$category['text'] . "</a>";

			if (isset($category['subcategories'])) {
				//Begin subcategory <ul>
				echo '<ul>';

				foreach ($category['subcategories'] as $subCategoryKey => $subCategory){

					//Create <li> for subcategory
					echo '<li><a href="#'  . $subCategoryKey . '">' . $subCategory .'</a></li>';
				}
				//End subcategories <ul>
				echo '</ul>';
			}
		//End parent category <li>
		echo '</li>';

}
//End research guides <ul>
echo '</ul>';

?>