export const form = {
  title: 'Meet Your Rave Match',
  description: 'Welcome to the Seeking aRAVEments Rave Date Match Machine. Our cutting edge algorithm utilizes the latest in beatmatching and loveology to pair you with the perfect companion on your rave journey - no matter what you\'re looking for. To find your rave date, fill out the questions below and click "Submit".',
  questions: [
    {
      id: 'name',
      type: 'text',
      label: 'Enter your first name:',
    },
    {
      id: 'age',
      type: 'text-age',
      label: 'Enter your age: **You must be at least 18 years old to continue**',
      error: 'Get outta here!'
    },
    {
      id: 'height',
      type: 'text-height',
      label: 'Enter your height:',
      error: 'Invalid height - follow this pattern: 6\'1\"'
    },
    {
      id: 'email',
      type: 'text-email',
      label: 'Enter your e-mail address:',
    },
    {
      id: 'attendance',
      type: 'radio',
      label: 'Are you attending Seeking aRAVEments - A Valentine\'s Day Rave on February 10th?',
      values: [
        'Yes',
        'No'
      ]
    },
    {
      id: 'genderIdentity',
      type: 'radio',
      label: 'Select the option that most closely matches your gender identity:',
      values: [
        'Male',
        'Female',
        'Gender non-conforming/non-binary',
        'Other (please describe):'
      ]
    },
    {
      id: 'romance',
      type: 'radio',
      label: 'What are you looking to get out of this?',
      values: [
        'Something strictly sexual',
        'Something serious',
	      'Not sure / I am open to whatever',
	      'Other (please describe):'
      ]
    },
    {
      id: 'agePref',
      type: 'radio',
      label: 'What age range would your ideal partner fall under? Select all that apply:',
      values: [
        '18-22',
        '22-26',
	      '26-30',
	      '30+'
      ]
    },
    {
      id: 'monogamy',
      type: 'radio',
      label: 'Are you more interested in monogamy or polyamory?',
      values: [
        'Monogamy',
        'Polyamory',
	      'I\'m open to both',
      ]
    },
    {
      id: 'intimacy',
      type: 'radio',
      label: 'How important is physical intimacy to you in a relationship?',
      values: [
        'Very important',
        'Moderately important',
	      'Not important',
      ]
    },
    {
      id: 'kinky',
      type: 'radio',
      label: 'Would you describe yourself as kinky or willing to try new sexual experiences?',
      values: [
        'Absolutely',
        'Probably',
	      'Maybe, if I\'m with the right person/partner',
        'Probably not',
	      'If it\'s not missionary I\'m not into it'
      ]
    },
    {
      id: 'substances',
      type: 'checkbox',
      label: 'Place a check next to each substance you are comfortable with your potential match using.',
      values: [
        'Nicotine',
        'Alcohol',
	      'Cannabis',
        'Hallucinogens (LSD, Psilocybin mushrooms)',
	      'MDMA',
	      'Cocaine',
        'None'
      ]
    },
    {
      id: 'beliefs',
      type: 'radio',
      label: 'How important is it to you that your partner has similar religious beliefs to you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    {
      id: 'spirit',
      type: 'text-area',
      label: 'Are you religious or spiritual? If so, what role does it play in your life? (ie: do you go to church, how often, etc)',
    },
    {
      id: 'heightPref',
      type: 'radio',
      label: 'How important is it to you that your partner is taller than you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    {
      id: 'music',
      type: 'radio',
      label: 'How important is music to you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    {
      id: 'favoriteMusic',
      type: 'text-area',
      label: 'What are five of your favorite albums and/or five of your favorite musicians?',
    },
    {
      id: 'timeTravel',
      type: 'text-area',
      label: 'If you could go back in time to attend any concert or music festival, which would you choose?',
    },
    {
      id: 'favoriteMovies',
      type: 'text-area',
      label: 'What are five of your favorite tv shows and/or five of your favorite movies?',
    },
    {
      id: 'inspiration',
      type: 'text-area',
      label: 'Who are you inspired by? (ie: artists of any kind, political figures, your mom, etc)',
    },
    {
      id: 'posessions',
      type: 'text-area',
      label: 'What are a few of your most prized possessions?',
    },
    {
      id: 'cartoon',
      type: 'text-area',
      label: 'Who is a cartoon character you feel best describes you?',
    },
    {
      id: 'freeTime',
      type: 'text-area',
      label: 'What do you typically do in your free time?',
    },
    {
      id: 'time',
      type: 'text-area',
      label: 'How is most of your other time spent? (ie: are you in school, do you work full-time, etc)',
    },
    {
      id: 'style',
      type: 'radio',
      label: 'Select the option that describes how you dress',
      values: [
        'I put a lot of effort into how I look/dress and take pride in my sense of style',
        'I put a moderate amount of effort into how I look/dress',
	      'I usually just wear whatever clean clothes I can find',
	      'My mom still dresses me',
      ]
    },
    {
      id: 'community',
      type: 'radio',
      label: 'Would you describe yourself as someone who is more individualistic or community-focused?',
      values: [
        'Individualistic',
        'Community-focused',
	      'Not sure',
      ]
    },
    {
      id: 'pet',
      type: 'radio',
      label: 'Are you a cat person or a dog person?',
      values: [
        'Cats',
        'Dogs',
	      'Both',
        'Neither' 
      ]
    },
    {
      id: 'battery',
      type: 'radio',
      label: 'How would you describe your social battery?',
      values: [
        'I like to go out / see my friends whenever possible',
        'I like to go out / see my friends only on the weekends',
	      'I like to spend most of my time by myself',
      ]
    },
    {
      id: 'career',
      type: 'radio',
      label: 'Which of these would you say you are most focused on at this point in your life?',
      values: [
        'My career & professional life',
        'Hanging out and having fun',
	      'Figuring out who I am & what my purpose is',
      ]
    },
    {
      id: 'feature',
      type: 'text-area',
      label: 'What would you say is your best feature (physical or personal)?',
    },
    {
      id: 'traits',
      type: 'text-area',
      label: 'Please list the most important traits/qualities you look for in a romantic partner.',
    },
    {
      id: 'firstDate',
      type: 'text-area',
      label: 'Where would you take your match on a first date?',
    },
    {
      id: 'flags',
      type: 'text-area',
      label: 'Do you have any deal-breakers/turn-offs/red flags when it comes to romantic partners?',
    },
    {
      id: 'hova',
      type: 'radio',
      label: 'Would you rather have dinner with Jay-Z or $500,000?',
      values: [
        'Dinner with Jay-Z',
        '$500,000',
      ]
    },
    {
      id: 'emo',
      type: 'radio',
      label: 'Do you think that it\'s really possible for an emo girl and a country boy to fall in love?',
      values: [
        'Yes',
        'No',
        'I\'d like to think so, but ultimately given the socio-economic & geo-political state of the world it seems unrealistic'
      ]
    },
    {
      id: 'nuclear',
      type: 'radio',
      label: 'If this country were to suffer an unprovoked nuclear attack and would be totally obliterated in a matter of minutes, would you favor unleashing the U.S. nuclear arsenal upon the attackers?',
      values: [
        'Yes',
        'No',
        'Not sure'
      ]
    },
    {
      id: 'share',
      type: 'text-area',
      label: 'Is there anything else you would like to share about yourself? The more you provide, the better chances you have of finding a perfect match.',
    },
    {
      id: 'contact',
      type: 'text-area',
      label: 'How would you like to be contacted by your match? Please provide a method(s) of contact you feel comfortable with (email, phone number, instagram, twitter, etc).',
    },
    {
      id: 'verification',
      type: 'checkbox',
      label: 'I verify that I am at least 18 and understand that DJ LeftFoot & Co. will do their best to match me up with the love of my life / sexiest person ever but ultimately are not responsible nor liable for any communication or interaction that occurs outside of this website, and cannot guarantee a match.',
      values: [
        'I agree'
      ]
    },
  ]
}