# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org_names = []
10.times do
  org_names << { name: FFaker::Education.school }
end

orgs = Organization.create(org_names)

orgs.each do |org|
  15.times do
    Team.create(name: "#{FFaker::Sport.name} #{FFaker::Education.school_name}", organization: org )
  end
end

sports = [
    {name: 'American Football', icon_class: 'flaticon-american-football-ball'},
    {name: 'Archery', icon_class: 'flaticon-hunter-hunting-with-bow-and-arrow'},
    {name: 'Gymnastics', icon_class: 'flaticon-artistic-gymnastics'},
    {name: 'Athletism', icon_class: 'flaticon-athlete-jumping-silhouette'},
    {name: 'Baseball', icon_class: 'flaticon-baseball-glove'},
    {name: 'Basketball', icon_class: 'flaticon-basketball-frontal-basket'},
    {name: 'Bowling', icon_class: 'flaticon-bowling-ball'},
    {name: 'Boxing', icon_class: 'flaticon-box-gloves'},
    {name: 'Climbing', icon_class: 'flaticon-climbing'},
    {name: 'Criquet', icon_class: 'flaticon-criquet'},
    {name: 'Equestrian Competition', icon_class: 'flaticon-equestrian-competition'},
    {name: 'Hiking', icon_class: 'flaticon-hiking-hikers-on-mountain'},
    {name: 'Hockey', icon_class: 'flaticon-hockey-helmet'},
    {name: 'Ice Skating', icon_class: 'flaticon-ice-skating-silhouette'},
    {name: 'KiteSurfing', icon_class: 'flaticon-kitesurfing'},
    {name: 'Martial Arts', icon_class: 'flaticon-martial-art-posture-silhouette'},
    {name: 'Car Racing', icon_class: 'flaticon-motoring'},
    {name: 'Skating', icon_class: 'flaticon-skater-silhouette'},
    {name: 'Soccer', icon_class: 'flaticon-soccer-ball'}
 ]

Sport.create(sports)

users = []
50.times do
  first = FFaker::Name.first_name
  last = FFaker::Name.last_name
  email = "#{first}#{last}@#{FFaker::InternetSE.domain_name}"

    users << { first_name: first,
      last_name: last,
      email: email,
      height: rand(120...230).round(2),
      weight: rand(50...90).round(2),
      is_public: [true,false].sample,
      teams: Team.order("RANDOM()").limit(5)
  }
end

users = User.create(users)

users.each do |u|
  50.times do
    u.participations.create(
      date: FFaker::Time.between('2018-02-20', '2018-04-28'),
      duration: rand(0..10000),
      user: u,
      sport: Sport.order("RANDOM()").first
    )
  end

  5.times do
    u.interests.create(
      sport: Sport.order("RANDOM()").first
    )
  end
end


