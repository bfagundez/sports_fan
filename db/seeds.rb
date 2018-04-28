# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org_names = []
10.times do
  org_names << { name: FFaker::Education.school	} 
end

orgs = Organization.create(org_names)

orgs.each do |org|
  10.times do 
    team = Team.create(name: "#{FFaker::Sport.name} #{FFaker::Education.school_name}", organization: org )
  end
end

players = []
50.times do
  first = FFaker::Name.first_name
  last = FFaker::Name.last_name
  email = "#{first}#{last}@#{FFaker::InternetSE.domain_name}"
  players << { first_name: first,
      last_name: last,
      email: email,
      height: rand(120...230).round(2),
      weight: rand(50...90).round(2),
      is_public: [true,false].sample,
      team_id: Team.order("RANDOM()").first.id
  }
end

players = Player.create(players)

