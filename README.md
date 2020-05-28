# sa-admin

## Data setup

### Character

| Key           | Type      | Default | Description                                                                                     |
|---------------|-----------|---------|-------------------------------------------------------------------------------------------------|
| _id           | \<String>  | -       | A unique identifier for each character. Automatically generated when inserted into the Database |
| name          | \<String>  | -       | Character's name. Doesn't have to be unique.                                                    |
| banner        | \<String>  | -       | Large picture display.                                                                          |
| description   | \<String>  | -       | Fluff text about the character. For reading only.                                               |
| releaseStatus | \<Boolean> | False   | Depicts whether the character is publicly available or not                                      |
| skills        | \<Array>   | []      | An array containing all skills a character possess                                              |