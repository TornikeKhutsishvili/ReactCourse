// imports of images
import J_1984 from '../assets/images/1984.webp'
import Whispers_of_the_Forest from '../assets/images/Whispers_of_the_Forest.jpg'
import Midnight_Lighthouse from '../assets/images/Midnight_Lighthouse.jpg'
import The_Forgotten_Library from '../assets/images/The_Forgotten_Library.jpg'
import Skybound_Dreams from '../assets/images/Skybound_Dreams.jpg'
import The_Last_Ember from '../assets/images/The_Last_Ember.jpg'
import Oceans_Secret from '../assets/images/Oceans_Secret.jpg'
import The_Clockmakers_Apprentice from '../assets/images/The_Clockmakers_Apprentice.jpg'
import Wanderlust_Tales from '../assets/images/Wanderlust_Tales.jpg'
import The_Hidden_Garden from '../assets/images/The_Hidden_Garden.jpg'
import Aurora_Nights from '../assets/images/Aurora_Nights.jpg'
import The_Silent_River from '../assets/images/The_Silent_River.jpg'
import Celestial_Voyage from '../assets/images/Celestial_Voyage.jpg'
import The_Glass_Key from '../assets/images/The_Glass_Key.jpg'
import Moonlit_Sonata from '../assets/images/Moonlit_Sonata.jpg'

// data array - book information
const BookCardInfo = [
    {
        id: 1,
        title: "1984",
        description: "დისტოპიური სამყარო, სადაც მთავრობა აკონტროლებს ყველაფერს, და ვინი თავისი თავისუფლებისთვის იბრძვის",
        actors: ["ვინი", "ჯულია", "ობრიონი"],
        image: J_1984,
    },
    {
        id: 2,
        title: "Whispers of the Forest",
        description: "ახალგაზრდა ბიოლოგი, ლუკა, გამოგონილ ჯუნგლებში, სადაც ბუნება თითქოს საუბრობდეს",
        actors: ["ლუკა", "ელენა", "მაიკი"],
        image: Whispers_of_the_Forest,
    },
    {
        id: 3,
        title: "Midnight Lighthouse",
        description: "მარინა სწავლობს ზღვის მისტიკურ ამბებს მარჯანე პორტში განათებულ ფარნთან",
        actors: ["მარინა", "ჯეკ", "ოლივია"],
        image: Midnight_Lighthouse,
    },
    {
        id: 4,
        title: "The Forgotten Library",
        description: "ისტორიკოსი ანა აღმოაჩენს საიდუმლო წიგნსაცავს, ქალაქის დავიწყებულ ისტორიებზე",
        actors: ["ანა", "ტომი", "ჰენრი"],
        image: The_Forgotten_Library,
    },
    {
        id: 5,
        title: "Skybound Dreams",
        description: "სტუდენტი ევა ცდილობს მსოფლიო რეკორდის დამყარებას ჰაერზე",
        actors: ["ევა", "ლუკა", "დანიელი"],
        image: Skybound_Dreams,
    },
    {
        id: 6,
        title: "The Last Ember",
        description: "ალექსი ცდილობს ცოცხალი ნათება აანთოს სამყაროში, სადაც ცეცხლი ჩაქრა",
        actors: ["ალექსი", "სარა", "გრეი"],
        image: The_Last_Ember,
    },
    {
        id: 7,
        title: "Ocean’s Secret",
        description: "ნინა ეძებს უძველეს წყალქვეშა ქალაქს, რომელიც ზღვის ლეგენდებშია აღწერილი",
        actors: ["ნინა", "მარკი", "ილაი"],
        image: Oceans_Secret,
    },
    {
        id: 8,
        title: "The Clockmaker’s Apprentice",
        description: "ოსკარი პატარა ქალაქის საათების მაღაზიაში საიდუმლო გამოგონებას სწავლობს",
        actors: ["ოსკარ", "ტედ", "ლილი"],
        image: The_Clockmakers_Apprentice,
    },
    {
        id: 9,
        title: "Wanderlust Tales",
        description: "ბლოგერი სარა მსოფლიოს კულტურებს იკვლევს და ადამიანების ისტორიებს წერს",
        actors: ["სარა", "ტომი", "ჰანა"],
        image: Wanderlust_Tales,
    },
    {
        id: 10,
        title: "The Hidden Garden",
        description: "ემა აღმოაჩენს დავიწყებულ ბაღს, რომელიც საოცარი ძალებით ცხოვრობს",
        actors: ["ემა", "კლემენტი", "ლუცი"],
        image: The_Hidden_Garden,
    },
    {
        id: 11,
        title: "Aurora Nights",
        description: "პოლარული ნათების ქვეშ მელანი და მეგობრები ცდილობენ დაკარგული ასტრონომიური დიაგრამის აღდგენას",
        actors: ["მელანი", "სემი", "ნორა"],
        image: Aurora_Nights,
    },
    {
        id: 12,
        title: "The Silent River",
        description: "მკვლევარი ადრიან აღმოაჩენს მდინარეს, რომელიც უცნაურად შეიცავს წარსულის საიდუმლოებებს",
        actors: ["ადრიან", "მაია", "ჰენრი"],
        image: The_Silent_River,
    },
    {
        id: 13,
        title: "Celestial Voyage",
        description: "ასტრონავტი ლუსი მიემგზავრება ახალ პლანეტაზე, სადაც ცხოვრება განსხვავებულად ვითარდება",
        actors: ["ლუსი", "კაი", "ილარიო"],
        image: Celestial_Voyage,
    },
    {
        id: 14,
        title: "The Glass Key",
        description: "დეტექტივი ჰენრი იძიებს საიდუმლო კლავიშს, რომელსაც დიდი ძალა აქვს",
        actors: ["ჰენრი", "ლაილა", "სმიტი"],
        image: The_Glass_Key
    },
    {
        id: 15,
        title: "Moonlit Sonata",
        description: "კომპოზიტორი ემა იკვლევს მელოდიებს, რომლებიც მთვარის სინათლეში სულიერ განწყობას ბადებს",
        actors: ["ემა", "ვიქტორ", "ანასტასია"],
        image: Moonlit_Sonata,
    },
];

export default BookCardInfo;
