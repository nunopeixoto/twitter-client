# Twitter clone challenge

## Overview
The project is divided in two repositories:
  - [twitter-api](https://github.com/nunopeixoto/twitter-api) Laravel 9 w/ Sanctum auth <br>
  - [twitter-client](https://github.com/nunopeixoto/twitter-client) Angular 13 w/ Material and TailwindCSS

## Project setup instructions
#### Setup twitter-api
- Create two MySQL databases, for example twitter and twitter_test.
```bash
git clone https://github.com/nunopeixoto/twitter-api.git
cd twitter-api
composer i

cp .env.example .env
# Make sure you properly fill DB_DATABASE, DB_USERNAME, DB_PASSWORD
vi .env

# If you database if different than twitter_test, make sure to update DB_DATABASE on phpunit.xml
vi phpunit.xml

php artisan key:generate
php artisan migrate
php artisan test
php artisan serve
```
___

#### Setup twitter-client
- If you don't have Angular CLI on your machine, be sure to add it as the first step: `npm install -g @angular/cli`
```bash
git clone https://github.com/nunopeixoto/twitter-client.git
cd twitter-client
npm install

ng serve*

```
* If you opt to serve in a port different than 4200, please update the twitter-api.env `SANCTUM_STATEFUL_DOMAINS` accordingly (avoid CORS errors)

___

## General notes about the assignment
- Given the time constraints, I only wrote tests for some Features.
- Since the client-side was not considered important for this challenge, I didn't make a priority out of things like testing, best-practices, pagination, error handling, etc. I simply tried to do the minimal necessary to request the features of the API as fast as possible.
- For testing purposes, I add the "Clean tweet config" toggle that will allow you to test the "clean tweet" feature.
- There is no way of turning a user into an admin. To achieve this purpose and test the "fake tweet feature", just switch the user's `type` from `NULL` to `1`.

___

## Taks covered

#### Tasks covered
- [x] Signup, login and logout
- [x] Tweeting
- [x] Following
- [x] Profile page that shows the tweet of each individual user
- [x] Page that shows the tweets of the people I follow
- [x] Retweeting of other tweets
- [x] Admin User fake tweet
- [x] Clean tweet (third party integration)
- [x] Support 281 characters per tweet
- [x] Usernames can't include the number 5
