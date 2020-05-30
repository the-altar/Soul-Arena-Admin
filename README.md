# sa-admin

# Data setup
- [sa-admin](#sa-admin)
- [Data setup](#data-setup)
  - [Classes](#classes)
    - [Cost](#cost)
    - [Types](#types)
    - [Character](#character)
    - [Skill](#skill)
 

## Classes

### Cost
| Power Point Name | Index |
| ---------------- | ----- |
| Speed            | 0     |
| Strength         | 1     |
| Elemental        | 2     |
| Wisdom           | 3     |
| Random           | 4     |

### Types 
Deals more damage to whatever each type is strong against and takes less damage from whatever is resisted.  

| Type     | Strong against                 | Resists                                                             |     |
| -------- | ------------------------------ | ------------------------------------------------------------------- | --- |
| Normal   | -                              | Ghost                                                               |     |
| Fire     | Grass, Bug, Steel, Ice         | Steel, Fire, Fairy                                                  |     |
| Fighting | Normal, Steel, Rock, Ice, Dark | Rock, Dark, Bug                                                     |     |
| Water    | Fire, Ground, Rock             | Water, Ice, Steel                                                   |     |
| Flying   | Bug, Fighting, Grass           | Ground, Fighting, Grass, Bug                                        |     |
| Grass    | Water, Ground, Rock            | Water, Grass, Ground                                                |     |
| Poison   | Fairy, Grass                   | Poison, Bug, Fairy, Grass, Fighting                                 |     |
| Electric | Water, Flying                  | Electric                                                            |     |
| Ground   | Rock, Steel, Fire, Poison      | Poison, Rock                                                        |     |
| Psychic  | Fighting, Poison               | Psychic, Fighting                                                   |     |
| Rock     | Flying, Ice, Fire              | Fighting, Water, Ground, Grass                                      |     |
| Ice      | Dragon, Flying, Grass, Ground  | Ice                                                                 |     |
| Bug      | Psychic, Dark, Grass           | Fighting, Grass, Ground                                             |     |
| Dragon   | Dragon                         | Water, Fire, Grass                                                  |     |
| Ghost    | Psychic, Ghost                 | Normal, Fighting, Bug, Poison                                       |     |
| Dark     | Psychic, Ghost                 | Ghost, Psychic, Dark                                                |     |
| Steel    | Fairy, Rock, Ice               | Steel, Fairy, Ice, Rock, Grass, Bug, Poison, Flying, Normal, Dragon |     |
| Fairy    | Fighting, Dark, Dragon         | Fighting, Dark, Dragon, Bug                                         |     |

### Character

| Key             | Type           | Default | Description                                                                                     |
| --------------- | -------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `_id`           | \<String>      | -       | A unique identifier for each character. Automatically generated when inserted into the Database |
| `name`          | \<String>      | -       | Character's name. Doesn't have to be unique.                                                    |
| `banner`        | \<String>      | -       | Large picture display. 200x200px                                                                |
| `description`   | \<String>      | -       | Fluff text about the character. For reading only.                                               |
| `releaseStatus` | \<Boolean>     | False   | Depicts whether the character is publicly available or not                                      |
| `skills`        | \<Array>       | []      | An array containing all skills. Refer to [Skill](#skill)                                        |
| `energyGain`    | \<Array[Cost]> | []      | [Refer to Cost](#cost)                                                                          |



### Skill   

| Key             | Type           | Default   | Description                                                                   |
| --------------- | -------------- | --------- | ----------------------------------------------------------------------------- |
| `banner`        | \<String>      | -         | Large picture display. 200x200px.                                             |
| `name`          | \<String>      | -         | Skill name. Doesn't have to be unique.                                        |
| `skillpic`      | \<String>      | -         | Small picture display. 75x75px.                                               |
| `type`          | \<Type>        | \<Object> | Skill type classification. Refer to [Type](#types)                            |
| `startCooldown` | \<Integer>     | 0         | If higher than 0 the skill starts on cooldown for the defined amount of turns |
| `baseCooldown`  | \<Integer>     | 0         | How long the skill stays on cooldown for after being used.                    |
| `class`         | \<String>      | -         | Which class the skill belongs to. Can be physical, status or special.         |
| `cost`          | \<Cost>        | -         | [Refer to Cost](#cost) Class.                                                 |
| `description`   | \<String>      | -         | String describing whatever it is that the skill does. Fluff text.             |
| `disabled`      | \<Boolean>     | false     | If true the skill cannot be used.                                             |
| `energyGain`    | \<Array[Cost]> | []        | [Refer to Cost](#cost)                                                        |