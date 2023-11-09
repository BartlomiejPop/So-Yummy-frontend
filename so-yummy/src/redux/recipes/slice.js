import { createSlice } from "@reduxjs/toolkit";
import {
	addRecipe,
	getMyRecipes,
	deleteRecipe,
	addToFavorites,
	getFavorites,
	deleteFromFavorites,
} from "./operations.js";

//BREAKFAST
import bananaPancakes from "../../images/bananaPancakes.png";
import hamHockColcannon from "../../images/hamHockColcannon.png";
import polishPancakes from "../../images/polishPancakes.png";
import boxtyBreakfast from "../../images/boxtyBreakfast.png";
import englishBreakfast from "../../images/englishBreakfast.png";
import frenchOmlette from "../../images/frenchOmlette.png";
import cheeseSandwich from "../../images/cheeseSandwich.png";

// MISCELLANEOUS
import portugeseCustardTarts from "../../images/portugeseCustardTarts.png";
import portugesePregoPor from "../../images/portugesePregoPor.png";
import stuffedLambTomatoes from "../../images/stuffedLambTomatoes.png";
import salmonEggsBenedict from "../../images/salmonEggsBenedict.png";

//CHICKEN
import teriyakiChickenCasserole from "../../images/teriyakiChickenCasserole.png";
import chickenAlfredoPrimavera from "../../images/chickenAlfredoPrimavera.png";
import potatoGratinWithChicken from "../../images/potatoGratinWithChicken.png";
import piriPiriChickenAndSlaw from "../../images/piriPiriChickenAndSlaw.png";

//DESERTS
import blackberryFool from "../../images/blackberryFool.png";
import chocChipPecanPie from "../../images/chocChipPecanPie.png";
import raspberyBrownies from "../../images/raspberyBrownies.png";
import christmasPuddingTrifle from "../../images/christmasPuddingTrifle.png";
import appleFrangipanTort from "../../images/appleFrangipanTort.png";
import newYorkCheescake from "../../images/newYorkCheescake.png";
import sugarPie from "../../images/sugarPie.png";

//BEEF
import beefAndMustardPie from "../../images/beefAndMustardPie.png";
import braisedBeefChilli from "../../images/braisedBeefChilli.png";
import generalTsosChicken from "../../images/generalTsosChicken.png";
import beefLoMein from "../../images/beefLoMein.png";
import beefBrisketPotRoast from "../../images/beefBrisketPotRoast.png";
import beefBrisketPot from "../../images/beefBrisketPot.png";
import beefSundayRoast from "../../images/beefSundayRoast.png";
import beefDumplingStew from "../../images/beefDumplingStew.png";
import beefDumpling from "../../images/beefDumpling.png";
import beefWellington from "../../images/beefWellington.png";

//SEAFOOD
import sushi from "../../images/sushi.png";

//PASTA
import squashLinguine from "../../images/squashLinguine.png";

const initialState = {
	initialRecipes: {
		breakfast: [
			{
				title: "Banana pancakes",
				img: bananaPancakes,
				about:
					"Fluffy on the inside, crispy on the outside and delicately flavored with bananas, these are phenomenal banana pancakes.",
				time: "20min",
				recipe:
					"In a small bowl, mash the banana with a fork until almost smooth. Whisk in the eggs, then add the milk and vanilla and whisk until well blended. Pour the banana mixture and the melted butter into the flour mixture. Fold the batter gently with a rubber spatula until just blended; do not over-mix. The batter will be thick and lumpy. ",
				ingredients:
					"1½ cups all purpose flour, spooned into measuring cup and leveled off 2 tablespoons sugar 2½ teaspoons baking powder ½ teaspoon salt",
			},
			{
				title: "Ham hock colcannon",
				img: hamHockColcannon,
				about:
					"Creamy, comforting mash with garlic and double cream, chunks of ham hock and shredded Savoy cabbage. Serve a bowlful topped with a runny fried egg",
				time: "40min",
				ingredients:
					"800g floury potatoes (such as Maris Piper or King Edward)50g butte 3 garlic cloves, chopped1 small Savoy cabbage, shredded 8 spring onions, sliced on a diagonal100ml double cream 2 tbsp wholegrain mustard180g ready-cooked ham hock 4 eggs",
			},
			{
				title: "Polish pancakes",
				img: polishPancakes,
				about:
					"Naleśniki (already plural) are Polish-style thin pancakes, often filled with sweet or savoury fillings. They can be rolled up or folded.",
				time: "15 minutes",
				recipe:
					"Get a large bowl. Add flour, a pinch of salt and vanilla sugar into it, combine with a fork.Gradually pour in milk and water, stirring vigorously with a whisk - to prevent lumps from forming. Add the eggs and mix again. If you have 2 tablespoons of soft butter - add it as well. You can mix with a whisk by hand, or with an electric mixer. If there are some lumps anyway, you can pour the dough through a strainer.",
				ingredients:
					"1¼ cup (150 g) all-purpose flour    Pinch of salt1 tbsp vanilla sugar or fine sugar; only if you're making a sweet filling⅘ cup (200 ml) mil ⅖ (6.5 tbsp, 100 ml) water, can be carbonated 2 eggs 2 tbsp (25 g) butter  ½ tsp neutral cooking oil, e.g. canola",
			},
			{
				title: "Boxty breakfast",
				img: boxtyBreakfast,
				about:
					"Boxty are potato pancakes. The savory pancakes consist of potatoes, flour, eggs, milk, and seasonings shaped into patties and fried in oil. ",
				time: "30 mins",
				recipe:
					" You'll find the full, step-by-step recipe below – but here's a brief overview of what you can expect when you make Irish boxty: Toss the grated potatoes with flour, then stir in the mashed potatoes. Mix the wet ingredients, stir into the potato mixture, and season.Fry the mixture in patties on both sides until golden brown. ",
				ingredients:
					"· Potatoes: You'll need grated raw potatoes and a cup of leftover mashed potatoes.Flour: All-purpose flour adds structure and helps hold the pancakes together.Egg: An egg lends moisture and acts as a binder.Milk: You'll need a tablespoon of skim milk.Seasonings: This Irish boxty is simply seasoned with salt and pepper.Oil: The savory Irish pancakes are fried in olive oil. ",
			},
			{
				title: "French omlette",
				img: frenchOmlette,
				about:
					"The French omelette looms large in kitchen legend, and the story you'll most often hear is that it was the dish chefs would use to test prospective cooks. ",
				time: "10 mins",
				recipe:
					"Whisk eggs, water, and salt together in a mixing bowl. Whisk until mixture is very liquid and whites are completely blended in, 1 or 2 minutes. ",
				ingredients:
					"3 large eggs Kosher salt and freshly ground white or black pepper 1 tablespoon (15g) unsalted butter",
			},
			{
				title: "English breakfast",
				img: englishBreakfast,
				about:
					"The 'common' full English breakfast is a substantial meal consisting of back bacon, eggs, British sausage, baked beans, bubble and squeak, fried tomato, fried mushrooms, black pudding, with fried and toasted bread on the side.",
				time: "35 minutes.",
				recipe:
					"    Warm the beans. ...Cook the sausages and bacon. ...If you're having black pudding, add it to the pan and fry, flipping once. ...Cook the mushrooms and tomatoes. ... Fry the bread and cook the eggs. ...Plate and enjoy!",
				ingredients:
					"bacon, eggs, sausage, black pudding, baked beans, grilled tomato, fried bread and toast, served with a jams, marmalades, tea/coffee and orange juice",
			},
			{
				title: "Cheese sandwich",
				img: cheeseSandwich,
				about:
					"A cheese sandwich is a sandwich made with cheese on bread. Typically semi-hard cheeses are used for the filling, such as Cheddar, Red Leicester, or Double Gloucester",
				time: " 3 to 4 mins",
				recipe:
					"    Liberally butter one side of each slice of bread.Top one side with cheese. Add crisps if using.Add second slice on top butter-side-down, gently press to secure the filling, then slice in half and enjoy!",
				ingredients: "cheese,bread",
			},
		],
		miscellaneous: [
			{
				title: "Portugese custard tarts",
				img: portugeseCustardTarts,
				about:
					"Pastel de nata, (or, the plural, pasteis de nata) are quintessentially Portuguese custard tarts with a baked cream and egg yolk custard centre, a buttery puff pastry shell and a golden, caramelised top.",
				time: "4 hrs",
				recipe:
					"Combine flour, salt, and cold water in a bowl. Mix with a wooden spoon until dough just comes together and pulls away from the sides of the bowl. Dough should be sticky; adjust with more flour or water to achieve what's shown in the video. ",
				ingredients:
					"1 cup all-purpose flour¼ teaspoon kosher salt ⅓ cup cold water 1 stick high-quality unsalted butter, fully softened, divided",
			},
			{
				title: "Portugese prego por",
				img: portugesePregoPor,
				about:
					"Prego is a ubiquitous Portuguese sandwich prepared with thin slices of beef that are seasoned with garlic, fried, sautéed alongside onions and wine, then placed inside a bread roll.",
				time: "2h",
				recipe:
					"Rub the garlic over the steaks then put in a sandwich bag and tip in the olive oil, sherry vinegar and parsley stalks. Smoosh everything together, then use a rolling pin to bash the steaks a few times. Leave for 1-2 hours.",
				ingredients:
					"    1 clove garlic, crushed2 small (about 150g each) rump steaks, all fat trimmed2 tbsp olive oil 1 tbsp sherry vinegar a few flat-leaf parsley stalks 2 ciabatta rolls, lightly toasted 2 rocket, handfuls",
			},
			{
				title: "Stuffed lamb tomatoes",
				img: stuffedLambTomatoes,
				about:
					"These juicy tomatoes improve in flavour if cooked the day before you serve them. You can easily make them veggie too",
				time: "45 mins",
				recipe:
					"Stuff the tomatoes up to the brim, top tomatoes with their lids, drizzle with 2 tbsp more olive oil, sprinkle 3 tbsp water into the tray, then bake for 35 mins. Serve with salad and crusty bread, hot or cold.",
				ingredients:
					"4 beef tomatoes pinch sugar 4 tbsp Greek extra virgin olive oil, plus extra to drizzle 1 Spanish onion, finely chopped",
			},
			{
				title: "Salmon eggs benedict",
				img: salmonEggsBenedict,
				about:
					"Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ",
				time: "40min",
				recipe:
					"Lightly toast the English muffins either in a toaster or by frying them in a little butter on their cut sides. Place them on the plates you will use to serve them then spread the cream cheese on top. Divide the smoked salmon between them.",
				ingredients:
					"4 large eggs 2 English muffins (cut in half (Gluten-free, if needed. See notes for Whole30 + paleo)) 4 tablespoons cream cheese (omit for Whole30 + paleo) 3 ounces smoked salmon (salmon lox) 2 teaspoons capers Thinly sliced red onion A pinch of black pepper",
			},
		],
		chicken: [
			{
				title: "Teriyaki chicken casserole",
				img: teriyakiChickenCasserole,
				about:
					"Teriyaki Chicken Casserole is full of savory chicken, rice and vegetables. The teriyaki sauce gives it outstanding flavor. This delicious meal is one your family will love!",
				time: "1h",
				recipe:
					"Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.",
				ingredients:
					"3/4 cup low-sodium soy sauce1/2 cup water1/4 cup brown sugar1/2 teaspoon ground ginger1/2 teaspoon minced garlic",
			},
			{
				title: "Chicken Alfredo Primavera",
				img: chickenAlfredoPrimavera,
				about:
					"Chicken primavera Alfredo features sautéed chicken, mushrooms, and green and red peppers in a rich Alfredo sauce.",
				time: "30 mins",
				recipe:
					"Prepare pasta according to package directions, adding in vegetables during the last 3 minutes of cooking.Step 2Meanwhile, in medium saucepan, heat chicken and Alfredo sauce over medium-high heat, stirring occasionally, 5 minutes.Step 3 Serve chicken mixture over hot pasta and vegetables.",
				ingredients:
					"1 pound fettuccine pasta¼ cup butter 2 skinless, boneless chicken breast halves, cut into strips1 clove garlic, minced, or more to taste 4 ounces sliced fresh mushrooms",
			},
			{
				title: "Potato gratin with chicken",
				img: potatoGratinWithChicken,
				about:
					"You can call it a gratin, a dauphinoise, a casserole, or whatever you’d like, we just know it’s darn delicious. Chicken, thinly sliced potatoes, and onions are blanketed in a creamy sauce that’s absolutely amazing. It’s a little bit addictive; it’s a dish that makes it nearly impossible to stop after the first serving. (But there are worse problems to have.)",
				time: "1 hour 20 minutes",
				recipe:
					"Preheat the oven to 200C/400F.Heat the oil in a large frying pan. Add the onion, garlic and carrots and cook on medium heat, stirring regularly until the onion softens.Add the wine, bring to the boil, then simmer for 2-3 minutes. Add the cream and mustard and stir together. Heat through until almost boiling, then stir in both cheeses, along with a good pinch of salt, pepper and dried thyme",
				ingredients:
					"waxy potatoes, peeled and thinly sliced1 small white onion, thinly sliced3 cups half-and-half2 cups Gruyere or Swiss cheese, grated2 tablespoons unsalted butter, for",
			},
			{
				title: "Piri-piri chicken and slaw",
				img: piriPiriChickenAndSlaw,
				about:
					"Create your own Portuguese-style chicken, chips and slaw at home. Tip all of the spicy roasting tin juices into a bowl to serve alongside",
				time: "1,5h",
				recipe:
					"Heat the oven to 190C/fan 170C/gas 5. Put the chicken in a roasting tray and cook for 1 hour 20 minutes. Rest under loose foil for 20 minutes. While the chicken is resting, mix together the slaw ingredients and season. Serve the chicken with slaw, fries and condiments",
				ingredients:
					"    1.5kg whole chicken to serve oven chips to serve ketchup, american mustard and mayonnaise",
			},
		],
		desserts: [
			{
				title: "Blackberry fool",
				img: blackberryFool,
				about:
					"Whipping up this dessert may be the wisest decision you’ll make in the summer: It comes together quickly and uses only five ingredients. Mashed juicy berries folded into lightly whipped cream results in a simple dish that manages to feel both decadent and light. ",
				time: "20min",
				recipe:
					"Halve, the vanilla pod and scrape out the seeds, then place in a large pan along with 350g of the berries, the sugar and lemon juice. Bring to the boil over a medium heat.Simmer for 3 to 4 minutes, or until syrupy and the berries are soft but holding their shape. Set aside to cool.In a large bowl, whisk the cream to form peaks, fold through the yogurt and swirl through a third of the syrup.Layer the rest of the syrup and cream in dessert glasses, garnish with syrup and fresh berries.",
				ingredients:
					"1 vanilla pod500 g blackberries 100 g caster sugar1 lemon  330 ml double cream 200 ml fat-free Greek yoghurt",
			},
			{
				title: "Choc Chip Pecan Pie",
				img: chocChipPecanPie,
				about:
					"An indulgent chocolate and pecan treat with buttery pastry and a gooey filling everybody can get stuck into",
				time: "2h",
				recipe:
					"First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6.",
				ingredients:
					"    300g plain flour 75g salted butter, cubed 100g cream cheese 1 tbsp icing sugar",
			},
			{
				title: "Raspbery brownies",
				img: raspberyBrownies,
				about:
					"Squidgy and super moreish, these gorgeous foolproof fruity chocolate bakes will be snapped up in seconds",
				time: "1h",
				recipe:
					"Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.",
				ingredients:
					"200g dark chocolate, broken into chunks100g milk chocolate, broken into chunks 250g pack salted butter 400g soft light brown sugar 4 large eggs 140g plain flour 50g cocoa powder 200g raspberries",
			},
			{
				title: "Christmas Pudding Trifle",
				img: christmasPuddingTrifle,
				about:
					"Use leftover Christmas pudding to rustle up this speedy and sumptuously creamy trifle with Grand Marnier-steeped oranges",
				time: "15min",
				recipe:
					"Peel the oranges using a sharp knife, ensuring all the pith is removed. Slice as thinly as possible and arrange over a dinner plate. Sprinkle with the demerara sugar followed by the Grand Marnier and set aside.",
				ingredients:
					"3 oranges 1 tbsp demerara sugar 2 tbsp Grand Marnier 300g leftover Christmas pudding 500g pot custard 250g pot mascarpone 284ml pot double cream",
			},
			{
				title: "Apple frangipan tort",
				img: appleFrangipanTort,
				about:
					"With a base of crushed biscuits, rather than pastry, this tart is quick to make – no need for any rolling out or baking blind. The apple and almond go so well together too. Make it a day ahead then just reheat it when you are ready to serve.",
				time: "50min",
				recipe:
					"Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.",
				ingredients:
					" 175g/6oz digestive biscuits 75g/3oz butter 200g/7oz Bramley applesFor the frangipane filling 75g/3oz butter, softened 75g/3oz caster sugar 2 free-range eggs, beaten 75g/3oz ground almonds 1 tsp almond extract 50g/1¾oz flaked almonds",
			},
			{
				title: "New york cheescake",
				img: newYorkCheescake,
				about:
					"This authentic creamy dessert will add a taste of New York to any dining table. Our American-style baked cheesecake recipe makes an easy family dessert.",
				time: "2h",
				recipe:
					"Line the base of a 23cm springform cake tin by putting a square piece of parchment paper or foil on top of the tin base and then clipping the side on so the paper or foil is trapped and any excess sticks out of the bottom.",
				ingredients:
					" 85g butter, plus extra for tin 140g digestive biscuits, made into fine crumbs (add 2 extra biscuits if you like a thicker base) 1 tbsp sugar, granulated or golden caster",
			},
			{
				title: "sugar pie",
				img: sugarPie,
				about:
					"Sugar pie is a dessert in northern French and Belgiancuisine, where it is called tarte au sucre. It is also popular in Canada.",
				time: "1h",
				recipe:
					"Preheat oven to 325°F. Place the pie crust on a cookie sheet (in case it boils over). Blind bake the crust for 10 minutes.When you remove the crust from the oven after 10 minutes, turn the oven up to 350°F. In a large bowl, whisk the melted butter, flour, milk, vanilla, and brown sugar. Whisk the eggs separately, then stir them into the brown sugar mixture.",
				ingredients:
					" 2 tablespoons butter3 tablespoons flour½ cup whole milk1 and ½ cups brown sugar2 large eggs½ teaspoon vanilla extract1 9-inch Pie crust I used a store bought crust",
			},
		],
		beef: [
			{
				title: "Beef And Mustard Pie",
				img: beefAndMustardPie,
				about:
					"Slow cooked beef makes a wonderful filling for pie. Prepare the meat stew ahead and assemble the pie when you’re ready to cook it.",
				time: "50min",
				recipe:
					"Preheat the oven to 150C/300F/Gas 2.Toss the beef and flour together in a bowl with some salt and black pepper.Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.Fry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.Cover with a lid and place in the oven for two hours.Remove from the oven, check the seasoning and set aside to cool. Remove the thyme.When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.",
				ingredients:
					"1kg/2lb 4oz beef skirt, cut into large chunks2 tbsp plain floursalt and freshly ground black pepper2 tbsp rapeseed oil200ml/7fl oz red wine400ml/14fl oz beef stock1 onion, finely sliced2 large carrots, cut into 2.5cm/1in pieces3 sprigs thyme	2 tbsp wholegrain mustard	2 free-range egg yolks, beaten400g/14oz all-butter puff pastry, rolled to 5mm/¼in thick",
			},
			{
				title: "Braised beed chilli",
				img: braisedBeefChilli,
				about:
					"Ancho chillies, dark chocolate and paprika add wonderful flavours to this slow-cooked beef chilli. Serve it with fresh bean salsa for an impressive one-pot dish.",
				time: "50min",
				recipe:
					"Heat the oven to 150°C/130°C fan/gas 2. Heat a glug of oil in a large lidded flameproof casserole over a medium heat. Fry the onions for 5 minutes, then add the spices and cook for 2-3 minutes more. Add the beef, turn up the heat and fry for 5-8 minutes to brown, stirring regularly. Add the peppers and fry for a further 5 minutes.Stir in the chillies, tomato purée, stock and tomatoes, bring to the boil, then cover with the lid and cook in the oven for 3 hours. Remove the lid and cook for a further 30 minutes. Just before serving, combine the salsa ingredients, taste and season.Once the beef is cooked, stir in the chocolate and coriander. Taste and season, then serve with rice, soured cream and the salsa.",
				ingredients:
					"Olive oil for frying2 red onions, thinly sliced1 tbsp ground cumin1 tsp smoked sweet paprika1 tbsp ground coriander1.5kg beef shin, diced3 green peppers, sliced2 dried ancho chillies, soaked in hot water for 10 minutes, then roughly chopped1 tbsp tomato purée500ml beef stock (we like )400g tin chopped tomatoes30g very dark chocolate (80 per cent cocoa solids), in piecesLarge bunch fresh coriander, leaves roughly chopped",
			},
			{
				title: "General Tsos Chicken",
				img: generalTsosChicken,
				about:
					"This is a popular Chinese-American dish that appears in suburban Chinese restaurants here in Australia under various other guises. Peking-Style Chicken or sometimes something mysteriously titled House Special Crispy Chicken. I can never resist a House Special! ",
				time: "50 mins",
				recipe:
					"Add sugar, soy sauce, chicken broth, peanut oil, rice vinegar, sesame oil, and ginger; bring to a boil and cook for 3 minutes. Whisk 2 teaspoons of cornstarch in water until dissolved. Stir into the boiling sauce. Return to a boil and cook until the sauce thickens and is no longer cloudy from the cornstarch, about 1 minute. ",
				ingredients:
					"4 cups vegetable oil for frying1 large egg 1 ½ pounds skinless, boneless chicken thighs, cut into 1 1/2-inch pieces1 teaspoon salt1 teaspoon white sugar 1 pinch white pepper1 cup cornstarch",
			},
			{
				title: "Beef lo mein",
				img: beefLoMein,
				about:
					"Lo mein might already be one of your go-tos when ordering Chinese takeout. Skip spending money and make this dish at home in only 30 minutes! ",
				time: "30 mins",
				recipe:
					"Using the same skillet that was used to cook beef, sautee onions until golden brown with sesame oil. Remove from the skillet. In the same skillet, saute carrots until softened, add broccoli and cook for about three minutes. Press garlic into the same mixture.",
				ingredients:
					"8 oz noodles (cooked according to instructions)1 tsp sesame oil1/4 cup hot boiled water1 tbsp Beef Better Than Bouillon3 tbsp soy sauce2 tbsp brown sugaroil (olive or sesame) for frying1 lb beef2 large carrots2 cup broccoli1 large onion 4 garlic cloves",
			},
			{
				title: "Beef brisket pot roast",
				img: beefBrisketPotRoast,
				about:
					"Follow our recipe to learn how to cook brisket in beer, resulting in a richer flavour and beautifully tender texture. Serve with mash, parsnips and mushrooms to soak up the gravy",
				time: "2,5h",
				recipe:
					"Preheat the oven to 190C/Gas 5/fan oven 170C. Wash and dry brisket and season. Heat 2 tablespoons of oil in a deep casserole and brown beef all over. Remove from pan. Turn down heat, add butter and fry the onions, celery, carrots and mushroom stalks for 6-8 minutes.Return beef to pan and add beer, thyme, bay leaves and sugar. Add water if necessary so the liquid comes about two-thirds up the beef. Season, bring to a simmer, cover tightly, and cook in the oven for 20 minutes. Reduce heat to 160C/Gas 3/fan oven 140C and cook for 2 hours, turning twice, until tender.",
				ingredients:
					"1-1¼kg/2¼-2¾ lb boned and rolled beef brisket5 tbsp vegetable oillarge knob of butter2 large onions, halved and sliced2-3 celery sticks, finely chopped2 carrots, sliced200-250g/8-9oz large flat mushrooms, stalks chopped and heads thinly sliced500-550ml bottle brown ale or stouta few fresh thyme sprigs2 bay leaves1-2 tsp light muscovado sugar500g parsnips, cut into wedges1 tbsp Dijon mustardchopped fresh parsley or thyme to serve",
			},
			{
				title: "Beef brisket pot",
				img: beefBrisketPot,
				about:
					"Follow our recipe to learn how to cook brisket in beer, resulting in a richer flavour and beautifully tender texture. Serve with mash, parsnips and mushrooms to soak up the gravy",
				time: "2,5h",
				recipe:
					"Return beef to pan and add beer, thyme, bay leaves and sugar. Add water if necessary so the liquid comes about two-thirds up the beef. Season, bring to a simmer, cover tightly, and cook in the oven for 20 minutes. Reduce heat to 160C/Gas 3/fan oven 140C and cook for 2 hours, turning twice, until tender.",
				ingredients:
					" 1-1¼kg/2¼-2¾ lb boned and rolled beef brisket5 tbsp vegetable oillarge knob of butter2 large onions, halved and sliced2-3 celery sticks, finely chopped2 carrots, sliced200-250g/8-9oz large flat mushrooms, stalks chopped and heads thinly sliced500-550ml bottle brown ale or stouta few fresh thyme sprigs2 bay leaves1-2 tsp light muscovado sugar500g parsnips, cut into wedges1 tbsp Dijon mustardchopped fresh parsley or thyme to serve",
			},
			{
				title: "Beef sunday roast",
				img: beefSundayRoast,
				about:
					"This easy roast beef recipe with carrots and a simple gravy is ideal for a stunning Sunday dinner for the family. It takes just 15 minutes to prepare.",
				time: "1,5h",
				recipe:
					"Put 1 onion, cut into 8 wedges, and 500g carrots, halved lengthways, into a roasting tin and sit the beef on top, then cook for 20 mins.Reduce oven to 190C/170C fan/gas 5 and continue to cook the beef for 30 mins if you like it rare, 40 mins for medium and 1 hr for well done.Remove the beef and carrots from the oven, place onto warm plates or platters and cover with foil to keep warm.",
				ingredients:
					" 1 tsp plain flour 1 tsp mustard powder 950g beef top rump joint (see tip below) 1 onion, cut into 8 wedges 500g carrots, halved lengthways For the gravy 1 tbsp plain flour 250ml beef stock",
			},
			{
				title: "Beef dumpling stew",
				img: beefDumplingStew,
				about:
					"For the coldest wintry evenings, tuck into a rich beef stew with fluffy dumplings to warm you right down to your toes.",
				time: "2h",
				recipe:
					"For the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.Sprinkle over the flour and cook for a further 2-3 minutes. Add the garlic and all the vegetables and fry for 1-2 minutes.Stir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.Cover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.For the dumplings, sift the flour, baking powder and salt into a bowl. Add the suet and enough water to form a thick dough.With floured hands, roll spoonfuls of the dough into small balls.After two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have puffed up and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)",
				ingredients:
					"2 tbsp olive oil 25g/1oz butter 750g/1lb 10oz beef braising steak, chopped into bite-sized pieces 2 tbsp plain flour 2 garlic cloves, crushed 175g/6oz baby onions, peeled 150g/5oz celery, cut into large chunks 150g/5oz carrots, cut into large chunks 2 leeks, roughly chopped 200g/7oz swede, cut into large chunks 150ml/5fl oz red wine 500ml/18fl oz beef stock 2 fresh bay leaves 3 tbsp fresh thyme leaves 3 tbsp chopped fresh flatleaf parsley Worcestershire sauce, to taste 1 tbsp balsamic vinegar, or to taste salt and freshly ground black pepper ",
			},
			{
				title: "Beef dumpling",
				img: beefDumpling,
				about:
					"These Northern Chinese style beef dumplings with scallions are super flavorful. They’re particularly good when you make your own wrappers and boil the dumplings, which allows you to really appreciate how juicy they are! ",
				time: "1h",
				recipe:
					"Put the flour in a large mixing bowl or in the bowl of a stand mixer. Gradually add the water to the flour and knead into a smooth dough (either by hand or with the dough hook attachment on low speed). This process should take about 5 minutes. If using a stand mixer, you may need to stop the mixer and bring the dough together with your hands. Knead by hand into a ball, and cover the dough in the bowl with an overturned plate. Allow to rest for 1 hour.",
				ingredients:
					"1/2 pound (230 grams) ground beef (at least 20% fat)1/4 cup chicken stock (or beef stock, or water 1 tablespoon light soy sauce (or soy sauce)1 tablespoon Shaoxing wine (or dry sherry)2 teaspoons ginger , grated1 teaspoon salt1/4 teaspoon ground toasted Sichuan peppercorn (or black pepper)4 green onions , coarsely chopped1 large carrot , coarsely chopped1/2 cup frozen corn , thawed1/2 cup frozen green peas , thawed1 tablespoon sesame oil20 homemade dumpling wrappers (or packaged dumpling wrappers)1 to 2 tablespoons vegetable oil",
			},
			{
				title: "Beef wellington",
				img: beefWellington,
				about:
					"Gordon Ramsay's version of the classic steak dish – a showstopping centrepiece on a special occasion",
				time: "2,5h",
				recipe:
					"Sit the 1kg beef fillet on a roasting tray, brush with 1 tbsp olive oil and season with pepper, then roast for 15 mins for medium-rare or 20 mins for medium. When the beef is cooked to your liking, remove from the oven to cool, then chill in the fridge for about 20 mins.",
				ingredients:
					"a good beef fillet (preferably Aberdeen Angus) of around 1kg/2lb 4oz3 tbsp olive oil250g/9oz chestnut mushroom, include some wild ones if you like50g/2oz butter1 large sprig fresh thyme100ml/3.5 fl oz dry white wine12 slices prosciutto500g/1lb 2oz pack puff pastry, thawed if frozena little flour, for dusting2 egg yolks beaten with 1 tsp water",
			},
		],
		seafood: [
			{
				title: "Sushi",
				img: sushi,
				about:
					"Sushi rolls can be filled with any ingredients you choose. Try smoked salmon instead of imitation crabmeat. Serve with teriyaki sauce and wasabi.",
				time: "1 hr 5 mins",
				recipe:
					"Center 1 nori sheet on a bamboo sushi mat. Use wet hands to spread a thin layer of rice on top. Arrange 1/4 of the crabmeat, avocado, cucumber, and pickled ginger over rice in a line down the center. Lift one end of the mat and roll it tightly over filling to make a complete roll. Repeat with remaining ingredients. ",
				ingredients:
					"1 ⅓ cups water ⅔ cup uncooked short-grain white rice3 tablespoons rice vinegar3 tablespoons white sugar1 ½ teaspoons salt4 sheets nori seaweed sheets½ pound imitation crabmeat, flaked1 avocado - peeled, pitted, and sliced½ cucumber, peeled, cut into small strips2 tablespoons pickled ginger",
			},
		],
		pasta: [
			{
				title: "Squash linguine",
				img: squashLinguine,
				about:
					"Pasta is a type of food typically made from an unleavened dough of wheat  flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
				time: "1h",
				recipe:
					"Cook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.",
				ingredients:
					"350g chopped butternut squash3 peeled garlic cloves3 tbsp olive oil350g linguinesmall bunch sage",
			},
		],
	},
	myRecipes: [],
	favoriteRecipes: [],
	searchedRecipes: [],
	isLoading: false,
	error: null,
};

const handlePending = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		searchRecipe: (state, action) => {
			const valuesArray = Object.values(state.initialRecipes);
			const searchedInitialRecipesArr = [];
			const searchedMyRecipesArr = [];

			valuesArray.forEach((arrayOfObjects) =>
				arrayOfObjects.forEach((object) => {
					if (
						object.title.toLowerCase().includes(action.payload.toLowerCase())
					) {
						searchedInitialRecipesArr.push(object);
					}
				})
			);
			state.myRecipes.forEach((el) => {
				if (el.title.includes(action.payload)) {
					searchedMyRecipesArr.push(el);
				}
			});
			const searchedRecipes = searchedMyRecipesArr.concat(
				searchedInitialRecipesArr
			);
			state.searchedRecipes = searchedRecipes;
		},
	},
	extraReducers: {
		[addRecipe.pending]: handlePending,
		[addRecipe.fulfilled](state, action) {
			state.myRecipes.push(action.payload);
			state.isLoading = false;
			state.error = null;
		},
		[addRecipe.rejected]: handleRejected,

		[getMyRecipes.pending]: handlePending,
		[getMyRecipes.fulfilled](state, action) {
			state.myRecipes = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		[getMyRecipes.rejected]: handleRejected,

		[getFavorites.pending]: handlePending,
		[getFavorites.fulfilled](state, action) {
			state.favoriteRecipes = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		[getFavorites.rejected]: handleRejected,

		[deleteRecipe.pending]: handlePending,
		[deleteRecipe.fulfilled](state, action) {
			const recipeId = action.payload.data._id;
			state.myRecipes = state.myRecipes.filter((el) => el._id !== recipeId);
			state.isLoading = false;
			state.error = null;
		},
		[deleteRecipe.rejected]: handleRejected,

		[addToFavorites.pending]: handlePending,
		[addToFavorites.fulfilled](state, action) {
			state.favoriteRecipes.push(action.payload);
			state.isLoading = false;
			state.error = null;
		},
		[addToFavorites.rejected]: handleRejected,

		[deleteFromFavorites.pending]: handlePending,
		[deleteFromFavorites.fulfilled](state, action) {
			const recipeId = action.payload.data._id;
			state.favoriteRecipes = state.favoriteRecipes.filter(
				(el) => el._id !== recipeId
			);
			state.isLoading = false;
			state.error = null;
		},
		[deleteFromFavorites.rejected]: handleRejected,
	},
});
export const { searchRecipe } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
