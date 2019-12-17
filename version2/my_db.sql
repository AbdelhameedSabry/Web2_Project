drop database if exists dblocalstorage;
create database dblocalstorage;
use dblocalstorage;
create table my_events(
id int primary key auto_increment,
my_Event text,
event_type text,
event_target text,
event_time text
);
select * from my_events;