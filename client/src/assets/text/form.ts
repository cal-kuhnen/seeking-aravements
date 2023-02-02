export const form = {
  title: 'Meet Your Rave Match',
  description: 'Welcome to the Seeking aRAVEments Rave Date Match Machine. Our cutting edge algorithm utilizes the latest in beatmatching and loveology to pair you with the perfect companion on your rave journey - no matter what you\'re looking for. To find your rave date, fill out the questions below and click "Submit".',
  questions: {
    name: 'Enter your first name:',
    age: 'Enter your age: **You must be at least 18 years old to continue**',
    height: 'Enter your height:',
    email: 'Enter your e-mail address:',
    attendance: {
      id: 'attendance',
      type: 'radio',
      label: 'Are you attending Seeking aRAVEments - A Valentine\'s Day Rave on February 10th?',
      values: [
        'Yes',
        'No'
      ]
    },
    genderIdentity: {
      id: 'genderIdentity',
      type: 'radio-text',
      label: 'Select the option that most closely matches your gender identity:',
      values: [
        'Male',
        'Female',
        'Gender non-conforming/non-binary',
        'Other (please describe):'
      ]
    },
    romance: {
      id: 'romance',
      type: 'radio-text',
      label: 'What are you looking to get out of this?',
      values: [
        'Something strictly sexual',
        'Something serious',
	      'Not sure / I am open to whatever',
	      'Other (please describe):'
      ]
    },
    agePref: {
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
    monogamy: {
      id: 'monogamy',
      type: 'radio',
      label: 'Are you more interested in monogamy or polyamory?',
      values: [
        'Monogamy',
        'Polyamory',
	      'I\'m open to both',
      ]
    },
    intimacy: {
      id: 'intimacy',
      type: 'radio',
      label: 'How important is physical intimacy to you in a relationship?',
      values: [
        'Very important',
        'Moderately important',
	      'Not important',
      ]
    },
    kinky: {
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
    substances: {
      id: 'substances',
      type: 'radio-text',
      label: 'Place a check next to each substance you are comfortable with your potential match using.',
      values: [
        'Nicotine',
        'Alcohol',
	      'Cannabis',
        'Hallucinogens (LSD, Psilocybin mushrooms)',
	      'MDMA',
	      'Cocaine'
      ]
    },
    beliefs: {
      id: 'beliefs',
      type: 'radio',
      label: 'How important is it to you that your partner has similar religious beliefs to you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    heightPref: {
      id: 'heightPref',
      type: 'radio',
      label: 'How important is it to you that your partner is taller than you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    music: {
      id: 'music',
      type: 'radio',
      label: 'How important is music to you?',
      values: [
        'Very important',
        'Moderately important',
	      'Little to no importance',
      ]
    },
    style: {
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
    community: {
      id: 'community',
      type: 'radio',
      label: 'Would you describe yourself as someone who is more individualistic or community-focused?',
      values: [
        'Individualistic',
        'Community-focused',
	      'Not sure',
      ]
    },
    pet: {
      id: 'pet',
      type: 'radio',
      label: 'Would you describe yourself as someone who is more individualistic or community-focused?',
      values: [
        'Cats',
        'Dogs',
	      'Both',
        'Neither' 
      ]
    },
    battery: {
      id: 'battery',
      type: 'radio',
      label: 'How would you describe your social battery?',
      values: [
        'I like to go out / see my friends whenever possible',
        'I like to go out / see my friends only on the weekends',
	      'I like to spend most of my time by myself',
      ]
    },
    career: {
      id: 'career',
      type: 'radio',
      label: 'How would you describe your social battery?',
      values: [
        'My career & professional life',
        'Hanging out and having fun',
	      'Figuring out who I am & what my purpose is',
      ]
    },
    hova: {
      id: 'hova',
      type: 'radio',
      label: 'Would you rather have dinner with Jay-Z or $500,000?',
      values: [
        'Dinner with Jay-Z',
        '$500,000',
      ]
    },
    emo: {
      id: 'emo',
      type: 'radio',
      label: 'Do you think that it\'s really possible for an emo girl and a country boy to fall in love?',
      values: [
        'Yes',
        'No',
        'I\'d like to think so, but ultimately given the socio-economic & geo-political state of the world it seems unrealistic'
      ]
    },
    nuclear: {
      id: 'nuclear',
      type: 'radio',
      label: 'If this country were to suffer an unprovoked nuclear attack and would be totally obliterated in a matter of minutes, would you favor unleashing the U.S. nuclear arsenal upon the attackers?',
      values: [
        'Yes',
        'No',
        'Not sure'
      ]
    }
  }
}