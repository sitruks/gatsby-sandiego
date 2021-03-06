/*
   List of cases
*/
const Cases = [
  {
    en: {
      start: [
        '****** FLASH ******',
        'National treasure stolen from Paris.',
        'The treasure has been identified as the elevator from the Eiffel Tower.',
        'Female suspect reported at the scene of the crime.',
        'Your assignement: Track the thief from Paris to her hideout and arrested her!',
        'You must apprehend the thief by Sunday, 5 pm.',
        'Good luck ! '
      ],
      steps: [
        {
          city: {
            name: 'Paris',
            description:
              'France, with a population of about 55 millions, is famous for its food, wine, fashion and art.',
            img: 'paris.jpg'
          },
          clues: [
            {
              Place: {
                key: 'museum',
                value: 'Museum'
              },
              Guy: {
                key: 'curator',
                value: 'Curator'
              },
              Clue: 'Sources tell me she asked questions about Shinto rituals.'
            },
            {
              Place: {
                key: 'airport',
                value: 'Airport'
              },
              Guy: {
                key: 'pilot',
                value: 'Pilot'
              },
              Clue: "I saw the person you're looking for and she left in a plane with a red and white flag on its wing. She asked about the recent tennis match."
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'soldier',
                value: 'Soldier'
              },
              Clue: 'All I know is that she asked for a biography of Emperor Jimmu.'
            }
          ],
          destinations: ['Oslo', 'Tokyo', 'Reykjavik']
        },
        {
          city: {
            name: 'Tokyo',
            description:
              "Tokyo, the capital of Japan, is overlooked by Mount Fuji, one of Japan's most famous sights",
            img: 'tokyo.jpg'
          },
          clues: [
            {
              Place: {
                key: 'hotel',
                value: 'Hotel'
              },
              Guy: {
                key: 'housedetective',
                value: 'House detective'
              },
              Clue: 'I heard she wanted to know if she could take a steamer down the Tigris River.'
            },
            {
              Place: {
                key: 'airport',
                value: 'Airport'
              },
              Guy: {
                key: 'pilot',
                value: 'Pilot'
              },
              Clue: 'My sources tell me she said she had a job waiting for her at an oil field.'
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'privycouncillor',
                value: 'Privy Councillor'
              },
              Clue: "The person you're looking for was here and she was disappointed when she found no books about the Assyrians."
            }
          ],
          destinations: ['Bamako', 'Baghdad', 'Moscow']
        },
        {
          city: {
            name: 'Baghdad',
            description:
              'In ancient times, Iraq was known as Mesopotamia. Modern-day Iraq is bordered by the nations of Jordan, Syria, Turkey, Iran, Kuwait and Saoudi Arabia.',
            img: 'baghdad.jpg'
          },
          clues: [
            {
              Place: {
                key: 'bank',
                value: 'Bank'
              },
              Guy: {
                key: 'bankguard',
                value: 'Bank guard'
              },
              Clue: 'I heard she changed her money to pounds she was driving a limo.'
            },
            {
              Place: {
                key: 'library',
                value: 'Library'
              },
              Guy: {
                key: 'referencelibrarian',
                value: 'Reference librarian'
              },
              Clue: 'I heard she left in a vehicle flying a red, white and black flag. I noticed a tattoo on her arm.'
            },
            {
              Place: {
                key: 'foreignministry',
                value: 'Foreign Ministry'
              },
              Guy: {
                key: 'undersecretary',
                value: 'Under secretary'
              },
              Clue: 'a suspicious was here and she said she was interested by pyramids.'
            }
          ],
          destinations: ['Athens', 'Cairo', 'Rio de Janeiro']
        },
        {
          city: {
            name: 'Cairo',
            description:
              'Cairo, located at the mouth of the Nile River, is the largest city in African.',
            img: 'cairo.jpg'
          },
          clues: [
            {
              Place: {
                key: 'museum',
                value: 'Museum'
              },
              Guy: {
                key: 'curator',
                value: 'Gardien'
              },
              Clue: 'A reliable source told me she wanted study Saxon manuscripts.'
            },
            {
              Place: {
                key: 'riverfront',
                value: 'Riverfront'
              },
              Guy: {
                key: 'sailorssnail',
                value: "Sailor's snail"
              },
              Clue: 'My sources tell me she left in a tugboat flying a red, white and blue flag.'
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'palaceguard',
                value: 'Palace guard'
              },
              Clue: "The person you're looking for was here and she said she wanted to find out what made Big Ben tick."
            }
          ],
          destinations: ['London', 'Colombo', 'Rome']
        },
        {
          city: {
            name: 'London',
            description:
              'London, with a population of more than 6,5 million, is the largest city in the United Kingdom. One of its many landmarks is the Big Ben clock tower.',
            img: 'london.jpg'
          },
          clues: [
            {
              Place: {
                key: 'hotel',
                value: 'Hotel'
              },
              Guy: {
                key: 'housedetective',
                value: 'House detective'
              },
              Clue: 'All I know is that something suspicious is going on in town.'
            },
            {
              Place: {
                key: 'harbor',
                value: 'Harbor'
              },
              Guy: {
                key: 'sailor',
                value: 'Sailor'
              },
              Clue: 'All I know is that something suspicious is going on in town.'
            },
            {
              Place: {
                key: 'foreignministry',
                value: 'Foreign Ministry'
              },
              Guy: {
                key: 'palaceguard',
                value: 'Palace guard'
              },
              Clue: ''
            }
          ],
          destinations: []
        }
      ],
      thief: 'Dazzle Annie Nonker',
      endSuccess: {
        thanks3:
          'had the loot, the elevator from the Eiffel Tower, which will be returned to the grateful residents of Paris.'
      }
    },
    fr: {
      start: [
        '****** FLASH ******',
        'Tr??sor national d??rob?? ?? Paris',
        "Le tr??sor a ??t?? identifi?? en haut de l'ascenseur de la Tour Eiffel.",
        'Un suspect de sexe f??minin a ??t?? vu sur la sc??ne du crime.',
        "Votre mission: Traquer la voleuse de Paris et l'arr??ter !",
        "Vous avez jusqu'?? dimanche 17h.",
        'Bonne chance ! '
      ],
      steps: [
        {
          city: {
            name: 'Paris',
            description:
              "La France, avec une population de 55 millions d'habitants, est c??l??bre pour sa gastronomie, ses vins, sa mode et ses arts.",
            img: 'paris.jpg'
          },
          clues: [
            {
              Place: {
                key: 'museum',
                value: 'Mus??e'
              },
              Guy: {
                key: 'curator',
                value: 'Gardien'
              },
              Clue: "Des sources m'ont racont?? qu'elle posait des questions sur les rituels Shinto."
            },
            {
              Place: {
                key: 'airport',
                value: 'A??roport'
              },
              Guy: {
                key: 'pilot',
                value: 'Pilote'
              },
              Clue: "J'ai vu la personne que vous cherchez et elle est partie ?? bord d'un avion avec un drapeau rouge et blanc sur son aile. Elle a pos?? des questions sur le dernier match de tennis."
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'soldier',
                value: 'Soldat'
              },
              Clue: "Tout ce que je sais c'est qu'elle voulait lire une biographie de l'Empereur Jimmu."
            }
          ],
          destinations: ['Oslo', 'Tokyo', 'Reykjavik']
        },
        {
          city: {
            name: 'Tokyo',
            description:
              'Tokyo, la capitale du Japon, est surplomb?? par le mont Fuji, une des plus belles vues du Japon.',
            img: 'tokyo.jpg'
          },
          clues: [
            {
              Place: {
                key: 'hotel',
                value: 'H??tel'
              },
              Guy: {
                key: 'housedetective',
                value: 'D??tective priv??'
              },
              Clue: "J'ai cru comprendre qu'elle voulait savoir si elle pouvait naviguer sur le Tigre."
            },
            {
              Place: {
                key: 'airport',
                value: 'A??roport'
              },
              Guy: {
                key: 'pilot',
                value: 'Pilote'
              },
              Clue: "Mes indics m'ont dit qu'elle avait un boulot en attente autour d'un puits de p??trole."
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'privycouncillor',
                value: 'Conseiller priv??'
              },
              Clue: "La personne que vous cherchez est pass??e ici et elle ??tait d????ue quand elle a d??couvert qu'il n'y avait aucun livre sur les Assyriens."
            }
          ],
          destinations: ['Bamako', 'Baghdad', 'Moscow']
        },
        {
          city: {
            name: 'Baghdad',
            description:
              "Il fut un temps, l'Irak s'appelait la M??sopotamie. Aujourd'hui, l'Irak est entour?? par la Jordanie, la Syrie, la Turquie, l'Iran, le Koweit and l'Arabie Saoudite.",
            img: 'baghdad.jpg'
          },
          clues: [
            {
              Place: {
                key: 'bank',
                value: 'Banque'
              },
              Guy: {
                key: 'bankguard',
                value: 'Conseiller bancaire'
              },
              Clue: "J'ai entendu qu'elle changeait sa monnaie en pounds et qu'elle conduisait une limousine."
            },
            {
              Place: {
                key: 'library',
                value: 'Biblioth??que'
              },
              Guy: {
                key: 'referencelibrarian',
                value: 'Biblioth??caire'
              },
              Clue: "Elle a quitt?? un v??hicule avec un drapeau rouge, blanc et noir. J'ai remarqu?? un tatouage sur son bras."
            },
            {
              Place: {
                key: 'foreignministry',
                value: 'Ministre des affaires ??trang??res'
              },
              Guy: {
                key: 'undersecretary',
                value: 'Sous-secr??taire'
              },
              Clue: "Une personne suspecte est pass??e par ici et elle disait qu'elle ??tait int??rss??e par les pyramides."
            }
          ],
          destinations: ['Athens', 'Cairo', 'Rio de Janeiro']
        },
        {
          city: {
            name: 'Cairo',
            description:
              "Le Caire, situ?? ?? l'embouchure du Nil est une des plus grandes villes africaines.",
            img: 'cairo.jpg'
          },
          clues: [
            {
              Place: {
                key: 'museum',
                value: 'Mus??e'
              },
              Guy: {
                key: 'curator',
                value: 'Gardien'
              },
              Clue: "Une source s??re m'a racont?? qu'elle voulait ??tudier des manuscrits saxons."
            },
            {
              Place: {
                key: 'riverfront',
                value: 'Front de mer'
              },
              Guy: {
                key: 'sailorssnail',
                value: 'Escargot marin'
              },
              Clue: "Mes indics m'ont racont?? qu'elle quittait un avion avec un drapeau rouge blanc et bleu."
            },
            {
              Place: {
                key: 'palace',
                value: 'Palace'
              },
              Guy: {
                key: 'palaceguard',
                value: 'Palace guard'
              },
              Clue: 'La personne que vous cherchez ??tait ici et elle voulait visiter la tour Big Ben.'
            }
          ],
          destinations: ['London', 'Colombo', 'Rome']
        },
        {
          city: {
            name: 'London',
            description:
              "Londre, avec une population de 6,5 millions d'habitants, est la plus grande ville du Royaume-Uni. Sa tour la plus connue a pour nom Big Ben.",
            img: 'london.jpg'
          },
          clues: [
            {
              Place: {
                key: 'hotel',
                value: 'H??tel'
              },
              Guy: {
                key: 'housedetective',
                value: 'D??tective priv??'
              },
              Clue: "Tout ce que je sais c'est qu'il se passe quelque chose de louche en ville."
            },
            {
              Place: {
                key: 'harbor',
                value: 'Port'
              },
              Guy: {
                key: 'sailor',
                value: 'Marin'
              },
              Clue: "Tout ce que je sais c'est qu'il se passe quelque chose de louche en ville."
            },
            {
              Place: {
                key: 'foreignministry',
                value: 'Ministre des affaires ??trang??res'
              },
              Guy: {
                key: 'palaceguard',
                value: 'Garde du palace'
              },
              Clue: ''
            }
          ],
          destinations: []
        }
      ],
      thief: 'Dazzle Annie Nonker',
      endSuccess: {
        thanks3:
          'a le butin, the elevator from the Eiffel Tower, which will be returned to the grateful residents of Paris.'
      }
    }
  }
]

export default Cases
