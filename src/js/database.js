define(['knockout'],
function(ko){
    var database = {
        countries: [
            {value: 'India', label: 'India'},
            {value: 'Brazil', label: 'Brazil'},
            {value: 'U.S.', label: 'U.S.'}
        ],
        states: {
            'India': [
                {value: 'Maharashtra', label: 'Maharashtra'},
                {value: 'Karnataka', label: 'Karnataka'},
                {value: 'Tamil Nadu', label: 'Tamil Nadu'},
                {value: 'Delhi', label: 'Delhi'}
            ],
            'Brazil': [
                {value: 'Sao Paulo', label: 'Sao Paulo'},
                {value: 'Bahia', label: 'Bahia'},
                {value: 'Amazonas', label: 'Amazonas'}
            ],
            'U.S.': [
                {value: 'Alabama', label: 'Alabama'},
                {value: 'Arizona', label: 'Arizona'},
                {value: 'Colorado', label: 'Colorado'}
            ]
        },
        cities: {
            'Maharashtra': [
                {value: 'Mumbai', label: 'Mumbai'},
                {value: 'Pune', label: 'Pune'}
            ],
            'Tamil Nadu': [
                {value: 'Chennai', label: 'Chennai'}
            ],
            'Karnataka': [
                {value: 'Bangalore', label: 'Bangalore'}
            ],
            'Delhi': [
                {value: 'New Delhi', label: 'New Delhi'}
            ],
            'Sao Paulo': [
                {value: 'Sao Paulo', label: 'Sao Paulo'},
                {value: 'Campinas', label: 'Campinas'}
            ],
            'Bahia': [
                {value: 'Salvador', label: 'Salvador'},
                {value: 'Barreiras', label: 'Barreiras'}
            ],
            'Amazonas': [
                {value: 'Manaus', label: 'Manaus'},
                {value: 'Parintins', label: 'Parintins'}
            ],
            'Alabama': [
                {value: 'Auburn', label: 'Auburn'}
            ],
            'Arizona': [
                {value: 'Phoenix', label: 'Phoenix'}
            ],
            'Colorado': [
                {value: 'Denver', label: 'Denver'},
                {value: 'Boulder', label: 'Boulder'}
            ]
        },
        imageLocations: [
            {location: '../../css/images/1.png'},
            {location: '../../css/images/2.jpg'},
            {location: '../../css/images/notice1.jpg'},
            {location: '../../css/images/notice2.jpg'},
            {location: '../../css/images/notice3.jpg'},
            {location: '../../css/images/notice4.jpg'},
            {location: '../../css/images/notice5.jpg'},
            {location: '../../css/images/notice6.jpg'},
            {location: '../../css/images/notice7.jpg'},
            {location: '../../css/images/notice8.jpg'},
            {location: '../../css/images/notice9.jpg'},
            {location: '../../css/images/notice10.jpg'}
        ]
    }
    return database;
});
