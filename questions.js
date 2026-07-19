// Dengue Champions Quiz - 100 Questions Database
// Divided into: Easy (40 questions), Moderate (30 questions), Very Hard (30 questions)

const QUESTIONS_DATA = {
  easy: [
    {
      id: 1,
      question: "Which insect spreads the Dengue virus?",
      options: ["Housefly", "Aedes mosquito", "Honeybee", "Butterfly"],
      correct: 1,
      explanation: "Only the female Aedes mosquito spreads Dengue when she bites a person!"
    },
    {
      id: 2,
      question: "What do the legs of an Aedes mosquito look like?",
      options: ["Solid yellow", "Bright green", "Black and white stripes", "Plain brown"],
      correct: 2,
      explanation: "Aedes mosquitoes have black and white stripes on their legs and bodies, making them look like tiny zebras!"
    },
    {
      id: 3,
      question: "Where do Aedes mosquitoes love to lay their eggs?",
      options: ["In dry sand", "In standing or still water", "On flower petals", "In deep muddy soil"],
      correct: 1,
      explanation: "They love to lay eggs in clean, still water that collects in pots, buckets, and old tyres."
    },
    {
      id: 4,
      question: "Can you catch Dengue by shaking hands with someone who is sick?",
      options: ["Yes, always", "No, Dengue does not spread by touching", "Only if it is cold outside", "Only if you do not wash your hands"],
      correct: 1,
      explanation: "Dengue is not contagious. It cannot spread from person to person by touching, coughing, or shaking hands."
    },
    {
      id: 5,
      question: "What is a very common sign that someone has Dengue?",
      options: ["High fever", "Green hair", "Blue spots on fingers", "Sneezing a lot"],
      correct: 0,
      explanation: "A sudden high fever is one of the main signs that someone might have Dengue."
    },
    {
      id: 6,
      question: "Because of its stripes, what is the Aedes mosquito sometimes called?",
      options: ["Zebra fly", "Tiger mosquito", "Cheetah bug", "Leopard gnat"],
      correct: 1,
      explanation: "It is called the 'Tiger Mosquito' because of the bold white and black stripes on its body!"
    },
    {
      id: 7,
      question: "Which of these is a perfect breeding place for Dengue mosquitoes?",
      options: ["A dry sandbox", "An open bucket filled with rain water", "A running garden sprinkler", "A fast-flowing river"],
      correct: 1,
      explanation: "Any container holding quiet, still rainwater is a perfect home for mosquito eggs!"
    },
    {
      id: 8,
      question: "Why do female Aedes mosquitoes bite humans?",
      options: ["They are angry", "They need blood to help their eggs grow", "They eat blood as food", "They want to play"],
      correct: 1,
      explanation: "Female mosquitoes need the special proteins in blood to develop and lay healthy eggs."
    },
    {
      id: 9,
      question: "Do male mosquitoes bite humans?",
      options: ["Yes, all the time", "No, they only drink flower juice (nectar)", "Only at night", "Only when they are babies"],
      correct: 1,
      explanation: "Male mosquitoes do not bite! They live peacefully by drinking sweet nectar from plants and flowers."
    },
    {
      id: 10,
      question: "When is Dengue most common in many countries?",
      options: ["During the dry winter", "During and after the rainy season", "During hot summer deserts", "Only in the spring time"],
      correct: 1,
      explanation: "Rainy seasons leave lots of puddles and collected water, which means more breeding sites and more mosquitoes!"
    },
    {
      id: 11,
      question: "How does the Dengue virus actually get into your body?",
      options: ["Through breathing dirty air", "Through a mosquito's saliva when it bites", "By eating unwashed fruits", "By swimming in pool water"],
      correct: 1,
      explanation: "When an infected mosquito bites you, its saliva enters your skin and carries the virus with it."
    },
    {
      id: 12,
      question: "What is the best way to get rid of mosquito eggs in flower trays?",
      options: ["Add more water", "Empty the water and dry the tray", "Cover them with leaves", "Ignore them"],
      correct: 1,
      explanation: "Pouring out the water and keeping the tray dry stops mosquito eggs from hatching."
    },
    {
      id: 13,
      question: "What part of its body does a mosquito use to bite and suck blood?",
      options: ["A sharp beak called a proboscis", "Its front claws", "Its tiny teeth", "Its wings"],
      correct: 0,
      explanation: "Mosquitoes have a needle-like tube called a proboscis (pro-boss-iss) that punctures the skin to find blood."
    },
    {
      id: 14,
      question: "Why can't mosquitoes breed in a fast-flowing mountain river?",
      options: ["The water is too cold", "The moving water washes the eggs away", "Fish eat all the adults", "Mosquitoes cannot swim"],
      correct: 1,
      explanation: "Aedes mosquitoes need calm, completely still water. Moving water makes it impossible for their eggs to stay safe."
    },
    {
      id: 15,
      question: "What is the high-pitched sound you hear when a mosquito is near your ear?",
      options: ["It is shouting", "The sound of its beating wings", "It is whistling", "Its legs rubbing together"],
      correct: 1,
      explanation: "Mosquitoes beat their wings up to 500 times per second! This fast beating makes that annoying buzzing sound."
    },
    {
      id: 16,
      question: "How does a child usually feel when they get sick with Dengue?",
      options: ["Super strong and energetic", "Very tired, weak, and achy", "Hungry for junk food", "Happy and playful"],
      correct: 1,
      explanation: "Dengue makes your body feel very tired, weak, and gives you headaches and muscle pains."
    },
    {
      id: 17,
      question: "Where do Aedes mosquitoes love to rest inside a house?",
      options: ["Right under bright ceiling lights", "In dark areas like behind curtains or in cupboards", "On the kitchen stove", "On the glass window panes"],
      correct: 1,
      explanation: "They prefer dark, cool, and quiet indoor spots to rest during the day."
    },
    {
      id: 18,
      question: "How small is a single mosquito egg?",
      options: ["As big as a bean", "Tiny, like a speck of dust or black pepper", "As big as a coin", "Visible only under a super microscope"],
      correct: 1,
      explanation: "Mosquito eggs are tiny specks, about 1 millimeter long, and are usually black or dark brown."
    },
    {
      id: 19,
      question: "What is another common name for Dengue because of the body aches it causes?",
      options: ["Headache fever", "Breakbone fever", "Joint-lock illness", "Muscle flu"],
      correct: 1,
      explanation: "Dengue is nicknamed 'Breakbone Fever' because it can make your bones and joints feel like they are breaking!"
    },
    {
      id: 20,
      question: "How often should we empty and clean pet water bowls to stop mosquitoes?",
      options: ["Once a year", "Once a week", "Every three months", "Never"],
      correct: 1,
      explanation: "Emptying and scrubbing bowls once a week breaks the mosquito life cycle so they cannot turn into adults."
    },
    {
      id: 21,
      question: "Which of these is NOT a normal symptom of Dengue?",
      options: ["Sneezing and runny nose", "Pain behind the eyes", "Body rash", "High fever"],
      correct: 0,
      explanation: "Sneezing and a runny nose are signs of a common cold, not Dengue!"
    },
    {
      id: 22,
      question: "How many wings does an adult mosquito have?",
      options: ["Four wings", "Two wings", "Six wings", "No wings at all"],
      correct: 1,
      explanation: "Unlike butterflies or bees which have four wings, mosquitoes only have two wings for flying!"
    },
    {
      id: 23,
      question: "How many legs does an adult mosquito have?",
      options: ["Four legs", "Eight legs", "Six legs", "Ten legs"],
      correct: 2,
      explanation: "Like all insects, adult mosquitoes have exactly six thin, long legs."
    },
    {
      id: 24,
      question: "What should you do to a large outdoor barrel used to store rainwater?",
      options: ["Leave it wide open", "Cover it with a tight lid or fine screen", "Paint it red", "Fill it to the brim so it overflows"],
      correct: 1,
      explanation: "Covering the barrel tightly stops female mosquitoes from getting inside to lay eggs."
    },
    {
      id: 25,
      question: "Where do mosquito larvae (baby mosquitoes) live?",
      options: ["In dry dirt", "Wiggling in water", "Under green leaves", "Inside rotting wood"],
      correct: 1,
      explanation: "Mosquito larvae must live in water. They swim and wiggle around to eat and breathe."
    },
    {
      id: 26,
      question: "What do mosquito larvae look like in water?",
      options: ["Tiny swimming fish", "Little wiggling worms", "Small water spiders", "Floating green leaves"],
      correct: 1,
      explanation: "They look like tiny hairy worms that wiggle up and down in the water. People call them 'wigglers'!"
    },
    {
      id: 27,
      question: "Why is keeping our garden tidy helpful in fighting Dengue?",
      options: ["It makes the flowers grow faster", "It stops water from collecting in hidden trash", "It keeps the grass green", "It attracts birds"],
      correct: 1,
      explanation: "Hidden plastic cups, coconut shells, or cans in an untidy garden can collect rainwater and breed mosquitoes."
    },
    {
      id: 28,
      question: "Which container is completely safe from breeding mosquitoes?",
      options: ["A bucket of dirty water", "A completely dry, upside-down bucket", "A flower vase with old water", "A puddle in the driveway"],
      correct: 1,
      explanation: "Without liquid water, mosquitoes cannot lay eggs and larvae cannot survive. Dry is safe!"
    },
    {
      id: 29,
      question: "What are the favorite times of day for the Aedes mosquito to bite?",
      options: ["Only at midnight", "During daylight hours, especially morning and evening", "Only when it is raining", "Only during lunch time"],
      correct: 1,
      explanation: "Unlike malaria mosquitoes which bite at night, Dengue mosquitoes are most active during the daytime!"
    },
    {
      id: 30,
      question: "What clothes can we wear to protect ourselves from bites when playing outdoors?",
      options: ["Shorts and t-shirts", "Long-sleeved shirts and long trousers", "Sleeveless tops", "Raincoats only"],
      correct: 1,
      explanation: "Wearing clothes that cover your arms and legs leaves less exposed skin for mosquitoes to bite."
    },
    {
      id: 31,
      question: "How does Dengue pain make your eyes feel?",
      options: ["It makes them itchy", "It causes pain behind the eyes", "It makes them turn yellow", "It makes you see double"],
      correct: 1,
      explanation: "A classic sign of Dengue is a dull, throbbing pain felt directly behind the eyes, especially when moving them."
    },
    {
      id: 32,
      question: "Can a mosquito fly as high as a bird or an airplane?",
      options: ["Yes, they fly in the clouds", "No, they usually fly close to the ground", "They only fly in trees", "They cannot fly against gravity"],
      correct: 1,
      explanation: "Aedes mosquitoes are weak flyers and stay low to the ground, usually biting around the ankles and knees."
    },
    {
      id: 33,
      question: "What is the average lifespan of an adult Aedes mosquito?",
      options: ["One single day", "About 2 to 4 weeks", "A whole year", "Five years"],
      correct: 1,
      explanation: "Adult mosquitoes usually live for about 2 weeks to a month in nature."
    },
    {
      id: 34,
      question: "What do mosquito larvae eat to grow?",
      options: ["Small bugs and insects", "Tiny plants, algae, and germs in the water", "Dirt and pebbles", "Fish food"],
      correct: 1,
      explanation: "Larvae feed on microscopic algae, bacteria, and organic matter floating in their water puddle."
    },
    {
      id: 35,
      question: "Does Dengue spread when a sick person coughs or sneezes near you?",
      options: ["Yes, through air droplets", "No, it is not spread through coughing", "Only in crowded classrooms", "Only during the winter"],
      correct: 1,
      explanation: "Dengue is not a respiratory disease. It is ONLY spread by the bite of an infected mosquito."
    },
    {
      id: 36,
      question: "What should you do if you find rainwater in a tray under your window plant pot?",
      options: ["Leave it for birds to drink", "Pour it out and clean the tray", "Put salt in it", "Add soap to it"],
      correct: 1,
      explanation: "Emptying the tray immediately removes a potential home for Aedes mosquito eggs."
    },
    {
      id: 37,
      question: "Which of these is a child-friendly way to describe a mosquito's life stages?",
      options: ["Egg -> Larva -> Pupa -> Adult", "Baby -> Toddler -> Teenager -> Adult", "Seed -> Leaf -> Flower -> Fruit", "Egg -> Tadpole -> Frog"],
      correct: 0,
      explanation: "Mosquitoes go through four distinct stages: Egg, Larva (wiggler), Pupa (tumbler), and adult flyer!"
    },
    {
      id: 38,
      question: "Why are Aedes mosquitoes sometimes called 'domestic' mosquitoes?",
      options: ["They are friendly pets", "They like to live in and around human homes", "They are trained to perform tricks", "They clean houses"],
      correct: 1,
      explanation: "They are called domestic because they choose to live very close to people, inside houses and backyards."
    },
    {
      id: 39,
      question: "Can you get Dengue from drinking contaminated water?",
      options: ["Yes, if the water is dirty", "No, Dengue virus is not spread by drinking water", "Only if there are larvae in it", "Only if it is cold water"],
      correct: 1,
      explanation: "Drinking dirty water can make you sick with stomach bugs, but it will never give you Dengue. Dengue requires a mosquito bite."
    },
    {
      id: 40,
      question: "What is the primary message of Dengue prevention campaigns?",
      options: ["Wash hands often", "No standing water, no mosquitoes, no Dengue!", "Eat healthy vegetables", "Sleep 10 hours a day"],
      correct: 1,
      explanation: "Getting rid of standing water is the single most important action to stop mosquitoes and prevent Dengue!"
    }
  ],
  moderate: [
    {
      id: 41,
      question: "Why is scrubbing the inside of water containers with a brush important?",
      options: ["To make the water taste better", "To scrape off sticky mosquito eggs", "To clean the color of the bucket", "To make the bucket shine"],
      correct: 1,
      explanation: "Aedes mosquito eggs have a sticky coating and cling to container walls. Simply pouring out water isn't enough; you must scrub them off!"
    },
    {
      id: 42,
      question: "How long can Aedes mosquito eggs stay alive in a dry bucket without water?",
      options: ["Only a few minutes", "Several hours", "Up to a year, waiting for rain", "They die instantly when dry"],
      correct: 2,
      explanation: "Aedes eggs are incredibly tough! They can dry out and survive for many months, then hatch as soon as water covers them again."
    },
    {
      id: 43,
      question: "If a student has a fever and joint pain from Dengue, which medicine is SAFE?",
      options: ["Aspirin", "Ibuprofen", "Paracetamol (Acetaminophen)", "Antibiotics"],
      correct: 2,
      explanation: "Paracetamol is safe to lower fever. Aspirin and Ibuprofen are unsafe because they thin the blood and increase bleeding risks!"
    },
    {
      id: 44,
      question: "Why should a Dengue patient drink plenty of water, juices, and oral rehydration salts (ORS)?",
      options: ["To wash the virus out of the stomach", "To stay hydrated and replace lost body fluids", "To make them sleep better", "To cool down the skin"],
      correct: 1,
      explanation: "Dengue often causes dehydration, which can be dangerous. Drinking lots of fluids is the most important treatment."
    },
    {
      id: 45,
      question: "Why do we install wire mesh screens on our home windows?",
      options: ["To make the house look pretty", "To let fresh air in while keeping mosquitoes out", "To stop the wind from blowing curtains", "To keep out heat"],
      correct: 1,
      explanation: "Screens act as a protective barrier, keeping mosquitoes outside while allowing cool air to circulate."
    },
    {
      id: 46,
      question: "What does 'mosquito repellent' lotion do?",
      options: ["It kills mosquitoes on contact", "It makes you smell bad to mosquitoes so they do not bite", "It makes your skin turn blue", "It heals bites instantly"],
      correct: 1,
      explanation: "Repellents confuse the mosquito's senses, making it hard for them to smell you or want to land on your skin."
    },
    {
      id: 47,
      question: "Why does wearing light-colored clothes help protect against mosquito bites?",
      options: ["Light colors reflect heat and are less attractive to mosquitoes", "Light colors make you invisible", "Light colors are too clean for bugs", "Light colors block mosquitoes' vision"],
      correct: 0,
      explanation: "Mosquitoes use heat and dark silhouettes to find targets. Light-colored clothing keeps you cooler and less noticeable to them."
    },
    {
      id: 48,
      question: "What is the name of the stage in a mosquito's life between larva and adult?",
      options: ["Caterpillar", "Pupa", "Egg pod", "Cocoon"],
      correct: 1,
      explanation: "The pupa is the stage where the mosquito transforms. It lives in water and looks like a tiny comma."
    },
    {
      id: 49,
      question: "Can a mosquito pupa move around in the water?",
      options: ["No, it is frozen in place", "Yes, it tumble-swims down if disturbed", "Yes, it crawls like a crab", "No, it floats like wood"],
      correct: 1,
      explanation: "Even though it doesn't feed, a pupa is very active! If you shine light on it, it will tumble rapidly to the bottom to hide."
    },
    {
      id: 50,
      question: "How do mosquito larvae breathe while swimming underwater?",
      options: ["Through gills like fish", "Through a breathing tube (siphon) at their tail end", "Through their eyes", "They hold their breath the whole time"],
      correct: 1,
      explanation: "Larvae have a special tube called a siphon at their tail. They hang upside down from the water surface to get air!"
    },
    {
      id: 51,
      question: "Why is a mosquito net around a bed very useful for sleeping babies?",
      options: ["It keeps the bed warm", "It physically blocks mosquitoes from reaching the baby", "It makes the room dark", "It smells like flowers"],
      correct: 1,
      explanation: "A mosquito net is a simple, chemical-free way to shield sleeping infants from daytime and nighttime bites."
    },
    {
      id: 52,
      question: "What type of skin marks often appear on a Dengue patient after a few days of fever?",
      options: ["Green scales", "A red, itchy rash", "Yellow spots", "Long stripes"],
      correct: 1,
      explanation: "A flat red rash, resembling sunburn, often covers the arms, legs, and chest of Dengue patients."
    },
    {
      id: 53,
      question: "How can a doctor confirm if a sick person has Dengue or just a normal cold?",
      options: ["By listening to their heartbeat", "By doing a blood test in a laboratory", "By checking their height", "By looking at their teeth"],
      correct: 1,
      explanation: "A blood test checks for the presence of the Dengue virus or antibodies made by the body to fight it."
    },
    {
      id: 54,
      question: "Why should we avoid letting water sit in trays under air conditioners?",
      options: ["It makes the AC break down", "It can become a hidden breeding site for Aedes mosquitoes", "It makes the air smell humid", "It attracts frogs"],
      correct: 1,
      explanation: "The water collected from AC condensation is clean and still—ideal for Aedes mosquitoes to lay eggs!"
    },
    {
      id: 55,
      question: "How often should we change the water in birdbaths or flower vases?",
      options: ["Once every month", "At least once a week", "Every hour", "Never, just add fresh water"],
      correct: 1,
      explanation: "It takes about 7 to 10 days for a mosquito egg to grow into a flying adult. Changing the water every 7 days stops this process."
    },
    {
      id: 56,
      question: "What temperature of water do mosquitoes prefer for laying their eggs?",
      options: ["Freezing cold ice water", "Warm, standing water", "Boiling hot water", "Deep ocean water"],
      correct: 1,
      explanation: "Warm and still water helps mosquito eggs hatch faster and larvae grow quickly."
    },
    {
      id: 57,
      question: "What gas that we breathe out attracts mosquitoes from far away?",
      options: ["Oxygen", "Carbon dioxide (CO2)", "Nitrogen", "Helium"],
      correct: 1,
      explanation: "When humans and animals breathe, they release carbon dioxide. Mosquitoes detect this gas from up to 30 meters away!"
    },
    {
      id: 58,
      question: "Besides carbon dioxide, what else on our skin guides mosquitoes to bite us?",
      options: ["Skin moisture, body heat, and sweat chemicals", "Soap smell", "Sunscreen lotion", "Dust particles"],
      correct: 0,
      explanation: "Mosquitoes use sensors to detect the heat radiating from our body and the chemical scents in our sweat."
    },
    {
      id: 59,
      question: "Why does Dengue spread much faster in big cities than in quiet forests?",
      options: ["Mosquitoes love city lights", "There are many people close together and plenty of artificial containers", "City air is warmer", "Forest mosquitoes do not like humans"],
      correct: 1,
      explanation: "Cities have crowded populations and lots of plastic, metal, and concrete items that collect puddle water."
    },
    {
      id: 60,
      question: "What should a school do during weekly safety checks to stop Dengue?",
      options: ["Paint the gates blue", "Inspect coolers, flowerpots, and playground corners for standing water", "Make students run races", "Close all the windows"],
      correct: 1,
      explanation: "Weekly inspections of school properties help locate and drain standing water, keeping classrooms safe."
    },
    {
      id: 61,
      question: "Why are old tyres sitting outdoors considered high-risk for Dengue?",
      options: ["Tyres smell like rubber", "Their curved shape traps rainwater and makes a dark, warm breeding spot", "Mosquitoes eat rubber", "They attract spiders"],
      correct: 1,
      explanation: "Old tyres are excellent rain-catchers! The inside of a tyre is dark, shaded, and damp—exactly what Aedes mosquitoes look for."
    },
    {
      id: 62,
      question: "What is the main difference between Dengue mosquitoes and Common house mosquitoes?",
      options: ["Dengue mosquitoes are twice as big", "Dengue mosquitoes bite mostly during the day; common house mosquitoes bite at night", "Common mosquitoes have wings; Dengue ones do not", "Dengue mosquitoes can swim under water"],
      correct: 1,
      explanation: "Aedes mosquitoes feed during daylight hours, while Culex (common house mosquitoes) usually bite at night."
    },
    {
      id: 63,
      question: "What does the name of the genus 'Aedes' mean?",
      options: ["Beautiful flyer", "Unpleasant or hostile", "Little tiger", "Water helper"],
      correct: 1,
      explanation: "The word comes from Greek, meaning 'unpleasant' or 'distasteful'—an accurate name for this pest!"
    },
    {
      id: 64,
      question: "Which of these is a good natural way to keep mosquitoes out of your backyard?",
      options: ["Planting repellent herbs like lemongrass, citronella, or lavender", "Sprinkling sugar on the grass", "Digging big holes", "Shining red lights"],
      correct: 0,
      explanation: "Certain plants release oils (like citronella) that mosquitoes dislike, helping to naturally keep them away."
    },
    {
      id: 65,
      question: "If your neighbor has standing water in their yard, why does it affect you?",
      options: ["It makes your grass dry", "Aedes mosquitoes can fly from their yard into yours to bite you", "It makes your house look bad", "It does not affect you at all"],
      correct: 1,
      explanation: "Mosquitoes can fly 50 to 100 meters! Breeding in a neighbor's yard can easily lead to mosquitoes biting in your house."
    },
    {
      id: 66,
      question: "What is a 'larvicide'?",
      options: ["A spray to kill flying mosquitoes", "A special chemical or tablet placed in water to kill mosquito larvae", "A vaccine for children", "A vitamin pill"],
      correct: 1,
      explanation: "Larvicides are chemicals or natural agents applied to water sources to destroy mosquito larvae before they fly."
    },
    {
      id: 67,
      question: "What should you do to a swimming pool to prevent it from breeding mosquitoes?",
      options: ["Drain it completely or keep the water treated and circulating", "Throw leaves in it", "Cover it with a plastic sheet that sags and holds rain", "Do nothing"],
      correct: 0,
      explanation: "Chlorine treatments and running filtration pumps keep pool water clean and moving, preventing mosquito breeding."
    },
    {
      id: 68,
      question: "Why should we avoid throwing plastic cups and coconut shells in open fields?",
      options: ["They look ugly", "They collect rainwater and create breeding grounds for mosquitoes", "They stop grass from growing", "Animals might eat them"],
      correct: 1,
      explanation: "Littering creates thousands of miniature micro-pools when it rains, fueling Dengue mosquito populations."
    },
    {
      id: 69,
      question: "Why is a high fever from Dengue sometimes called 'biphasic' (saddleback)?",
      options: ["It only happens to horses", "The fever goes away for a day or two and then returns", "It causes you to lose your balance", "It happens only twice a year"],
      correct: 1,
      explanation: "Biphasic means the fever has two waves: it spikes, drops to normal, and then goes up again a day later."
    },
    {
      id: 70,
      question: "What is the best way a community can fight Dengue together?",
      options: ["Organize a clean-up day to remove trash and drain standing water", "Stay inside their houses", "Close down all shops", "Build higher walls"],
      correct: 0,
      explanation: "Community cleanup days are highly effective because everyone helps clear the breeding spots in the whole neighborhood!"
    }
  ],
  veryHard: [
    {
      id: 71,
      question: "What type of pathogen is the Dengue virus?",
      options: ["A bacterium", "A single-celled amoeba", "An RNA virus (Flavivirus)", "A microscopic fungus"],
      correct: 2,
      explanation: "Dengue is caused by an RNA virus belonging to the Flaviviridae family, which also includes Yellow Fever virus."
    },
    {
      id: 72,
      question: "How many different types (serotypes) of the Dengue virus exist?",
      options: ["Only one type", "Two types", "Four types", "Ten types"],
      correct: 2,
      explanation: "There are four distinct serotypes: DENV-1, DENV-2, DENV-3, and DENV-4. Each can cause infection!"
    },
    {
      id: 73,
      question: "Why is a second infection with a different Dengue serotype more dangerous?",
      options: ["The virus mutates instantly", "It can trigger severe Dengue due to Antibody-Dependent Enhancement (ADE)", "Your body completely forgets how to make antibodies", "The mosquito bites twice as hard"],
      correct: 1,
      explanation: "Antibodies from your first infection help the new serotype enter cells easier, which can lead to severe bleeding diseases."
    },
    {
      id: 74,
      question: "What is the full scientific name of the primary mosquito vector for Dengue?",
      options: ["Anopheles gambiae", "Culex pipiens", "Aedes aegypti", "Aedes albopictus"],
      correct: 2,
      explanation: "Aedes aegypti (pronounced Ay-ee-dees ee-jip-tie) is the primary mosquito species responsible for transmitting Dengue."
    },
    {
      id: 75,
      question: "Which secondary mosquito vector spreads Dengue in cooler, temperate climates?",
      options: ["Aedes albopictus (Asian Tiger Mosquito)", "Anopheles stephensi", "Culex quinquefasciatus", "Aedes vexans"],
      correct: 0,
      explanation: "Aedes albopictus is cold-tolerant and can transmit Dengue in cooler areas where Aedes aegypti cannot survive."
    },
    {
      id: 76,
      question: "What is the name of the harmless bacterium injected into mosquitoes to stop Dengue?",
      options: ["Lactobacillus", "Wolbachia", "E. coli", "Salmonella"],
      correct: 1,
      explanation: "Wolbachia is a natural bacterium. When mosquitoes carry it, the Dengue virus cannot replicate inside them, stopping transmission!"
    },
    {
      id: 77,
      question: "How does Wolbachia bacteria spread through a mosquito population?",
      options: ["It is sprayed in the air", "Wolbachia-carrying mosquitoes pass it down to their offspring", "Mosquitoes catch it from flowers", "It spreads when mosquitoes bite dogs"],
      correct: 1,
      explanation: "Wolbachia is inherited. When Wolbachia mosquitoes mate, their babies also carry the bacteria, spreading it naturally."
    },
    {
      id: 78,
      question: "Which fish species is introduced to ponds to eat mosquito larvae?",
      options: ["Goldfish", "Guppy or Gambusia (Mosquito fish)", "Clownfish", "Shark"],
      correct: 1,
      explanation: "Guppies and Gambusia are tiny, surface-feeding fish that can eat hundreds of mosquito larvae every single day!"
    },
    {
      id: 79,
      question: "What is the term for using fish or bacteria to control mosquito numbers?",
      options: ["Chemical control", "Mechanical control", "Biological control", "Genetic selection"],
      correct: 2,
      explanation: "Biological control is the use of natural enemies or organisms (like fish or bacteria) to suppress pest populations."
    },
    {
      id: 80,
      question: "How long does a mosquito egg usually take to hatch into a larva?",
      options: ["A few hours", "2 to 3 days (in warm conditions)", "Exactly 30 days", "Six months"],
      correct: 1,
      explanation: "If submerged in warm water, the mosquito embryo completes development and hatches in about 48 to 72 hours."
    },
    {
      id: 81,
      question: "In which life stage does the mosquito develop its wings, legs, and antennae?",
      options: ["Egg", "Larva", "Pupa", "Adult"],
      correct: 2,
      explanation: "The pupa stage is like a butterfly's chrysalis. Under its skin, the insect reshapes its body to grow wings and legs."
    },
    {
      id: 82,
      question: "What does the term 'vector' mean in medicine and biology?",
      options: ["A mathematical line", "An organism that carries and transmits a disease from one host to another", "A medicine that cures virus infections", "A type of vaccine"],
      correct: 1,
      explanation: "A vector is a carrier. In this case, the mosquito carries the Dengue virus from an infected person to a healthy person."
    },
    {
      id: 83,
      question: "What is the purpose of outdoor chemical 'fogging'?",
      options: ["To create clean water vapor", "To kill flying adult mosquitoes during outbreaks", "To destroy mosquito eggs in trees", "To fertilize garden plants"],
      correct: 1,
      explanation: "Fogging sprays a fine insecticide mist that kills adult flying mosquitoes instantly. It is used during disease emergencies."
    },
    {
      id: 84,
      question: "Why is fogging NOT a complete solution to eradicate Dengue?",
      options: ["It smells bad", "It does not kill the eggs, larvae, or pupae in the water", "It makes mosquitoes fly faster", "It is too cold"],
      correct: 1,
      explanation: "Fogging only kills adult mosquitoes. New adults will emerge from the water breeding sites in a few days if they are not drained!"
    },
    {
      id: 85,
      question: "What are 'platelets' in our blood, and what is their role?",
      options: ["Cells that carry oxygen", "Cells that fight bacteria", "Tiny cell fragments that help the blood clot and stop bleeding", "Proteins that digest food"],
      correct: 2,
      explanation: "Platelets clump together to block holes in blood vessels. Dengue can cause platelet levels to drop, leading to bleeding risks."
    },
    {
      id: 86,
      question: "What is the dangerous drop in platelet count called in medical terms?",
      options: ["Anemia", "Thrombocytopenia", "Leukopenia", "Hypertension"],
      correct: 1,
      explanation: "Thrombocytopenia is the medical name for having a low platelet count in the blood, a critical sign monitored in Dengue cases."
    },
    {
      id: 87,
      question: "What is the severe, life-threatening form of Dengue called?",
      options: ["Dengue Mild Fever", "Dengue Hemorrhagic Fever (DHF) or Dengue Shock Syndrome", "Dengue Flu", "Aedes Syndrome"],
      correct: 1,
      explanation: "DHF causes severe internal bleeding, plasma leakage, and shock, requiring immediate emergency hospital care."
    },
    {
      id: 88,
      question: "What is the typical 'incubation period' of the Dengue virus in humans?",
      options: ["1 to 2 hours", "4 to 10 days", "3 to 4 weeks", "6 months"],
      correct: 1,
      explanation: "The incubation period is the time from the bite of an infected mosquito to when the first symptoms show up, usually 4 to 10 days."
    },
    {
      id: 89,
      question: "Where did the species Aedes aegypti originally evolve before spreading worldwide?",
      options: ["South America", "Forests of Africa", "Asia", "Australia"],
      correct: 1,
      explanation: "Aedes aegypti originated in African forests. It spread globally via wooden water casks on trade ships centuries ago."
    },
    {
      id: 90,
      question: "Which pond insect is a natural hunter of mosquito larvae?",
      options: ["Dragonfly nymph (baby dragonfly)", "Caterpillar", "Water snail", "Earthworm"],
      correct: 0,
      explanation: "Dragonfly nymphs are fierce underwater predators that eat large numbers of mosquito larvae!"
    },
    {
      id: 91,
      question: "What is the tough outer covering shed by larvae during growth?",
      options: ["Skin scale", "Exoskeleton", "Chitin shell", "Plastron"],
      correct: 1,
      explanation: "Because their exoskeleton is hard, larvae must shed it (molt) to grow larger. They do this four times."
    },
    {
      id: 92,
      question: "Why do Aedes aegypti mosquitoes live almost exclusively near human houses?",
      options: ["They like air conditioning", "Humans are their preferred source of blood, and artificial containers provide breeding sites", "They cannot survive in soil", "They eat crumbs of human food"],
      correct: 1,
      explanation: "They have adapted to live alongside humans, feeding on human blood and breeding in artificial items around households."
    },
    {
      id: 93,
      question: "What is the full chemical name of the repellent active ingredient 'DEET'?",
      options: ["Double Ethyl Ether Toluene", "Diethyltoluamide", "Dinitro-Ethane-Ethylene", "Dichlorodiphenyltrichloroethane"],
      correct: 1,
      explanation: "DEET stands for N,N-Diethyl-meta-toluamide, the most common and effective chemical in insect repellents."
    },
    {
      id: 94,
      question: "How does high air humidity affect the survival of adult mosquitoes?",
      options: ["It makes them drown", "It prevents their bodies from drying out, allowing them to live longer", "It slows down their flight speed", "It stops them from finding blood"],
      correct: 1,
      explanation: "High humidity prevents mosquitoes from dehydrating, allowing them to live longer, fly further, and bite more people."
    },
    {
      id: 95,
      question: "How do mosquitoes sense water to lay their eggs on it?",
      options: ["They hear the sound of ripples", "They use specialized humidity and olfactory sensors on their antennae", "They taste the water with their wings", "They only find it by accident"],
      correct: 1,
      explanation: "Receptors on their antennae detect moist air plumes rising from standing water, leading them straight to it."
    },
    {
      id: 96,
      question: "What is the term for the process where a larva casts off its skin to grow?",
      options: ["Hatching", "Metamorphosis", "Molting", "Pupating"],
      correct: 2,
      explanation: "Molting (or ecdysis) is the shedding of the old exoskeleton to allow the body to expand."
    },
    {
      id: 97,
      question: "How many larval stages (instars) does a mosquito go through before pupating?",
      options: ["Two stages", "Four stages", "Six stages", "Eight stages"],
      correct: 1,
      explanation: "There are four larval stages, called 1st, 2nd, 3rd, and 4th instars. After the 4th instar, it molts into a pupa."
    },
    {
      id: 150, // Let's make sure the id is sequential or correct. Actually let's use sequential numbers. 98 is next.
      id: 98,
      question: "What biological term describes the complete four-stage transformation of a mosquito?",
      options: ["Simple adaptation", "Complete metamorphosis (Holometabolous)", "Binary fission", "Incomplete metamorphosis"],
      correct: 1,
      explanation: "Complete metamorphosis is when an insect goes through four totally different-looking life stages: egg, larva, pupa, and adult."
    },
    {
      id: 99,
      question: "Why can't one household alone stop Dengue in a neighborhood?",
      options: ["Mosquitoes fly across property lines and search for hosts up to 100 meters away", "One house uses too much electricity", "Aedes mosquitoes only bite group families", "Mosquitoes can hear neighborhood gossip"],
      correct: 0,
      explanation: "Since mosquitoes easily fly from yard to yard, stopping breeding requires everyone in the community to clear their properties."
    },
    {
      id: 100,
      question: "When is ASEAN Dengue Day observed to raise awareness in Southeast Asia?",
      options: ["January 1st", "June 15th", "October 31st", "December 25th"],
      correct: 1,
      explanation: "ASEAN Dengue Day is held on June 15th every year to unite countries in fighting and preventing Dengue outbreaks."
    }
  ]
};

// Export for ES modules or attach to window for simple browser scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DATA;
} else {
  window.QUESTIONS_DATA = QUESTIONS_DATA;
}
